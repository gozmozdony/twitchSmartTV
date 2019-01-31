var NavigationItem = /** @class */ (function () {
    function NavigationItem(element) {
        this.$el = element;
        this.active = false;
    }
    NavigationItem.prototype.setActive = function () {
        this.active = true;
        this.$el.focus();
    };
    return NavigationItem;
}());
export default NavigationItem;
//# sourceMappingURL=NavigationItem.js.map