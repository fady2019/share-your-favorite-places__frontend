import React from 'react';

import { useParams } from 'react-router-dom';

import PlaceList from '../../components/places/PlaceList';
import { PlaceItemI } from '../../interfaces/components/places';

const DUMMY_PLACES: PlaceItemI[] = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584,
        },
        creator: 'u1',
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584,
        },
        creator: 'u2',
    },
];

const UserPlaces: React.FC<any> = () => {
    const { userId } = useParams<{userId: string}>();

    const places = DUMMY_PLACES.filter((place) => place.creator === userId);

    return <PlaceList places={places} />;
};

export default UserPlaces;
