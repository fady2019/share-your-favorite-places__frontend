import React from 'react';

import { IonAvatar, IonLabel, IonBadge } from '@ionic/react';

import { UserItemI } from '../../interfaces/users';

import CardItem from '../ui/card-item/CardItem';

import classes from './UserItem.module.css';

import defImg from '../../assets/icons/default-avatar.svg';

const UserItem: React.FC<UserItemI> = (props) => {
    const { id, name, imgURL, placeCount } = props.userInfo;

    const ionBadgeClasses = `${classes['user-item__places-count']} ion-margin-top`;

    return (
        <CardItem routerLink={`/${id}/places`}>
            <IonAvatar className={classes['user-item__avatar']} slot="start">
                <img src={imgURL || defImg} alt={`${name}-avatar`} />
            </IonAvatar>
            <IonLabel>
                <h2 className="dra-text-bold">{name}</h2>

                <IonBadge className={ionBadgeClasses} color="warning">
                    {placeCount} {placeCount !== 1 ? 'Places' : 'Place'}
                </IonBadge>
            </IonLabel>
        </CardItem>
    );
};

export default UserItem;
