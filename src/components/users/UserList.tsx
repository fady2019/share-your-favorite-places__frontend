import React from 'react';

import { IonRow, IonCol } from '@ionic/react';

import UserItem from './UserItem';

import { UserItemI, UserListI } from '../../interfaces/users';

const UserList: React.FC<UserListI> = (props) => {
    const { users } = props;

    return (
        <IonRow>
            {users.map((userInfo) => {
                const user: UserItemI = {
                    userInfo,
                };

                return (
                    <IonCol
                        key={user.userInfo.id}
                        sizeXs="12"
                        sizeSm="8"
                        offsetSm="2"
                        sizeMd="5"
                        offsetMd="0.667"
                        sizeLg="3.8"
                        offsetLg="0.15"
                    >
                        <UserItem {...user} />
                    </IonCol>
                );
            })}
        </IonRow>
    );
};

export default UserList;
