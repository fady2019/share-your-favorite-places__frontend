import { AuthModeE, AuthTokenI } from '../../../interfaces/auth';
import { AppStoreActionI, AuthSliceI } from '../../../interfaces/store';

export const authSliceReducers = {
    setToken: (state: AuthSliceI, action: AppStoreActionI<AuthTokenI>) => {
        state.token = action.payload;
    },
    clearToken: (state: AuthSliceI) => {
        state.token = null;
    },
    switchAuthMode: (state: AuthSliceI) => {
        state.authMode = state.authMode === AuthModeE.LOGIN ? AuthModeE.SIGN_UP : AuthModeE.LOGIN;
    },
    setAutoLoginDone: (state: AuthSliceI) => {
        state.isAutoLoginDone = true;
    },
};
