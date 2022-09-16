import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { uiActions } from '../store/slices/ui/ui-slice';

const useHttp = () => {
    const dispatch = useDispatch();

    const [response, setResponse] = useState<any>(null);

    const activeRequests = useRef<AbortController[]>([]);

    useEffect(() => {
        return () => {
            activeRequests.current.forEach((reqCtrl) => reqCtrl.abort());
            dispatch(uiActions.closeAppLoading());
            dispatch(uiActions.closeAppNotification());
        };
    }, [dispatch]);

    const request = useCallback(
        async (url: string, opt: RequestInit = {}) => {
            dispatch(
                uiActions.openAppLoading({
                    isOpen: true,
                    message: 'waiting for a response',
                })
            );

            const reqAbortCtrl = new AbortController();
            activeRequests.current.push(reqAbortCtrl);

            try {
                const fetchedResponse = await fetch(url, { ...opt, signal: reqAbortCtrl.signal });

                activeRequests.current.filter((ctrl) => ctrl !== reqAbortCtrl);

                const data = await fetchedResponse.json();

                if (!fetchedResponse.ok) {
                    throw new Error(data.message);
                }

                setResponse(data);

                const resMsg = data.message || 'fetched successfully!';

                dispatch(
                    uiActions.openAppNotification({
                        isOpen: true,
                        hasError: false,
                        message: resMsg,
                    })
                );
            } catch (err: any) {
                const errorMsg = err.message || 'something wrong has been occurred!';
                dispatch(
                    uiActions.openAppNotification({
                        isOpen: true,
                        hasError: true,
                        message: errorMsg,
                    })
                );
            }

            dispatch(uiActions.closeAppLoading());
        },
        [dispatch]
    );

    return { request, response };
};

export default useHttp;
