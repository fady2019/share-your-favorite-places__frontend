import { UISliceI } from '../../../interfaces/store';

export const appModalInitialState = {
    isOpen: false,
    title: '',
    content: '',
};

export const appNotificationInitialState = {
    isOpen: false,
    message: '',
    hasError: false,
};

export const placeDeletionAlertInitialState = {
    isOpen: false,
    placeId: '',
};

export const uiSliceInitialState: UISliceI = {
    appModal: appModalInitialState,
    appNotification: appNotificationInitialState,
    placeDeletionAlert: placeDeletionAlertInitialState,
};
