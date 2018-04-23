<template>
    <div class="ui basic slim segment animated fadeIn mt-0 pt-0" v-bind:class="{ loading: loading }">
        <search-component 
            :service="service"
            :init="game"
            @searching="searching"
            @search="search">
            </search-component>

        <stream-list-component 
            :list="streams" 
            v-if="!loading">
        </stream-list-component>

    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import SearchComponent from "../../shared/search.component.vue";
    import StreamListComponent from "./stream.list.component.vue";
    import { Stream } from "../models/stream";
    import { StreamService } from "../services/stream.service";

    @Component({
        components: {
            SearchComponent,
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