import { Default } from '../models/Default';

export interface AxiosResponse {
  data?: Object;
}

export interface RestService {
    /**
     * Type of the model used in the service
     *
     * @type {string}
     * @memberof RestService
     */
    type: string;

    /**
     * Rest API call with Query data
     * GET method
     *
     * @param {string} query
     * @returns {Promise<any>}
     * @memberof RestService
     */
    search(query: string): Promise<any>;

    /**
     * Rest API call w/o query data
     * GET method
     *
     * @returns {Promise<any>}
     * @memberof RestService
     */
    get(): Promise<any>;

    /**
     * The returned data from service gets parsed into json and mapped into the gicen object type
     *
     * @param {string} result
     * @returns {Default[]}
     * @memberof RestService
     */
    map(result: string): Default[];
}
