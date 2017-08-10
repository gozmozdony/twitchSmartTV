<template>
    <div class="ui active centered inline loader"></div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class LoaderComponent extends Vue {
        input = null;
    }
</script>