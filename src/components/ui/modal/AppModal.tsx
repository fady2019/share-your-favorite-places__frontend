import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IonButton, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { close } from 'ionicons/icons';

import { AppStoreI } from '../../../interfaces/store';
import { uiActions } from '../../../store/slices/ui/ui-slice';

import classes from './AppModal.module.css';

const AppModal: React.FC<any> = () => {
    const dispatch = useDispatch();

    const { isOpen, title, content } = useSelector((state: AppStoreI) => state.ui.appModal);

    const closeMapModal = () => {
        dispatch(uiActions.closeAppMapModal());
    };

    return (
        <IonModal isOpen={isOpen} onIonModalWillDismiss={closeMapModal}>
            <IonHeader>
                <IonToolbar color="warning">
                    <IonButton slot="start" fill="clear" color="dark" onClick={closeMapModal}>
                        <IonIcon slot="icon-only" icon={close} />
                    </IonButton>

                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className={classes['dra-app-modal-content']}>{content}</IonContent>
        </IonModal>
    );
};

export default AppModal;
