import { FormInputI } from './forms';

export interface ChangeNameFormI {
    name: FormInputI;
}

export interface ChangeEmailFormI {
    email: FormInputI;
    password: FormInputI;
}

export interface ChangePasswordFormI {
    newPassword: FormInputI;
    password: FormInputI;
}

export interface PasswordConfirmationFormI {
    password: FormInputI;
}
