var Image = /** @class */ (function () {
    function Image(data) {
        try {
            this.large = data.large;
            this.medium = data.medium;
            this.small = data.small;
            this.template = data.template;
            var width = window.innerHeight;
            if (width > 1080) {
                this.sized = this.template.replace('{width}', '965').replace('{height}', '1348');
            }
            this.sized = this.template.replace('{width}', '480').replace('{height}', '670');
        }
        catch (e) {
            console.error(e);
        }
    }
    return Image;
}());
export { Image };
//# sourceMappingURL=Image.js.map