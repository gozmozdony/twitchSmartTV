var NavigationService = /** @class */ (function () {
    function NavigationService() {
    }
    NavigationService.navigationAdd = function (navigation) {
        this.navigationGroups.push(navigation);
        if (!this.active) {
            this.active = this.navigationGroups[0];
            this.active.active = true;
            this.active.navigationFirst();
        }
    };
    NavigationService.isActive = function () {
        var i = 0;
        for (i = 0; i < this.navigationGroups.length; i++) {
            if (this.navigationGroups[i].active) {
                return i;
            }
        }
        this.active = this.navigationGroups[0];
        return 0;
    };
    NavigationService.navigateUp = function () {
        var active = this.isActive();
        if ((active) !== 0) {
            this.active.active = false;
            this.active.disable();
            this.active = this.navigationGroups[active - 1];
        }
        this.active.navigationFirst();
    };
    NavigationService.navigateDown = function () {
        var active = this.isActive();
        if ((active + 1) !== this.navigationGroups.length) {
            this.active.active = false;
            this.active.disable();
            this.active = this.navigationGroups[active + 1];
            this.active.navigationFirst();
        }
    };
    NavigationService.navigateRight = function () {
        this.active.navigationNext();
    };
    NavigationService.navigateLeft = function () {
        this.active.navigationPrev();
    };
    NavigationService.removeByIdentifier = function (identifier) {
        this.navigationGroups = this.navigationGroups.filter(function (nav) {
            return nav.identifier !== identifier;
        });
    };
    NavigationService.navigationGroups = [];
    return NavigationService;
}());
export default NavigationService;
//# sourceMappingURL=navigation.service.js.map