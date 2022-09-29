export type UserData = {
    name: string;
};

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type HeaderParams = {
    'Content-Type': string;
    client_id?: string;
    client_secret?: string;
    authToken?: string;
    ParentMessageID?: string;
    SourceSystemID?: string;
    resultRange?: string;
};

export type Request = {
    url: string;
    method: ApiMethod;
    baseURL: string;
    timeout?: number;
    timeoutErrorMessage?: string;
    headers?: any;
    params?: any;
    data?: any;
};
