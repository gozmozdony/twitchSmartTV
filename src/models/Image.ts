export class Image {

    public large: string;
    public medium: string;
    public small: string;
    public template: string;
    public sized: string;

    constructor(data?: any) {
        try {
            this.large = data.large;
            this.medium = data.medium;
            this.small = data.small;
            this.template = data.template;
            const width = window.innerHeight;
            if (width > 1080) {
                this.sized = this.template.replace('{width}', '965').replace('{height}', '1348');
            }
            this.sized = this.template.replace('{width}', '480').replace('{height}', '670');
        }catch(e) {
            console.error(e);
        }
    }
}