<template>
    <div class="ui middle aligned stackable grid container">
        <div v-for="channel in channels" class="four wide column">
            <div class="ui card">
                <div class="image">
                    <img v-bind:src="channel.url"/>
                </div>
                <div class="content">
                    <a class="header">{{ channel.channel }}</a>
                    <div class="description">
                        {{ channel.game }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Channel} from "../models/Channel.ts";

    export default Vue.extend({
        data() {
            return {
                channels: [
                    new Channel("BATTLEGROUNDS", "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-272x380.jpg", "gaming"),
                    new Channel("WOW", "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-272x380.jpg", "gaming"),
                    new Channel("HEARTSTONE", "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-272x380.jpg", "gaming")
                ]
            }
        },
        methods: {
        }
    });
</script>