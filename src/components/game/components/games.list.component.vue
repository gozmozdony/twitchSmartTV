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
    import Vue from "vue";
    import Component from "vue-class-component";
    import { Game } from "../models/Game";
    import NavigationGroup from "../../../models/NavigationGroup";
    import NavigationItem from "../../../models/NavigationItem";
    import NavigationService from "../../../service/navigation.service";

    @Component({
        props: {
            list: Array
        }
    })
    export default class GameListComponent extends Vue {
        public list: Game[];

        public mounted() {
            NavigationService.navigationAdd(new NavigationGroup(this.list.map((game: Game) => {
                return  new NavigationItem('navigationItemGames', this.$refs[game.id][0].$el);
            })));
        }

        public destroyed() {
            NavigationService.removeLast();
        }
    }
</script>