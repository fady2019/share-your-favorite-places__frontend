import React from 'react';

import { IonAlert } from '@ionic/react';

import { DeletePlaceAlertI } from '../../interfaces/places';

import './DeletePlaceAlert.css';

const DeletePlaceAlert: React.FC<DeletePlaceAlertI> = (props) => {
    return (
        <IonAlert
            isOpen={props.isOpen}
            cssClass={'dra-delete-place-alert'}
            header={'Are you sure?'}
            message={'That you want to delete this place.'}
            buttons={[
                {
                    text: 'No',
                    cssClass: 'delete-cancellation-btn',
                    role: 'cancel',
                    handler: () => {
                        props.onClose(false, props.placeId);
                    },
                },
                {
                    text: 'Yes',
                    cssClass: 'delete-confirmation-btn',
                    role: 'delete',
                    handler: () => {
                        props.onClose(true, props.placeId);
                    },
                },
            ]}
        />
    );
};

export default DeletePlaceAlert;
