import React from 'react';
import { useDispatch } from 'react-redux';

import { pencil, codeSlash } from 'ionicons/icons';

import { uiActions } from '../../../store/slices/ui/ui-slice';

import UserSettingChangeNameForm from './UserSettingChangeNameForm';
import SlidingItemGroup from '../../ui/sliding-item-group/SlidingItemGroup';

const UserPersonalInfo: React.FC<any> = () => {
    const dispatch = useDispatch();

    const changeNameHandler = () => {
        dispatch(
            uiActions.openAppMapModal({
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
                value: 'Fady Emad',
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
