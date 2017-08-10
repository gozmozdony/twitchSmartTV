import Vue from "vue";
import GamesComponent from "./components/Games.vue";
import PlayerComponent from "./components/Player.vue";
import ChannelComponent from "./components/Channel.vue";
import StreamComponent from "./components/Stream.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    { path: '/game/featured', component: GamesComponent,  name: 'game-featured'},
    { path: '/game/:channel', component: PlayerComponent, props: true, name: 'game' },
    //{ path: '/channel/:game', component: ChannelComponent, props: true, name: 'channel' },
    { path: '/show/:game', component: StreamComponent, props: true, name: 'stream-search' },
    { path: '/stream/featured', component: StreamComponent, props: true, name: 'stream-featured' }
];

const router = new VueRouter({
    routes
});

let app = new Vue({
    router
}).$mount('#app');

