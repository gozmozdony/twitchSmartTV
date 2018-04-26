<template>
    <div class="ui grid padded search-bar">
        <div class="one column row">
            <div class="column">
                <div class="ui search" v-bind:class="{ loading: loading }">
                    <div class="ui icon massive input" style="width: 100%;">
                        <input class="prompt" type="text" v-model="input" ref="search" placeholder="Search games..." v-on:keyup.enter="search()">
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
    import NavigationGroup from "../../models/NavigationGroup";
    import NavigationItem from "../../models/NavigationItem";
    import NavigationService from "../../service/navigation.service";

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

        public mounted() {
            NavigationService.navigationAdd(
                new NavigationGroup([
                    new NavigationItem(this.$refs.search as any)
                ])
            );
        }
 
    }
</script>
<style>
    .search-bar{ 
        z-index: 101;
        position: relative;
    }
</style>