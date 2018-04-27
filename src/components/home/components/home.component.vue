<template>
    <div class="ui basic slim segment animated fadeIn clickable-group">

        <loader-component v-if="loading"></loader-component>

        <game-list-component 
            :list="games" 
            v-if="!loading">
        </game-list-component>

    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import { Game } from "../../game/models/Game";
    import { GameService } from "../../game/services/game.service";
    import LoaderComponent from "../../shared/loader.component.vue";
    import GameListComponent from "../../game/components/games.list.component.vue";

    @Component({
        components: {
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