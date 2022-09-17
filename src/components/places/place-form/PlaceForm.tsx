import React, { FormEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IonButton } from '@ionic/react';

import useHttp from '../../../hooks/http-hook';
import { useForm } from '../../../hooks/form-hook';
import { AppStoreI } from '../../../interfaces/store';
import { placeFormInitialState } from './place-form-utilities';

import { PlaceFormI, PlaceFormStateInputsI, PlaceFormTypeE } from '../../../interfaces/places';

import { VALIDATOR_REQUIRE, VALIDATOR_MIN_LENGTH } from '../../../utilities/validators';

import ImagePicker from '../../ui/image-picker/ImagePicker';
import FormInput from '../../ui/input/Input';
import FormActions from '../../shared/FormActions';

const PlaceForm: React.FC<PlaceFormI> = (props) => {
    const history = useHistory();

    const userId = useSelector((state: AppStoreI) => state.user.userInfo?.id);
    const token = useSelector((state: AppStoreI) => state.auth.token);

    const { formState, getInputHandler } = useForm<PlaceFormStateInputsI>(placeFormInitialState);

    const { formType, address, description, title, imgURL, id } = props;

    const isFormValid = formState.valid;

    const backendURL = process.env.REACT_APP_BACKEND_URL;
    const { request, response } = useHttp();

    useEffect(() => {
        if (!response) {
            return;
        }

        history.replace(`/${userId}/places`);
    }, [response, history, userId]);

    const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isFormValid) {
            const reqURL = `${backendURL}/places/${formType === PlaceFormTypeE.NEW_PLACE_FORM ? 'new' : id}`;

            const reqBody = new FormData();
            reqBody.append('title', formState.inputs.title.value);
            reqBody.append('address', formState.inputs.address.value);
            reqBody.append('image', formState.inputs.image.value);
            reqBody.append('description', formState.inputs.description.value);

            request(reqURL, {
                method: formType === PlaceFormTypeE.NEW_PLACE_FORM ? 'POST' : 'PATCH',
                headers: {
                    authorization: `Bearer ${token?.id}`,
                },
                body: reqBody,
            });
        }
    };

    return (
        <form onSubmit={submitFormHandler}>
            <FormInput
                id="title"
                name="title"
                type="text"
                label="Title"
                value={title || ''}
                valid={formType === PlaceFormTypeE.UPDATE_PLACE_FORM}
                validators={[VALIDATOR_REQUIRE('place title is required, please enter it!')]}
                onGetInput={getInputHandler}
            />

            <FormInput
                id="address"
                name="address"
                type="text"
                label="Address"
                value={address || ''}
                valid={formType === PlaceFormTypeE.UPDATE_PLACE_FORM}
                validators={[VALIDATOR_REQUIRE('place address is required, please enter it!')]}
                onGetInput={getInputHandler}
            />

            <ImagePicker
                id="image"
                name="image"
                label="Image"
                value={imgURL || ''}
                valid={formType === PlaceFormTypeE.UPDATE_PLACE_FORM}
                accept="image/png, image/jpeg, image/jpg"
                multiple={false}
                onGetFile={getInputHandler}
            />

            <FormInput
                id="description"
                name="description"
                inputType="textarea"
                label="Description"
                value={description || ''}
                valid={formType === PlaceFormTypeE.UPDATE_PLACE_FORM}
                validators={[VALIDATOR_MIN_LENGTH(8, 'place description should be at least 8 characters!')]}
                onGetInput={getInputHandler}
            />

            <FormActions>
                <IonButton
                    className="dra-form-actions__btn"
                    color="warning"
                    strong
                    type="submit"
                    disabled={!isFormValid}
                >
                    {formType === PlaceFormTypeE.UPDATE_PLACE_FORM ? 'Update Place' : 'Add Place'}
                </IonButton>
            </FormActions>
        </form>
    );
};

export default PlaceForm;
