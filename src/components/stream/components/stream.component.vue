<template>
    <div class="ui basic slim segment main-segment animated fadeIn clickable-group mt-0 pt-0">
        <search-component 
            :service="service"
            :init="game"
            @searching="searching"
            @search="search">
        </search-component>

        <loader-component v-if="loading"></loader-component>

        <div class="column info-message fadeIn animated" v-if="streams.length === 0 && !loading">
            <h2 class="ui center inverted aligned icon header">
                <i class="circular video icon"></i>
                No streams to show
            </h2>
        </div>

        <stream-list-component 
            :list="streams" 
            v-if="!loading && streams.length !== 0">
        </stream-list-component>

    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import SearchComponent from "../../shared/search.component.vue";
    import LoaderComponent from "../../shared/loader.component.vue";
    import StreamListComponent from "./stream.list.component.vue";
    import { Stream } from "../models/stream";
    import { StreamService } from "../services/stream.service";

    @Component({
        components: {
            SearchComponent,
            LoaderComponent,
            StreamListComponent
        },
        props: {
            game: String
        }
    })
    export default class StreamComponent extends Vue {

        public loading: boolean = false;
        public game: string;
        public streams: Array<Stream> = [];
        public service: StreamService = new StreamService();

        public created () {
            this.loading= true;
            this.service.search(this.$props.game).then((result: string) => {
                this.streams = this.service.map(result);

                this.loading = false;
            });
        }

        public searching() {
            this.loading = true;
        }

        public search(streams: Stream[]) {
            this.streams = streams
            this.loading = false;
        }
    }

</script>