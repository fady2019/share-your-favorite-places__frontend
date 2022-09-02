import React from 'react';

import { useDispatch } from 'react-redux';

import { IonButton, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from '@ionic/react';

import { uiActions } from '../../store/slices/ui/ui-slice'

import { close } from 'ionicons/icons';

import Map from '../map/Map';

import { MapModalI } from '../../interfaces/maps';

const MapModal: React.FC<MapModalI> = (props) => {
    const dispatch = useDispatch();

    const { address, location, isOpen } = props;

    const closeMapModal = () => {
        dispatch(uiActions.closePlaceMapModal())
    }

    return (
        <IonModal isOpen={props.isOpen} onIonModalWillDismiss={closeMapModal}>
            <IonHeader>
                <IonToolbar color="warning">
                    <IonButton slot="start" fill="clear" color="dark" onClick={closeMapModal}>
                        <IonIcon slot="icon-only" icon={close} />
                    </IonButton>

                    <IonTitle>{props.address}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                {isOpen && <Map address={address} location={location} zoom={13} />}
            </IonContent>
        </IonModal>
    );
};

export default MapModal;
