<template>
  <div>
    <h1>Top News Articles from Tech Crunch</h1>

    <div
      v-for="article in info" class="article">
        <img class="article-pic":src="article.urlToImage"></img>
        <h2>{{ article.title }}</h2>
        <h3>{{ article.source.name }}</h3>
        <a :href="article.url" target="_blank"> Click me now!</a>
    </div>
<!--     {{ info }} -->
  </div>


</template>

<script>
  export default ({
    name: 'Category',
    data () {
    return {
      info: null,
    }
  },
  mounted () {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3bd915d84a3042d1be0b723b6ba01fa5')
      .then(response => (this.info = response.data.articles))
  }
})

</script>

<style>

.article-pic {
  height: 200px;
  margin: 10px;
}

</style>
