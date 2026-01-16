# SNowPrep - ServiceNow Certification Study Platform

A comprehensive study platform for ServiceNow certifications (CSA, CAD, CIS-ITSM) with AI-powered planning and automated reminders.

## Features

### Study Management
- **Dashboard**: Track progress across all certifications
- **Study Topics**: Organized syllabus with direct links to Now Learning courses
- **Practice Quizzes**: Test your knowledge with practice questions
- **Notes**: Create and manage study notes by certification

### AI Study Planner
- **Smart Daily Plans**: AI generates personalized daily study recommendations
- **Weekly Planning**: Intelligent weekly schedules based on your progress
- **Study Advice**: Personalized tips based on completion status and difficulty levels
- **Goal Tracking**: Set and track daily study goals

### Automations & Integrations

#### Telegram Bot
- **Daily Reminders**: Scheduled study reminders via Telegram
- **Pop Quizzes**: Random quiz questions throughout the day
- **Progress Updates**: Weekly progress reports
- **Setup**: Get bot token from @BotFather and chat ID from @userinfobot

#### WhatsApp & Calendar (via n8n)
- **WhatsApp Reminders**: Daily study reminders via WhatsApp
- **Calendar Sync**: Auto-sync scheduled topics to your calendar
- **Webhook Integration**: Connect to n8n workflows

## Setup

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. All data is stored in browser localStorage

### Deploy to Vercel

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the configuration

3. **Configure Environment Variables** (Optional for Telegram backend)
   Add these to your Vercel project settings:
   - `TELEGRAM_BOT_TOKEN`: Your Telegram bot token (from @BotFather)
   - `TELEGRAM_CHAT_ID`: Your default Telegram chat ID (optional fallback)

### Telegram Bot Setup

1. **Create Bot**
   - Message @BotFather on Telegram
   - Send `/newbot` and follow instructions
   - Copy the bot token

2. **Get Chat ID**
   - Message @userinfobot on Telegram
   - Copy your chat ID

3. **Configure in App**
   - Navigate to Automations page
   - Enter bot token and chat ID
   - Enable daily reminders
   - Test connection

### n8n Integration Setup

1. **WhatsApp Workflow**
   - Create n8n workflow with Webhook trigger
   - Add WhatsApp node (requires WhatsApp Business API)
   - Copy webhook URL to Automations page

2. **Calendar Workflow**
   - Create n8n workflow with Webhook trigger
   - Add Google Calendar / Outlook node
   - Copy webhook URL to Automations page

## API Endpoints

### POST `/api/telegram-send`
Send a message via Telegram bot.

**Request Body:**
```json
{
  "message": "Your message text",
  "chatId": "123456789",
  "botToken": "your-bot-token"
}
```

**Environment Variables (Fallback):**
- `TELEGRAM_BOT_TOKEN`: Default bot token
- `TELEGRAM_CHAT_ID`: Default chat ID

## Technologies

- **Frontend**: Pure HTML, CSS, JavaScript
- **Storage**: Browser localStorage
- **Backend**: Vercel Serverless Functions
- **Integrations**: Telegram Bot API, n8n workflows
- **Optional**: Supabase for cloud sync (credentials in .env)

## File Structure

```
├── index.html              # Main application
├── static/
│   └── js/
│       └── app.js         # Application logic
├── api/
│   └── telegram-send.js   # Telegram API endpoint
├── vercel.json            # Vercel configuration
└── README.md
```

## Recent Fixes (2026-01-16)

### Added Missing Pages
1. **Planner Page** (`page-planner`)
   - AI daily/weekly plan generators
   - Daily goals tracker
   - Weekly planner grid
   - Smart study recommendations

2. **Automations Page** (`page-automations`)
   - Telegram bot configuration
   - WhatsApp/n8n webhooks
   - Calendar integration settings
   - Test connection buttons

### Fixed Navigation
- Added "Planner" navigation item
- Added "Automations" navigation item
- All navigation items now properly connected

### Fixed API Routes
- Updated `vercel.json` with proper rewrites for `/api/*` endpoints
- Telegram bot messaging now works correctly

### Added CSS Styles
- AI suggestion cards
- Goal tracking components
- Weekly planner layout
- Button styles for AI features

## Usage Tips

1. **Start with Dashboard**: Get an overview of your progress
2. **Use AI Planner**: Generate smart daily/weekly plans
3. **Enable Telegram**: Never miss a study session
4. **Track Progress**: Mark topics as completed
5. **Practice Quizzes**: Test knowledge regularly
6. **Take Notes**: Document key learnings

## License

MIT License - See LICENSE file

## Support

For issues or questions:
- Open an issue on GitHub
- Check the ServiceNow Community
