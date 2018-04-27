import { Game } from "../models/Game";
import { Rest } from "../../../service/Rest";

export class GameService extends Rest {

    private gameTop: string = '/games/top';
    private gameSearch: string = '/search/games?query=';
    public  type: string = 'game';

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

    public map(result: string): Game[] {
        let data: any = JSON.parse(result);

        if (data.hasOwnProperty('games')) {
            if ( data.games) {
                return data.games.map((element: Object) => { 
                    return new Game(element);
                });
            }
            return [];
        }
        return data.top.map((element: Object) => { 
            return new Game(element);
        });
    }
}