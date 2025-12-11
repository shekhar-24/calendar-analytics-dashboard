# Calendar Analytics Dashboard

A React-based dashboard application featuring an interactive calendar with daily analytics visualization.

## 📂 Project Structure

```bash
calendar-analytics-dashboard/
├── src/
│   ├── components/       # Reusable UI components (Calendar, Modal, Charts)
│   ├── redux/           # Redux slices and store configuration
│   ├── utils/           # Helper functions (Date formatting, etc.)
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## 📦 Key Packages

*   **react-big-calendar**: Handles the core calendar view and event rendering.
*   **@reduxjs/toolkit**: Manages global application state (selected dates, events).
*   **recharts**: Renders the bar chart visualizations for daily analytics.
*   **chakra-ui**: Provides accessible and composable UI components.
*   **date-fns**: Utility library for date manipulation and formatting.
*   **framer-motion**: Adds smooth animations for modal interactions.

## 🛠️ Project Setup

Follow these steps to get the project running locally:

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 🚀 Features

*   **Calendar View**: Navigate by Day, Week, or Month.
*   **Interactive Analytics**: Click on dates to view daily usage stats.
*   **Responsive Design**: Works seamlessly on desktop and mobile.
