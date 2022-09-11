import React from 'react';

import { IonGrid } from '@ionic/react';

import UserList from './UserList';

import MiniCardItem from '../ui/card-item/MiniCardItem';

import { UsersContainerI } from '../../interfaces/users';

const UsersContainer: React.FC<UsersContainerI> = (props) => {
    const { users } = props;
    
    const areUsersFound = users.length > 0;

    return (
        <IonGrid className="ion-padding">
            {areUsersFound && (
                <UserList users={users}  />
            )}

            {!areUsersFound && (
                <MiniCardItem>
                    <h2 className="dra-text-bold">There's no users found!</h2>
                </MiniCardItem>
            )}
        </IonGrid>
    );
};

export default UsersContainer;
