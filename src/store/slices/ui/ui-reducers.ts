import { ModalI } from '../../../interfaces/modal';
import { DeletePlaceAlertI } from '../../../interfaces/places';
import { AppStoreActionI, UISliceI } from '../../../interfaces/store';

import { appModalInitialState, placeDeletionAlertInitialState } from './ui-initial-state';

const uiReducers = {
    openAppMapModal: (state: UISliceI, action: AppStoreActionI<ModalI>) => {
        state.appModal = action.payload;
    },
    closeAppMapModal: (state: UISliceI) => {
        state.appModal = appModalInitialState;
    },
    openPlaceDeletionAlert: (state: UISliceI, action: AppStoreActionI<DeletePlaceAlertI>) => {
        state.placeDeletionAlert = action.payload;
    },
    closePlaceDeletionAlert: (state: UISliceI) => {
        state.placeDeletionAlert = placeDeletionAlertInitialState;
    },
};

export default uiReducers;
