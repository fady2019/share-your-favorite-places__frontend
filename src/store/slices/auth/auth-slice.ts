import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import { AuthTokenI } from '../../../interfaces/auth';

import cookieAPI from '../../../utilities/cookie';
import { uiActions } from '../ui/ui-slice';
import { userActions } from '../user/user-slice';
import { authSliceInitialState } from './auth-initial-state';
import { authSliceReducers } from './auth-reducers';

const TOKEN_COOKIE_NAME = 'share-fav-place-token-309';

let TOKEN_REFRESH_TIMEOUT: any;

const authSlice = createSlice({
    name: 'auth',
    initialState: authSliceInitialState,
    reducers: authSliceReducers,
});

const refreshToken = (token: AuthTokenI, isAutoLogin: boolean = false): any => {
    const backendURL = process.env.REACT_APP_BACKEND_URL;
    const reqURL = `${backendURL}/token/refresh`;

    return async (dispatch: Dispatch<AnyAction>) => {
        if (token) {
            if (isAutoLogin) {
                dispatch(
                    uiActions.openAppLoading({
                        isOpen: true,
                        message: 'logging in...',
                    })
                );
            }

            const response = await fetch(reqURL, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.id}`,
                },
            });

            if (!response.ok) {
                dispatch(logout());
                dispatch(
                    uiActions.openAppNotification({
                        isOpen: true,
                        hasError: true,
                        message: 'something wrong has been occurred!, please login in again!',
                    })
                );
            } else {
                const data = await response.json();

                dispatch(login(data));
            }

            if (isAutoLogin) {
                dispatch(uiActions.closeAppLoading());
            }
        }

        if (isAutoLogin) {
            dispatch(authActions.setAutoLoginDone());
        }
    };
};

export const login = (response: any): any => {
    return (dispatch: Dispatch<AnyAction>) => {
        dispatch(authActions.setToken(response.token));
        dispatch(userActions.setUserInfo(response.user));

        cookieAPI.setItem(TOKEN_COOKIE_NAME, response.token, 30);

        if (response.token.expireAt) {
            let timeout = response.token.expireAt - new Date().getTime();

            if (timeout < 0) {
                timeout = 0;
            }

            TOKEN_REFRESH_TIMEOUT = setTimeout(() => {
                dispatch(refreshToken(response.token));
                clearTimeout(TOKEN_REFRESH_TIMEOUT);
            }, timeout);
        }
    };
};

export const autoLogin = (): any => {
    return (dispatch: Dispatch<AnyAction>) => {
        const token = cookieAPI.getItem(TOKEN_COOKIE_NAME)?.value || null;

        dispatch(refreshToken(token, true));
    };
};

export const logout = (): any => {
    return (dispatch: Dispatch<AnyAction>) => {
        dispatch(authActions.clearToken());
        dispatch(userActions.clearUserInfo());

        cookieAPI.removeItem(TOKEN_COOKIE_NAME);

        if (TOKEN_REFRESH_TIMEOUT) {
            clearTimeout(TOKEN_REFRESH_TIMEOUT);
        }
    };
};

export default authSlice;

export const authActions = authSlice.actions;
