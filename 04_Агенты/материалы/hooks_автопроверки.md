# Hooks: автоматические проверки в Cursor

> Hooks — скрипты, которые запускаются автоматически до/после действий AI.
> В отличие от инструкций, хуки **нельзя проигнорировать**.
> Источник: официальный гайд Cursor + @misha_davai_po_novoi

---

## Зачем нужны Hooks

Rules и .mdc — это инструкции. AI **может** их нарушить (забыть, проигнорировать).

Hooks — это **код**, который запускается автоматически. AI не может их обойти.

### Примеры:
- Проверка текста на нейросетевые маркеры после каждого ответа
- Запуск линтера после изменения кода
- Автоматический коммит после завершения задачи
- Проверка на утечку секретов перед коммитом

---

## Как настроить

### 1. Создай файл конфигурации

`.cursor/hooks.json`:
```json
{
  "version": 1,
  "hooks": {
    "stop": [
      { "command": "python .cursor/hooks/check_quality.py" }
    ]
  }
}
```

### 2. Напиши скрипт проверки

`.cursor/hooks/check_quality.py`:
```python
"""
Проверка качества после каждого ответа AI.
Если находит проблемы — отправляет AI обратно доработать.
"""
import json
import sys

# Читаем контекст от Cursor
data = json.load(sys.stdin)

# Проверяем статус
if data.get("status") != "completed":
    # AI ещё не закончил — не мешаем
    print(json.dumps({}))
    sys.exit(0)

# Максимум итераций (чтобы не зациклиться)
MAX_ITERATIONS = 5
if data.get("loop_count", 0) >= MAX_ITERATIONS:
    print(json.dumps({}))
    sys.exit(0)

# Проверяем, есть ли маркер завершения
import os
scratchpad = ""
if os.path.exists(".cursor/scratchpad.md"):
    with open(".cursor/scratchpad.md") as f:
        scratchpad = f.read()

if "DONE" in scratchpad:
    # Задача завершена
    print(json.dumps({}))
else:
    # Отправляем AI продолжать
    iteration = data.get("loop_count", 0) + 1
    print(json.dumps({
        "followup_message": f"[Итерация {iteration}/{MAX_ITERATIONS}] "
                           f"Продолжай работу. Запиши DONE в "
                           f".cursor/scratchpad.md когда закончишь."
    }))
```

---

## Паттерн: «Крути пока не заработает»

Мощный паттерн — AI работает в цикле, пока тесты не пройдут:

`.cursor/hooks.json`:
```json
{
  "version": 1,
  "hooks": {
    "stop": [
      { "command": "python .cursor/hooks/run_tests.py" }
    ]
  }
}
```

`.cursor/hooks/run_tests.py`:
```python
"""Запускает тесты. Если падают — отправляет AI исправлять."""
import json
import sys
import subprocess

data = json.load(sys.stdin)

if data.get("loop_count", 0) >= 5:
    print(json.dumps({}))
    sys.exit(0)

# Запускаем тесты
result = subprocess.run(
    ["python", "-m", "pytest", "--tb=short"],
    capture_output=True, text=True
)

if result.returncode == 0:
    # Все тесты прошли!
    print(json.dumps({}))
else:
    # Тесты упали — отправляем AI исправлять
    errors = result.stdout[-500:]  # Последние 500 символов
    print(json.dumps({
        "followup_message": f"Тесты упали. Исправь:\n{errors}"
    }))
```

### Применение:
- Запуск тестов с автоисправлением
- Итерация над UI до соответствия макету
- Любая задача, где успех можно проверить автоматически

---

## Аналогия Claude Code vs Cursor

| Claude Code | Cursor |
|------------|--------|
| CLAUDE.md | .cursor/rules/*.mdc |
| .claude/skills/ | Agent Skills |
| .claude/hooks/ | .cursor/hooks.json |
| Вложенные CLAUDE.md | .mdc с globs по папкам |

---

## ⚠️ Важно

Hooks сейчас доступны только в **nightly-релизе** Cursor:
1. Settings → Beta
2. Update Channel → **Nightly**
3. Перезапустить Cursor
