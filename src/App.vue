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
/*    background-color: #f7f7f7;*/
  }

/*  @media screen and (max-width: 960px) {
    .parent {width: 100%; margin: 20px 0px}
        .wrapper {padding: 20px 20px;}
}*/


</style>
