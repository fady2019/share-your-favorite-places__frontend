import React from 'react';

import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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

const App: React.FC = () => (
    <IonReactRouter>
        <AppMenu />
        <AppAlert />
        <AppModal />
        <AppNotification />
        <AppLoading />

        <IonApp className="App">
            <AppHeader />

            <AppMain />
        </IonApp>
    </IonReactRouter>
);

export default App;
