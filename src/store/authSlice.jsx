import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    email: '',
    error: '',
  },
  reducers: {
    // login: (state, action) => {
    //   state.isLoggedIn = true;
    //   state.email = action.payload.email;
    login: (state, action) => {
      if (action.payload.email === 'cha@mail.id' && action.payload.password === '1234') {
        state.isLoggedIn = true;
        state.email = action.payload.email;
        state.error = '';
      } else {
        state.error = 'Email atau password salah';
      }
    },
    logout: state => {
      state.isLoggedIn = false;
      state.email = '';
      state.error = '';
    },
  },
});

export const { login, logout } = authSlice.actions;
