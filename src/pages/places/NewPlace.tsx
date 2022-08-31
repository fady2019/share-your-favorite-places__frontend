import React from 'react';

import PlaceFormContainer from '../../components/places/place-form/PlaceFormContainer';

import { PlaceFormTypeE } from '../../interfaces/places';

const NewPlace: React.FC = () => {
    return <PlaceFormContainer formType={PlaceFormTypeE.NEW_PLACE_FORM} />;
};

export default NewPlace;
