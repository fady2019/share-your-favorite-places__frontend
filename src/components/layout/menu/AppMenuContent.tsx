import React from 'react';

import { IonButton, IonContent, IonItem, IonLabel, IonList } from '@ionic/react';
import { menuController } from '@ionic/core/components';

import DraScrollbar from '../../ui/scrollbar/DraScrollbar';

const MENU_ITEMS = [
    {
        id: 'USER_MENU_ITEM',
        label: 'All Users',
        to: '/users',
    },
    {
        id: 'PLACES_MENU_ITEM',
        label: 'My Places',
        to: '/places',
    },
];

const AppMenuContent: React.FC<any> = () => {
    const closeMenuHandler = async () => {
        await menuController.close('app-menu');
    };

    return (
        <IonContent color="dark">
            <DraScrollbar>
                <IonList mode="ios">
                    {MENU_ITEMS.map((menuItem) => {
                        return (
                            <IonItem key={menuItem.id} routerLink={menuItem.to} color="dark" onClick={closeMenuHandler}>
                                <IonLabel>{menuItem.label}</IonLabel>
                            </IonItem>
                        );
                    })}
                </IonList>

                <IonButton className="ion-margin" expand="block" strong={true} color="warning" onClick={closeMenuHandler}>
                    Close
                </IonButton>
            </DraScrollbar>
        </IonContent>
    );
};

export default AppMenuContent;
