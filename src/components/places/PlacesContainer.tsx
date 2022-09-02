import React, { Fragment } from 'react';

import { useSelector } from 'react-redux';

import { IonGrid } from '@ionic/react';

import MapModal from './MapModal';
import DeletePlaceAlert from './DeletePlaceAlert';
import PlaceList from './PlaceList';
import DraMiniCard from '../ui/card/DraMiniCard';

import { AppStoreI } from '../../interfaces/store';
import { PlacesContainerI } from '../../interfaces/places';

const PlacesContainer: React.FC<PlacesContainerI> = (props) => {
    const mapModal = useSelector((state: AppStoreI) => state.ui.placeMapModal);

    const deletionAlert = useSelector((state: AppStoreI) => state.ui.placeDeletionAlert);

    const arePlacesFound = props.places.length > 0;

    return (
        <Fragment>
            <MapModal {...mapModal} />

            <DeletePlaceAlert {...deletionAlert} />

            <IonGrid className="ion-padding">
                {arePlacesFound && <PlaceList places={props.places} />}

                {!arePlacesFound && (
                    <DraMiniCard>
                        <h2 className="dra-text-bold">There's no places found!</h2>
                    </DraMiniCard>
                )}
            </IonGrid>
        </Fragment>
    );
};

export default PlacesContainer;
