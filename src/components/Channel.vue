<template>
    <div class="ui vertical stripe segment">
        <div v-if="loading">
            <loader-component/>
        </div>
        <div class="ui middle aligned stackable grid container">
            <div v-for="channel in channels" class="four wide column" v-if="channels">
                <div class="ui card">
                    <div class="image">
                        <img v-bind:src="channel.logo"/>
                    </div>
                    <div class="content">
                        <router-link :to="{ name: 'stream', params: { game: $props.game }}" class="header">{{ channel.name }}</router-link>
                    </div>
                    <div class="extra content">
                        <span>
                        <i class="eye icon"></i>
                            {{ channel.followers }} Viewers
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
    import {Channel} from "../models/Channel.ts";
    import {ChannelService} from "../service/Channel.ts";
    import LoaderComponent from "./Loader.vue";


    @Component({
        props: {
            game: String
        },
        components: {
            'loader-component': LoaderComponent
        }
    })
    export default class ChannelComponent extends Vue {
        loading = false;
        channels = [];

        created () {
            this.loading= true;
            new ChannelService().search(this.$props.game).then((result) => {
                this.channels = JSON.parse(result).channels.map(
                    (item) => new Channel(item)
                    ) as any;
                console.log(this.channels);
                this.loading = false;
            });
        }
    }

</script>