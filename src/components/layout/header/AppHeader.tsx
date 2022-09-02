import React from 'react';

import { IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

import classes from './AppHeader.module.css';

const AppHeader: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar color="warning">
                <IonTitle>Favorite Places</IonTitle>

                <IonMenuButton
                    className={classes['dra-menu-btn']}
                    menu="app-menu"
                    autoHide={false}
                    slot="start"
                    color="dark"
                    mode="md"
                />
            </IonToolbar>
        </IonHeader>
    );
};

export default AppHeader;
