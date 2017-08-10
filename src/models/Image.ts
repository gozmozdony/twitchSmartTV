export class Image {

    public large: string;
    public medium: string;
    public small: string;
    public template: string;

    constructor(data?: any) {
        try {
            this.large = data.large;
            this.medium = data.medium;
            this.small = data.small;
            this.template = data.template;
        }catch(e) {
            console.error(e);
        }
    }
}