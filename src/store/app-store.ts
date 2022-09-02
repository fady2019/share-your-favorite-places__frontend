import { configureStore } from '@reduxjs/toolkit';
import { AppStoreI } from '../interfaces/store';
import authSlice from './slices/auth/auth-slice';

import uiSlice from './slices/ui/ui-slice'

const store = configureStore<AppStoreI>({
    reducer: {
        ui: uiSlice.reducer,
        auth: authSlice.reducer
    }
})

export default store;