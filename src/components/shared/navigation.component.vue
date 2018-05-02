<script lang="ts">
    import Vue from "vue";
    import NavigationService from "../../service/navigation.service";
    import NavigationItem from "../../models/NavigationItem";
    import NavigationGroup from "../../models/NavigationGroup";

    const MOUSEWHEEL_EVENT = 'mousewheel';
    const SCROLLABLE_CLASS = 'scrollable';

    export default {}

    export abstract class Navigation extends Vue {

        private scrollableElement: HTMLCollectionOf<Element>;

        public mounted() {
            NavigationService.navigationAdd(new NavigationGroup(
                this.$vnode.tag as string,
                this.$children.filter((component: Vue) => {
                    return !component.$el.classList.contains('no-navi');
                }).map((component: Vue) => {
                    return  new NavigationItem(component.$el);
                }))
            );

            document.addEventListener(MOUSEWHEEL_EVENT, this.mouseWheel, false); 
        }

        public mouseWheel(e: WheelEvent) {
            if (this.scrollableElement) {
                let left = this.scrollableElement[0].scrollLeft;
                left += e.deltaY
                this.scrollableElement[0].scrollLeft = left;
            } else {
                this.scrollableElement = document.getElementsByClassName(SCROLLABLE_CLASS);
            }
        }

        public destroyed() {
            NavigationService.removeByIdentifier(this.$vnode.tag as string);
            document.removeEventListener(MOUSEWHEEL_EVENT, this.mouseWheel);
        }
    }
</script>