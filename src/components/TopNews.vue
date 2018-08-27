<template>
  <div class="category-nav">
    <h1>Top News Articles from Around the World</h1>

    <NavBar class="navbar" @nav-changed="fetchArticles">

    </NavBar>

    <div v-if="!info">
      <p>Cover Image</p>
    </div>

    <Article
      v-else
      v-for="article in info" class="article"
      :article="article">
    </Article>
<!--     {{ info }} -->
  </div>

</template>

<script>
  import articleCategories from '../services/articleCategories';
  import Article from './Article';
  import NavBar from './NavBar';

  export default {
    name: 'TopNews',
    components: { Article, NavBar },
    data () {
      return {
        info: null,
      }
    },
    methods: {
      // key has 1000 requests per day limit
      fetchArticles(categoryId) {
        const path = articleCategories[categoryId].path;
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${path}&apiKey=3bd915d84a3042d1be0b723b6ba01fa5`)
        // top-headlines?country=us&category=${category}
        .then(response => (this.info = response.data.articles))
      }
    }
  }

</script>

<style >


</style>
