import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { uiActions } from '../../store/slices/ui/ui-slice';

import { PlaceItemI } from '../../interfaces/places';

import PlaceCardActions from './PlaceCardActions';

import ImageModalContent from '../shared/image-modal/ImageModalContent';
import Card from '../ui/card/Card';
import Map from '../map/Map';

import classes from './PlaceItem.module.css';

const PLaceItem: React.FC<PlaceItemI> = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { id, title, description, imgURL, address, location, creator } = props.placeInfo;

    useEffect(() => {
        return () => {
            dispatch(uiActions.closeAppModal());
            dispatch(uiActions.closeAppAlert());
        };
    }, [dispatch]);

    const openPlaceImageModalHandler = () => {
        dispatch(
            uiActions.openAppModal({
                isOpen: true,
                title: title,
                content: <ImageModalContent image={imgURL} />,
            })
        );
    };

    const openPlaceMapModalHandler = () => {
        dispatch(
            uiActions.openAppModal({
                isOpen: true,
                title: address,
                content: <Map address={address} location={location} zoom={13} />,
            })
        );
    };

    const editPlaceHandler = () => {
        history.push('/places/' + id);
    };

    const closeAlertHandler = (confirmation: boolean) => {
        if (confirmation) {
            props.onDelete(id);
        }
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
            <img
                className={classes['dra-place-card__place-image']}
                src={imgURL}
                alt={`${title}-place`}
                onClick={openPlaceImageModalHandler}
            />

            <IonCardHeader>
                <IonCardSubtitle>{address}</IonCardSubtitle>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>{description}</IonCardContent>

            <PlaceCardActions
                creator={creator}
                onOpenPlaceMapModal={openPlaceMapModalHandler}
                onEditPlace={editPlaceHandler}
                onOpenPlaceDeletionAlert={OpenPlaceDeletionAlertHandler}
            />
        </Card>
    );
};

export default PLaceItem;
