import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import siderbarReducer from "./reducers/siderbarReducer";


export const store = configureStore({
  reducer: {
    sidebar: siderbarReducer,
    user: userReducer,
  },
});
