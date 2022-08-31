import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceFormContainer from '../../components/places/place-form/PlaceFormContainer';
import { PlaceFormTypeE } from '../../interfaces/places';

const UpdatePlace: React.FC = () => {
    const placeId = useParams<{placeId: string}>().placeId;

    return (
        <PlaceFormContainer
            formType={PlaceFormTypeE.UPDATE_PLACE_FORM}
            title={"test title" + placeId}
            address={"test address" + placeId}
            description={"test description" + placeId}
        />
    );
};

export default UpdatePlace;
