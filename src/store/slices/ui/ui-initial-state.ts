import { UISliceI } from '../../../interfaces/store';

export const appModalInitialState = {
    isOpen: false,
    title: '',
    content: '',
};

export const placeDeletionAlertInitialState = {
    isOpen: false,
    placeId: '',
};

export const uiSliceInitialState: UISliceI = {
    appModal: appModalInitialState,
    placeDeletionAlert: placeDeletionAlertInitialState,
};
