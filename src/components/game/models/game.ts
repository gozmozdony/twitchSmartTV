import { Default } from '../../../models/Default';
import { Image } from '../../../models/Image';

export class Game extends Default {

    public channels: number;
    public viewers: number;
    public name: string;
    public box: Image;
    public logo: Image;
    public localized_name: string;

    constructor(data?: any) {
        super();

        try {
            this.id = data.game ? data.game._id : data._id;
            this.channels = data.channels;
            this.viewers = data.viewers;
            this.box = new Image(data.game ? data.game.box : data.box);
            this.logo = new Image(data.game ? data.game.logo : data.logo);
            this.name = data.game ? data.game.name : data.name;
            this.localized_name = data.game ? data.game.localized_name : data.localized_name;
        } catch (e) {
            console.error(e);
        }
    }
}
