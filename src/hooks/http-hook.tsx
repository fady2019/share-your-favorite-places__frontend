import { useCallback, useEffect, useRef, useState } from 'react';

const useHttp = () => {
    const [response, setResponse] = useState<any>(null);
    const [isFetching, setIsFetch] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const activeRequests = useRef<AbortController[]>([]);

    useEffect(() => {
        return () => {
            activeRequests.current.forEach((reqCtrl) => reqCtrl.abort());
        };
    }, []);

    const request = useCallback(async (url: string, opt: RequestInit = {}) => {
        setIsFetch(true);

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
            setIsFetch(false);
        } catch (err: any) {
            setError(err.message || 'something wrong has been occurred!');
            setIsFetch(false);
            throw err;
        }
    }, []);

    const clearError = useCallback(() => {
        setError('');
    }, []);

    return { request, response, isFetching, error, clearError };
};

export default useHttp;
