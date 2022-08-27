import React from 'react';

import { IonCol, IonGrid, IonRow } from '@ionic/react';

import PLaceItem from './PlaceItem';
import DraMiniCard from '../ui/card/DraMiniCard';

import { PlaceListI } from '../../interfaces/components/places';

const PlaceList: React.FC<PlaceListI> = (props) => {
    const { places } = props;

    const arePlacesFound = places.length > 0;

    return (
        <IonGrid className="ion-padding">
            {arePlacesFound && (
                <IonRow>
                    {places.map((place) => {
                        return (
                            <IonCol key={place.id} sizeXs='12' sizeSm="8" offsetSm="2" sizeMd="5.5" offsetMd="0.35" sizeLg="4" offsetLg="1.25">
                                <PLaceItem {...place} />
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
    );
};

export default PlaceList;
