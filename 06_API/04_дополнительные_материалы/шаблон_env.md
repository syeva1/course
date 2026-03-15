# Шаблон .env файла

> Создай файл `.env` в корне проекта. Cursor подхватит переменные.
> НИКОГДА не коммить `.env` в git! Добавь его в `.gitignore`.

```env
# === Telegram ===
TELEGRAM_BOT_TOKEN=1234567890:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TELEGRAM_CHAT_ID=-1001234567890

# === OpenAI ===
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# === Google Sheets ===
GOOGLE_SHEETS_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms
GOOGLE_SERVICE_ACCOUNT=path/to/credentials.json

# === База данных ===
DATABASE_URL=sqlite:///data.db

# === Почта ===
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASSWORD=xxxx-xxxx-xxxx-xxxx

# === Разное ===
DEBUG=false
TIMEZONE=Europe/Moscow
```

## .gitignore — добавь это:

```
.env
.env.local
*.db
__pycache__/
.venv/
```
