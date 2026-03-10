# AI-бот — Telegram-бот с подключённой нейросетью
# Курс АССИСТ+, Модуль 06

import os
from dotenv import load_dotenv
from openai import OpenAI
from telegram import (
    Update,
    InlineKeyboardButton,
    InlineKeyboardMarkup,
)
from telegram.ext import (
    ApplicationBuilder,
    CommandHandler,
    MessageHandler,
    CallbackQueryHandler,
    filters,
    ContextTypes,
)

load_dotenv()
TOKEN = os.getenv("TELEGRAM_TOKEN")
OPENAI_KEY = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=OPENAI_KEY)

# Системный промпт — опишите ваш бизнес
SYSTEM_PROMPT = """
Ты — ассистент компании АССИСТ+.
Мы подбираем бизнес-ассистентов для предпринимателей.
Цены: от 30 000 ₽/мес. Срок подбора: 3-5 дней.
Если клиент хочет оставить заявку — попроси имя и телефон.
Отвечай дружелюбно, коротко и по делу.
"""

# Меню с кнопками
MAIN_KEYBOARD = InlineKeyboardMarkup([
    [InlineKeyboardButton("📋 Услуги", callback_data="services")],
    [InlineKeyboardButton("💰 Цены", callback_data="prices")],
    [InlineKeyboardButton("📞 Связаться", callback_data="contact")],
])


async def start(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Приветствие с кнопками."""
    await update.message.reply_text(
        "Привет! Я AI-ассистент компании АССИСТ+.\n"
        "Задайте вопрос или выберите из меню:",
        reply_markup=MAIN_KEYBOARD,
    )


async def handle_message(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Отвечает на сообщение с помощью AI."""
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": update.message.text},
        ],
        max_tokens=500,
    )
    answer = response.choices[0].message.content
    await update.message.reply_text(answer)


async def handle_button(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Обработка нажатий на кнопки."""
    query = update.callback_query
    await query.answer()

    responses = {
        "services": (
            "📋 Наши услуги:\n\n"
            "• Подбор бизнес-ассистента\n"
            "• Обучение ассистента под ваши задачи\n"
            "• Замена ассистента, если не подошёл"
        ),
        "prices": (
            "💰 Стоимость:\n\n"
            "• Подбор ассистента — от 30 000 ₽\n"
            "• Срок подбора — 3-5 рабочих дней\n"
            "• Гарантийная замена — бесплатно"
        ),
        "contact": (
            "📞 Свяжитесь с нами:\n\n"
            "Напишите ваше имя и телефон, "
            "и мы перезвоним в течение часа."
        ),
    }

    text = responses.get(query.data, "Неизвестная команда")
    await query.edit_message_text(text, reply_markup=MAIN_KEYBOARD)


def main():
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))
    app.add_handler(CallbackQueryHandler(handle_button))
    print("AI-бот запущен...")
    app.run_polling()


if __name__ == "__main__":
    main()
