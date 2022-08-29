import React from 'react';

import { IonAvatar, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import classes from './AppMenuHeader.module.css';

const AppMenuHeader: React.FC<any> = () => {
    return (
        <IonHeader>
            <IonToolbar color="warning">
                <IonTitle className="ion-text-start">Fady Emad</IonTitle>

                <IonAvatar className={classes['dra-app-menu__user-avatar']} slot="start">
                    <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="user-avatar" />
                </IonAvatar>
            </IonToolbar>
        </IonHeader>
    );
};

export default AppMenuHeader;
