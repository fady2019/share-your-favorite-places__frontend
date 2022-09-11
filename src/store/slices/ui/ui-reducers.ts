import { LoadingI } from '../../../interfaces/loading';
import { ModalI } from '../../../interfaces/modal';
import { NotificationI } from '../../../interfaces/notification';
import { DeletePlaceAlertI } from '../../../interfaces/places';
import { AppStoreActionI, UISliceI } from '../../../interfaces/store';

import {
    appLoadingInitialState,
    appModalInitialState,
    appNotificationInitialState,
    placeDeletionAlertInitialState,
} from './ui-initial-state';

const uiReducers = {
    openAppMapModal: (state: UISliceI, action: AppStoreActionI<ModalI>) => {
        state.appModal = action.payload;
    },
    closeAppMapModal: (state: UISliceI) => {
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
    openPlaceDeletionAlert: (state: UISliceI, action: AppStoreActionI<DeletePlaceAlertI>) => {
        state.placeDeletionAlert = action.payload;
    },
    closePlaceDeletionAlert: (state: UISliceI) => {
        state.placeDeletionAlert = placeDeletionAlertInitialState;
    },
};

export default uiReducers;
