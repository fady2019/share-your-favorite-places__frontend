import React, { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../../hooks/form-hook';
import useHttp from '../../../hooks/http-hook';
import { userActions } from '../../../store/slices/user/user-slice';
import { uiActions } from '../../../store/slices/ui/ui-slice';
import { AppStoreI } from '../../../interfaces/store';
import { ChangePasswordFormI } from '../../../interfaces/user-setting';
import { VALIDATOR_MIN_LENGTH, VALIDATOR_REQUIRE } from '../../../utilities/validators';
import UserSettingForm from './UserSettingForm';
import FormInput from '../../ui/input/Input';

const formInitState = {
    inputs: {
        newPassword: {
            value: '',
            valid: false,
        },
        password: {
            value: '',
            valid: false,
        },
    },
    valid: false,
};

const UserSettingChangePasswordForm: React.FC<any> = () => {
    const token = useSelector((state: AppStoreI) => state.auth.token);
    const dispatch = useDispatch();

    const { request, response } = useHttp();
    const { formState, getInputHandler } = useForm<ChangePasswordFormI>(formInitState);

    const isFormValid = formState.valid;

    const backendURL = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        if (response) {
            dispatch(userActions.setUserInfo(response.user));
            dispatch(uiActions.closeAppModal())
        }
    }, [response, dispatch]);

    const changeNameHandler = (e: FormEvent) => {
        e.preventDefault();

        if (isFormValid) {
            const reqURL = `${backendURL}/users/change/password`;

            request(reqURL, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token?.id}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: formState.inputs.password.value,
                    newPassword: formState.inputs.newPassword.value,
                }),
            });
        }
    };

    return (
        <UserSettingForm onSubmit={changeNameHandler} disabled={!isFormValid}>
            <FormInput
                id="newPassword"
                name="newPassword"
                type="password"
                label="New Password"
                validators={[
                    VALIDATOR_MIN_LENGTH(8, 'Password is too short, please enter at least 8 characters!'),
                ]}
                onGetInput={getInputHandler}
            />

            <FormInput
                id="password"
                name="password"
                type="password"
                label="Password"
                validators={[VALIDATOR_REQUIRE('Password is required, please enter it!')]}
                onGetInput={getInputHandler}
            />
        </UserSettingForm>
    );
};

export default UserSettingChangePasswordForm;
