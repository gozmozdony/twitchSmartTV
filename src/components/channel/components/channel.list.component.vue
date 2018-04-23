<template>
    <div class="ui grid padded scrollable">
        <div v-for="channel in list" :key="channel.id" class="four wide column">
            <router-link :to="{ name: 'game', params: { channel: channel.name }}" class="ui card animated bounceIn">
                <div class="image" v-bind:style="{ 'background-color': channel.logo ? '' : '#6441A4' }">
                    <img v-bind:src="channel.logo ? channel.logo : 'largeIcon.png'"/>
                </div>
                <div class="content">
                    <div class="header">{{ channel.name }}</div>
                    <div class="meta">
                        <span>
                            <i class="eye icon"></i>
                            {{ channel.followers }} Viewers
                        </span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import { Channel } from "../models/Channel";

    @Component({
        props: {
            list: Array
        }
    })
    export default class GameListComponent extends Vue {
        public list: Channel[];
    }
</script>