import React from 'react';

import { menuController } from '@ionic/core/components';
import { IonMenu } from '@ionic/react';

import AppMenuHeader from './AppMenuHeader';
import AppMenuContent from './AppMenuContent';

import classes from './AppMenu.module.css';

const AppMenu: React.FC<any> = () => {
    const closeMenuHandler = async () => {
        await menuController.close('app-menu');
    };

    return (
        <IonMenu className={classes['dra-app-menu']} menuId="app-menu" contentId="places-app" side="start">
            <AppMenuHeader onCloseMenu={closeMenuHandler} />

            <AppMenuContent onCloseMenu={closeMenuHandler} />
        </IonMenu>
    );
};

export default AppMenu;
