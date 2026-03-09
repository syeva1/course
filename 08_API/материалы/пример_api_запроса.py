"""
АССИСТ+ | Модуль 08 — Пример запроса к Claude API

Установка:
    pip install anthropic python-dotenv

Использование:
    1. Создай файл .env с ключом: ANTHROPIC_API_KEY=sk-ant-...
    2. Запусти: python пример_api_запроса.py
"""

import os
from dotenv import load_dotenv
import anthropic

# Загружаем переменные из .env
load_dotenv()

# Создаём клиент
client = anthropic.Anthropic(
    api_key=os.getenv("ANTHROPIC_API_KEY")
)

# Отправляем запрос
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": "Составь короткое описание вакансии бизнес-ассистента для предпринимателя. 3-4 предложения."
        }
    ]
)

# Выводим ответ
print("=" * 50)
print("Ответ от Claude API:")
print("=" * 50)
print(message.content[0].text)
print("=" * 50)
print(f"Модель: {message.model}")
print(f"Токены: {message.usage.input_tokens} вход / {message.usage.output_tokens} выход")
