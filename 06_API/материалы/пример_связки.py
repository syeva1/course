"""
Связка: Telegram-бот + Claude AI + Google Sheets
Курс АССИСТ+, Модуль 06.

Бот принимает сообщение → AI классифицирует → данные в таблицу → алерт менеджеру.
"""

import os
import json
import logging
from datetime import datetime
from dotenv import load_dotenv
import anthropic
import gspread
import requests
from telegram import Update
from telegram.ext import (
    ApplicationBuilder, CommandHandler, MessageHandler,
    filters, ContextTypes
)

load_dotenv()

# --- Конфиг ---
TELEGRAM_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
ANTHROPIC_KEY = os.getenv("ANTHROPIC_API_KEY")
MANAGER_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")  # Telegram ID менеджера

# --- Клиенты ---
ai_client = anthropic.Anthropic(api_key=ANTHROPIC_KEY)

# Google Sheets (раскомментируй после настройки)
# gc = gspread.service_account(filename="credentials.json")
# sheet = gc.open("Заявки АССИСТ+").sheet1

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def classify_with_ai(text: str) -> dict:
    """Отправляет текст в Claude, получает классификацию."""
    response = ai_client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=200,
        system=(
            "Ты — помощник HR-агентства. "
            "Извлеки из текста клиента: имя, телефон (если есть), тип заявки. "
            "Ответь ТОЛЬКО в формате JSON: "
            '{"name": "...", "phone": "...", "type": "..."}'
        ),
        messages=[{"role": "user", "content": text}]
    )
    
    try:
        result = json.loads(response.content[0].text)
    except json.JSONDecodeError:
        result = {
            "name": "Не определено",
            "phone": "-",
            "type": "Не классифицировано"
        }
    
    return result


def save_to_sheets(data: dict):
    """Сохраняет заявку в Google Sheets."""
    # Раскомментируй после настройки Google Sheets:
    # sheet.append_row([
    #     data.get("name", ""),
    #     data.get("phone", ""),
    #     data.get("type", ""),
    #     datetime.now().strftime("%Y-%m-%d %H:%M"),
    #     "Новая"
    # ])
    logger.info(f"Saved to sheets: {data}")


def notify_manager(data: dict):
    """Отправляет уведомление менеджеру в Telegram."""
    text = (
        f"<b>🔔 Новая заявка!</b>\n\n"
        f"<b>Имя:</b> {data.get('name', '-')}\n"
        f"<b>Телефон:</b> {data.get('phone', '-')}\n"
        f"<b>Тип:</b> {data.get('type', '-')}\n"
        f"<b>Время:</b> {datetime.now().strftime('%H:%M %d.%m.%Y')}"
    )
    
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    requests.post(url, json={
        "chat_id": MANAGER_CHAT_ID,
        "text": text,
        "parse_mode": "HTML"
    })


# --- Обработчики ---
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "Привет! Я бот-помощник АССИСТ+.\n\n"
        "Опишите вашу задачу — я передам менеджеру.\n"
        "Укажите имя и телефон для связи."
    )


async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = update.message.text
    user = update.message.from_user
    
    # 1. Подтверждение клиенту
    await update.message.reply_text("⏳ Обрабатываю вашу заявку...")
    
    try:
        # 2. AI классифицирует
        data = classify_with_ai(text)
        logger.info(f"AI classified: {data}")
        
        # 3. В таблицу
        save_to_sheets(data)
        
        # 4. Уведомление менеджеру
        notify_manager(data)
        
        # 5. Ответ клиенту
        await update.message.reply_text(
            f"✅ Заявка принята!\n\n"
            f"Имя: {data.get('name', '-')}\n"
            f"Тип: {data.get('type', '-')}\n\n"
            f"Менеджер свяжется с вами в ближайшее время."
        )
    
    except Exception as e:
        logger.error(f"Error: {e}")
        await update.message.reply_text(
            "Произошла ошибка. Пожалуйста, напишите напрямую: @username"
        )


# --- Запуск ---
def main():
    app = ApplicationBuilder().token(TELEGRAM_TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))
    
    print("🤖 Бот-связка запущен! (Telegram + AI + Sheets)")
    app.run_polling()


if __name__ == "__main__":
    main()
