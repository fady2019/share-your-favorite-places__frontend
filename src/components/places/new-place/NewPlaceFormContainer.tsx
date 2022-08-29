import React from 'react'

import { IonCol, IonGrid, IonRow } from '@ionic/react'

import NewPlaceForm from './NewPlaceForm';

const NewPlaceFormContainer: React.FC<any> = props => {
    return <IonGrid>
        <IonRow>
            <IonCol sizeLg='5' offsetLg='3.5'>
                <NewPlaceForm />
            </IonCol>
        </IonRow>
    </IonGrid>
}

export default NewPlaceFormContainer;