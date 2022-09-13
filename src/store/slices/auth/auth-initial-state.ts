import { AuthModeE } from '../../../interfaces/auth';
import { AuthSliceI } from '../../../interfaces/store';

export const authSliceInitialState: AuthSliceI = {
    token: null,
    authMode: AuthModeE.LOGIN,
};
