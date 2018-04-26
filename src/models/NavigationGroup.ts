import NavigationItem from './NavigationItem';
import Navigatable from '../interfaces/navigatable.interface';

export default class NavigationGroup implements Navigatable {

    private navigationElements: NavigationItem[] = new Array();
    public active: boolean;

    constructor(data: NavigationItem[]) {
        this.navigationElements = data;
    }

    public isActive(): number {
        return this.navigationElements.findIndex((navItem: NavigationItem) => {
            return navItem.active;
        });   
    }

    public disable(): void {
        const active = this.isActive();
        this.navigationElements[active].active = false;   
    }

    public navigationFirst(): void {
        this.active = true;
        const active = this.isActive();
        if (active === -1) {
            this.navigationElements[0].setActive();
        }
    }

    public navigationNext(): void {
        const active = this.isActive();
        if ((active + 1) !== this.navigationElements.length) {
            this.navigationElements[active].active = false;
            this.navigationElements[active + 1].setActive();
        }
    }

    public navigationPrev(): void {
        const active = this.isActive();
        if (active !== 0) {
            this.navigationElements[active].active = false;
            this.navigationElements[active - 1].setActive();           
        }
    }

    public navigationLeft(): void {
        const active = this.isActive();
        this.navigationElements[active].active = false;
    }
}
