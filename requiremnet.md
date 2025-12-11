React Calendar Assignment — Requirements & Execution Plan 

 

1. Assignment Requirements (From Company Email) 

General Requirements 

Build a React application with a meaningful project name. 

Include a proper README.md with clear instructions. 

Ensure package.json contains all required dependencies. 

Submit via a Git repository link with source code and README. 

Use at least 5 commits during the assignment window. 

First commit must match the start time; last commit must match the end time. 

 

Functional Requirements 

React Big Calendar 

Integrate React Big Calendar. 

Display data in day, week, and month views. 

Dummy Data 

Use JSON data with this structure: 

{ 
 "01-11-2025": [ 
   {"user_1": 1}, 
   {"user_2": 2}, 
   {"user_3": 3}, 
   {"user_4": 4} 
 ], 
 "02-11-2025": [ 
   {"user_1": 1}, 
   {"user_2": 2}, 
   {"user_3": 3}, 
   {"user_4": 4} 
 ] 
} 
 

 

Calendar Interaction Requirements 

Display date-wise entries on the calendar. 

Highlight dates that contain data. 

Highlight the selected date. 

On clicking a highlighted date: 

Show a popup/modal. 

Display the selected date. 

Show a Bar Graph representing the data for that date. 

If the selected date has no data, show: 
“No data found for the selected date.” 

 

Technical Requirements 

Use Redux for global state management. 

Integrate Bar Graph using Recharts or Chart.js. 

UI must work smoothly across all operating systems. 

Cover all relevant test cases and handle edge cases. 

Debug and fix any mismatch before final submission. 

 

Submission Requirements 

Public Git repo containing: 

Source files 

README.md 

Minimum 5 meaningful commits 

Ensure behavior matches the assignment's expected output. 

 

2. Execution Plan (Your Implementation Strategy) 

 

Step 0 — GitHub Setup 

Create a new GitHub repository (public). 

Name suggestion: 

react-big-calendar-bar-graph 

Clone it locally. 

Your 8-hour timer begins when you start development. 

 

⏱️ Time-Based Development Plan (Total: 8 Hours) 

 

0.5 Hour — Project Initialization 

Create project with Vite or Create React App. 

Install dependencies: 

react-big-calendar 

date-fns 

redux + @reduxjs/toolkit 

react-redux 

recharts 

Create folder structure. 

Commit #1: 
“chore: initial project setup with dependencies” 

 

1.0 Hour — Dummy Data + Redux Store 

Create dummyData.json. 

Setup Redux store using Redux Toolkit. 

Implement actions: 

loadData 

selectDate 

closeModal 

Add date utilities (DD-MM-YYYY → Date). 

Commit #2: 
“feat: add dummy data, redux store, and date utilities” 

 

1.5 Hours — React Big Calendar Integration 

Configure date-fns localizer. 

Convert dummy data into calendar events. 

Render month/week/day views. 

Commit #3: 
“feat: integrate react-big-calendar and render events” 

 

1.0 Hour — Modal + Date Click Behavior 

Create popup/modal component. 

On date click: 

If data exists → show modal with placeholder chart. 

If no data → show warning message. 

Commit #4: 
“feat: add modal component and date click handler” 

 

1.0 Hour — Bar Chart Implementation 

Create bar chart using Recharts. 

Transform selected date's data into chart-friendly format. 

Display chart inside modal. 

Commit #5: 
“feat: integrate bar chart for selected date data” 

 

1.0 Hour — UI Styling + Highlighting 

Highlight: 

Dates containing data 

Selected date 

Ensure responsive UI. 

Commit #6: 
“style: highlight dates with data and selected date” 

 

1.0 Hour — Edge Cases & Testing 

Test: 

Dates with/without data 

Calendar navigation 

Modal/Chart performance 

Time zone issues 

Mobile responsiveness 
Fix bugs accordingly. 

Commit #7: 
“fix: handle edge cases and finalize component behavior” 

 

0.5 Hour — Prepare README + Final Commit 

README must include: 

Project overview 

Installation steps 

Running instructions 

Testing instructions 

Data structure explanation 

Commit timeline information 

Final Commit: 
“docs: add README and finalize assignment” 

 

3. Final Deliverables 

You will deliver: 
✔ Public GitHub repo 
✔ Clean commit history 
✔ Functional React application 
✔ React Big Calendar integration 
✔ Bar chart visualization 
✔ Modal interaction 
✔ Redux state management 
✔ Fully tested and debugged app 

 

4. Notes for Best Results 

Keep UI simple, clean, and readable. 

Write meaningful commit messages. 

Avoid console warnings or errors. 

Make README very easy to understand. 

Ensure popup behavior is smooth. 

 