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
  background-color: yellow;
}

.category-nav button {
  width: 100%;
  color: #334152;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  border: none;
}

.category-nav button:hover {
  background-color: red;
  color:white;
}

</style>
