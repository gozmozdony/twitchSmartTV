import {Default} from "./Default";
import {Image} from "./Image";

export class Video extends Default {

    public broadcast_id: 1;
    public broadcast_type: string;
    public description: string;
    public description_html: string;
    public game: string;
    public preview: Image;
    public views: number;


    constructor(data?: any) {
        super();
        try {
            this.id = data._id;
            this.broadcast_id = data.broadcast_id;
            this.broadcast_type = data.broadcast_type;
            this.description = data.description;
            this.description_html = data.description_html;
            this.game = data.game;
            this.preview = new Image(data.preview);
            this.views = data.views;
        }catch(e) {
            console.error(e);
        }
    }
}