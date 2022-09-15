import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import useHttp from '../../hooks/http-hook';

import { AppStoreI } from '../../interfaces/store';
import { PLaceI } from '../../interfaces/places';

import PlacesContainer from '../../components/places/PlacesContainer';
import { useSelector } from 'react-redux';

const UserPlaces: React.FC<any> = () => {
    const { request, response } = useHttp();

    const token = useSelector((state: AppStoreI) => state.auth.token);
    const isLoading = useSelector((state: AppStoreI) => state.ui.appLoading.isOpen);

    const [places, setPlaces] = useState<PLaceI[]>([]);
    const { userId } = useParams<{ userId: string }>();

    const backendURL = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        if (!response) {
            return;
        }

        if (response.places) {
            setPlaces(response.places);
        }

        if (response.placeId) {
            setPlaces((crtPlaces) => crtPlaces.filter((place) => place.id !== response.placeId));
        }
    }, [response]);

    useEffect(() => {
        const reqURL = `${backendURL}/places/user/${userId}`;
        request(reqURL);
    }, [request, backendURL, userId]);

    const deletePlaceHandler = (placeId: string) => {
        const reqURL = `${backendURL}/places/${placeId}`;

        request(reqURL, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token?.id}`,
            },
        });
    };

    return <>{!isLoading && <PlacesContainer places={places} onDelete={deletePlaceHandler} />}</>;
};

export default UserPlaces;
