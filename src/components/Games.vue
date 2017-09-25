<template>
    <div class="ui basic slim segment animated fadeIn" v-bind:class="{ loading: loading }">
        <h3 class="ui header">Games</h3>

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
            <h3 class="ui center aligned header" v-if="games.length === 0">No games to show</h3>
            <div v-for="gameGroup in gamesGroups" v-if="games" class="four column row">
                <div v-for="game in gameGroup" class="column">
                    <router-link :to="{ name: 'stream-search', params: { game: game.localized_name }}" class="ui card animated bounceIn">
                        <div class="image">
                            <img v-bind:src="game.box.large"/>
                        </div>
                        <div class="content">
                            <div class="header">{{ game.name }}</div>
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
                    </router-link>
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

    @Component
    export default class GamesComponent extends Vue {
        public loading: boolean = false;
        public games: Array<Game> = [];
        public gamesGroups: Array<Array<Game>> = [];
        public input: string = '';
        public service: GameService = new GameService();

        get searchQuery() {
            return this.input;
        }

        created () {
            this.loading= true;
            if (this.input !== '') {
                this.search();
            } else {
                this.featured();
            }
        }

        featured () {
            this.loading= true;
            this.service.top().then((result) => {
                this.games = JSON.parse(result).top.map(this.service.map);
                this.gamesGroups = this.service.intoChunks(this.games, 4);
                this.loading = false;
            });
        }

        search() {
            this.loading= true;
            if (this.input === '') {
                this.featured();
                return;
            }
            this.service.search(this.searchQuery).then((result) => {
                if (JSON.parse(result).games) {
                    this.games = JSON.parse(result).games.map(this.service.map);
                    this.gamesGroups = this.service.intoChunks(this.games, 4);
                } else {
                    this.games = [];
                    this.gamesGroups = [];
                }

                this.loading = false;
            });
        }
    }
</script>