import { createSlice } from '@reduxjs/toolkit';

import { userSliceInitialState } from './user-initial-state';
import userReducers from './user-reducers';

const userSlice = createSlice({
    name: 'user',
    initialState: userSliceInitialState,
    reducers: userReducers,
});

export default userSlice;

export const userActions = userSlice.actions;
