import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IonAlert } from '@ionic/react';

import { AppStoreI } from '../../../interfaces/store';
import { uiActions } from '../../../store/slices/ui/ui-slice';

import classes from './AppAlert.module.css';

const AppAlert: React.FC<any> = () => {
    const dispatch = useDispatch();

    const { isOpen, header, message, onClose } = useSelector((state: AppStoreI) => state.ui.appAlert);

    const closeAlertHandler = (confirmation: boolean) => {
        dispatch(uiActions.closeAppAlert());

        if (onClose) {
            onClose(confirmation);
        }
    };

    return (
        <IonAlert
            isOpen={isOpen}
            cssClass={classes['dra-app-alert']}
            header={header}
            message={message}
            buttons={[
                {
                    text: 'No',
                    cssClass: classes['alert-cancellation-btn'],
                    role: 'cancel',
                    handler: closeAlertHandler.bind(null, false),
                },
                {
                    text: 'Yes',
                    cssClass: classes['alert-confirmation-btn'],
                    role: 'delete',
                    handler: closeAlertHandler.bind(null, true),
                },
            ]}
        />
    );
};

export default AppAlert;
