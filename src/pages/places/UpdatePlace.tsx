import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceFormContainer from '../../components/places/place-form/PlaceFormContainer';
import { PlaceFormTypeE } from '../../interfaces/places';

import { DUMMY_PLACES } from './dummy-places';

const UpdatePlace: React.FC = () => {
    const { placeId } = useParams<{ placeId: string }>();

    const place = DUMMY_PLACES.find((place) => place.id === placeId);

    return (
        <PlaceFormContainer
            formType={PlaceFormTypeE.UPDATE_PLACE_FORM}
            title={place?.title}
            address={place?.address}
            description={place?.description}
            imgURL={place?.imgURL}
        />
    );
};

export default UpdatePlace;
