import { InputValidatorI } from './validators';

export enum InputActionTypeE {
    CHANGE_INPUT,
    FOCUS_INPUT,
    BLUR_INPUT,
}

export interface InputStateI {
    value: string;
    focused: boolean;
    touched: boolean;
    valid: boolean;
    error: string;
}

export interface InputActionI {
    type: InputActionTypeE;
    payload?: any;
    validators?: InputValidatorI[];
}
