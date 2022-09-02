import { AuthModeE } from '../../../interfaces/auth';
import { AuthSliceI } from '../../../interfaces/store';

export const authSliceReducers = {
    login: (state: AuthSliceI) => {
        state.isAuth = true;
    },
    logout: (state: AuthSliceI) => {
        state.isAuth = false;
    },
    switchAuthMode: (state: AuthSliceI) => {
        state.authMode = state.authMode === AuthModeE.LOGIN ? AuthModeE.SIGN_UP : AuthModeE.LOGIN;
    },
};
