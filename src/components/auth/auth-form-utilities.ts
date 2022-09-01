import { AuthFormStateInputI, AuthModeE } from '../../interfaces/auth';
import { FormStateI } from '../../interfaces/forms';

export const formInitialState = (authMode: AuthModeE): FormStateI<AuthFormStateInputI> => {
    const formState: FormStateI<AuthFormStateInputI> = {
        inputs: {
            email: { value: '', valid: false },
            password: { value: '', valid: false },
            firstName: { value: '', valid: false },
            lastName: { value: '', valid: false },
        },
        valid: false,
    };

    if (authMode === AuthModeE.LOGIN) {
        delete formState.inputs.firstName;
        delete formState.inputs.lastName;
    }
    
    return formState;
}; 