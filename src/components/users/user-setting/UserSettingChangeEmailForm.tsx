import React, { FormEvent } from 'react';

import { useForm } from '../../../hooks/form-hook';
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
    const initEmail = 'fady@test.com';

    const { formState, getInputHandler } = useForm<ChangeEmailFormI>(formInitState(initEmail));

    const isFormValid = formState.valid;
    const isChanged = formState.inputs.email.value.trim() !== initEmail;

    const changeNameHandler = (e: FormEvent) => {
        e.preventDefault();

        console.log(formState);
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
                validators={[
                    VALIDATOR_REQUIRE('Password is required, please enter it!'),
                ]}
                onGetInput={getInputHandler}
            />
        </UserSettingForm>
    );
};

export default UserSettingChangeEmailForm;
