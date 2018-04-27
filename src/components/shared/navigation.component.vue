<script lang="ts">
    import Vue from "vue";
    import NavigationService from "../../service/navigation.service";
    import NavigationItem from "../../models/NavigationItem";
    import NavigationGroup from "../../models/NavigationGroup";

    export abstract class Navigation extends Vue {
        public mounted() {
            NavigationService.navigationAdd(new NavigationGroup(
                this.$vnode.tag as string,
                this.$children.map((component: Vue) => {
                    return  new NavigationItem(component.$el);
                }))
            );
        }

        public destroyed() {
            NavigationService.removeByIdentifier(this.$vnode.tag as string);
        }
    }
</script>