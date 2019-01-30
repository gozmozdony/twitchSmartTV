import ChannelComponent from './components/channel/components/channel.component.vue';
import GamesComponent from './components/game/components/game.component.vue';
// @ts-ignore
import GlobalEvents from 'vue-global-events';
import HomeComponent from './components/home/components/home.component.vue';
import MenuComponent from './components/shared/menu.component.vue';
import NavigationService from './service/navigation.service';
import PlayerComponent from './components/channel/components/player.component.vue';
import StreamComponent from './components/stream/components/stream.component.vue';
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import VueRouter from 'vue-router';

Vue.use(VueLazyload);
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
