import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: 10,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    increment: (state) => {
      return { ...state, value: state.value + 10 };
    },
    decrement: (state) => {
      return { ...state, value: state.value - 10 };
    },
    custom: (state, action: PayloadAction<number>) => {
      return { ...state, value: state.value + action.payload };
    },
  },
});

export const { increment, decrement, custom } = uiSlice.actions;
