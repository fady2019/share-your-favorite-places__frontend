export enum FormActionTypeE {
    GET_INPUT,
    SET_INPUTS,
}

export interface FormInputI {
    value: string;
    valid: boolean;
}

export interface FormStateI<T> {
    inputs: T;
    valid: boolean;
}

export interface FormActionI {
    type: FormActionTypeE;
    payload?: any;
}
