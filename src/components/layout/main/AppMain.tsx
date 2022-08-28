import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { IonContent, IonRouterOutlet } from '@ionic/react';

import Users from '../../../pages/users/Users';
import UserPlaces from '../../../pages/places/UserPlaces';
import NewPlace from '../../../pages/places/NewPlace';

import DraScrollbar from '../../ui/scrollbar/DraScrollbar';

const AppMain: React.FC = (props) => {
    return (
        <IonContent className="ion-padding" color="dark">
            <IonRouterOutlet id="places-app">
                <DraScrollbar>
                    <Switch>
                        <Route exact path="/users">
                            <Users />
                        </Route>
                        <Route exact path="/:userId/places">
                            <UserPlaces />
                        </Route>
                        <Route exact path="/places/new">
                            <NewPlace />
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/users" />
                        </Route>
                        <Route path="*">
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </DraScrollbar>
            </IonRouterOutlet>
        </IonContent>
    );
};

export default AppMain;
