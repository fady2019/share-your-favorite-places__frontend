import React from 'react';
import { useDispatch } from 'react-redux';

import { pencil, person, key, calendar } from 'ionicons/icons';

import { uiActions } from '../../../store/slices/ui/ui-slice';

import UserSettingChangeEmailForm from './UserSettingChangeEmail';
import SlidingItemGroup from '../../ui/sliding-item-group/SlidingItemGroup';
import UserSettingChangePasswordForm from './UserSettingChangePasswordForm';

const UserAccountInfo: React.FC<any> = () => {
    const dispatch = useDispatch();

    const changeEmailHandler = () => {
        dispatch(
            uiActions.openAppMapModal({
                isOpen: true,
                title: 'Change Email',
                content: <UserSettingChangeEmailForm />,
            })
        );
    };

    const changePasswordHandler = () => {
        dispatch(
            uiActions.openAppMapModal({
                isOpen: true,
                title: 'Change Password',
                content: <UserSettingChangePasswordForm />,
            })
        );
    };

    const items = [
        {
            id: 'email-item',
            icon: person,
            label: {
                property: 'Email',
                value: 'fady@test.com',
            },
            options: [
                {
                    id: 'change-email-opt',
                    icon: pencil,
                    onClick: changeEmailHandler,
                },
            ],
        },
        {
            id: 'password-item',
            icon: key,
            label: {
                property: 'Password',
                value: '********',
            },
            options: [
                {
                    id: 'change-password-opt',
                    icon: pencil,
                    onClick: changePasswordHandler,
                },
            ],
        },
        {
            id: 'creation-date-item',
            icon: calendar,
            label: {
                property: 'Creation Date',
                value: 'Sep 30, 2022',
            },
        },
    ];

    return <SlidingItemGroup title="Account Information" items={items} />;
};

export default UserAccountInfo;
