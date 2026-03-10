# MCP: подключение внешних сервисов к Cursor

> Model Context Protocol — как дать AI доступ к Slack, базе данных, Sentry и другим инструментам.
> Источник: официальный гайд Cursor + @misha_davai_po_novoi

---

## Что такое MCP

Без MCP → AI видит **только твой код** и терминал.
С MCP → AI может **читать Slack, смотреть логи, делать запросы к базе данных**.

MCP (Model Context Protocol) — протокол, который соединяет AI-агента с внешними сервисами. Каждый сервис требует отдельного MCP-сервера.

---

## Что можно подключить

| Сервис | Что AI сможет делать |
|--------|---------------------|
| **Slack** | Читать сообщения, отвечать в каналах |
| **GitHub** | Создавать issues, PR, ревьюить код |
| **Sentry** | Смотреть ошибки, анализировать стектрейсы |
| **Datadog** | Читать логи и метрики |
| **PostgreSQL** | Делать SQL-запросы к базе |
| **Notion** | Читать и обновлять документы |
| **Google Sheets** | Работать с таблицами |
| **Figma** | Получать макеты и стили |
| **Файловая система** | Доступ к удалённым файлам |

---

## Как настроить в Cursor

### 1. Открой настройки
**Cursor Settings → MCP**

### 2. Добавь сервер

Пример для GitHub:
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_xxxxxxxxxxxx"
      }
    }
  }
}
```

### 3. Используй

Просто говори AI:
- «Посмотри последние ошибки в Sentry»
- «Создай issue на GitHub с этим багом»
- «Прочитай последние сообщения в канале #dev»

---

## Популярные MCP-серверы

### Файловая система
```json
{
  "filesystem": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
  }
}
```

### PostgreSQL
```json
{
  "postgres": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-postgres"],
    "env": {
      "DATABASE_URL": "postgresql://user:pass@localhost/mydb"
    }
  }
}
```

### Brave Search (поиск в интернете)
```json
{
  "brave-search": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-brave-search"],
    "env": {
      "BRAVE_API_KEY": "BSA..."
    }
  }
}
```

---

## Где найти MCP-серверы

1. **github.com/modelcontextprotocol/servers** — официальный список
2. **mcpservers.org** — каталог сообщества
3. **npmjs.com** — поиск по `@modelcontextprotocol`

---

## Зачем это бизнес-ассистенту

| Задача | Без MCP | С MCP |
|--------|---------|-------|
| Проверить ошибки | Открыть Sentry → найти → скопировать | «Покажи последние ошибки» |
| Обновить доку | Открыть Notion → найти → написать | «Обнови раздел X в Notion» |
| Ответить в Slack | Переключиться → прочитать → ответить | «Ответь в #support что баг починен» |
| Данные из базы | Открыть pgAdmin → написать SQL | «Сколько заявок за сегодня?» |

MCP превращает Cursor из редактора кода в **центр управления** всеми инструментами.
