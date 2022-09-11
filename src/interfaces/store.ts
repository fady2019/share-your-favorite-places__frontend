import { AuthModeE } from './auth';
import { LoadingI } from './loading';
import { ModalI } from './modal';
import { NotificationI } from './notification';
import { DeletePlaceAlertI } from './places';

export interface AppStoreActionI<T> {
    type: string;
    payload: T;
}

export interface UISliceI {
    appModal: ModalI;
    appNotification: NotificationI;
    appLoading: LoadingI;
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
