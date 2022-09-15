import { AlertI } from '../../../interfaces/alert';
import { LoadingI } from '../../../interfaces/loading';
import { ModalI } from '../../../interfaces/modal';
import { NotificationI } from '../../../interfaces/notification';
import { AppStoreActionI, UISliceI } from '../../../interfaces/store';

import {
    appLoadingInitialState,
    appModalInitialState,
    appNotificationInitialState,
    appAlertInitialState,
} from './ui-initial-state';

const uiReducers = {
    openAppModal: (state: UISliceI, action: AppStoreActionI<ModalI>) => {
        state.appModal = action.payload;
    },
    closeAppModal: (state: UISliceI) => {
        state.appModal = appModalInitialState;
    },
    openAppNotification: (state: UISliceI, action: AppStoreActionI<NotificationI>) => {
        state.appNotification = action.payload;
    },
    closeAppNotification: (state: UISliceI) => {
        state.appNotification = appNotificationInitialState;
    },
    openAppLoading: (state: UISliceI, action: AppStoreActionI<LoadingI>) => {
        state.appLoading = action.payload;
    },
    closeAppLoading: (state: UISliceI) => {
        state.appLoading = appLoadingInitialState;
    },
    openAppAlert: (state: UISliceI, action: AppStoreActionI<AlertI>) => {
        state.appAlert = action.payload;
    },
    closeAppAlert: (state: UISliceI) => {
        state.appAlert = appAlertInitialState;
    },
};

export default uiReducers;
