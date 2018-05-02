<template>
    <div class="ui basic slim segment animated fadeIn">
        <div class="ui active centered dimmer player-loader" v-if="loading">
            <div class="ui text massive loader">Loading</div>
        </div>
        <div class="ui grid padded">
            
            <div class="one column row video-column">
                <video id="twitchPlayer" width="1536" height="864" controls autoplay>
                </video>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import LoaderComponent from "../../shared/loader.component.vue";
    import { Video } from "../../../models/Video";
    import { Rest } from "../../../service/Rest";


    @Component({
        components: {            
            LoaderComponent
        },
        props: {
            channel: String
        }
    })
    export default class PlayerComponent extends Vue {

        public source: HTMLSourceElement;
        public loading: boolean = false;
        public player: HTMLVideoElement;
        public video: Video;

        public mounted () {
            this.player = <HTMLVideoElement>document.getElementById("twitchPlayer");
            this.player.load();

            this.loading = true;
            new Rest().resolveStreamUrl(this.$props.channel).then((result) => {
                let response = JSON.parse(result) as any;
                if (response.success) {
                    this.video = new Video(response);
                    this.source = document.createElement("source");
                    this.source.setAttribute("src", this.video.bestResolution());
                    this.source.setAttribute("type", "application/x-mpegURL");
                    this.player.appendChild(this.source);

                    this.loading = false;
                }
            });

        }

        public beforeDestroy() {
            //this.player.dispose();
        }
    }
</script>

<style scoped>
    .one.column.row.video-column {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .one.column.row.video-column .video-js {
        height: 78vh !important;
        width: 70vw !important;
    }
    .ui.active.centered.dimmer.player-loader {
        background: transparent;
    }
    .vjs-resize-manager {
        opacity: 0;
    }
</style>