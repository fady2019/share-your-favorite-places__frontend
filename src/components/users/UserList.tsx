import React from 'react';

import { IonGrid, IonRow, IonCol } from '@ionic/react';

import UserItem from './UserItem';
import DraMiniCard from '../ui/card/DraMiniCard';

import { UserListI } from '../../interfaces/components/users';

const UserList: React.FC<UserListI> = (props) => {
    const { users } = props;

    const areUsersFound = users.length > 0;

    return (
        <IonGrid className="ion-padding">
            {areUsersFound && (
                <IonRow>
                    {users.map((user) => (
                        <IonCol key={user.id} sizeXs="12" sizeSm="8" offsetSm="2" sizeMd="4" offsetMd="1.25" sizeLg="3" offsetLg="0.75">
                            <UserItem {...user} />
                        </IonCol>
                    ))}
                </IonRow>
            )}

            {!areUsersFound && (
                <DraMiniCard>
                    <h2 className="dra-text-bold">There's no users found!</h2>
                </DraMiniCard>
            )}
        </IonGrid>
    );
};

export default UserList;
