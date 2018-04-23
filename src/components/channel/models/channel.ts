import { Default } from "../../../models/Default";

export class Channel extends Default{

    public broadcaster_language: string;
    public created_at: Date;
    public display_name: string;
    public followers: number;
    public game: string;
    public language: string;
    public logo: string;
    public mature: boolean;
    public name: string;
    public partner: boolean;
    public profile_banner: string;
    public profile_banner_background_color: string;
    public status: string;
    public url: string;
    public video_banner: string;
    public views: number;

    constructor(data?: any) {
        super();
        try {
            this.id = data._id;
            this.broadcaster_language = data.broadcaster_language;
            this.created_at = data.created_at;
            this.display_name = data.display_name;
            this.followers = data.followers;
            this.game = data.game;
            this.language = data.language;
            this.logo = data.logo;
            this.mature = data.mature;
            this.name = data.name;
            this.partner = data.partner;
            this.profile_banner = data.profile_banner;
            this.profile_banner_background_color = data.profile_banner_background_color;
            this.status = data.status;
            this.url = data.url;
            this.video_banner = data.video_banner;
            this.views = data.views;

        }catch(e) {
            console.error(e);
        }
    }
}