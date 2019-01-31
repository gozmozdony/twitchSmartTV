import axios from 'axios';
import TwitchGetStream from 'twitch-get-stream';

declare var process: {
  env: {
    __API__: string,
    __CLIENTID__: string,
    __ACCEPT__: string,
    __KRAKEN__: string
  }
};

export const SERVER_API = process.env.__API__;
export const SERVER_CLIENTID = process.env.__CLIENTID__;
export const SERVER_ACCEPT = process.env.__ACCEPT__;
export const SERVER_KRAKEN = process.env.__KRAKEN__;

interface IRest {
  get(resource: string, query?: string): Promise<any>;
  resolveStreamUrl(channel: string): Promise<any>;
}

export class Rest implements IRest {

  public twitch = TwitchGetStream(process.env.__CLIENTID__);

  constructor() {
  }

  public get(resource: string, query?: string): Promise<any> {
    return axios.request({
      url: `${SERVER_KRAKEN}${resource}${(query ? query : '')}`,
      headers: {
        'Accept': SERVER_ACCEPT,
        'Client-ID': SERVER_CLIENTID
      }
    });
  }

  public resolveStreamUrl(channel: string): Promise<any> {
    return axios.get(`${SERVER_API}?channel=${channel}`);
  }
}
