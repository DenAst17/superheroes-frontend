import axios, {Axios, AxiosRequestConfig} from 'axios';
import { APP_KEYS } from '../modules/common/consts';

class HttpService {
    constructor(baseUrl = process.env.SERVER_URL, fetchingService = axios, apiVersion = 'api') {
        this.baseUrl = baseUrl as string;
        axios.defaults.headers.common = {"Access-Control-Allow-Origin": "*"};
        this.fetchingService = axios;
        this.apiVersion = apiVersion
    }

    private getFullApiUrl(url: string) {
        return `${this.baseUrl}/${this.apiVersion}/${url}`;
    }

    private extractUrlAndDataFromConfig(config: AxiosRequestConfig<any>) {
        let { data, url, ...configWithoutDataAndUrl } = config;
        return configWithoutDataAndUrl;
    }

    get(config: AxiosRequestConfig<any>) {
        return this.fetchingService.get(this.getFullApiUrl(config.url as string), this.extractUrlAndDataFromConfig(config));
    }

    post(config: AxiosRequestConfig<any>) {
        return this.fetchingService.post(this.getFullApiUrl(config.url as string), config.data, this.extractUrlAndDataFromConfig(config))
    }

    delete(config: AxiosRequestConfig<any>) {
        return this.fetchingService.delete(this.getFullApiUrl(config.url as string), this.extractUrlAndDataFromConfig(config));
    }

    put(config: AxiosRequestConfig<any>) {
        return this.fetchingService.put(this.getFullApiUrl(config.url as string), config.data, this.extractUrlAndDataFromConfig(config));
    }

    public baseUrl: string;
    public fetchingService: Axios;
    public apiVersion: string;
}

export default HttpService;