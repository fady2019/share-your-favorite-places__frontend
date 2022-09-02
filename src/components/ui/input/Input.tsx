import React, { useEffect, useReducer } from 'react';

import { IonInput, IonItem, IonLabel, IonText, IonTextarea } from '@ionic/react';

import { InputActionTypeE } from '../../../interfaces/inputs';

import { inputInitState, inputReducer } from './input-utilities';

import classes from './Input.module.css';

const FormInput: React.FC<any> = (props) => {
    const inputInitialValue = props.value || inputInitState.value;
    const inputInitialValid = props.valid || inputInitState.valid;
    const [inputState, inputDispatch] = useReducer(inputReducer, {
        ...inputInitState, 
        value: inputInitialValue,
        valid: inputInitialValid
    });

    const isInvalid = inputState.touched && !inputState.valid;

    const inputClassName = `${classes['dra-input']} ${props.className} ${isInvalid && classes['dra-input--invalid']}`;

    const onFocusInput = props.onIonFocus || props.onFocus;
    const onBlurInput = props.onIonBlur || props.onBlur;
    const onChangeInput = props.onIonChange || props.onChange;

    const inputAttributes = { ...props };

    delete inputAttributes?.label;
    delete inputAttributes?.className;
    delete inputAttributes?.onFocus;
    delete inputAttributes?.onIonFocus;
    delete inputAttributes?.onBlur;
    delete inputAttributes?.onIonBlur;
    delete inputAttributes?.onChange;
    delete inputAttributes?.onIonChange;
    delete inputAttributes?.value
    delete inputAttributes?.valid

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

    const changeInputHandler = (e: any) => {
        inputDispatch({
            type: InputActionTypeE.CHANGE_INPUT,
            payload: e.target.value,
        });

        if (onChangeInput) {
            onChangeInput(e);
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
        onIonChange: changeInputHandler,
        onIonInput: props.onIonInput || props.onInput,
    };

    return (
        <IonItem className={classes['dra-input-container']} color="dark" lines="none">
            {props.label && (
                <IonLabel
                    className={classes['dra-input-label']}
                    color={isInvalid? 'danger' : isInputLabelStacked ? 'light' : 'medium'}
                    position={isInvalid || isInputLabelStacked? 'stacked' : 'floating'}
                >
                    {props.label}
                </IonLabel>
            )}

            {props.inputType === 'textarea' ? (
                <IonTextarea {...inputCommonAttributes} rows={6} />
            ) : (
                <IonInput {...inputCommonAttributes} />
            )}

            {isInvalid && (
                <IonText className={classes['dra-input-error']} color="danger">
                    <p>{inputState.error || 'You entered an invalid value!'}</p>
                </IonText>
            )}
        </IonItem>
    );
};

export default FormInput;
