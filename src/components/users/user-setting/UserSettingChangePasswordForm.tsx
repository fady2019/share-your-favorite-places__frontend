import React, { FormEvent } from 'react';

import { useForm } from '../../../hooks/form-hook';
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
    const { formState, getInputHandler } = useForm<ChangePasswordFormI>(formInitState);

    const isFormValid = formState.valid;

    const changeNameHandler = (e: FormEvent) => {
        e.preventDefault();

        console.log(formState);
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
                validators={[
                    VALIDATOR_REQUIRE('Password is required, please enter it!'),
                ]}
                onGetInput={getInputHandler}
            />
        </UserSettingForm>
    );
};

export default UserSettingChangePasswordForm;
