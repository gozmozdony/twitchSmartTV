<template>
    <div class="ui vertical stripe segment">
        <div class="ui middle aligned stackable grid container">
            <div id="TwitchPlayer"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import LoaderComponent from "./Loader.vue";
    import Component from "vue-class-component";

    @Component({
        props: {
            channel: String
        },
        components: {
            'loader-component': LoaderComponent
        }
    })
    export default class PlayerComponent extends Vue {
        mounted () {
            let options = {
                width: 1155,
                height: 650,
                channel: this.$props.channel
            };
            let player = new Twitch.Player("TwitchPlayer", options);
            player.setVolume(0.5);
        }
    }
</script>