```markdown
# SNowPrep - ServiceNow Certification Study Platform [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()

A comprehensive study platform designed to help you ace your ServiceNow certifications (CSA, CAD, CIS-ITSM) with AI-powered planning, automated reminders, and interactive learning tools.

## Description

SNowPrep is a web application built to streamline your ServiceNow certification journey. It offers a personalized learning experience with AI-driven study plans, practice quizzes, flashcards, and integration with communication platforms like Telegram.

## Key Features

*   **Personalized Study Plans**: AI-powered daily and weekly study schedules tailored to your progress.
*   **Comprehensive Study Materials**: Organized syllabus with direct links to Now Learning courses.
*   **Practice Quizzes & Exam Simulator**: Test your knowledge and prepare for the real exam.
*   **Flashcards**: Reinforce your understanding with interactive flashcards.
*   **Study Notes**: Create and manage notes organized by certification topic.
*   **Progress Tracking**: Monitor your progress across all certifications.
*   **Automated Reminders**: Receive study reminders via Telegram.
*   **Telegram Integration**:
    *   Daily study reminders.
    *   Random pop quizzes.
    *   Weekly progress reports.
*   **Pomodoro Timer**: Stay focused and productive with a built-in Pomodoro timer.
*   **Analytics**: Track your study habits and identify areas for improvement.
*   **AI Tutor**: Get personalized assistance with study topics.

## Tech Stack

*   **Frontend**:
    *   ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
    *   ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
    *   ![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
*   **Backend/Utilities**:
    *   Telegram Bot API
    *   Vercel (Deployment)
*   **Database**: Supabase (Utilized with Supabase Schema, not directly a dependency, conceptual)
    *   ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## Project Structure

```
servicenowplanner/
├── .env.example        # Example environment variables
├── .gitignore           # Specifies intentionally untracked files that Git should ignore
├── FIXES.md             # Documentation for fixes and known issues
├── LICENSE              # License information (MIT)
├── README.md            # This file!
├── UPGRADE.md           # Upgrade instructions
├── api/                # API endpoints
│   ├── ai-tutor.js       # AI Tutor API logic
│   └── telegram-send.js   # Telegram message sending logic
├── index.html           # Main HTML file
├── package.json         # Project metadata and dependencies
├── static/            # Static assets
│   ├── css/           # CSS stylesheets
│   │   └── style.css    # Main stylesheet
│   └── js/            # JavaScript files
│       ├── analytics.js   # Analytics tracking
│       ├── app.js         # Main application logic
│       ├── exam-simulator.js # Exam simulator functionality
│       ├── flashcards.js    # Flashcard functionality
│       └── pomodoro.js      # Pomodoro timer functionality
├── supabase-schema.sql # Supabase database schema
└── vercel.json          # Vercel configuration file
```

## Prerequisites

*   A modern web browser (Chrome, Firefox, Safari, etc.)
*   (Optional) Telegram account for bot integration

## Installation

### Local Development

1.  Clone the repository:

    ```bash
    git clone https://github.com/YOUR_USERNAME/servicenowplanner.git
    cd servicenowplanner
    ```

2.  Open `index.html` in your web browser.

    *   All data is stored in your browser's localStorage.

### Deploy to Vercel

1.  **Push to GitHub** (if not already done)

    ```bash
    git add .
    git commit -m "Initial commit"
    git push origin main
    ```

2.  **Deploy to Vercel**:

    *   Connect your GitHub repository to Vercel: [https://vercel.com/new](https://vercel.com/new)
    *   Vercel will automatically detect the configuration.

3.  **Configure Environment Variables** (Optional for Telegram integration):

    Add these to your Vercel project settings:

    *   `TELEGRAM_BOT_TOKEN`: Your Telegram bot token (obtained from @BotFather on Telegram).
    *   `TELEGRAM_CHAT_ID`:  Your Telegram chat ID (optional fallback; can be obtained from @userinfobot on Telegram).

## Usage

1.  Open `index.html` in your web browser (local development).
2.  Navigate through the dashboard to access study topics, practice quizzes, and flashcards.
3.  Use the AI Study Planner to generate personalized study schedules.
4.  Connect your Telegram bot to receive study reminders and updates.

## Live Demo

[https://servicenowplanner-3c13li6fv-nivethas-projects-f7c0732d.vercel.app](https://servicenowplanner-3c13li6fv-nivethas-projects-f7c0732d.vercel.app)

## Contributing

Contributions are welcome!  Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```