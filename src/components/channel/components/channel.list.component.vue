<template>
    <div class="ui grid padded scrollable">
        <div class="content">
            <div v-for="channel in list" :key="channel.id" class="four wide clickable">
                <router-link :to="{ name: 'game', params: { channel: channel.name }}" class="ui card animated fadeInDown">
                    <div class="image" v-bind:style="{ 'background-color': channel.logo ? '' : '#6441A4' }">
                        <img v-bind:src="channel.logo ? channel.logo : 'largeIcon.png'"/>
                    </div>
                    <div class="content"  :class="{'live': channel.live}">
                        <div class="header">{{ channel.name }}</div>
                        <div class="meta">
                            <span>
                                <i class="eye icon"></i>
                                {{ channel.views }} Views
                            </span>
                            <span>
                                <i class="bell icon"></i>
                                {{ channel.followers }} Followers
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import { Channel } from "../models/Channel";
    import { Navigation } from "../../shared/navigation.component.vue";

    @Component({
        props: {
            list: Array
        }
    })
    export default class GameListComponent extends Navigation {
        public list: Channel[];

        public mounted() {
            super.mounted();
        }

        public destroyed() {
            super.destroyed();
        }
    }
</script>

<style>
    .content.live:before {
        content: '';
        display: block;
        position: absolute;
        top: 5px;
        right: 5px;
        width: 20px;
        height: 20px;
        opacity: 0.7;
        border-radius: 20px;
        background-color: red;
    }
</style>