import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IonApp, setupIonicReact } from '@ionic/react';

import { AppStoreI } from './interfaces/store';
import { autoLogin } from './store/slices/auth/auth-slice';

import AppHeader from './components/layout/header/AppHeader';
import AppMain from './components/layout/main/AppMain';
import AppMenu from './components/layout/menu/AppMenu';
import AppAlert from './components/ui/alert/AppAlert';
import AppModal from './components/ui/modal/AppModal';
import AppNotification from './components/ui/notification/Notification';
import AppLoading from './components/ui/loading/Loading';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './App.css';

setupIonicReact({
    mode: 'ios',
});

let initURL: string;

const App: React.FC = () => {
    const isAutoLoginDone = useSelector((state: AppStoreI) => state.auth.isAutoLoginDone);

    const history = useHistory();
    const dispatch = useDispatch();

    if (!initURL) {
        initURL = history.location.pathname;
    }

    useEffect(() => {
        if (isAutoLoginDone) {
            history.replace(initURL);
        }
    }, [isAutoLoginDone, history]);

    useEffect(() => {
        dispatch(autoLogin());
    }, [dispatch]);

    return (
        <Fragment>
            {isAutoLoginDone && <AppMenu />}
            <AppAlert />
            <AppModal />
            <AppNotification />
            <AppLoading />

            <IonApp className="App">
                <AppHeader />
                {isAutoLoginDone && <AppMain />}
            </IonApp>
        </Fragment>
    );
};

export default App;
