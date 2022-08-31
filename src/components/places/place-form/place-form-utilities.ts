import { FormActionI, FormActionTypeE, FormStateI } from '../../../interfaces/forms';
import { PlaceFormStateInputsI } from '../../../interfaces/places';

export const placeFormInitialState: FormStateI<PlaceFormStateInputsI> = {
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

export const placeFormReducer = (state: FormStateI<PlaceFormStateInputsI>, action: FormActionI) => {
    switch (action.type) {
        case FormActionTypeE.GET_INPUT: {
            let isFormValid = action.payload.isInputValid;

            for (const inputId in state.inputs) {
                if (inputId !== action.payload.inputId) {
                    isFormValid &&= Object.getOwnPropertyDescriptor(state.inputs, inputId)?.value.valid;
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
