import React, { FormEvent } from 'react';
import { useSelector } from 'react-redux';

import { useForm } from '../../../hooks/form-hook';
import { ChangeNameFormI } from '../../../interfaces/user-setting';
import { AppStoreI } from '../../../interfaces/store';
import { VALIDATOR_REQUIRE } from '../../../utilities/validators';
import UserSettingForm from './UserSettingForm';
import FormInput from '../../ui/input/Input';

const formInitState = (initName: string = '') => {
    return {
        inputs: {
            name: {
                value: initName,
                valid: true,
            },
        },
        valid: false,
    };
};

const UserSettingChangeNameForm: React.FC<any> = () => {
    const initName = useSelector((state: AppStoreI) => state.user.userInfo?.name) || 'user name';

    const { formState, getInputHandler } = useForm<ChangeNameFormI>(formInitState(initName));

    const isFormValid = formState.valid;
    const isChanged = formState.inputs.name.value.trim() !== initName;

    const changeNameHandler = (e: FormEvent) => {
        e.preventDefault();

        console.log(formState);
    };

    return (
        <UserSettingForm onSubmit={changeNameHandler} disabled={!isFormValid || !isChanged}>
            <FormInput
                id="name"
                name="name"
                type="text"
                label="Name"
                value={initName}
                valid={true}
                validators={[VALIDATOR_REQUIRE('Name is required, please enter it!')]}
                onGetInput={getInputHandler}
            />
        </UserSettingForm>
    );
};

export default UserSettingChangeNameForm;
