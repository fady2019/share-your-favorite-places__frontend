import React from 'react';

import { Link } from 'react-router-dom';

import { IonAvatar, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import classes from './AppMenuHeader.module.css';

import defaultAvatar from '../../../assets/icons/default-avatar.svg';

const AppMenuHeader: React.FC<any> = (props) => {
    const { onCloseMenu } = props;

    return (
        <IonHeader>
            <IonToolbar color="warning">
                <Link
                    className={classes['dra-app-menu__header-link']}
                    to="/auth"
                    onClick={onCloseMenu}
                >
                    <IonTitle className="ion-text-start">Join Us</IonTitle>

                    <IonAvatar className={classes['dra-app-menu__user-avatar']} slot="start">
                        <img src={defaultAvatar} alt="user-avatar" />
                    </IonAvatar>
                </Link>
            </IonToolbar>
        </IonHeader>
    );
};

export default AppMenuHeader;
