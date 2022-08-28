export interface MapModalI {
    isOpen: boolean;
    address: string;
    location: {
        lat: number;
        lng: number;
    };
    onClose?: () => any;
}

export interface MapI {
    location: {
        lat: number;
        lng: number;
    };
    zoom: number;
    address: string;
}
