import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';

import { IonContent, IonRouterOutlet } from '@ionic/react';

import { AppStoreI } from '../../../interfaces/store';

import Users from '../../../pages/users/Users';
import UserSetting from '../../../pages/users/UserSetting';
import UserPlaces from '../../../pages/places/UserPlaces';
import NewPlace from '../../../pages/places/NewPlace';
import UpdatePlace from '../../../pages/places/UpdatePlace';
import Auth from '../../../pages/auth/Auth';
import Page404 from '../../../pages/404/Page404';

import DraScrollbar from '../../ui/scrollbar/DraScrollbar';
import DraAppRefresher from '../../ui/refresher/DraAppRefresher';

const AppMain: React.FC = (props) => {
    const authToken = useSelector((state: AppStoreI) => state.auth.token);
    const isAuth = !!authToken && !!authToken.id;

    return (
        <IonContent className="ion-padding" color="dark">
            <DraAppRefresher />

            <IonRouterOutlet id="places-app">
                <DraScrollbar>
                    <Switch>
                        <Route exact path="/users">
                            <Users />
                        </Route>
                        <Route exact path="/user/setting">
                            {isAuth ? <UserSetting /> : <Redirect to="/auth" />}
                        </Route>
                        <Route exact path="/:userId/places">
                            <UserPlaces />
                        </Route>
                        <Route exact path="/places/new">
                            {isAuth ? <NewPlace /> : <Redirect to="/auth" />}
                        </Route>
                        <Route exact path="/places/:placeId">
                            {isAuth ? <UpdatePlace /> : <Redirect to="/auth" />}
                        </Route>
                        <Route exact path="/auth">
                            {!isAuth ? <Auth /> : <Redirect to="/" />}
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/users" />
                        </Route>
                        <Route path="/404">
                            <Page404 />
                        </Route>
                        <Route path="*">
                            <Redirect to="/404" />
                        </Route>
                    </Switch>
                </DraScrollbar>
            </IonRouterOutlet>
        </IonContent>
    );
};

export default AppMain;
