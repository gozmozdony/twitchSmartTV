<template>
    <div class="ui grid padded search-bar animated fadeIn">
        <div class="one column row">
            <div class="column">
                <div class="ui search" v-bind:class="{ loading: loading }">
                    <div class="ui icon massive input" style="width: 100%;" ref="search" v-on:keyup.enter="setFocus()" tabindex="1">
                        <input class="prompt" type="text" v-model="input" ref="searchInput" :placeholder="'Search ' + service.type + '...'" v-on:keyup.enter="search()">
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
        public searchInput: Element | any;

        public created(): void {
            this.input = (this.$props.init ? this.$props.init : '');
        }
    
        public search(): void {
            this.loading = true;
            this.$emit('searching');
            this.service.search(this.input).then((data) => { 
                this.$emit('search', this.service.map(data));
                this.loading = false;
            });
        }

        public setFocus(): void {
            this.searchInput.focus();
        }

        public mounted(): void {
            this.searchInput = this.$refs.searchInput as Element;
            NavigationService.navigationAdd(
                new NavigationGroup(
                    'search',
                    [
                        new NavigationItem(this.$refs.search as any)
                    ]
                )
            );
        }

        public destroyed(): void {
            NavigationService.removeByIdentifier('search');
        }
 
    }
</script>
<style>
    .search-bar{ 
        z-index: 101;
        position: relative;
    }
    .search-bar .ui.search .ui.icon.input>input{
        font-size: 1.5rem;
    }
    .search-bar  .ui.loading.loading.input>i.icon:after {
        top: 45%;
    }
    .search-bar  .ui.loading.loading.input>i.icon:before {
        top: 45%;
    }
</style>