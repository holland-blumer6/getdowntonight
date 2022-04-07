/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = '';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

// export different actions
export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
