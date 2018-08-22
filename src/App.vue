<template>
  <div>
    <h3>Extra Extra Read all about it</h3>
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/top_news">Top News</router-link>
    <hr>
    <router-view></router-view>

    <Category />
  </div>
</template>

<script>
import Category from './components/Category';

export default {
  components: {
    Category
  }
}
</script>

<style>

</style>
