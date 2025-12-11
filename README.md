# Calendar Analytics Dashboard 📊

## Project Overview

This is a **React-based Analytics Dashboard** that visualizes user activity data on an interactive calendar. It was built to demonstrate proficiency in **React**, **Redux**, **Data Visualization**, and **Calendar Integrations**.

The application allows users to:
1.  **Navigate** through months, weeks, and days.
2.  **Identify** days with activity (highlighted in blue).
3.  **Select** any date to view detailed analytics.
4.  **Visualize** user performance data via interactive Bar Charts in a modal.

---

## 🚀 Features

*   **📅 Interactive Calendar**: Built with `react-big-calendar`, supporting Month, Week, and Day views.
*   **🔵 Smart Highlighting**:
    *   **Data Dates**: Dates with recorded activity are highlighted in Blue.
    *   **Selected Date**: The currently selected date is clearly marked with a custom border and background.
*   **📊 Data Visualization**:
    *   Clicking a date with data opens a modal with a **Recharts Bar Graph**.
    *   Displays user specific metrics (User 1 vs User 2, etc.).
*   **⚠️ Empty State Handling**:
    *   Clicking a date without data displays a clear "No data found" message.
*   **⚡ State Management**: Powered by **Redux Toolkit** for predictable state updates across the Calendar and Modals.
*   **📱 Responsive Design**: Fully responsive UI built with **Chakra UI**, ensuring compatibility across desktop and mobile devices.

---

## 🛠️ Technology Stack

*   **Core**: React 19, Vite
*   **State Management**: Redux Toolkit, React-Redux
*   **Calendar**: React Big Calendar, Date-fns (Localizer)
*   **Charts**: Recharts
*   **UI Framework**: Chakra UI (v3), Emotion
*   **Linting**: ESLint

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the Repository**
    ```bash
    git clone <your-repo-link>
    cd calendar-analytics-dashboard
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run the Development Server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` (or the port shown in your terminal).

---

## 🧪 How to Test / Usage Guide

1.  **View the Data**:
    *   Navigate to **November 2025** or **December 2025**.
    *   Observe the "Data Available" events on dates like **01-11-2025**, **02-11-2025**, or **02-12-2025**.
2.  **View the Chart**:
    *   **Click** on any Blue event (e.g., Nov 1st).
    *   A modal will pop up showing a Bar Chart comparing User 1, User 2, User 3, and User 4.
3.  **Test "No Data"**:
    *   **Click** on any empty white box (e.g., Nov 15th).
    *   The modal will appear with the message: *"No data found for the selected date."*
4.  **Navigation**:
    *   Use the **Back** and **Next** buttons to switch months.
    *   Use **Week** or **Day** buttons to change the view logic.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── CalendarView.jsx      # Main Calendar Component
│   └── DateDetailsModal.jsx  # Popup displaying Chart or Warning
├── data/
│   └── dummyData.json        # Sample JSON Data (Key-Value)
├── store/
│   ├── calendarSlice.js      # Redux Logic (Actions/Reducers)
│   └── store.js              # Store Configuration
├── utils/
│   └── dateUtils.js          # Helper functions
├── App.jsx                   # Main Application Layout
└── main.jsx                  # Entry point with Providers
```

---

## ✅ Assignment Requirements Checklist

- [x] **Setup**: Package.json includes all necessary dependencies.
- [x] **Calendar**: Integrated React Big Calendar with Month/Week/Day views.
- [x] **Data**: Implemented dummy JSON data (`dummyData.json`).
- [x] **Display**: Events are rendered on the calendar.
- [x] **Highlighting**:
    - [x] Dates with data are highlighted.
    - [x] Selected date is visually distinct.
- [x] **Interaction**: Clicking a date opens a popup.
- [x] **Visualization**: Popup contains a Bar Graph for data dates.
- [x] **Edge Case**: Popup shows "No data found" for empty dates.
- [x] **Cross-Platform**: Web-based solution works on all modern OS/Browsers.

---

### Author
Developed for the React Frontend Assignment.
