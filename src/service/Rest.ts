import Promise from 'promise-polyfill';

export class Rest {

    private objHttpReq: any;
    protected url: string;
    protected query: string;

    private STREAMPY: string = 'https://pwn.sh/tools/streamapi.py';
    private CLIENTID: string = 'me7m66itmvq616qzbm78jqr1xp4akn';
    private ACCEPT: string = 'application/vnd.twitchtv.v5+json';
    private STREAMPYKEY: string = '?key=gYhEXpjLbM3lTxRMPUa8qSz6CtOtJ9eM';
    protected KRAKEN: string ='https://api.twitch.tv/kraken';

    constructor () {
        this.objHttpReq = new XMLHttpRequest();
    }

    public intoChunks(arr: Array<any>, chunk_size: number) {
        return arr.map( function(e: any,i: any){
            return i%chunk_size===0 ? arr.slice(i,i+chunk_size) : null;
        }).filter(function(e){ return e; }) as any;
    }

    public get(){
        return new Promise((resolve: any, reject: any) => {
            this.constructHttpReq();
            this.objHttpReq.onload = (): string => resolve(this.objHttpReq.responseText);
            this.objHttpReq.onerror = (): string => reject(this.objHttpReq.statusText);
            this.objHttpReq.send();
        });
    }

    public resolveStreamUrl(url: string){
        return new Promise((resolve: any, reject: any) => {
            this.objHttpReq.open("GET", 'http://192.168.0.105/index.php' + '?url=' + url);
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