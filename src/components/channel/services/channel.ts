import {Channel} from '../models/Channel';
import {Rest} from '../../../service/Rest';
import {AxiosResponse} from 'axios';

export class ChannelService extends Rest {

  private channelSearch = '/search/channels?query=';
  public type = 'channel';

  public search(query: string): Promise<any> {
    return this.get(this.channelSearch, query);
  }

  public map(result: AxiosResponse): Channel[] {
    if (!!result.data.channels) {
      return result.data.channels.map((element: Object) => {
        return new Channel(element);
      });
    }
    return [];
  }
}
