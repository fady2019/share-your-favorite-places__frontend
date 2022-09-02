import { AuthModeE } from './auth';
import { MapModalI } from './maps';
import { DeletePlaceAlertI } from './places';

export interface AppStoreActionI<T> {
    type: string;
    payload: T;
}

export interface UISliceI {
    placeMapModal: MapModalI;
    placeDeletionAlert: DeletePlaceAlertI;
}

export interface AuthSliceI {
    authMode: AuthModeE;
    isAuth: boolean;
}

export interface AppStoreI {
    ui: UISliceI;
    auth: AuthSliceI;
}