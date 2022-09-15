import React, { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../../hooks/form-hook';
import useHttp from '../../../hooks/http-hook';
import { uiActions } from '../../../store/slices/ui/ui-slice';
import { userActions } from '../../../store/slices/user/user-slice';
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
    const token = useSelector((state: AppStoreI) => state.auth.token);
    const dispatch = useDispatch();

    const { request, response } = useHttp();
    const { formState, getInputHandler } = useForm<ChangeNameFormI>(formInitState(initName));

    const isFormValid = formState.valid;
    const isChanged = formState.inputs.name.value.trim() !== initName;

    const backendURL = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        if (response) {
            dispatch(userActions.setUserInfo(response.user));
            dispatch(uiActions.closeAppModal());
        }
    }, [response, dispatch]);

    const changeNameHandler = (e: FormEvent) => {
        e.preventDefault();

        if (isFormValid) {
            const reqURL = `${backendURL}/users/change/name`;

            request(reqURL, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token?.id}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formState.inputs.name.value,
                }),
            });
        }
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
