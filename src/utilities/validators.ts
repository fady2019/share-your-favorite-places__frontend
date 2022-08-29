import { InputValidatorTypeE, InputValidatorI } from '../interfaces/validators';

export const VALIDATOR_REQUIRE = (msg: string): InputValidatorI => {
    return { type: InputValidatorTypeE.VALIDATOR_TYPE_REQUIRE, msg };
};

export const VALIDATOR_FILE = (msg: string): InputValidatorI => {
    return { type: InputValidatorTypeE.VALIDATOR_TYPE_FILE, msg };
};

export const VALIDATOR_MIN_LENGTH = (value: any, msg: string): InputValidatorI => {
    return {
        type: InputValidatorTypeE.VALIDATOR_TYPE_MIN_LENGTH,
        value,
        msg,
    };
};

export const VALIDATOR_MAX_LENGTH = (value: any, msg: string): InputValidatorI => {
    return { type: InputValidatorTypeE.VALIDATOR_TYPE_MAX_LENGTH, value, msg };
};

export const VALIDATOR_MIN = (value: any, msg: string): InputValidatorI => {
    return { type: InputValidatorTypeE.VALIDATOR_TYPE_MIN, value, msg };
};

export const VALIDATOR_MAX = (value: any, msg: string): InputValidatorI => {
    return { type: InputValidatorTypeE.VALIDATOR_TYPE_MAX, value, msg };
};

export const VALIDATOR_EMAIL = (msg: string): InputValidatorI => {
    return { type: InputValidatorTypeE.VALIDATOR_TYPE_EMAIL, msg };
};

export const validate = (value: any, validators: InputValidatorI[]) => {
    for (let idx = 0; idx < validators.length; idx++) {
        const validator = validators[idx];

        switch (validator.type) {
            case InputValidatorTypeE.VALIDATOR_TYPE_REQUIRE: {
                if (value.trim().length <= 0) {
                    return idx;
                }
                break;
            }
            case InputValidatorTypeE.VALIDATOR_TYPE_MIN_LENGTH: {
                if (value.trim().length < validator.value) {
                    return idx;
                }
                break;
            }
            case InputValidatorTypeE.VALIDATOR_TYPE_MAX_LENGTH: {
                if (value.trim().length < validator.value) {
                    return idx;
                }
                break;
            }
            case InputValidatorTypeE.VALIDATOR_TYPE_MIN: {
                if (value < validator.value) {
                    return idx;
                }
                break;
            }
            case InputValidatorTypeE.VALIDATOR_TYPE_MAX: {
                if (value > validator.value) {
                    return idx;
                }
                break;
            }
            case InputValidatorTypeE.VALIDATOR_TYPE_EMAIL: {
                if (!/^\S+@\S+\.\S+$/.test(value)) {
                    return idx;
                }
                break;
            }
        }
    }

    return -1;
};
