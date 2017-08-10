import {Rest} from "./Rest";
export class StreamService extends Rest {

    private featuredString: string = this.KRAKEN + '/streams/featured';
    private streamSearch: string = this.KRAKEN + '/search/streams?query=';

    featured (): Promise<any> {
        this.url =  this.featuredString;
        return this.get();
    }

    search(query: string): Promise<any> {
        this.url =  this.streamSearch + query;
        return this.get();
    }
}