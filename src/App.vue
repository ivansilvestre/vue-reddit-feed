<template>
  <div id="app">
    <RedditFeed />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RedditFeed from "./components/RedditFeed.vue";

@Component({
  components: {
    RedditFeed
  }
})
export default class App extends Vue {}
</script>

<style>
</style>
