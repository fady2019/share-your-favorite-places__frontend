import React from 'react';

import { IonCol, IonGrid, IonRow } from '@ionic/react';

import NewPlaceForm from './NewPlaceForm';

const NewPlaceFormContainer: React.FC<any> = (props) => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol sizeSm="8" offsetSm="2" sizeMd="6" offsetMd="3" sizeLg="5" offsetLg="3.5">
                    <NewPlaceForm />
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default NewPlaceFormContainer;
