import NavigationItem from './NavigationItem';
import Navigatable from '../interfaces/navigatable.interface';

export default class NavigationGroup implements Navigatable {

    private navigationElements: NavigationItem[] = new Array();
    public identifier: string;
    public active: boolean;

    constructor(identifier: string, data: NavigationItem[]) {
        this.identifier = identifier;
        this.navigationElements = data;
    }

    public isActive(): number {
        let i = 0;
        for (i = 0; i < this.navigationElements.length; i++) {
            if (this.navigationElements[i].active) {
                return i;
            }
        }
        return -1;
    }

    public disable(): void {
        const active = this.isActive();
        if (active >= 0) {
            this.navigationElements[active].active = false;
        }
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
