import {
    ImagePickerActionI,
    ImagePickerActionTypeE,
    ImagePickerStateI,
} from '../../../interfaces/image-picker';

export const imagePickerInitState: ImagePickerStateI = {
    value: null,
    valid: false,
    touched: false,
    error: 'an image is required!',
};

export const imagePickerReducer = (
    state: ImagePickerStateI,
    action: ImagePickerActionI
): ImagePickerStateI => {
    switch (action.type) {
        case ImagePickerActionTypeE.PICK_IMAGE: {
            return {
                ...state,
                value: action.payload!,
                valid: true,
            };
        }
        case ImagePickerActionTypeE.OPEN_WINDOW: {
            return { ...state, touched: true };
        }
        case ImagePickerActionTypeE.UNPICK_IMAGE: {
            return { ...imagePickerInitState, touched: true, valid: action.payload };
        }
        default: {
            return state;
        }
    }
};
