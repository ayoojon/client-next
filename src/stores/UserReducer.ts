import { ICurrentPosition, IUser } from '@/types/user';
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
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = userReducer.actions;

export default userReducer.reducer;
