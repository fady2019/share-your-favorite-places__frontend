import React from 'react';

import { IonAvatar, IonLabel, IonBadge } from '@ionic/react';

import { UserItemI } from '../../interfaces/components/users';

import Card from '../ui/card/DraCard';

import classes from './UserItem.module.css';

const UserItem: React.FC<UserItemI> = (props) => {
    const { id, name, imgURL, placeCount } = props;

    const ionBadgeClasses = `${classes['user-item__places-count']} ion-margin-top`;

    return (
        <Card routerLink={`/${id}/places`}>
            <IonAvatar className={classes['user-item__avatar']} slot="start">
                <img src={imgURL} alt={`${name}-avatar`} />
            </IonAvatar>
            <IonLabel>
                <h2 className="dra-text-bold">{name}</h2>

                <IonBadge className={ionBadgeClasses} color="warning">
                    {placeCount} {placeCount !== 1 ? 'Places' : 'Place'}
                </IonBadge>
            </IonLabel>
        </Card>
    );
};

export default UserItem;
