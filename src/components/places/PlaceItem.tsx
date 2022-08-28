import React from 'react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { PlaceItemI } from '../../interfaces/components/places';

import PlaceCardActions from './PlaceCardActions';

import classes from './PlaceItem.module.css';

const PLaceItem: React.FC<PlaceItemI> = (props) => {
    const { title, description, imgURL, address, location } = props;

    const openMapModalHandler = () => {
        if (props.onOpenMapModal) {
            props.onOpenMapModal({
                isOpen: true,
                address,
                location,
            });
        }
    };

    return (
        <IonCard className={classes['dra-place-card']} mode="ios">
            <img src={imgURL} alt={`${title}-place`} />

            <IonCardHeader>
                <IonCardSubtitle>{address}</IonCardSubtitle>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>{description}</IonCardContent>

            <PlaceCardActions onOpenMapModal={openMapModalHandler} />
        </IonCard>
    );
};

//className="ion-padding-end"

export default PLaceItem;
