<template>
    <div class="ui grid padded scrollable">
        <div v-for="game in list" :key="game.id" class="four wide clickable">
            <router-link :to="{ name: 'stream-search', params: { game: game.localized_name }}" class="ui card animated bounceIn" :ref="game.id">
                <div class="content">
                    <div class="header">{{ game.name }}</div>
                    <div class="meta">
                        <span class="date">
                            <i class="tv icon"></i>
                            {{ game.channels }} Channels
                        </span>
                        <span>
                        <i class="eye icon"></i>
                            {{ game.viewers }} Viewers
                        </span>
                    </div>
                </div>
                <div class="image">
                    <img v-bind:src="game.box.sized"/>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import { Game } from "../models/Game";
    import { Navigation } from "../../shared/navigation.component.vue";

    @Component({
        props: {
            list: Array
        }
    })
    export default class GameListComponent extends Navigation {
        public list: Game[];

        public mounted() {
            super.mounted();
        }
    }
</script>