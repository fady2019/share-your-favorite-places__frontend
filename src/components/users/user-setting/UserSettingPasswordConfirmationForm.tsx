import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../../../hooks/form-hook';
import { PasswordConfirmationFormI } from '../../../interfaces/user-setting';
import { VALIDATOR_REQUIRE } from '../../../utilities/validators';
import UserSettingForm from './UserSettingForm';
import FormInput from '../../ui/input/Input';
import { uiActions } from '../../../store/slices/ui/ui-slice';

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
    const dispatch = useDispatch();

    const { formState, getInputHandler } = useForm<PasswordConfirmationFormI>(formInitState);

    const isFormValid = formState.valid;

    const closeAccountDeletionAlertHandler = (confirmation: boolean) => {
        if (confirmation && isFormValid) {
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
