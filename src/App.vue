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

<style scoped>
  #app {
    display: grid;
  }

  .front-page {
    background-color: aliceblue;
    text-align: center;
  }


</style>
