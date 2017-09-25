import {Rest} from "./Rest";
import {Game} from "../models/Game";
export class GameService extends Rest {

    private gameTop: string = this.KRAKEN +  '/games/top';
    private gameSearch: string = this.KRAKEN + '/search/games?query=';

    top(): Promise<any> {
        this.url = this.gameTop;
        return this.get();
    }

    search(query: string): Promise<any> {
        this.url =  this.gameSearch + query;
        return this.get();
    }

    map(game: any): Game {
        return new Game(game);
    }
}