export enum FormActionTypeE {
    'GET_INPUT',
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
