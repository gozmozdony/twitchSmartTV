<template>
    <div class="ui grid padded scrollable">
        <div class="content">
            <div v-for="stream in list" :key="stream.id" class="four wide clickable">
                <router-link :to="{ name: 'game', params: { channel: stream.channel.name }}" class="ui card animated bounceIn" :ref="stream.id">
                    <div class="image">
                        <img v-bind:src="stream.preview.large"/>
                    </div>
                    <div class="content">
                        <div class="header">{{ stream.channel.name }}</div>
                        <div class="meta">
                            <span>
                                <i class="gamepad icon"></i>
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
    </div>
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import { Stream } from "../models/Stream";
    import { Navigation } from "../../shared/navigation.component.vue";

    @Component({
        props: {
            list: Array
        }
    })
    export default class StreamListComponent extends Navigation {
        public list: Stream[];

        public mounted() {
            super.mounted();
        }
    }
</script>