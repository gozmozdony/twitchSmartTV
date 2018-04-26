<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import NavigationService from "../../service/navigation.service";
    import NavigationItem from "../../models/NavigationItem";
    import NavigationGroup from "../../models/NavigationGroup";

    @Component
    export default class NavigationComponent extends Vue {

        public mounted() {
            NavigationService.navigationAdd(new NavigationGroup([
                new NavigationItem('navigationItemGames', this.$refs.navigationItemGames.$el),
                new NavigationItem('navigationItemStreams', this.$refs.navigationItemStreams.$el),
                new NavigationItem('navigationItemChannels', this.$refs.navigationItemChannels.$el)
            ]));
        }

    }
</script>