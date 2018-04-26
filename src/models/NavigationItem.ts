export default class NavigationItem {
    identifier: string;
    $el: Element | any;
    active: Boolean;

    constructor(identifier: string, $el: Element) {
        this.identifier = identifier;
        this.$el = $el;
        this.active = false;
    }

    public setActive() {
        this.active = true;
        this.$el.focus();
    }
}