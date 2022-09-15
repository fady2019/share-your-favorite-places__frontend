import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth/auth-slice';

import uiSlice from './slices/ui/ui-slice';
import userSlice from './slices/user/user-slice';

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        auth: authSlice.reducer,
        user: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
