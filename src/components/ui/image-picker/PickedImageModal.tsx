import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonModal, IonToolbar } from '@ionic/react';

import { AppStoreI } from '../../../interfaces/store';
import { uiActions } from '../../../store/slices/ui/ui-slice';

import { close } from 'ionicons/icons';

import classes from './PickedImageModal.module.css';

const PickedImageModal: React.FC<any> = (props) => {
    const dispatch = useDispatch();

    const { isOpen, imgSrc } = useSelector((state: AppStoreI) => state.ui.pickedImageModal);

    const closeMapModal = () => {
        dispatch(uiActions.closePickedImageModal());
    };

    return (
        <IonModal isOpen={isOpen} onIonModalWillDismiss={closeMapModal}>
            <IonHeader>
                <IonToolbar color="warning">
                    <IonButton slot="start" fill="clear" color="dark" onClick={closeMapModal}>
                        <IonIcon slot="icon-only" icon={close} />
                    </IonButton>
                </IonToolbar>
            </IonHeader>

            <IonContent className={classes['ion-modal-content']}>
                <div className={classes['dra-modal-container']}>{isOpen && <IonImg src={imgSrc} />}</div>
            </IonContent>
        </IonModal>
    );
};

export default PickedImageModal;
