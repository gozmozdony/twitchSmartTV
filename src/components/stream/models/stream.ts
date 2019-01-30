import { Default } from '../../../models/Default';
import { Image } from '../../../models/Image';
import { Channel } from '../../channel/models/Channel';

export class Stream extends Default {


    public avarage_fps: number;
    public channel: Channel;
    public created_at: Date;
    public delay: number;
    public game: string;
    public is_playlist: boolean;
    public preview: Image;
    public video_height: number;
    public viewers: number;


    constructor(data?: any) {
        super();
        try {
            this.id = data._id;
            this.avarage_fps = data.avarage_fps;
            this.channel = new Channel(data.channel);
            this.created_at = data.created_at;
            this.delay = data.delay;
            this.game = data.game === '' ? 'IRL' : data.game;
            this.is_playlist = data.is_playlist;
            this.preview = new Image(data.preview);
            this.video_height = data.video_height;
            this.viewers = data.viewers;

        } catch (e) {
            console.error(e);
        }
    }
}
