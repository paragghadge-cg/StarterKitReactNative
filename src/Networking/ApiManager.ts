import axios from 'axios';
import Toast from '../Components/Toast';
import { RequestRange } from '../Constants/ApiConstants';
import ConsoleLog from '../Helper/ConsoleLog';
import { strings } from '../Localization/i18n';
import { ApiMethod, HeaderParams, Request } from '../Types/DataTypes';
import { envConfiguration } from './EnvConfigurations';
import NetworkProvider from './NetworkProvider';

export class ApiManager {
    apiCount: number = 0;
    private async createHeaders(headers?: any) {
        let headerParams: HeaderParams = {
            'Content-Type': 'application/json',
            ...headers
        };
        return headerParams;
    }
    private createRequest = async (
        path: string,
        method: ApiMethod,
        body?: any,
        headers?: any,
        params?: any
    ) => {
        let request: Request = {
            url: path,
            method: method,
            baseURL: envConfiguration.api.baseUrl,
            timeout: envConfiguration.api.timeout,
            timeoutErrorMessage: envConfiguration.api.timeoutErrorMessage,
            headers: await this.createHeaders(headers),
            params: params,
            data: body
        };
        ConsoleLog.log('request-->', JSON.stringify(request));
        return request;
    };

    public isNetworkConnected() {
        return NetworkProvider.checkIsNetworkConnected();
    }

    /**
     *
     * @param path End point
     * @param method Api method GET|POST|PUT|DELETE
     * @param headers Extra header param
     * @param body
     * @returns
     */
    public apiCall = async (path: string, method: ApiMethod, headers: object = {}, body?: any) => {
        if (!this.isNetworkConnected()) {
            throw Toast.show(strings('Network.noConnectivity'));
        }
        const requestBody = { ...body };
        let request = await this.createRequest(path, method, requestBody, headers);
        try {
            let response = await axios(request);
            if (response?.status == 200) {
                return response.data;
            } else {
                throw '';
            }
        } catch (error) {
            throw '';
        }
    };

    /**
     *
     * @param path End point
     * @param method Api method GET|POST|PUT|DELETE
     * @param recordCount
     * @param headers Extra header param
     * @param body
     * @returns
     */
    public syncEntities = async (
        path: string,
        method: ApiMethod,
        recordCount: number,
        headers: object = {},
        body?: any
    ) => {
        if (!this.isNetworkConnected) {
            throw Toast.show(strings('Network.noConnectivity'));
        }
        let request = [];
        const requestInterval = RequestRange.REQUEST_INTERVAL;
        let concurrentRequestCount = Math.ceil(recordCount / requestInterval);
        let initialRange = requestInterval;
        let resultRange = '1-5000/5000';
        if (concurrentRequestCount > 0) {
            this.apiCount = this.apiCount + (concurrentRequestCount - 1);
            for (let requestCount = 0; requestCount < concurrentRequestCount; requestCount++) {
                resultRange = '1';
                if (requestCount == 0) {
                    resultRange = `1-${initialRange}/${recordCount}`;
                } else {
                    let newIntervalRange = initialRange + requestInterval;
                    resultRange = `${initialRange}-${newIntervalRange}/${recordCount}`;
                    initialRange = newIntervalRange;
                }
                request.push(this.apiCall(path, method, { ...headers, resultRange }, body));
            }
        } else {
            request.push(this.apiCall(path, method, { ...headers, resultRange }, body));
        }
        try {
            const response = await axios.all(request);
            return response;
        } catch (error) {
            throw '';
        }
    };
}

const apiManager = new ApiManager();
export default apiManager;
