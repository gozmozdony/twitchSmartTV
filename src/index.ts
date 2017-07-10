import Vue from "vue";
import ChannelsComponent from "./components/Channels.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div class="ui vertical stripe segment">
        <channels-component/>
    </div>
    `,
    data: { name: "World" },
    components: {
        ChannelsComponent
    }
});