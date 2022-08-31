import { useCallback, useReducer } from 'react';
import { FormActionI, FormActionTypeE, FormStateI } from '../interfaces/forms';

export const useForm = (
    formReducer: (state: FormStateI<any>, action: FormActionI) => FormStateI<any>,
    initialState: FormStateI<any>
) => {
    const [formState, formDispatch] = useReducer(formReducer, initialState);

    const getInputHandler = useCallback(
        (inputId: string, inputValue: string, isInputValid: boolean) => {
            formDispatch({
                type: FormActionTypeE.GET_INPUT,
                payload: {
                    inputId,
                    inputValue,
                    isInputValid,
                },
            });
        },
        []
    );

    return { formState, getInputHandler };
};
