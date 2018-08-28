<template>
  <div class="nav-header">
    <ul>
      <button
        @click="handleClick(categoryId)"
        v-for="(articleCategory, categoryId) in articleCategories">
        <p>{{ articleCategory.label }}</p>
      </button>
     <!--  <button @click="handleClick('business')">Business</button>
      <button @click="handleClick('popCulture')">Pop Culture</button>
      <button @click="handleClick('tech')">Technology</button>
      <button @click="handleClick('science')">Science</button>
      <button @click="handleClick('sports')">Sports</button> -->
    </ul>
  </div>

</template>

<script>
  import articleCategories from '../services/articleCategories';

  export default {
    name: 'NavBar',
    data() {
      return {
        articleCategories: articleCategories,
      }
    },
    methods: {
      handleClick(id) {
        this.$emit('nav-changed', id);
      }
    }
  }
</script>

<style scoped>
.category-nav ul {
  display: flex;
  justify-content: space-evenly;
  padding-left: 0px;
}

.category-nav button {
  width: 100%;
  color: #334152;
  font-size: 14px;
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: center;
  border: none;
}

.category-nav button:hover {
/*  background-color: #87E5DA;*/
  background-color: rgb(247, 247, 247);
/*  color:white;*/
}

.nav-header {
  position: sticky;
  top: -1px;
}

</style>
