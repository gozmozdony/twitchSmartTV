import {Rest} from "./Rest";
export class ChannelService extends Rest {

    private channelSearch: string = this.KRAKEN + '/search/channels?query=';

    search(query: string): Promise<any> {
        this.url =  this.channelSearch + query;
        return this.get();
    }
}