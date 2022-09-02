import { MapModalI } from '../../../interfaces/maps';
import { DeletePlaceAlertI } from '../../../interfaces/places';
import { AppStoreActionI, UISliceI } from '../../../interfaces/store';

import { placeMapModalInitialState, placeDeletionAlertInitialState } from './ui-initial-state';

const uiReducers = {
    openPlaceMapModal: (state: UISliceI, action: AppStoreActionI<MapModalI>) => {
        state.placeMapModal = action.payload;
    },
    closePlaceMapModal: (state: UISliceI) => {
        state.placeMapModal = placeMapModalInitialState;
    },
    openPlaceDeletionAlert: (state: UISliceI, action: AppStoreActionI<DeletePlaceAlertI>) => {
        state.placeDeletionAlert = action.payload;
    },
    closePlaceDeletionAlert: (state: UISliceI) => {
        state.placeDeletionAlert = placeDeletionAlertInitialState;
    },
};

export default uiReducers;
