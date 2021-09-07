import { ICurrentPosition, IUpdateUser, IUpdateUserAvatar, IUser } from '@/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface UserReducerState {
  user?: IUser;
  position?: ICurrentPosition;
}

// Define the initial state using that type
const initialState: UserReducerState = {
  user:
    typeof window !== 'undefined' && localStorage.getItem('ayoojon-user')
      ? JSON.parse(localStorage.getItem('ayoojon-user')!)
      : undefined,
};

export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<IUser>) => {
      window.localStorage.setItem('ayoojon-user', JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logoutUser: (state) => {
      window.localStorage.removeItem('ayoojon-user');
      state.user = undefined;
    },
    updateUser: (state, action: PayloadAction<IUpdateUser>) => {
      const user = { ...state.user, ...action.payload };
      window.localStorage.setItem('ayoojon-user', JSON.stringify(user));
      state.user = { ...state.user, ...action.payload };
    },
    updateAvatar: (state, action: PayloadAction<IUpdateUserAvatar>) => {
      const user = { ...state.user, ...action.payload };
      window.localStorage.setItem('ayoojon-user', JSON.stringify(user));
      state.user = { ...state.user, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser, updateUser, updateAvatar } = userReducer.actions;

export default userReducer.reducer;
