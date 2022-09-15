import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IonButton, IonContent, IonItem, IonLabel, IonList } from '@ionic/react';

import { logout } from '../../../store/slices/auth/auth-slice';
import { AppStoreI } from '../../../interfaces/store';

import DraScrollbar from '../../ui/scrollbar/DraScrollbar';

const MENU_ITEMS = [
    {
        id: 'USER_MENU_ITEM',
        label: 'All Users',
        to: '/users',
        needAuth: false,
    },
    {
        id: 'PLACES_MENU_ITEM',
        label: 'My Places',
        to: '/u1/places',
        needAuth: true,
    },
    {
        id: 'NEW_PLACE_MENU_ITEM',
        label: 'New Places',
        to: '/places/new',
        needAuth: true,
    },
];

const AppMenuContent: React.FC<any> = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const authToken = useSelector((state: AppStoreI) => state.auth.token);
    const isAuth = !!authToken && !!authToken.id;

    const { onCloseMenu } = props;

    const navigationHandler = (to: string) => {
        history.replace(to);
        onCloseMenu();
    };

    const logoutHandler = () => {
        dispatch(logout());
        navigationHandler('/');
    };

    return (
        <IonContent color="dark">
            <DraScrollbar>
                <IonList>
                    {MENU_ITEMS.map((menuItem) => {
                        if (menuItem.needAuth && !isAuth) {
                            return null;
                        }

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

                {isAuth && (
                    <IonButton
                        className="ion-margin"
                        expand="block"
                        strong
                        color="warning"
                        fill="outline"
                        type="button"
                        onClick={logoutHandler}
                    >
                        Logout
                    </IonButton>
                )}

                <IonButton className="ion-margin" expand="block" strong color="warning" onClick={onCloseMenu}>
                    Close
                </IonButton>
            </DraScrollbar>
        </IonContent>
    );
};

export default AppMenuContent;
