import React, { useReducer, useState } from 'react';

import { IonInput, IonItem, IonLabel, IonText, IonTextarea } from '@ionic/react';

import { validate } from '../../../utilities/validators';

import { InputActionI, InputStateI } from '../../../interfaces/inputs';

import classes from './Input.module.css';

const inputInitState: InputStateI = {
    value: '',
    touched: false,
    valid: false,
    error: '',
};

const inputReducer = (state: InputStateI, action: InputActionI) => {
    switch (action.type) {
        case 'BLUR_INPUT': {
            const validators = action.validators || [];
            const validationResult = validate(state.value, validators);
            const error = validationResult !== -1 ? validators[validationResult].msg : '';

            return {
                ...state,
                touched: true,
                valid: validationResult === -1,
                error,
            };
        }
        case 'CHANGE_INPUT': {
            return {
                ...state,
                value: action.value,
            };
        }
        default:
            return state;
    }
};

const FormInput: React.FC<any> = (props) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const [inputState, inputDispatch] = useReducer(inputReducer, inputInitState);

    const inputClassName = `${classes['dra-input']} ${props.className}`;
    const onFocusInput = props.onFocus;
    const onBlurInput = props.onBlur;
    const inputAttributes = { ...props };

    delete inputAttributes?.label;
    delete inputAttributes?.className;
    delete inputAttributes?.onFocus;
    delete inputAttributes?.onBlur;

    let Input = props.inputType === 'textarea' ? IonTextarea : IonInput;

    const focusInputHandler = (e: any) => {
        setIsFocused(true);

        if (onFocusInput) {
            onFocusInput(e);
        }
    };

    const blurInputHandler = (e: any) => {
        setIsFocused(false || !!e.target.value);

        inputDispatch({
            type: 'BLUR_INPUT',
            validators: props.validators,
        });

        if (onBlurInput) {
            onBlurInput(e);
        }
    };

    const changeInputHandler = (e: any) => {
        inputDispatch({
            type: 'CHANGE_INPUT',
            value: e.target.value,
        });
    };

    return (
        <IonItem className={classes['dra-input-container']} color="dark" lines="none">
            {props.label && (
                <IonLabel className={classes['dra-input-label']} color={isFocused ? 'light' : 'dark'} position="floating">
                    {props.label}
                </IonLabel>
            )}

            <Input 
                className={inputClassName} 
                color="dark" 
                {...inputAttributes} 
                onIonFocus={focusInputHandler} 
                onIonBlur={blurInputHandler} 
                onIonChange={changeInputHandler} 
            />

            {inputState.touched && !inputState.valid && (
                <IonText className={classes['dra-input-error']} color="danger">
                    <p>{inputState.error}</p>
                </IonText>
            )}
        </IonItem>
    );
};

export default FormInput;
