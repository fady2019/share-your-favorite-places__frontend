import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { pencil, codeSlash } from 'ionicons/icons';

import { AppStoreI } from '../../../interfaces/store';
import { uiActions } from '../../../store/slices/ui/ui-slice';

import UserSettingChangeNameForm from './UserSettingChangeNameForm';
import SlidingItemGroup from '../../ui/sliding-item-group/SlidingItemGroup';

const UserPersonalInfo: React.FC<any> = () => {
    const username = useSelector((state: AppStoreI) => state.user.userInfo?.name) || 'user name';
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(uiActions.closeAppModal());
        };
    }, [dispatch]);

    const changeNameHandler = () => {
        dispatch(
            uiActions.openAppModal({
                isOpen: true,
                title: 'Change Name',
                content: <UserSettingChangeNameForm />,
            })
        );
    };

    const items = [
        {
            id: 'name-item',
            icon: codeSlash,
            label: {
                property: 'Name',
                value: username,
            },
            options: [
                {
                    id: 'change-name-opt',
                    icon: pencil,
                    onClick: changeNameHandler,
                },
            ],
        },
    ];

    return <SlidingItemGroup title="Personal Information" items={items} />;
};

export default UserPersonalInfo;
