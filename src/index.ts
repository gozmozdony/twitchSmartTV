import Vue from "vue";
// @ts-ignore
import GamesComponent from "./components/game/components/game.component.vue";
// @ts-ignore
import PlayerComponent from "./components/channel/components/player.component.vue";
// @ts-ignore
import ChannelComponent from "./components/channel/components/channel.component.vue";
// @ts-ignore
import StreamComponent from "./components/stream/components/stream.component";
// @ts-ignore
import HomeComponent from "./components/home/components/home.component";
// @ts-ignore
import MenuComponent from "./components/shared/menu.component.vue";
import VueRouter from "vue-router";
// @ts-ignore
import GlobalEvents from 'vue-global-events';
import NavigationService from "./service/navigation.service";

Vue.use(VueRouter);
Vue.component(GlobalEvents);

const routes = [
    { path: '/', component: HomeComponent, name: 'home' },
    { path: '/game/featured', component: GamesComponent,  name: 'game-featured'},
    { path: '/game/:channel', component: PlayerComponent, props: true, name: 'game' },
    { path: '/channel/', component: ChannelComponent, props: true, name: 'channel' },
    { path: '/stream/:game', component: StreamComponent, props: true, name: 'stream-search' },
    { path: '/stream/', component: StreamComponent, props: true, name: 'stream-featured' }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    components: {
        'menu-component': MenuComponent,
        'global-events': GlobalEvents
    },
    data: {
        navigation: NavigationService
    }
}).$mount('#app');
