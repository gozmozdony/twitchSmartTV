<template>
    <div class="ui basic slim segment animated fadeIn clickable-group mt-0 pt-0" v-bind:class="{ loading: loading }">

        <search-component 
            :service="service"
            @searching="searching"
            @search="search">
            </search-component>

        <h3 class="ui center aligned header" v-if="games.length === 0">No games to show</h3>
        <game-list-component 
            :list="games" 
            v-if="!loading">
        </game-list-component>

    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import { Game } from "../models/Game";
    import { GameService } from "../services/game.service";
    import SearchComponent from "../../shared/search.component.vue";
    import GameListComponent from "./games.list.component.vue";

    @Component({
        components: {
            SearchComponent,
            GameListComponent
        }
    })
    export default class GamesComponent extends Vue {
        public loading: boolean = true;
        public games: Array<Game> = [];
        public service: GameService = new GameService();

        public created () {
              this.service.top().then((result: string) => {
                this.games = this.service.map(result);
                this.loading = false;
            });
        }

        public searching() {
            this.loading = true;
        }

        public search(games: Game[]) {
            this.games = games
            this.loading = false;
        }
    }
</script>