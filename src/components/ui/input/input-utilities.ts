import { InputActionI, InputStateI, InputActionTypeE } from '../../../interfaces/inputs';

import { validate } from '../../../utilities/validators';

export const inputInitState: InputStateI = {
    value: '',
    focused: false,
    touched: false,
    valid: false,
    error: '',
};

export const inputReducer = (state: InputStateI, action: InputActionI) => {
    switch (action.type) {
        case InputActionTypeE.FOCUS_INPUT: {
            return {
                ...state,
                focused: true,
            };
        }
        case InputActionTypeE.BLUR_INPUT: {
            return {
                ...state,
                focused: false,
                touched: true,
            };
        }
        case InputActionTypeE.CHANGE_INPUT: {
            const validators = action.validators || [];
            const validationResult = validate(action.payload, validators);
            const error = validationResult !== -1 ? validators[validationResult].msg : '';

            return {
                ...state,
                value: action.payload,
                valid: validationResult === -1,
                error,
            };
        }
        default:
            return state;
    }
};
