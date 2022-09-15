import { FormInputI } from './forms';

export interface PLaceI {
    id: string;
    title: string;
    description: string;
    address: string;
    imgURL: string;
    location: {
        lat: number;
        lng: number;
    };
    creator: string;
}

export interface PlaceItemI {
    placeInfo: PLaceI;
}

export interface PlaceListI {
    places: PLaceI[];
}

export interface PlacesContainerI {
    places: PLaceI[];
}

export enum PlaceFormTypeE {
    NEW_PLACE_FORM,
    UPDATE_PLACE_FORM,
}

export interface PlaceFormContainerI {
    formType: PlaceFormTypeE;
    id?: string;
    title?: string;
    address?: string;
    description?: string;
    imgURL?: string;
}

export interface PlaceFormI extends PlaceFormContainerI {}

export interface PlaceFormStateInputsI {
    title: FormInputI;
    address: FormInputI;
    image: FormInputI;
    description: FormInputI;
}
