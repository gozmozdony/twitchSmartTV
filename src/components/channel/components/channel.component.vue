<template>
    <div class="ui basic slim segment main-segment animated fadeIn clickable-group mt-0 pt-0">
        <search-component 
            :service="service"
            :init="channel"
            @searching="searching"
            @search="search">
        </search-component>

        <loader-component v-if="loading"></loader-component>

        <div class="column info-message" v-if="channels.length === 0 && !loading">
            <h2 class="ui center inverted aligned icon header">
                <i class="circular users icon"></i>
                Search for channels
            </h2>
        </div>
 

        <channel-list-component 
            :list="channels" 
            v-if="!loading && channels.length !== 0">
        </channel-list-component>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Channel} from "../models/channel";
    import {ChannelService} from "../services/channel";
    import SearchComponent from "../../shared/search.component.vue";
    import LoaderComponent from "../../shared/loader.component.vue";
    import ChannelListComponent from "./channel.list.component.vue";

    @Component({
        components: {
            SearchComponent,
            LoaderComponent,
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