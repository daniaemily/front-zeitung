<template>
  <div class="nav-header">
    <ul>
      <button class="animatedBorder"
        @click="handleClick(categoryId)"
        v-for="(articleCategory, categoryId) in articleCategories">
        <p>{{ articleCategory.label }}</p>
      </button>
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

.nav-header {
  position: sticky;
  top: -1px;
  z-index: 103;
  width: 1050;
}

.category-nav ul {
  display: flex;
  justify-content: space-evenly;
  padding-left: 0px;
/*  background-color: yellow;*/
}

.category-nav button {
  width: 100%;
  /*color: white;*/
  color: #334152;
  font-size: 14px;
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: center;
  border: none;
  background-color: white;
}

.category-nav button:hover {
/*  background-color: #87E5DA;*/
  background-color: rgb(247, 247, 247);
  color: #334152;
  /*background-color: white;*/
  cursor: pointer;
/*  color:white;*/
}

.animatedBorder {
  position: relative;
}

.animatedBorder.highlight {
  background: orange;
}

.animatedBorder:after {
  content: '';
  position: absolute;
  /*border-bottom: 5px solid orange;*/
/*  border-bottom: 5px solid #87E5DA;*/
  border-bottom: 5px solid #87e5da;
  bottom: 0;
  left: 0;
  right: 100%;
  transition: all 400ms;
}

.animatedBorder:hover:after {
  right: 0;
}

</style>
