import axios from 'axios';

declare var process: {
    env: {
        __API__: string,
        __CLIENTID__: string,
        __ACCEPT__: string,
        __KRAKEN__: string,
        __TOKEN__: string
    }
};

export const SERVER_API = process.env.__API__;
export const SERVER_CLIENTID = process.env.__CLIENTID__;
export const SERVER_ACCEPT = process.env.__ACCEPT__;
export const SERVER_KRAKEN = process.env.__KRAKEN__;
export const SERVER_TOKEN = process.env.__TOKEN__;

export class Rest {

    constructor () {}

    public get(resource: string, query?: string): Promise<any> {
      return axios.request({
        url: `${SERVER_KRAKEN}${resource}${(query ? query : '')}`,
        headers: {
          'Accept': SERVER_ACCEPT,
          'Client-ID': SERVER_CLIENTID
        }
      });
    }

  public resolveStreamUrl(url: string): Promise<any> {
      return axios.post(
        SERVER_API,
        {
          'Authorization': SERVER_TOKEN,
          'url': url
        }
      );
  }
}
