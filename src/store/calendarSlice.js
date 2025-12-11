import { createSlice } from '@reduxjs/toolkit';
import dummyData from '../data/dummyData.json';

const initialState = {
  events: {},
  selectedDate: null,
  isModalOpen: false,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    loadData: (state) => {
      // In a real app, this might fetch data. Here we load the dummy data.
      state.events = dummyData;
    },
    selectDate: (state, action) => {
      state.selectedDate = action.payload;
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedDate = null;
    },
  },
});

export const { loadData, selectDate, closeModal } = calendarSlice.actions;

// Selector to transform raw data into calendar-friendly events
export const selectCalendarEvents = (state) => {
  const rawEvents = state.calendar.events;
  const events = [];
  
  if (!rawEvents) return events;

  Object.keys(rawEvents).forEach(dateStr => {
    // rawEvents[dateStr] is the array of user data
    // dateStr is in DD-MM-YYYY format
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      // Note: Month is 0-indexed in JS Date, but 1-indexed in our string
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      
      const date = new Date(year, month, day);
      
      events.push({
        title: 'Data Available',
        start: date,
        end: date,
        allDay: true,
        resource: rawEvents[dateStr] // Store the raw data here if needed
      });
    }
  });
  
  return events;
};

export default calendarSlice.reducer;
