import { createSlice } from '@reduxjs/toolkit';

import { authSliceInitialState } from './auth-initial-state';
import { authSliceReducers } from './auth-reducers';

const authSlice = createSlice({
    name: 'auth',
    initialState: authSliceInitialState,
    reducers: authSliceReducers,
});

export default authSlice;

export const authActions = authSlice.actions;
