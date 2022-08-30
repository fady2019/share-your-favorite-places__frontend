import { FormActionI, FormActionTypeE, FormStateI } from '../../../interfaces/forms';

export const newPlaceFormInitialState: FormStateI = {
    inputs: {
        title: {
            value: '',
            valid: false,
        },
        address: {
            value: '',
            valid: false,
        },
        description: {
            value: '',
            valid: false,
        },
    },
    valid: false,
};

export const newPlaceFormReducer = (state: FormStateI, action: FormActionI) => {
    switch (action.type) {
        case FormActionTypeE.GET_INPUT: {
            let isFormValid = action.payload.isInputValid;

            for (const inputId in state.inputs) {
                if (inputId !== action.payload.inputId) {
                    isFormValid &&= state.inputs[inputId].valid;
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
        default:
            return state;
    }
};
