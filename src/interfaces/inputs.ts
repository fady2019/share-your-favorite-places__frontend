import { InputValidatorI } from "./validators";

export interface InputStateI {
    value: string;
    touched: boolean;
    valid: boolean;
    error: string;
}

export interface InputActionI {
    type: string;
    value?: any;
    validators?: InputValidatorI[] 
}
