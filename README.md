# servicenowplanner

## Telegram backend sender
- Serverless endpoint: `api/telegram-send.js` posts messages to Telegram.
- Configure env vars on Vercel: `TELEGRAM_BOT_TOKEN` (required) and optional `TELEGRAM_CHAT_ID` (fallback if not provided by the client).
- Frontend will call this endpoint when no token is stored locally; providing a token/chat in the Automations UI still sends directly to Telegram.
