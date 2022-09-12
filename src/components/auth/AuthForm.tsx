import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { useForm } from '../../hooks/form-hook';
import { authActions } from '../../store/slices/auth/auth-slice';

import { IonButton } from '@ionic/react';

import { formInitialState } from './auth-form-utilities';

import { AuthFormI, AuthFormStateInputI, AuthModeE } from '../../interfaces/auth';

import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MIN_LENGTH } from '../../utilities/validators';

import FormInput from '../ui/input/Input';
import FormActions from '../shared/FormActions';
import { FormActionTypeE, FormStateI } from '../../interfaces/forms';

const AuthForm: React.FC<AuthFormI> = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { mode: authMode } = props;

    const { formState, formDispatch, getInputHandler } = useForm<AuthFormStateInputI>(
        formInitialState(authMode)
    );

    const isFormValid = formState.valid;

    const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isFormValid) {
            dispatch(authActions.login());
            history.replace('/');
        }
    };

    const switchAuthModeHandler = () => {
        const newState: FormStateI<AuthFormStateInputI> = formInitialState(authMode);

        newState.inputs.email = { ...formState.inputs.email };
        newState.inputs.password = { ...formState.inputs.password };

        // if the current mode is sign up then we will switch to login mode
        if (authMode === AuthModeE.SIGN_UP) {
            delete newState.inputs.name;
            newState.valid = newState.inputs.email.valid && newState.inputs.password.valid;
        }

        formDispatch({
            type: FormActionTypeE.SET_INPUTS,
            payload: newState,
        });

        dispatch(authActions.switchAuthMode());
    };

    return (
        <form onSubmit={submitFormHandler}>
            {authMode === AuthModeE.SIGN_UP && (
                <FormInput
                    id="name"
                    name="name"
                    type="text"
                    label="Name"
                    validators={[VALIDATOR_REQUIRE('Name is required, please enter it!')]}
                    onGetInput={getInputHandler}
                />
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
            />

            <FormInput
                id="password"
                name="password"
                type="password"
                label="Password"
                validators={[
                    VALIDATOR_MIN_LENGTH(8, 'Password is too short, please enter at least 8 characters!'),
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
                    fill="outline"
                    onClick={switchAuthModeHandler}
                >
                    Switch to {authMode === AuthModeE.LOGIN ? 'Sign Up' : 'Login'}
                </IonButton>
            </FormActions>
        </form>
    );
};

export default AuthForm;
