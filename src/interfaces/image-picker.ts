export enum ImagePickerActionTypeE {
    OPEN_WINDOW,
    PICK_IMAGE,
    UNPICK_IMAGE,
}

export interface ImagePickerStateI {
    value: any;
    valid: boolean;
    touched: boolean;
    error: string;
}

export interface ImagePickerActionI {
    type: ImagePickerActionTypeE;
    payload?: any;
}

export interface PickedImageModalI {
    isOpen: boolean;
    imgSrc: string;
}
