import { Rest } from "../../../service/Rest";
import { Stream } from "../models/stream";

export class StreamService extends Rest {

    private featuredString: string ='/streams/featured';
    private streamSearch: string = '/search/streams?query=';

    constructor() {
        super();
    }

    public featured(): Promise<any> {
        return this.get(this.featuredString);
    }

    public search(query: string): Promise<any> {
        if (!query) {
            return this.featured();
        }
        return this.get( this.streamSearch, query);
    }

    public map(result: string): Stream[] {
        let data: any = JSON.parse(result);

        if (data.hasOwnProperty('streams')) {
            return data.streams.map((element: any) => { 
                return new Stream(element);
            });
        }
        return data.featured.map((element: any) => { 
            return new Stream(element.stream);
        });
    }
}