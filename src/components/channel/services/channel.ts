import {Channel} from "../models/Channel";
import { Rest } from "../../../service/Rest";

export class ChannelService extends Rest {

    private channelSearch: string = '/search/channels?query=';

    public search(query: string): Promise<any> {
        return this.get(this.channelSearch, query);
    }

    public map(result: string): Channel[] {
        let data: any = JSON.parse(result);

        return data.channels.map((element: Object) => { 
            return new Channel(element);
        });
    }
}