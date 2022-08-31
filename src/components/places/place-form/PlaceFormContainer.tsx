import React from 'react';

import { IonCol, IonGrid, IonRow } from '@ionic/react';

import { PlaceFormContainerI } from '../../../interfaces/places';

import PlaceForm from './PlaceForm';

const PlaceFormContainer: React.FC<PlaceFormContainerI> = (props) => {
    delete props.children;

    return (
        <IonGrid>
            <IonRow>
                <IonCol sizeSm="8" offsetSm="2" sizeMd="6" offsetMd="3" sizeLg="5" offsetLg="3.5">
                    <PlaceForm {...props} />
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default PlaceFormContainer;
