import { strings } from '../Localization/i18n';

export const ApiPath = {};

export const HTTP_METHODS = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
};

export const ErrorMessages = {
    NO_CONNECTIVITY: strings('ErrorMessages.NO_CONNECTIVITY'),
    REMOTE_CONFIG_FAIL: strings('ErrorMessages.REMOTE_CONFIG_FAIL')
};

export const RequestRange = {
    REQUEST_INTERVAL: 5000
};
