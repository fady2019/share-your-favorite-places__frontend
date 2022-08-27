export interface PlaceItemI {
    id: string;
    title: string;
    description: string;
    address: string;
    imgURL: string;
    location: {
        lat: number;
        lng: number;
    }
    creator: string;
}

export interface PlaceListI {
    places: PlaceItemI[];
}