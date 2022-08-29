import { MapModalI } from "./maps";

export interface PLaceI{
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
    onOpenMapModal: (metadata: MapModalI) => any;
}

export interface PlaceListI {
    places: PLaceI[];
    onOpenMapModal: (metadata: MapModalI) => any;
}

export interface PlacesContainerI {
    places: PLaceI[];
}