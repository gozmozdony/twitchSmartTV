<template>
    <div class="ui basic slim segment animated fadeIn" v-bind:class="{ loading: loading }">
        <h3 class="ui header">Channels</h3>

        <div class="ui grid padded">
            <div class="one column row">
                <div class="column">
                    <div class="ui search" v-bind:class="{ loading: loading }">
                        <div class="ui icon input" style="width: 100%;" >
                            <input class="prompt" type="text" v-model="input" placeholder="Search games..." v-on:keyup.enter="search()">
                            <i class="search icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui grid padded">
            <h3 class="ui center aligned header" v-if="channels.length === 0">No channels to show</h3>
            <div v-for="channelGroup in channelGroups" v-if="channels" class="four column row">
                <div v-for="channel in channelGroup" class="column">
                    <router-link :to="{ name: 'game', params: { channel: channel.name }}" class="ui card animated bounceIn">
                        <div class="image" v-bind:style="{ 'background-color': channel.logo ? '' : '#6441A4' }">
                            <img v-bind:src="channel.logo ? channel.logo : 'largeIcon.png'"/>
                        </div>
                        <div class="content">
                            <div class="header">{{ channel.name }}</div>
                        </div>
                        <div class="extra content">
                        <span>
                        <i class="eye icon"></i>
                            {{ channel.followers }} Viewers
                        </span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Channel} from "../models/Channel.ts";
    import {ChannelService} from "../service/Channel.ts";

    @Component({
        props: {
            channel: String
        }
    })
    export default class ChannelComponent extends Vue {

        public loading: boolean = false;
        public channels: Array<Channel> = [];
        public channelGroups: Array<Array<Channel>> = [];
        public input: string = '';
        public service: ChannelService = new ChannelService();

        search() {
            if (this.input !== '') {
                this.loading= true;
                this.service.search(this.input).then((result) => {
                    this.channels = JSON.parse(result).channels.map(this.service.map);
                    this.channelGroups = this.service.intoChunks(this.channels, 4);
                    this.loading = false;
                });
            }
        }
    }

</script>