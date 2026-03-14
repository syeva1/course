"""
AI-консультант — Telegram-бот, который знает о бизнесе и отвечает клиентам.
Курс АССИСТ+, Модуль 05.
"""

from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import (
    ApplicationBuilder, CommandHandler, MessageHandler,
    CallbackQueryHandler, filters, ContextTypes
)
from openai import OpenAI
from config import TELEGRAM_BOT_TOKEN

# --- Настройки AI ---
client = OpenAI()  # Использует OPENAI_API_KEY из .env

SYSTEM_PROMPT = """
Ты — AI-ассистент компании [НАЗВАНИЕ КОМПАНИИ].

Наши услуги:
- [Услуга 1] — [цена]
- [Услуга 2] — [цена]
- [Услуга 3] — [цена]

Контакты:
- Telegram: @username
- Телефон: +7 (999) 123-45-67
- Сайт: example.com

Правила:
- Отвечай вежливо и конкретно
- Если не знаешь точный ответ — предложи связаться с менеджером
- Не придумывай цены и услуги, которых нет в списке
- Отвечай на русском языке
"""


# --- Команды ---
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("Наши услуги", callback_data="services")],
        [InlineKeyboardButton("Цены", callback_data="prices")],
        [InlineKeyboardButton("Связаться с нами", callback_data="contact")],
    ]
    markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "Привет! Я AI-помощник компании [НАЗВАНИЕ].\n\n"
        "Задайте мне любой вопрос или выберите раздел:",
        reply_markup=markup
    )


async def button_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()

    responses = {
        "services": (
            "📋 Наши услуги:\n\n"
            "1. [Услуга 1] — краткое описание\n"
            "2. [Услуга 2] — краткое описание\n"
            "3. [Услуга 3] — краткое описание\n\n"
            "Задайте вопрос — отвечу подробнее!"
        ),
        "prices": (
            "💰 Цены:\n\n"
            "• [Услуга 1] — от [цена] р.\n"
            "• [Услуга 2] — от [цена] р.\n"
            "• [Услуга 3] — от [цена] р.\n\n"
            "Точную стоимость рассчитаем индивидуально."
        ),
        "contact": (
            "📞 Свяжитесь с нами:\n\n"
            "Telegram: @username\n"
            "Телефон: +7 (999) 123-45-67\n"
            "Email: hello@example.com"
        ),
    }

    text = responses.get(query.data, "Выберите раздел из меню.")
    await query.edit_message_text(text)


# --- AI-ответы ---
async def ai_reply(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_message = update.message.text

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",  # Дешёвая и быстрая модель
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_message}
            ],
            max_tokens=500
        )
        answer = response.choices[0].message.content
    except Exception as e:
        answer = (
            "Извините, произошла ошибка. "
            "Свяжитесь с нами напрямую: @username"
        )

    await update.message.reply_text(answer)


# --- Запуск ---
def main():
    app = ApplicationBuilder().token(TELEGRAM_BOT_TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CallbackQueryHandler(button_handler))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, ai_reply))

    print("🤖 AI-консультант запущен!")
    app.run_polling()


if __name__ == "__main__":
    main()
