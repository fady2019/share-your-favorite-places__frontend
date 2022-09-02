import React from 'react';

import { useDispatch } from 'react-redux';

import { IonAlert } from '@ionic/react';

import { uiActions } from '../../store/slices/ui/ui-slice';

import { DeletePlaceAlertI } from '../../interfaces/places';

import './DeletePlaceAlert.css';

const DeletePlaceAlert: React.FC<DeletePlaceAlertI> = (props) => {
    const dispatch = useDispatch();

    const closeAlertHandler = () => {
        dispatch(uiActions.closePlaceDeletionAlert())
    }

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
                    handler: closeAlertHandler,
                },
                {
                    text: 'Yes',
                    cssClass: 'delete-confirmation-btn',
                    role: 'delete',
                    handler: closeAlertHandler,
                },
            ]}
        />
    );
};

export default DeletePlaceAlert;
