<template>
  <div>
    <h3>Extra Extra Read all about it</h3>
    <hr>
    <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/top_news'">Top News</router-link>
    <hr>
    <router-view></router-view>

    <Category />
  </div>
</template>

<script>
// import Category from './components/Category';
import Home from './components/Home';

export default {
  components: {
    Home
  }
}
</script>

<style>

</style>
