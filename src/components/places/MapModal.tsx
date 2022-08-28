import React from 'react';

import { IonButton, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { close } from 'ionicons/icons';

import Map from '../map/Map';

import { MapModalI } from '../../interfaces/components/maps';

import classes from './MapModal.module.css';

const MapModal: React.FC<MapModalI> = (props) => {
    const { address, location, isOpen } = props;

    const mapModalContent = `${classes['dra-map-modal-content']} ion-padding`;

    return (
        <IonModal mode="ios" isOpen={props.isOpen} onIonModalWillDismiss={props.onClose}>
            <IonHeader>
                <IonToolbar color="warning">
                    <IonButton slot="start" fill="clear" color="dark" onClick={props.onClose}>
                        <IonIcon slot="icon-only" icon={close} />
                    </IonButton>

                    <IonTitle>{props.address}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className={mapModalContent}>
                {isOpen && <Map address={address} location={location} zoom={13} />}
            </IonContent>
        </IonModal>
    );
};

export default MapModal;
