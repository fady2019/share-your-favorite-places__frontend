import React from 'react';

import { IonButton, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { close } from 'ionicons/icons';

import Map from '../map/Map';

import { MapModalI } from '../../interfaces/maps';

const MapModal: React.FC<MapModalI> = (props) => {
    const { address, location, isOpen } = props;

    return (
        <IonModal isOpen={props.isOpen} onIonModalWillDismiss={props.onClose}>
            <IonHeader>
                <IonToolbar color="warning">
                    <IonButton slot="start" fill="clear" color="dark" onClick={props.onClose}>
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
