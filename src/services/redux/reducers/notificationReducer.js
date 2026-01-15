import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [], // ["890232323", "12121212", "1212121212"]
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, { payload }) => {
      if (!state.notifications.includes(payload)) {
        state.notifications.push(payload);
      }
    },
    removeNotification: (state, { payload }) => {
      state.notifications = state.notifications.filter(
        (notification) => notification !== payload
      );
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
    getCount: (state) => {
      return state.notifications.length;
    },
  },
});

export const {
  addNotification,
  removeNotification,
  clearNotifications,
  getCount,
} = notificationSlice.actions;

export default notificationSlice.reducer;
