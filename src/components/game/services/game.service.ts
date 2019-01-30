import {Game} from '../models/Game';
import {Rest} from '../../../service/Rest';
import {AxiosResponse} from 'axios';

export class GameService extends Rest {

  private gameTop = '/games/top';
  private gameSearch = '/search/games?query=';
  public type = 'game';

  constructor() {
    super();
  }

  public top(): Promise<any> {
    return this.get(this.gameTop);
  }

  public search(query: string): Promise<any> {
    if (!query) {
      return this.top();
    }
    return this.get(this.gameSearch, query);
  }

  public map(result: AxiosResponse): Game[] {
    if (!!result.data.games) {
      return result.data.games.map((element: Object) => {
        return new Game(element);
      });
    }

    if (!!result.data.top) {
      return result.data.top.map((element: Object) => {
        return new Game(element);
      });
    }
    return [];
  }
}
