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
export default calendarSlice.reducer;
