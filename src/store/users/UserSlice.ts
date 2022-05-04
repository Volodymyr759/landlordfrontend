import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from '../types';
import { UserState } from "./types";

export const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsersIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
            state.users = [];
            state.error = '';
        },
        getUsersSuccess(state, action: PayloadAction<IUser[]>) {
            state.isLoading = false;
            state.users = action.payload;
            state.error = '';
        },
        getUsersError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default userSlice.reducer;