import { AuthModeE } from "../../../interfaces/auth";
import { AuthSliceI } from "../../../interfaces/store";

export const authSliceInitialState: AuthSliceI = {
    isAuth: false,
    authMode: AuthModeE.LOGIN
}