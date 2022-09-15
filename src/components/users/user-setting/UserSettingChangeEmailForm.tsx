import React, { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../../hooks/form-hook';
import useHttp from '../../../hooks/http-hook';
import { login } from '../../../store/slices/auth/auth-slice';
import { uiActions } from '../../../store/slices/ui/ui-slice';
import { AppStoreI } from '../../../interfaces/store';
import { ChangeEmailFormI } from '../../../interfaces/user-setting';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../../utilities/validators';

import UserSettingForm from './UserSettingForm';
import FormInput from '../../ui/input/Input';

const formInitState = (initEmail: string = '') => {
    return {
        inputs: {
            email: {
                value: initEmail,
                valid: true,
            },
            password: {
                value: '',
                valid: false,
            },
        },
        valid: false,
    };
};

const UserSettingChangeEmailForm: React.FC<any> = () => {
    const initEmail = useSelector((state: AppStoreI) => state.user.userInfo?.email) || 'user email';
    const token = useSelector((state: AppStoreI) => state.auth.token);
    const dispatch = useDispatch();

    const { request, response } = useHttp();
    const { formState, getInputHandler } = useForm<ChangeEmailFormI>(formInitState(initEmail));

    const isFormValid = formState.valid;
    const isChanged = formState.inputs.email.value.trim() !== initEmail;

    const backendURL = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        if (response) {
            dispatch(login(response));
            dispatch(uiActions.closeAppModal());
        }
    }, [response, dispatch]);

    const changeNameHandler = (e: FormEvent) => {
        e.preventDefault();

        if (isFormValid) {
            const reqURL = `${backendURL}/users/change/email`;

            request(reqURL, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token?.id}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    newEmail: formState.inputs.email.value,
                    password: formState.inputs.password.value,
                }),
            });
        }
    };

    return (
        <UserSettingForm onSubmit={changeNameHandler} disabled={!isFormValid || !isChanged}>
            <FormInput
                id="email"
                name="email"
                type="email"
                label="Email"
                value={initEmail}
                valid={true}
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
                label="password"
                validators={[VALIDATOR_REQUIRE('Password is required, please enter it!')]}
                onGetInput={getInputHandler}
            />
        </UserSettingForm>
    );
};

export default UserSettingChangeEmailForm;
