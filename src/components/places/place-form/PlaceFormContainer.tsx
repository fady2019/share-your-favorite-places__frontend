import React from 'react';

import { IonText } from '@ionic/react';

import { PlaceFormContainerI, PlaceFormTypeE } from '../../../interfaces/places';

import FormContainer from '../../shared/FormContainer'; 

import PlaceForm from './PlaceForm';

const PlaceFormContainer: React.FC<PlaceFormContainerI> = (props) => {
    delete props.children;

    const { formType } = props;

    return (
        <FormContainer>
            <IonText>
                <h2>{formType === PlaceFormTypeE.NEW_PLACE_FORM? 'New Place' : 'Update Place'}</h2>
            </IonText>

            <PlaceForm {...props} />
        </FormContainer>
    );
};

export default PlaceFormContainer;
