import { FormStateI } from '../../../interfaces/forms';
import { PlaceFormStateInputsI } from '../../../interfaces/places';

export const placeFormInitialState: FormStateI<PlaceFormStateInputsI> = {
    inputs: {
        title: {
            value: '',
            valid: false,
        },
        address: {
            value: '',
            valid: false,
        },
        image: {
            value: null,
            valid: false,
        },
        description: {
            value: '',
            valid: false,
        },
    },
    valid: false,
};
