import React, { FormEvent, useCallback, useReducer } from 'react';

import { IonButton } from '@ionic/react';

import { newPlaceFormInitialState, newPlaceFormReducer } from './new-place-form-utilities';

import { FormActionTypeE } from '../../../interfaces/forms';

import { VALIDATOR_REQUIRE, VALIDATOR_MIN_LENGTH } from '../../../utilities/validators';

import FormInput from '../../ui/input/Input';

import classes from './NewPlaceForm.module.css';

const NewPlaceForm: React.FC<any> = (props) => {
    const [formState, formDispatch] = useReducer(newPlaceFormReducer, newPlaceFormInitialState);

    const isFormValid = formState.valid;

    const getInputHandler = useCallback(
        (inputId: string, inputValue: string, isInputValid: boolean) => {
            formDispatch({
                type: FormActionTypeE.GET_INPUT,
                payload: {
                    inputId,
                    inputValue,
                    isInputValid,
                },
            });
        },
        []
    );

    const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isFormValid) {
            console.log(formState)
        }
    };

    return (
        <form onSubmit={submitFormHandler}>
            <FormInput
                id="title"
                name="title"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE('place title is required, please enter it!')]}
                onGetInput={getInputHandler}
            />

            <FormInput
                id="address"
                name="address"
                type="text"
                label="Address"
                validators={[VALIDATOR_REQUIRE('place address is required, please enter it!')]}
                onGetInput={getInputHandler}
            />

            <FormInput
                id="description"
                name="description"
                inputType="textarea"
                label="Description"
                validators={[
                    VALIDATOR_MIN_LENGTH(8, 'place description should be at least 8 characters!'),
                ]}
                onGetInput={getInputHandler}
            />

            <div className={classes['dra-form-actions']}>
                <IonButton
                    className={classes['dra-form-actions__btn']}
                    color="warning"
                    strong
                    type="submit"
                    disabled={!isFormValid}
                >
                    Add Place
                </IonButton>
            </div>
        </form>
    );
};

export default NewPlaceForm;
