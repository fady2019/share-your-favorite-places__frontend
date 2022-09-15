import { AuthModeE } from '../../../interfaces/auth';
import { AuthSliceI } from '../../../interfaces/store';

export const authSliceInitialState: AuthSliceI = {
    token: null,
    isAutoLoginDone: false,
    authMode: AuthModeE.LOGIN,
};
