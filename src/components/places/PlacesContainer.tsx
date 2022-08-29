import React, { Fragment, useState } from 'react';

import { IonGrid } from '@ionic/react';

import MapModal from './MapModal';
import PlaceList from './PlaceList';
import DraMiniCard from '../ui/card/DraMiniCard';

import { PlacesContainerI } from '../../interfaces/places';
import { MapModalI } from '../../interfaces/maps';

const DEFAULT_MAP_MODAL: MapModalI = {
    isOpen: false,
    address: '',
    location: {
        lat: 0,
        lng: 0,
    },
};

const PlacesContainer: React.FC<PlacesContainerI> = props => {
    const [mapModal, setMapModal] = useState<MapModalI>(DEFAULT_MAP_MODAL);

    const arePlacesFound = props.places.length > 0;

    const openMapModalHandler = (mapModalMetadata: MapModalI) => {
        setMapModal(mapModalMetadata);
    };

    const closeMapModalHandler = () => {
        setMapModal(DEFAULT_MAP_MODAL);
    };
    
    return <Fragment>
    <MapModal {...mapModal} onClose={closeMapModalHandler} />

    <IonGrid className="ion-padding">
        {arePlacesFound && (
            <PlaceList places={props.places} onOpenMapModal={openMapModalHandler} />
        )}

        {!arePlacesFound && (
            <DraMiniCard>
                <h2 className="dra-text-bold">There's no places found!</h2>
            </DraMiniCard>
        )}
    </IonGrid>
</Fragment>
}

export default PlacesContainer