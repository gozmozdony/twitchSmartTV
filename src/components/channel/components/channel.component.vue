<template>
    <div class="ui basic slim segment animated fadeIn mt-0 pt-0" v-bind:class="{ loading: loading }">
        <search-component 
            :service="service"
            :init="channel"
            @searching="searching"
            @search="search">
            </search-component>

        <channel-list-component 
            :list="channels" 
            v-if="!loading">
        </channel-list-component>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Channel} from "../models/channel";
    import {ChannelService} from "../services/channel";
    import SearchComponent from "../../shared/search.component.vue";
    import ChannelListComponent from "./channel.list.component.vue";

    @Component({
        components: {
            SearchComponent,
            ChannelListComponent
        },
        props: {
            channel: String
        }
    })
    export default class ChannelComponent extends Vue {

        public loading: boolean = false;
        public channels: Array<Channel> = [];
        public channel: string;
        public service: ChannelService = new ChannelService();


        public searching() {
            this.loading = true;
        }

        public search(channels: Channel[]) {
            this.channels = channels
            this.loading = false;
        }
    }

</script>

<style>
    .ui.grid.scrollable {
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
    a.ui.card {
        height: 100%;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
    }

    a.ui.card:focus {
        box-shadow: 1px 1px 2px 4px #6441A4;
    }

    .ui.card .content {
        position: absolute;
        z-index: 100;
        width: 100%;
        background: rgba(0,0,0,0.5);
    }
    .ui.card .content .header {
        color: #fff;
    }
    .ui.card .content .meta {
        display: block;
        color: #fff;
    }
</style>