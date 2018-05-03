import Promise from 'promise-polyfill';

declare var process : {
    env: {
        __API__: string,
        __CLIENTID__: string,
        __ACCEPT__: string,
        __KRAKEN__: string,
        __STREAMLINK__: string;
    }
};

export const SERVER_API = process.env.__API__;
export const SERVER_CLIENTID = process.env.__CLIENTID__;
export const SERVER_ACCEPT = process.env.__ACCEPT__;
export const SERVER_KRAKEN = process.env.__KRAKEN__;
export const SERVER_STREAMLINK = process.env.__STREAMLINK__;

export class Rest {

    private objHttpReq: any;
    
    constructor () {
        this.objHttpReq = new XMLHttpRequest();
    }

    public get(resource: string, query?: string): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            this.objHttpReq.open("GET", SERVER_KRAKEN + resource + (query ? query: ''));
            this.objHttpReq.setRequestHeader('Accept', SERVER_ACCEPT);
            this.objHttpReq.setRequestHeader('Client-ID', SERVER_CLIENTID);
            this.objHttpReq.onload = (): string => resolve(this.objHttpReq.responseText);
            this.objHttpReq.onerror = (): string => reject(this.objHttpReq.statusText);
            this.objHttpReq.send();
        });
    }

    public resolveStreamUrl(url: string): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            let data = new FormData();
            data.append('Authorization', 'Bearer me7m66itmg83kfvvq636qzbmxas78jqr1xp4akn');
            data.append('url', url);
            this.objHttpReq.open("POST", SERVER_API);
            this.objHttpReq.onload = (): string => resolve(this.objHttpReq.responseText);
            this.objHttpReq.onerror = (): string => reject(this.objHttpReq.statusText);
            this.objHttpReq.send(data);
        });
    }
}
