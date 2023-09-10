'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserStateProps {
  id: number;
  username: string;
  role: string;
}

const initialState: UserStateProps = {
  id: 0,
  username: '',
  role: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginReducer: (state, action: PayloadAction<UserStateProps>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.role = action.payload.role;
    },
    logoutReducer: state => {
      state.id = 0;
      state.username = '';
      state.role = '';
    },
  },
});

export const { loginReducer, logoutReducer } = userSlice.actions;

export default userSlice.reducer;
