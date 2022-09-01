import React from 'react';

import { PlaceFormContainerI } from '../../../interfaces/places';

import FormContainer from '../../shared/FormContainer'; 

import PlaceForm from './PlaceForm';

const PlaceFormContainer: React.FC<PlaceFormContainerI> = (props) => {
    delete props.children;

    return (
        <FormContainer>
            <PlaceForm {...props} />
        </FormContainer>
    );
};

export default PlaceFormContainer;
