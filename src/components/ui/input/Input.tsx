import React, { useEffect, useReducer } from 'react';

import { IonInput, IonItem, IonTextarea } from '@ionic/react';

import { InputActionTypeE } from '../../../interfaces/inputs';

import { inputInitState, inputReducer } from './input-utilities';

import InputLabel from '../input-label/InputLabel';
import InputError from '../input-error/InputError';

import classes from './Input.module.css';

const getAttributes = (props: any) => {
    const attributes = { ...props };

    delete attributes?.label;
    delete attributes?.className;
    delete attributes?.onFocus;
    delete attributes?.onIonFocus;
    delete attributes?.onBlur;
    delete attributes?.onIonBlur;
    delete attributes?.onInput;
    delete attributes?.onIonInput;
    delete attributes?.value;
    delete attributes?.valid;

    return attributes;
};

const FormInput: React.FC<any> = (props) => {
    const inputInitialValue = props.value || inputInitState.value;
    const inputInitialValid = props.valid || inputInitState.valid;
    const [inputState, inputDispatch] = useReducer(inputReducer, {
        ...inputInitState,
        value: inputInitialValue,
        valid: inputInitialValid,
    });

    const isInvalid = inputState.touched && !inputState.valid;

    const inputClassName = `${classes['dra-input']} ${props.className} ${
        isInvalid && classes['dra-input--invalid']
    }`;

    const onFocusInput = props.onIonFocus || props.onFocus;
    const onBlurInput = props.onIonBlur || props.onBlur;
    const onEnterInput = props.onIonInput || props.onInput;

    const inputAttributes = getAttributes(props);

    const { onGetInput, name: inputName, id: inputId } = props;
    const { value: inputValue, valid: isInputValid } = inputState;

    useEffect(() => {
        if (onGetInput) {
            onGetInput(inputName || inputId, inputValue, isInputValid);
        }
    }, [onGetInput, inputName, inputId, inputValue, isInputValid]);

    const focusInputHandler = (e: any) => {
        inputDispatch({
            type: InputActionTypeE.FOCUS_INPUT,
        });

        if (onFocusInput) {
            onFocusInput(e);
        }
    };

    const blurInputHandler = (e: any) => {
        inputDispatch({
            type: InputActionTypeE.BLUR_INPUT,
            validators: props.validators,
        });

        if (onBlurInput) {
            onBlurInput(e);
        }
    };

    const enterInputHandler = (e: any) => {
        inputDispatch({
            type: InputActionTypeE.CHANGE_INPUT,
            payload: e.target.value,
        });

        if (onEnterInput) {
            onEnterInput(e);
        }
    };

    const isInputLabelStacked = inputState.focused || !!inputState.valid;

    const inputCommonAttributes = {
        className: inputClassName,
        color: 'dark',
        clearOnEdit: false,
        ...inputAttributes,
        value: inputState.value,
        onIonFocus: focusInputHandler,
        onIonBlur: blurInputHandler,
        onIonInput: enterInputHandler,
    };

    return (
        <IonItem className={classes['dra-input-container']} color="dark" lines="none">
            <InputLabel label={props.label} isInvalid={isInvalid} stacked={isInputLabelStacked} />

            {props.inputType === 'textarea' ? (
                <IonTextarea {...inputCommonAttributes} rows={6} />
            ) : (
                <IonInput {...inputCommonAttributes} />
            )}

            <InputError show={isInvalid} error={inputState.error} />
        </IonItem>
    );
};

export default FormInput;
