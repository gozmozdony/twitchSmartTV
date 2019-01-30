import NavigationGroup from '../models/NavigationGroup';


export default class NavigationService {

    public static navigationGroups: NavigationGroup[] = [];
    public static active: NavigationGroup;

    public static navigationAdd(navigation: NavigationGroup) {
        this.navigationGroups.push(navigation);
        if (!this.active) {
            this.active = this.navigationGroups[0];
            this.active.active = true;
            this.active.navigationFirst();
        }
    }

    private static isActive(): number {
        let i = 0;
        for (i = 0; i < this.navigationGroups.length; i++) {
            if (this.navigationGroups[i].active) {
                return i;
            }
        }
        this.active = this.navigationGroups[0];
        return 0;
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

    public static removeByIdentifier(identifier: string) {
        this.navigationGroups = this.navigationGroups.filter((nav: NavigationGroup) => {
            return nav.identifier !== identifier;
        });
    }
}
