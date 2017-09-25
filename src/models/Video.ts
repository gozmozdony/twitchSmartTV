export class Video {

    public x160p: string;
    public x360p: string;
    public x480p: string;
    public x720p: string;
    public x720p60: string;

    constructor(data?: any) {
        try {
            this.x160p = data.urls['160p'] ? data.urls['160p'] : null;
            this.x360p = data.urls['360p'] ? data.urls['360p'] : null;
            this.x480p = data.urls['480p'] ? data.urls['480p'] : null;
            this.x720p = data.urls['720p'] ? data.urls['720'] : null;
            this.x720p60 = data.urls['720p60'] ? data.urls['720p60'] : null;
        }catch(e) {
            console.error(e);
        }
    }

    public bestResolution(): string {
        if (this.x720p60) {
            return this.x720p60;
        }
        if (this.x720p) {
            return this.x720p;
        }
        if (this.x480p) {
            return this.x480p;
        }
        if (this.x360p) {
            return this.x360p;
        }
        return this.x160p;
    }
}