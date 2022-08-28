import React from 'react';

import { useHistory } from 'react-router-dom';

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
        to: '/u1/places',
    },
];

const AppMenuContent: React.FC<any> = () => {
    const history = useHistory();

    const closeMenuHandler = async () => {
        await menuController.close('app-menu');
    };

    const navigationHandler = (to: string) => {
        history.replace(to);

        closeMenuHandler();
    };

    return (
        <IonContent color="dark">
            <DraScrollbar>
                <IonList mode="ios">
                    {MENU_ITEMS.map((menuItem) => {
                        return (
                            <IonItem button key={menuItem.id} detail color="dark" onClick={navigationHandler.bind(null, menuItem.to)}>
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
