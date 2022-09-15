import { AuthModeE, AuthTokenI } from './auth';

import { AlertI } from './alert';
import { LoadingI } from './loading';
import { ModalI } from './modal';
import { NotificationI } from './notification';
import { UserInfoI } from './users';

export interface AppStoreActionI<T> {
    type: string;
    payload: T;
}

export interface UISliceI {
    appAlert: AlertI;
    appModal: ModalI;
    appNotification: NotificationI;
    appLoading: LoadingI;
}

export interface AuthSliceI {
    authMode: AuthModeE;
    token: AuthTokenI | null;
    isAutoLoginDone: boolean;
}

export interface UserSliceI {
    userInfo: UserInfoI | null;
}

export interface AppStoreI {
    ui: UISliceI;
    auth: AuthSliceI;
    user: UserSliceI;
}
