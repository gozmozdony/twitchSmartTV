import {Default} from "./Default";
import {Image} from "./Image";

export class Game extends Default {

    public channels: number;
    public viewers: number;
    public name: string;
    public popularity: number;
    public box: Image;
    public logo: Image;
    public localized_name: string;

    constructor(data?: any) {
        super();
        try {
            this.id = data.game._id;
            this.channels = data.channels;
            this.viewers = data.viewers;
            this.box = new Image(data.game.box);
            this.logo = new Image(data.game.logo);
            this.name = data.game.name;
            this.popularity = data.game.popularity;
            this.localized_name = data.game.localized_name;
        }catch(e) {
            console.error(e);
        }
    }
}