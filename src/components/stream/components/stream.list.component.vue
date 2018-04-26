<template>
    <div class="ui grid padded scrollable">
      <div v-for="stream in list" :key="stream.id" class="four wide clickable">
            <router-link :to="{ name: 'game', params: { channel: stream.channel.name }}" class="ui card animated bounceIn" :ref="stream.id">
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
    import NavigationGroup from "../../../models/NavigationGroup";
    import NavigationItem from "../../../models/NavigationItem";
    import NavigationService from "../../../service/navigation.service";

    @Component({
        props: {
            list: Array
        }
    })
    export default class StreamListComponent extends Vue {
        public list: Stream[];

        public mounted() {
            NavigationService.navigationAdd(new NavigationGroup(this.list.map((stream: Stream) => {
                return  new NavigationItem('navigationItemGames', <any>this.$refs[stream.id][0].$el);
            })));
        }
    }
</script>