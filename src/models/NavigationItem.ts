export default class NavigationItem {
    $el: Element | any;
    active: Boolean;

    constructor(element: Element) {
        this.$el = element;
        this.active = false;
    }

    public setActive() {
        this.active = true;
        this.$el.focus();
    }
}