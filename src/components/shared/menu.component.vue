<template>
    <div class="ui basic segment animated bounceInDown mb-0 clickable-group">
        <div class="ui grid padded">
            <a href="#" class="ui medium image">
                <img :src="'./assets/Twitch_White_RGB.png'">
            </a>
            <div class="ui three massive basic menu">
                <router-link :to="{ name: 'game-featured'}" class="ui animated item large clickable">
                    <i class="home icon"></i>
                    Games
                </router-link>
                <router-link :to="{ name: 'stream-featured'}" class="animated item clickable">
                    <i class="block layout icon"></i>
                    Streams
                </router-link>
                <router-link :to="{ name: 'channel'}" class="animated item clickable">
                    <i class="smile icon"></i>
                    Channels
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class MenuComponent extends Vue {}
</script>

<style>
    .ui.menu {
        background: transparent;
        border: none;
    }
    .ui.menu .item {
        color: #fff;
        font-weight: 700;
        border-bottom: 3px solid;
        border-radius: 0 !important;
        padding: 10px 3px;
        margin: 10px 20px;
    }
    .ui.menu .item:first-of-type {
        margin-left: 0;
    }
    .ui.menu .item:after {
        width: 80%;
        text-align: center;
        display: block;
        content: '';
        height: 3px;
    }
    .ui.menu .item.router-link-active {
        color: #fff;
    }
    .ui.menu .item.router-link-active {
        border-bottom: 8px solid #6441A4;
    }
    .ui.menu .item.router-link-active.focus {
        color: #8b6ac7 ;
    }
    .ui.menu .item.focus {
        color: #8b6ac7;
        border-bottom: 8px solid #8b6ac7;
    }
</style>