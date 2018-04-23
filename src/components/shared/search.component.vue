<template>
    <div class="ui grid padded">
        <div class="one column row">
            <div class="column">
                <div class="ui search" v-bind:class="{ loading: loading }">
                    <div class="ui icon input" style="width: 100%;">
                        <input class="prompt" type="text" v-model="input" placeholder="Search games..." v-on:keyup.enter="search()">
                        <i class="search icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import { RestService } from "../../interfaces/rest.service.interface";

    @Component({
        props: {
            service: Object,
            resource: String,
            init: String
        }
    })
    export default class SearchComponent extends Vue {
        public service: RestService;
        public loading: boolean = false;
        public input: string = '';

        public created() {
            this.input = (this.$props.init ? this.$props.init : '');
        }
    
        public search() {
            this.loading = true;
            this.$emit('searching');
            this.service.search(this.input).then((data) => { 
                this.$emit('search', this.service.map(data));
                this.loading = false;
            });
        }
 
    }
</script>