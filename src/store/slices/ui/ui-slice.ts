import { createSlice } from '@reduxjs/toolkit';

import { uiSliceInitialState } from './ui-initial-state';

import uiReducers from './ui-reducers';

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiSliceInitialState,
    reducers: uiReducers,
});

export default uiSlice;

export const uiActions = uiSlice.actions;