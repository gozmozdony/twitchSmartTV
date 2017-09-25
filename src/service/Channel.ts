import {Rest} from "./Rest";
import {Channel} from "../models/Channel";

export class ChannelService extends Rest {

    private channelSearch: string = this.KRAKEN + '/search/channels?query=';

    search(query: string): Promise<any> {
        this.url =  this.channelSearch + query;
        return this.get();
    }

    map(channel: any): Channel {
        return new Channel(channel);
    }
}