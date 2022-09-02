import React from 'react';

import { useParams } from 'react-router-dom';

import PlacesContainer from '../../components/places/PlacesContainer';

import { DUMMY_PLACES } from './dummy-places';

const UserPlaces: React.FC<any> = () => {
    const { userId } = useParams<{userId: string}>();

    const places = DUMMY_PLACES.filter((place) => place.creator === userId);

    return <PlacesContainer places={places} />;
};

export default UserPlaces;
