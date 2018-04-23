<template>
    <div class="ui left visible vertical inverted sidebar slim menu">
        <router-link :to="{ name: 'game-featured'}" class="ui item large">
            <i class="home icon"></i>
            Games
        </router-link>
        <router-link :to="{ name: 'stream-featured'}" class="item">
            <i class="block layout icon"></i>
            Streams
        </router-link>
        <router-link :to="{ name: 'channel'}" class="item">
            <i class="smile icon"></i>
            Channels
        </router-link>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class SidebarComponent extends Vue {}
</script>