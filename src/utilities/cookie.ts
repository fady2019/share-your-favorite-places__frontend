const setItem = (key: string, value: any, expDays: number = 1, path: string = '/') => {
    const cookie = getItem(key);

    let expires = new Date(new Date().getTime() + expDays * 24 * 60 * 60 * 1000).toUTCString();

    if (cookie) {
        expires = cookie.metadata.expires;
        path = cookie.metadata.path;
    }

    const cookieMetadata = {
        expires: expires,
        path: path,
    };

    const cookieValue = JSON.stringify({
        value,
        metadata: cookieMetadata,
    });

    document.cookie = `${key}=${cookieValue}; path=${path}; expires=${expires}`;
};

const getItem = (key: string) => {
    const cookies = document.cookie;
    const cookie = cookies.split(';').find((c) => c.trim().split('=')[0] === key);
    const cookieValue = cookie?.split('=')[1];
    return cookieValue ? JSON.parse(cookieValue) : null;
};

const removeItem = (key: string) => {
    document.cookie = `${key}=; path=/; max-age=0`;
};

const cookieAPI = { setItem, getItem, removeItem };

export default cookieAPI;
