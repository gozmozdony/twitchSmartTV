import NavigationGroup from '../models/NavigationGroup';

export default class NavigationService {

    public static navigationGroups: NavigationGroup[] = [];
    public static active: NavigationGroup;

    public static navigationAdd(navigation: NavigationGroup) {
        this.navigationGroups.push(navigation);
        if (!this.active) {
            this.active = this.navigationGroups[0];
            this.active.active = true;
        }
    }

    private static isActive(): number {
        return this.navigationGroups.findIndex((nav: NavigationGroup) => {
            return nav.active;
        });
    }

    public static navigateUp() {
        const active = this.isActive();

        if ((active) !== 0) {
            this.active.active = false;
            this.active.disable();
            this.active = this.navigationGroups[active - 1];
        }

        this.active.navigationFirst();
    }

    public static navigateDown() {
        const active = this.isActive();
        if ((active + 1) !== this.navigationGroups.length) {
            this.active.active = false;
            this.active.disable();
            this.active = this.navigationGroups[active + 1];
            this.active.navigationFirst();
        }
    }

    public static navigateRight() {
        this.active.navigationNext();
    }

    public static navigateLeft() {
        this.active.navigationPrev();
    }

    public static removeLast() {
        this.navigationGroups.splice(this.navigationGroups.length -  1, 1);
        this.active = this.navigationGroups[0];
        this.active.active = true;
    }
}
