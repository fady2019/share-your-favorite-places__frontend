import React, { FormEvent, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../../hooks/form-hook';
import useHttp from '../../../hooks/http-hook';
import { logout } from '../../../store/slices/auth/auth-slice';
import { uiActions } from '../../../store/slices/ui/ui-slice';
import FormInput from '../../ui/input/Input';
import { AppStoreI } from '../../../interfaces/store';
import { PasswordConfirmationFormI } from '../../../interfaces/user-setting';
import { VALIDATOR_REQUIRE } from '../../../utilities/validators';
import UserSettingForm from './UserSettingForm';

const formInitState = {
    inputs: {
        password: {
            value: '',
            valid: false,
        },
    },
    valid: false,
};

const UserSettingPasswordConfirmationForm: React.FC<any> = () => {
    const token = useSelector((state: AppStoreI) => state.auth.token);
    const dispatch = useDispatch();
    const history = useHistory();
    const { request, response } = useHttp();
    const { formState, getInputHandler } = useForm<PasswordConfirmationFormI>(formInitState);

    const isFormValid = formState.valid;

    const backendURL = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        return () => {
            dispatch(uiActions.closeAppAlert());
        };
    }, [dispatch]);

    useEffect(() => {
        if (response) {
            history.replace('/');
            dispatch(logout());
            dispatch(uiActions.closeAppModal());
        }
    }, [response, dispatch, history]);

    const closeAccountDeletionAlertHandler = (confirmation: boolean) => {
        if (confirmation && isFormValid) {
            const reqURL = `${backendURL}/users/delete`;

            request(reqURL, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token?.id}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: formState.inputs.password.value,
                }),
            });
        }
    };

    const changeNameHandler = (e: FormEvent) => {
        e.preventDefault();

        if (isFormValid) {
            dispatch(
                uiActions.openAppAlert({
                    isOpen: true,
                    header: 'Are you sure?',
                    message: 'that you want to delete your account.',
                    onClose: closeAccountDeletionAlertHandler,
                })
            );
        }
    };

    return (
        <UserSettingForm onSubmit={changeNameHandler} disabled={!isFormValid} btnLabel="Confirm">
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

export default UserSettingPasswordConfirmationForm;
