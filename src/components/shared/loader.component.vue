<template>
    <div class="ui active inline centered dimmer">
        <div class="ui massive text loader">Loading</div>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        props: {
            loading: Boolean
        }
    })
    export default class LoaderComponent extends Vue {}
</script>
<style>
    .ui.active.inline.centered.dimmer {
        background: transparent;
    }
</style>