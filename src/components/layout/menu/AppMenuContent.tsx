import React from 'react';

import { useHistory } from 'react-router-dom';

import { IonButton, IonContent, IonItem, IonLabel, IonList } from '@ionic/react';

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
    {
        id: 'NEW_PLACE_MENU_ITEM',
        label: 'New Places',
        to: '/places/new',
    },
];

const AppMenuContent: React.FC<any> = (props) => {
    const history = useHistory();

    const { onCloseMenu } = props;

    const navigationHandler = (to: string) => {
        history.replace(to);

        onCloseMenu();
    };

    return (
        <IonContent color="dark">
            <DraScrollbar>
                <IonList>
                    {MENU_ITEMS.map((menuItem) => {
                        return (
                            <IonItem
                                button
                                key={menuItem.id}
                                detail
                                color="dark"
                                onClick={navigationHandler.bind(null, menuItem.to)}
                            >
                                <IonLabel>{menuItem.label}</IonLabel>
                            </IonItem>
                        );
                    })}
                </IonList>

                <IonButton
                    className="ion-margin"
                    expand="block"
                    strong={true}
                    color="warning"
                    onClick={onCloseMenu}
                >
                    Close
                </IonButton>
            </DraScrollbar>
        </IonContent>
    );
};

export default AppMenuContent;
