<template>
  <div class="category-nav">
    <h1>Glass News</h1>
    <!-- <h1>Top News Articles from Around the World</h1> -->
    <NavBar class="navbar" @nav-changed="fetchArticles">

    </NavBar>

    <div v-if="!info">
      <div id="glass">
        <img src="../images/glass3.jpg" alt="glass"/>
        <div class="center-title">
         <!--  <h3>Breaking and Transparent Worldwide Articles</h3> -->
        </div>
      </div>
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
.category-nav h1 {
  color: #87e5da;
/*  color: #87E5DA;*/
  padding: 2%;
  margin-top: -8px;
  margin-bottom: -16px;
  border-bottom: 2px solid #e9ebee;
 /* border-bottom: 2px solid #334152;*/
}

#glass img {
  background-size: cover;
  width: 100%;
  margin-top: -16.5px;
  height: 80vh;
}


.center-title {
  position: absolute;
  font-family: 'Raleway', sans-serif;
  top: 70%;
  left: 35%;
  color: yellow;
  font-size: 40px;
}

</style>
