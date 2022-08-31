import React from 'react';

import { IonRefresher, IonRefresherContent } from '@ionic/react';

import classes from './DraAppRefresher.module.css';

const DraAppRefresher: React.FC<any> = (props) => {
    const appRefresherHandler = () => {
        window.location.reload();
    };

    return (
        <IonRefresher slot="fixed" onIonRefresh={appRefresherHandler}>
            <IonRefresherContent className={classes['dra-app-refresher-content']}></IonRefresherContent>
        </IonRefresher>
    );
};

export default DraAppRefresher;
