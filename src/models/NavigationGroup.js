var NavigationGroup = /** @class */ (function () {
    function NavigationGroup(identifier, data) {
        this.navigationElements = new Array();
        this.identifier = identifier;
        this.navigationElements = data;
    }
    NavigationGroup.prototype.isActive = function () {
        var i = 0;
        for (i = 0; i < this.navigationElements.length; i++) {
            if (this.navigationElements[i].active) {
                return i;
            }
        }
        return -1;
    };
    NavigationGroup.prototype.disable = function () {
        var active = this.isActive();
        if (active >= 0) {
            this.navigationElements[active].active = false;
        }
    };
    NavigationGroup.prototype.navigationFirst = function () {
        this.active = true;
        var active = this.isActive();
        if (active === -1) {
            this.navigationElements[0].setActive();
        }
    };
    NavigationGroup.prototype.navigationNext = function () {
        var active = this.isActive();
        if ((active + 1) !== this.navigationElements.length) {
            this.navigationElements[active].active = false;
            this.navigationElements[active + 1].setActive();
        }
    };
    NavigationGroup.prototype.navigationPrev = function () {
        var active = this.isActive();
        if (active !== 0) {
            this.navigationElements[active].active = false;
            this.navigationElements[active - 1].setActive();
        }
    };
    NavigationGroup.prototype.navigationLeft = function () {
        var active = this.isActive();
        this.navigationElements[active].active = false;
    };
    return NavigationGroup;
}());
export default NavigationGroup;
//# sourceMappingURL=NavigationGroup.js.map