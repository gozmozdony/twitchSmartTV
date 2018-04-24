<template>
    <div class="ui basic slim segment main-segment animated fadeIn clickable-group mt-0 pt-0">

        <search-component 
            :service="service"
            @searching="searching"
            @search="search">
        </search-component>

        <loader-component v-if="loading"></loader-component>

        <div class="column info-message" v-if="games.length === 0 && !loading">
            <h2 class="ui center inverted aligned icon header">
                <i class="circular gamepad icon"></i>
                No games to show
            </h2>
        </div>

        <game-list-component 
            :list="games" 
            v-if="!loading && games.length !== 0">
        </game-list-component>

    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import { Game } from "../models/Game";
    import { GameService } from "../services/game.service";
    import SearchComponent from "../../shared/search.component.vue";
    import LoaderComponent from "../../shared/loader.component.vue";
    import GameListComponent from "./games.list.component.vue";

    @Component({
        components: {
            SearchComponent,
            LoaderComponent,
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