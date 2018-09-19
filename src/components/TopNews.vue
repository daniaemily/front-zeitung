<template>
  <div class="category-nav">
    <!-- <h1>Top News Articles from Around the World</h1> -->
    <NavBar class="navbar" @nav-changed="fetchArticles">

    </NavBar>

    <div v-if="!info">
      <div id="glass">
        <div class="testing1">
          Breaking & Transparent News
        </div>
        <img src="../images/sven.jpg" alt="glass"/>
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
  color: #3d46ff;
  margin: 0%;
/*  color: #87E5DA;*/
  padding-right: 2%;
  padding-top: 5px;
  background-color: white;
  /*background-color: #f7f7f7;*/
  /*margin-top: -8px;
  margin-bottom: -16px;
  border-bottom: 2px solid #e9ebee;*/
 /* border-bottom: 2px solid #334152;*/
}

#glass img {
  background-size: cover;
  width: 99.9%;
  margin-top: -16.5px;
  height: 65vh;
}


.center-title {
  position: absolute;
  font-family: 'Raleway', sans-serif;
  top: 70%;
  left: 35%;
  color: yellow;
  font-size: 40px;
}

.header-words {
  color: red;
}

.testing1 {
  display: flex;
  justify-content: center;
/*  position: absolute;*/
  color:  #334152;
  margin: 10px;
  padding: 52px;
  /*background-color: #3d46ff;*/
  text-align: center;
/*  margin-top: -130px;*/
  font-size: 42px;
/*  margin-left: 69%;*/
}

</style>
