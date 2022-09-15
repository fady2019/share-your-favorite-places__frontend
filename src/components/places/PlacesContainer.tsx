import React from 'react';

import { IonGrid } from '@ionic/react';

import PlaceList from './PlaceList';
import MiniCardItem from '../ui/card-item/MiniCardItem';

import { PlacesContainerI } from '../../interfaces/places';

const PlacesContainer: React.FC<PlacesContainerI> = (props) => {
    const arePlacesFound = props.places.length > 0;

    return (
        <IonGrid className="ion-padding">
            {arePlacesFound && <PlaceList places={props.places} onDelete={props.onDelete} />}

            {!arePlacesFound && (
                <MiniCardItem>
                    <h2 className="dra-text-bold">There's no places found!</h2>
                </MiniCardItem>
            )}
        </IonGrid>
    );
};

export default PlacesContainer;
