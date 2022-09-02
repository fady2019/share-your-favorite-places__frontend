import { FormInputI } from './forms';

export enum AuthModeE {
    LOGIN,
    SIGN_UP,
}

export interface AuthFormContainerI {}

export interface AuthFormI {
    mode: AuthModeE;
}

export interface AuthFormStateInputI {
    firstName?: FormInputI;
    lastName?: FormInputI;
    email: FormInputI;
    password: FormInputI;
}
