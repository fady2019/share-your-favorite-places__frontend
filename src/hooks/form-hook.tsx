import { useCallback, useReducer } from 'react';
import { FormActionI, FormActionTypeE, FormStateI } from '../interfaces/forms';

function FORM_REDUCER<T>(state: FormStateI<T>, action: FormActionI): FormStateI<T> {
    switch (action.type) {
        case FormActionTypeE.GET_INPUT: {
            let isFormValid = action.payload.isInputValid;

            for (const inputId in state.inputs) {
                if (inputId !== action.payload.inputId) {
                    isFormValid &&= Object.getOwnPropertyDescriptor(state.inputs, inputId)?.value
                        .valid;
                }
            }

            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.payload.inputId]: {
                        value: action.payload.inputValue,
                        valid: action.payload.isInputValid,
                    },
                },
                valid: isFormValid,
            };
        }
        case FormActionTypeE.SET_INPUTS: {
            return {
                ...action.payload
            }
        }
        default:
            return state;
    }
}

export function useForm<T>(
    initialState: FormStateI<any>,
    formReducer: (state: FormStateI<T>, action: FormActionI) => FormStateI<T> = FORM_REDUCER,
) {
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

    return { formState, formDispatch, getInputHandler };
}
