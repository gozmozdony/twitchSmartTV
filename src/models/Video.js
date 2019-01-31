var Video = /** @class */ (function () {
    function Video(data) {
        try {
            this.x160p = data['160p'] ? data['160p'].url : null;
            this.x360p = data['360p'] ? data['360p'].url : null;
            this.x480p = data['480p'] ? data['480p'].url : null;
            this.x720p = data['720p'] ? data['720p'].url : null;
            this.x720p60 = data['720p60'] ? data['720p60'].url : null;
            this.x900p60 = data['900p60'] ? data['900p60'].url : null;
        }
        catch (e) {
            console.error(e);
        }
    }
    Video.prototype.bestResolution = function () {
        if (this.x900p60) {
            return this.x900p60;
        }
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
    };
    return Video;
}());
export { Video };
//# sourceMappingURL=Video.js.map