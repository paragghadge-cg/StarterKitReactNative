import env from 'react-native-config';
/**
 *Get all stored information from .env file
 */
export const envConfiguration = {
    api: {
        baseUrl: env.BASE_URL,
        timeout: 200000,
        timeoutErrorMessage: 'Something Went Wrong!'
    }
};

/**
 *Get all auth related information from .env file
 */
export const authConfig = {
    sourceSystemId: '',
    redirectUrl: '',
    appScope: '',
    authorizationEndpoint: '',
    tokenEndpoint: ''
};

export const environment = {};
