import React from 'react';

import { IonMenu } from '@ionic/react';

import AppMenuHeader from './AppMenuHeader';
import AppMenuContent from './AppMenuContent';

import classes from './AppMenu.module.css';

const AppMenu: React.FC<any> = () => {
    return (
        <IonMenu className={classes['dra-app-menu']} menuId="app-menu" contentId="places-app" side="start">
            <AppMenuHeader />

            <AppMenuContent />
        </IonMenu>
    );
};

export default AppMenu;
