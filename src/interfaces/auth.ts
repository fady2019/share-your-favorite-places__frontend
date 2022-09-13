import { FormInputI } from './forms';

export enum AuthModeE {
    LOGIN='login',
    SIGN_UP='signup',
}

export interface AuthTokenI {
    id: string;
    expireAt: number;
}

export interface AuthFormI {
    mode: AuthModeE;
}

export interface AuthFormStateInputI {
    name?: FormInputI;
    email: FormInputI;
    password: FormInputI;
}
