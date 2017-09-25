<template>
    <div class="ui basic slim segment animated fadeIn" v-bind:class="{ loading: loading }">
        <h3 class="ui header">{{ $props.channel }}</h3>

        <div class="ui grid padded">
            <div class="one column row">
                <video id="TwitchPlayer" width="1536" height="864" class="video-js vjs-default-skin" controls></video>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Rest} from "../service/Rest";
    import {Video} from "../models/Video";


    @Component({
        props: {
            channel: String
        }
    })
    export default class PlayerComponent extends Vue {

        public m3u8: string = '';
        public loading: boolean = false;
        public player: any;

        mounted () {
            this.m3u8 = '';
            this.player = videojs('TwitchPlayer');

            this.loading = true;
            new Rest().resolveStreamUrl(this.$props.channel).then((result) => {
                let response = JSON.parse(result) as any;
                if (response.success) {
                    this.video = new Video(response);
                    this.m3u8 = this.video.bestResolution();

                    this.player.src({
                        src: this.m3u8,
                        type: 'application/x-mpegURL'
                    });
                    this.player.play();

                    this.loading = false;
                }
            });

        }

        beforeDestroy() {
            this.player.dispose();
        }
    }
</script>