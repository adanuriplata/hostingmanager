import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogin: (state, action: PayloadAction<number>) => {
      return { ...state, user: action.payload, isLogged: true };
    },
    authLogOut: (state) => {
      return { ...state, user: {}, isLogged: false };
    },
  },
});

export const { authLogin, authLogOut } = authSlice.actions;
