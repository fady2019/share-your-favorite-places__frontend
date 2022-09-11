import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IonToast } from '@ionic/react';
import { close } from 'ionicons/icons';

import { AppStoreI } from '../../../interfaces/store';
import { uiActions } from '../../../store/slices/ui/ui-slice';

import classes from './Notification.module.css';

const AppNotification: React.FC<any> = () => {
    const { isOpen, hasError, message } = useSelector((state: AppStoreI) => state.ui.appNotification);
    const dispatch = useDispatch();

    const closeNotificationHandler = () => {
        dispatch(uiActions.closeAppNotification());
    };

    return (
        <IonToast
            cssClass={classes['dra-app-notification']}
            isOpen={isOpen}
            message={message}
            color={hasError ? 'danger' : 'success'}
            position={'bottom'}
            duration={10000}
            onWillDismiss={closeNotificationHandler}
            buttons={[
                {
                    role: 'cancel',
                    icon: close,
                },
            ]}
        />
    );
};

export default AppNotification;
