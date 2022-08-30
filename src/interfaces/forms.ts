export enum FormActionTypeE {
    'GET_INPUT',
}

export interface FormInputI {
    value: string;
    valid: boolean;
}

export interface FormStateI {
    inputs: {
        [key: string]: FormInputI;
    };
    valid: boolean;
}

export interface FormActionI {
    type: FormActionTypeE;
    payload?: any;
}
