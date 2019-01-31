var Default = /** @class */ (function () {
    function Default() {
    }
    Default.prototype.cosntructor = function (data) {
        try {
            this.id = data._id;
        }
        catch (e) {
            console.error(e);
        }
    };
    return Default;
}());
export { Default };
//# sourceMappingURL=Default.js.map