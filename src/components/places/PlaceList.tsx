import React, { Fragment, useState } from 'react';

import { IonCol, IonGrid, IonRow } from '@ionic/react';

import MapModal from './MapModal';

import PLaceItem from './PlaceItem';
import DraMiniCard from '../ui/card/DraMiniCard';

import { PlaceListI } from '../../interfaces/components/places';
import { MapModalI } from '../../interfaces/components/maps';

const DEFAULT_MAP_MODAL: MapModalI = {
    isOpen: false,
    address: '',
    location: {
        lat: 0,
        lng: 0,
    },
};

const PlaceList: React.FC<PlaceListI> = (props) => {
    const [mapModal, setMapModal] = useState<MapModalI>(DEFAULT_MAP_MODAL);

    const { places } = props;

    const arePlacesFound = places.length > 0;

    const openMapModalHandler = (mapModalMetadata: MapModalI) => {
        setMapModal(mapModalMetadata);
    };

    const closeMapModalHandler = () => {
        setMapModal(DEFAULT_MAP_MODAL);
    };

    return (
        <Fragment>
            <MapModal {...mapModal} onClose={closeMapModalHandler} />

            <IonGrid className="ion-padding">
                {arePlacesFound && (
                    <IonRow>
                        {places.map((place) => {
                            return (
                                <IonCol key={place.id} sizeXs="12" sizeSm="8" offsetSm="2" sizeMd="5.5" offsetMd="0.35" sizeLg="4" offsetLg="1.25">
                                    <PLaceItem {...place} onOpenMapModal={openMapModalHandler} />
                                </IonCol>
                            );
                        })}
                    </IonRow>
                )}

                {!arePlacesFound && (
                    <DraMiniCard>
                        <h2 className="dra-text-bold">There's no places found!</h2>
                    </DraMiniCard>
                )}
            </IonGrid>
        </Fragment>
    );
};

export default PlaceList;
