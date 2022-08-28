import { MapModalI } from './maps';

export interface PlaceItemI {
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
    onOpenMapModal?: (metadata: MapModalI) => any;
}

export interface PlaceListI {
    places: PlaceItemI[];
}
