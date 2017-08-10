import {Rest} from "./Rest";
export class GameService extends Rest {

    private gameTop: string = this.KRAKEN +  '/games/top';

    top(): Promise<any> {
        this.url = this.gameTop;
        return this.get();
    }
}