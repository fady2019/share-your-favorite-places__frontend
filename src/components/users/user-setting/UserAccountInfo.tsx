import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { pencil, person, key, calendar } from 'ionicons/icons';

import { uiActions } from '../../../store/slices/ui/ui-slice';

import UserSettingChangeEmailForm from './UserSettingChangeEmailForm';
import SlidingItemGroup from '../../ui/sliding-item-group/SlidingItemGroup';
import UserSettingChangePasswordForm from './UserSettingChangePasswordForm';
import { AppStoreI } from '../../../interfaces/store';

const UserAccountInfo: React.FC<any> = () => {
    const userEmail = useSelector((state: AppStoreI) => state.user.userInfo?.email) || 'user email';
    const createdAt = useSelector((state: AppStoreI) => state.user.userInfo?.createdAt) || 'creation date';
    const dispatch = useDispatch();

    const changeEmailHandler = () => {
        dispatch(
            uiActions.openAppModal({
                isOpen: true,
                title: 'Change Email',
                content: <UserSettingChangeEmailForm />,
            })
        );
    };

    const changePasswordHandler = () => {
        dispatch(
            uiActions.openAppModal({
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
                value: userEmail,
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
                value: new Date(createdAt).toLocaleDateString(undefined, { dateStyle: 'long' }),
            },
        },
    ];

    return <SlidingItemGroup title="Account Information" items={items} />;
};

export default UserAccountInfo;
