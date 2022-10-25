import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false },
  reducers: {
    setLogging(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
