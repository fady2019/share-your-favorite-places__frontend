import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { uiActions } from '../../store/slices/ui/ui-slice';

import { PlaceItemI } from '../../interfaces/places';

import PlaceCardActions from './PlaceCardActions';

import Card from '../ui/card/Card';
import Map from '../map/Map';

const PLaceItem: React.FC<PlaceItemI> = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { id, title, description, imgURL, address, location } = props.placeInfo;

    const openPlaceMapModalHandler = () => {
        dispatch(
            uiActions.openAppModal({
                isOpen: true,
                title: address,
                content: <Map address={address} location={location} zoom={13} />
            })
        );
    };

    const editPlaceHandler = () => {
        history.push('/places/' + id);
    };

    const closeAlertHandler = (confirmation: boolean) => {
        console.log(confirmation);
    };

    const OpenPlaceDeletionAlertHandler = () => {
        dispatch(
            uiActions.openAppAlert({
                isOpen: true,
                header: 'Are you sure?',
                message: 'that you want to delete this place.',
                onClose: closeAlertHandler,
            })
        );
    };

    return (
        <Card>
            <img src={imgURL} alt={`${title}-place`} />

            <IonCardHeader>
                <IonCardSubtitle>{address}</IonCardSubtitle>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>{description}</IonCardContent>

            <PlaceCardActions
                onOpenPlaceMapModal={openPlaceMapModalHandler}
                onEditPlace={editPlaceHandler}
                onOpenPlaceDeletionAlert={OpenPlaceDeletionAlertHandler}
            />
        </Card>
    );
};

export default PLaceItem;
