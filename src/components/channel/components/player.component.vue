<template>
    <div class="ui basic slim segment animated fadeIn">
        <div class="ui active centered dimmer player-loader" v-if="loading">
            <div class="ui text massive loader">Loading</div>
        </div>
        <div class="ui grid padded">
            <div class="one column row video-column">
                <div class="row">
                    <div class="row padded">
                        <button class="ui inverted aligned icon video-expand" ref="fullScreen" v-on:click="fullScreen()">
                            <i class="circular expand icon"></i>
                        </button>
                    </div>
                    <div class="row padded">
                        <button class="ui inverted aligned icon video-expand" ref="videoNav" v-on:click="stopStart()">
                            <i class="circular icon" :class="{'pause': playing, 'play': !playing}"></i>
                        </button>
                    </div>
                </div>
                <video id="twitchPlayer" width="1536" height="864" autoplay></video>            
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
    import NavigationService from "../../../service/navigation.service";
    import NavigationGroup from "../../../models/NavigationGroup";
    import NavigationItem from "../../../models/NavigationItem";


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
        public playing: boolean = false;
        public video: Video;

        public mounted (): void {
            NavigationService.navigationAdd(new NavigationGroup('videoExpand',[new NavigationItem(this.$refs.fullScreen as any)]));
            NavigationService.navigationAdd(new NavigationGroup('videoNav',[new NavigationItem(this.$refs.videoNav as any)]));

            this.player = <HTMLVideoElement>document.getElementById("twitchPlayer");
            this.player.load();

            this.player.addEventListener('loadeddata', () => {
                this.loading = false;
                this.playing = true;
                this.player.play();
            });

            this.loading = true;
            new Rest().resolveStreamUrl(this.$props.channel).then((result) => {
                let response = JSON.parse(result) as any;
                this.video = new Video(response.streams);
                this.handleHLS();
            });
        }

        public handleHLS(): void {
            this.source = document.createElement("source");
            this.source.setAttribute("src", this.video.bestResolution());
            this.source.setAttribute("type", "application/x-mpegURL");
            
            this.player.appendChild(this.source);
        }

        public fullScreen(): void {
            if (this.player.requestFullscreen) {
                this.player.requestFullscreen();
            } else if (this.player.webkitRequestFullscreen) {
                this.player.webkitRequestFullscreen();
            } else {
                console.log("Fullscreen API is not supported");
            }
        }

        public stopStart(): void {        
            if (this.player.paused) {
                this.player.play();                
            } else {
                this.player.pause();
            }
            this.playing = !this.player.paused;
        }

        public beforeDestroy(): void {
            this.player.pause()
            this.player.removeChild(this.source);
            NavigationService.removeByIdentifier('videoExpand');            
            NavigationService.removeByIdentifier('videoNav');            
        }
    }
</script>

<style scoped>
    .one.column.row.video-column {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
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
    .video-expand {
        background: none;
        border: none;
    }
    .video-expand i.icon {
        background: rgba(255,255,255, 0.3);
        box-shadow: none;
        transition: all 0.3s ease;
        cursor: pointer;
        font-size: 3rem;
    }
    .video-expand:focus i.icon, .video-expand:hover i.icon {
        background: rgba(255,255,255, 0.8);
        color: #6441A4; 
    }
    .row.padded {
        padding: 1rem;
    }
    video {
        z-index: 50000;
        position: relative;
    }
</style>