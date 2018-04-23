<template>
    <div class="ui grid padded scrollable">
        <h3 class="ui center aligned header" v-if="list.length === 0">No streams to show</h3>
      <div v-for="stream in list" :key="stream.id" class="four wide column">
            <router-link :to="{ name: 'game', params: { channel: stream.channel.name }}" class="ui card animated bounceIn">
                <div class="image">
                    <img v-bind:src="stream.preview.large"/>
                </div>
                <div class="content">
                    <div class="header">{{ stream.channel.name }}</div>
                    <div class="meta">
                        <span class="date">
                            <i class="tv icon"></i>
                            {{ stream.game }}
                        </span>
                        <span>
                            <i class="eye icon"></i>
                            {{ stream.viewers }} Views
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
    import { Stream } from "../models/Stream";

    @Component({
        props: {
            list: Array
        }
    })
    export default class StreamListComponent extends Vue {
        public list: Stream[];
    }
</script>

<style>
    .ui.grid.scrollable {
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
    a.ui.card {
        height: 100%;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
    }

    a.ui.card:focus {
        box-shadow: 1px 1px 2px 4px #6441A4;
    }

    .ui.card .content {
        position: absolute;
        z-index: 100;
        width: 100%;
        background: rgba(0,0,0,0.5);
    }
    .ui.card .content .header {
        color: #fff;
    }
    .ui.card .content .meta {
        display: block;
        color: #fff;
    }
</style>