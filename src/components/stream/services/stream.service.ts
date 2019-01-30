import {Rest} from '../../../service/Rest';
import {Stream} from '../models/stream';
import {AxiosResponse} from 'axios';

export class StreamService extends Rest {

  private featuredString = '/streams/featured';
  private streamSearch = '/search/streams?query=';
  public type = 'stream';

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
    return this.get(this.streamSearch, query);
  }

  public map(result: AxiosResponse): Stream[] {
    if (!!result.data.streams) {
      return result.data.streams.map((element: any) => {
        return new Stream(element);
      });
    }

    if (!!result.data.featured) {

      return result.data.featured.map((element: any) => {
        return new Stream(element.stream);
      });
    }
    return [];
  }
}
