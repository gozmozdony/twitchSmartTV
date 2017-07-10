export class Channel {
    public channel: string;
    public url: string;
    public game: string;

    constructor(channel: string, url: string, game: string){
        this.channel = channel;
        this.url = url;
        this.game = game;
    }
}