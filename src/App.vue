<template>
  <div class="front-page">
    <router-view></router-view>

  </div>
</template>

<script>
// import Category from './components/Category';
import Home from './components/Home';

export default {
  components: {
    Home,
  }
}
</script>

<style>
  #app {
    display: grid;
  }

  .front-page {
    text-align: center;
    font-family: montserrat,sans-serif;
  }


</style>
