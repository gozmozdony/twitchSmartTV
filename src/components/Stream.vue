<template>
    <div class="ui basic slim segment animated fadeIn" v-bind:class="{ loading: loading }">
        <h3 class="ui header">Streams</h3>

        <div class="ui grid padded">
            <div class="one column row">
                <div class="column">
                    <div class="ui search" v-bind:class="{ loading: loading }">
                        <div class="ui icon input" style="width: 100%;">
                            <input class="prompt" type="text" v-model="input" placeholder="Search games..." v-on:keyup.enter="search()">
                            <i class="search icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui grid padded">
            <h3 class="ui center aligned header" v-if="streams.length === 0">No streams to show</h3>
            <div v-for="streamGroup in streamGroups" v-if="streams" class="four column row">
                <div v-for="stream in streamGroup" class="column">
                    <router-link :to="{ name: 'game', params: { channel: stream.channel.name }}" class="ui card animated bounceIn">
                        <div class="image">
                            <img v-bind:src="stream.preview.large"/>
                        </div>
                        <div class="content">
                            <div class="header">{{ stream.channel.name }}</div>
                            <div class="meta">
                            <span class="date">
                                <i class="tv icon"></i>
                                {{ stream.game }}
                            </span>
                            </div>
                        </div>
                        <div class="extra content">
                        <span>
                        <i class="eye icon"></i>
                            {{ stream.viewers }} Views
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
    import {Stream} from "../models/Stream.ts";
    import {StreamService} from "../service/Stream.ts";


    @Component({
        props: {
            game: String
        }
    })
    export default class StreamComponent extends Vue {

        public loading: boolean = false;
        public streams: Array<Stream> = [];
        public streamGroups: Array<Array<Stream>> = [];
        public input: string = '';
        public service: StreamService = new StreamService();

        get searchQuery() {
            return this.input !== '' ? this.input : this.$props.game ? this.$props.game : false;
        }

        search() {
            this.loading= true;
            this.service.search(this.searchQuery).then((result) => {
                this.streams = JSON.parse(result).streams.map(this.service.map);
                this.streamGroups = this.service.intoChunks(this.streams, 4);
                this.loading = false;
            });
        }

        featured() {
            this.loading= true;
            this.service.featured().then((result) => {
                this.streams = JSON.parse(result).featured.map(this.service.map);
                this.streamGroups = this.service.intoChunks(this.streams, 4);
                this.loading = false;
            });
        }

        created () {
            if (!this.searchQuery) {
                this.featured();
            } else {
                this.search();
            }

        }
    }

</script>