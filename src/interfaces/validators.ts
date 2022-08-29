export enum InputValidatorTypeE {
    VALIDATOR_TYPE_REQUIRE,
    VALIDATOR_TYPE_MIN_LENGTH,
    VALIDATOR_TYPE_MAX_LENGTH,
    VALIDATOR_TYPE_MIN,
    VALIDATOR_TYPE_MAX,
    VALIDATOR_TYPE_EMAIL,
    VALIDATOR_TYPE_FILE,
}

export interface InputValidatorI {
    type: InputValidatorTypeE,
    value?: any,
    msg: string
}