import React, { FormEvent, Fragment } from 'react';

import { useForm } from '../../hooks/form-hook';

import { IonButton } from '@ionic/react';

import { formInitialState } from './auth-form-utilities';

import { AuthFormI, AuthFormStateInputI, AuthModeE } from '../../interfaces/auth';

import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MIN_LENGTH,
} from '../../utilities/validators';

import FormInput from '../ui/input/Input';
import FormActions from '../shared/FormActions';
import { FormActionTypeE, FormStateI } from '../../interfaces/forms';

const AuthForm: React.FC<AuthFormI> = (props) => {
    const { mode: authMode } = props;

    const { formState, formDispatch, getInputHandler } = useForm<AuthFormStateInputI>(
        formInitialState(authMode)
    );

    const isFormValid = formState.valid;

    const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isFormValid) {
            console.log(formState);
        }
    };

    const switchAuthModeHandler = () => {
        const newState: FormStateI<AuthFormStateInputI> = formInitialState(authMode);

        newState.inputs.email = { ...formState.inputs.email };
        newState.inputs.password = { ...formState.inputs.password };

        if (authMode === AuthModeE.LOGIN) {
            delete newState.inputs.firstName;
            delete newState.inputs.lastName;
            newState.valid = newState.inputs.email.valid && newState.inputs.password.valid;
        }

        formDispatch({
            type: FormActionTypeE.SET_INPUTS,
            payload: newState,
        });
        
        props.onSwitchMode();
    }

    return (
        <form onSubmit={submitFormHandler}>
            {authMode === AuthModeE.SIGN_UP && (
                <Fragment>
                    <FormInput
                        id="firstName"
                        name="firstName"
                        type="text"
                        label="First Name"
                        validators={[VALIDATOR_REQUIRE('First name is required, please enter it!')]}
                        onGetInput={getInputHandler}
                    />

                    <FormInput
                        id="lastName"
                        name="lastName"
                        type="text"
                        label="Last Name"
                        validators={[VALIDATOR_REQUIRE('Last name is required, please enter it!')]}
                        onGetInput={getInputHandler}
                    />
                </Fragment>
            )}

            <FormInput
                id="email"
                name="email"
                type="email"
                label="Email"
                validators={[
                    VALIDATOR_REQUIRE('Email is required, please enter it!'),
                    VALIDATOR_EMAIL('Email is invalid, please enter valid one!'),
                ]}
                onGetInput={getInputHandler}
                focus
            />

            <FormInput
                id="password"
                name="password"
                type="password"
                label="password"
                validators={[
                    VALIDATOR_MIN_LENGTH(
                        8,
                        'Password is too short, please enter at least 8 characters!'
                    ),
                ]}
                onGetInput={getInputHandler}
            />

            <FormActions>
                <IonButton
                    className="dra-form-actions__btn"
                    color="warning"
                    strong
                    type="submit"
                    disabled={!isFormValid}
                >
                    {authMode === AuthModeE.LOGIN ? 'Login' : 'Sign Up'}
                </IonButton>

                <IonButton
                    className="dra-form-actions__btn"
                    color="warning"
                    strong
                    type="button"
                    fill='outline'
                    onClick={switchAuthModeHandler}
                >
                    Switch to {authMode === AuthModeE.LOGIN ? 'Sign Up' : 'Login'}
                </IonButton>
            </FormActions>
        </form>
    );
};

export default AuthForm;
