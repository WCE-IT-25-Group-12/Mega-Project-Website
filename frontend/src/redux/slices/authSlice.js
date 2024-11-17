// redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  isLoggedIn: false,
};

// Create a slice of the store
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the login state
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

// Export the action to use it in the components
export const { setIsLoggedIn } = authSlice.actions;

// Export the reducer to add it to the store
export default authSlice.reducer;
