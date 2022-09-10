import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth/auth-slice';

import uiSlice from './slices/ui/ui-slice';

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
