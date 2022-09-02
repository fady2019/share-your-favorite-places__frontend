import React from 'react';

import { IonCol, IonRow } from '@ionic/react';

import PLaceItem from './PlaceItem';

import { PlaceListI } from '../../interfaces/places';

const PlaceList: React.FC<PlaceListI> = (props) => {
    const { places } = props;

    return (
        <IonRow>
            {places.map((placeInfo) => {
                return (
                    <IonCol
                        key={placeInfo.id}
                        sizeXs="12"
                        sizeSm="8"
                        offsetSm="2"
                        sizeMd="5.5"
                        offsetMd="0.35"
                        sizeLg="4"
                        offsetLg="1.25"
                    >
                        <PLaceItem placeInfo={placeInfo} />
                    </IonCol>
                );
            })}
        </IonRow>
    );
};

export default PlaceList;
