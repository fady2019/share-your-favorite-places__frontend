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

export const appLoadingInitialState = {
    isOpen: false,
    message: '',
};

export const appAlertInitialState = {
    isOpen: false,
    header: '',
    message: '',
    onClose: () => {},
};

export const uiSliceInitialState: UISliceI = {
    appModal: appModalInitialState,
    appNotification: appNotificationInitialState,
    appLoading: appLoadingInitialState,
    appAlert: appAlertInitialState,
};
