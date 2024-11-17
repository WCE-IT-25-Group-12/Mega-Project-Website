// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

// Create the store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
