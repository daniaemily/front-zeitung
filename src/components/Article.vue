<template>
  <div>
    <img class="article-pic":src="article.urlToImage"></img>
    <h2>{{ article.title }}</h2>
    <h3>{{ article.source.name }}</h3>
    <a :href="article.url" target="_blank"> Click me now!</a>
  </div>
</template>


<script>
  export default {
    name: 'Article',
    props: {
      article: { type: Object, required: true }
    }
  }

</script>


<style scoped>

.article-pic {
  height: 200px;
  margin: 10px;
}

</style>
