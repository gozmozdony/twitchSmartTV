<template>
    <div class="ui basic segment animated fadeIn mb-0">
        <div class="ui grid padded menu-padded">
            <router-link :to="{ name: 'home'}" href="#" class="ui medium image logo-img no-navi"></router-link>
            <div class="ui three massive basic menu">
                <router-link :to="{ name: 'game-featured'}" class="ui animated item large" ref="navigationItemGames">
                    <i class="gamepad icon"></i>
                    Games
                </router-link>
                <router-link :to="{ name: 'stream-featured'}" class="animated item"  ref="navigationItemStreams">
                    <i class="video icon"></i>
                    Streams
                </router-link>
                <router-link :to="{ name: 'channel'}" class="animated item" ref="navigationItemChannels">
                    <i class="users icon"></i>
                    Channels
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import { Navigation } from "./navigation.component.vue";

    @Component
    export default class MenuComponent extends Navigation {

        public mounted() {
            super.mounted();
        }

    }
</script>

<style scoped>
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
        font-size: 2rem;
        -webkit-transition : all 100ms ease-out; 
        -moz-transition : all 100ms ease-out;
        -o-transition : all 100ms ease-out;
        transition : all 100ms ease-out;
        outline:none;
    }
    .ui.menu .item:first-of-type {
        margin-left: 0;
    }
    .ui.menu .item.router-link-active {
        color: #fff;
    }
    .ui.menu .item.router-link-active {
        border-bottom: 8px solid #6441A4;
    }
    .ui.menu .item.router-link-active:focus {
        color: #8b6ac7 ;
    }
    .ui.menu .item:focus {
        color: #8b6ac7;
        border-bottom: 8px solid #8b6ac7;
    }
    .ui.menu .item:hover {
        color: #8b6ac7 !important;
        border-bottom: 8px solid #8b6ac7;
    }
    .menu-padded {
        padding: 1rem 1rem 0 1rem;
    }
</style>