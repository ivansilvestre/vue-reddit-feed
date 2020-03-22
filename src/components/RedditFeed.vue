<template>
  <div class="main">
    <h1>REDDIT FEED</h1>
    <button @click="getPosts(ph)">Programmers Humor</button>
    <button @click="getPosts(futurology)">Futurology</button>

    <div class="container">
      <ul v-if="posts && posts.length">
        <li v-for="post of posts" :key="post.id">
          <a :href="post.data.url" target="_blank">
            <div class="reddit-post">
              <div>{{ post.data.title }}</div>
              <img :src="post.data.url" alt />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "RedditFeed",
  data() {
    return {
      posts: [],
      image: String,
      ph: "https://www.reddit.com/r/ProgrammerHumor.json",
      futurology: "https://www.reddit.com/r/Futurology.json"
    };
  },
  created() {
    this.getPosts(this.ph);
  },
  methods: {
    getPosts: function(channel: string) {
      axios
        .get(channel)
        .then(response => {
          this.posts = response.data.data.children;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
});
</script>

<style scoped></style>