<template>
    <div class="ui vertical stripe segment">
        <div v-if="loading">
            <loader-component/>
        </div>
        <div class="ui middle aligned stackable grid container">
            <div v-for="stream in streams" class="four wide column" v-if="streams">
                <div class="ui card">
                    <div class="image">
                        <img v-bind:src="stream.preview.large"/>
                    </div>
                    <div class="content">
                        <router-link :to="{ name: 'game', params: { channel: stream.channel.name }}" class="header">{{ stream.channel.name }}</router-link>
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
    import LoaderComponent from "./Loader.vue";


    @Component({
        props: {
            game: String
        },
        components: {
            'loader-component': LoaderComponent
        }
    })
    export default class StreamComponent extends Vue {
        loading = false;
        streams = [];

        created () {
            this.loading= true;
            console.log(this.$props.game);
            if (!this.$props.game) {
                new StreamService().featured().then((result) => {
                    this.streams = JSON.parse(result).featured.map(
                            (item) => new Stream(item.stream)
                        ) as any;
                    console.log(JSON.parse(result));
                    this.loading = false;
                });
            } else {
                new StreamService().search(this.$props.game).then((result) => {
                    this.streams = JSON.parse(result).streams.map(
                            (item) => new Stream(item)
                        ) as any;
                    console.log(this.streams);
                    this.loading = false;
                });
            }

        }
    }

</script>