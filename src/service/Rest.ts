import Promise from 'promise-polyfill';

export class Rest {

    private objHttpReq: any;
    protected url: string;
    protected query: string;

    private CLIENTID: string = 'me7m66itmvq616qzbm78jqr1xp4akn';
    private ACCEPT: string = 'application/vnd.twitchtv.v5+json';
    protected KRAKEN: string ='https://api.twitch.tv/kraken';

    constructor () {
        this.objHttpReq = new XMLHttpRequest();
    }

    public get(){
        return new Promise((resolve: any, reject: any) => {
            this.constructHttpReq();
            this.objHttpReq.onload = () => resolve(this.objHttpReq.responseText);
            this.objHttpReq.onerror = () => reject(this.objHttpReq.statusText);
            this.objHttpReq.send();
        });
    }

    private constructHttpReq(): void {
        this.objHttpReq.open("GET", this.url);
        this.objHttpReq.setRequestHeader('Accept', this.ACCEPT);
        this.objHttpReq.setRequestHeader('Client-ID', this.CLIENTID);
    }
}