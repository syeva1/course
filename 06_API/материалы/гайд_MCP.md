# MCP — Model Context Protocol

## Что это?

MCP — стандарт, который позволяет Cursor подключаться к внешним инструментам: базам данных, API, сервисам. Думай об этом как об «удлинителе» для AI — он получает доступ к вещам за пределами твоего кода.

## Зачем это нужно?

Без MCP Cursor видит только твои файлы. С MCP он может:
- Искать в Google/GitHub прямо из чата
- Читать и писать в базу данных
- Работать с Figma макетами
- Запускать тесты в браузере
- Отправлять сообщения в Telegram/Slack

## Как настроить?

### 1. Создай файл конфигурации

В корне проекта создай папку `.cursor/` и файл `mcp.json`:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_твой_токен"
      }
    }
  }
}
```

### 2. Перезапусти Cursor

После сохранения `mcp.json` перезапусти Cursor (`Cmd+Shift+P` → Reload Window).

### 3. Проверь

Открой Agent Mode (`Cmd+L`) — в списке инструментов должны появиться новые (например, `search_repositories`, `create_issue`).

## Популярные MCP-серверы

| Сервер | Что делает | Команда установки |
|--------|-----------|-------------------|
| GitHub | Поиск репо, создание issues, PR | `npx @modelcontextprotocol/server-github` |
| Playwright | Тестирование в браузере | `npx @playwright/mcp@latest` |
| Figma | Доступ к дизайну | `npx figma-mcp` |
| PostgreSQL | Запросы к базе | `npx @modelcontextprotocol/server-postgres` |
| Filesystem | Доступ к файлам вне проекта | `npx @modelcontextprotocol/server-filesystem` |

## Три типа подключения

1. **stdio** (самый простой) — Cursor сам запускает сервер. Для одного разработчика.
2. **SSE** — подключение к удалённому серверу по URL. Для команды.
3. **Streamable HTTP** — новый формат, как SSE, но через обычный HTTP.

**Для начала используй stdio** — это просто и работает из коробки.

## Практический пример: GitHub MCP

1. Получи GitHub токен: Settings → Developer Settings → Personal Access Tokens → Generate
2. Добавь в `mcp.json` (см. выше)
3. Попроси Cursor: «Найди все мои репозитории и покажи последние коммиты»

Cursor сам использует GitHub API через MCP — тебе не нужно писать код!

## PlayWhite: автотесты на автопилоте

Подключи Playwright MCP и попроси Cursor:
> «Открой localhost:3000, попробуй залогиниться. Если не получится — посмотри DOM и скажи почему.»

Cursor запустит браузер, попробует, найдёт ошибку и исправит код. Без единой строчки тестов от тебя.

## Безопасность

⚠️ MCP-серверы имеют доступ к твоим данным. Правила:
- Не используй MCP-серверы из непроверенных источников
- Храни токены в `.env` файле, а не в `mcp.json`
- Для `.env`: добавь в `.gitignore`

---

*© АССИСТ+*
