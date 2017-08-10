<template>
    <div class="ui vertical stripe segment">
        <div v-if="loading">
            <loader-component/>
        </div>
        <div class="ui middle aligned stackable grid container">
            <div v-for="game in games" class="four wide column" v-if="games">
                <div class="ui card">
                    <div class="image">
                        <img v-bind:src="game.box.large"/>
                    </div>
                    <div class="content">
                        <router-link :to="{ name: 'stream-search', params: { game: game.localized_name }}" class="header">{{ game.name }}</router-link>
                        <div class="meta">
                            <span class="date">
                                <i class="tv icon"></i>
                                {{ game.channels }} Channels
                            </span>
                        </div>
                    </div>
                    <div class="extra content">
                        <span>
                        <i class="eye icon"></i>
                            {{ game.viewers }} Viewers
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
    import {Game} from "../models/Game.ts";
    import {GameService} from "../service/Game.ts";
    import LoaderComponent from "./Loader.vue";


    @Component({
        components: {
            'loader-component': LoaderComponent
        }
    })
    export default class GamesComponent extends Vue {
        loading = false;
        games = [];

        created () {
            this.loading= true;
            new GameService().top().then((result) => {
                this.games = JSON.parse(result).top.map(
                    (item) => new Game(item)
                    ) as any;
                this.loading = false;
            });
        }
    }
</script>