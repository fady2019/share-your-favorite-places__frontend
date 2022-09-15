import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useHttp from '../../hooks/http-hook';

import { PlaceFormTypeE, PLaceI } from '../../interfaces/places';

import PlaceFormContainer from '../../components/places/place-form/PlaceFormContainer';

const UpdatePlace: React.FC = () => {
    const { request, response } = useHttp();

    const [place, setPlace] = useState<PLaceI | null>(null);
    const { placeId } = useParams<{ placeId: string }>();

    const backendURL = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        if (response) {
            setPlace(response.place);
        }
    }, [response]);

    useEffect(() => {
        const reqURL = `${backendURL}/places/${placeId}`;
        request(reqURL);
    }, [request, backendURL, placeId]);

    return <>{place && <PlaceFormContainer formType={PlaceFormTypeE.UPDATE_PLACE_FORM} {...place} />}</>;
};

export default UpdatePlace;
