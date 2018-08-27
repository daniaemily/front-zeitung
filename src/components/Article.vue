<template>

  <div class="article-card">
      <img class="article-pic":src="article.urlToImage"></img>
      <div class="article-content">
        <h2>{{ article.title }}</h2>
        <h3>{{ article.source.name }}</h3>
        <a :href="article.url" target="_blank"> Click me now!</a>
      </div>
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

.article-card {
  display: inline-block;
  align-items: center;
  flex-wrap: wrap;
  width: 350px;
  border: solid;
  justify-content: space-evenly;

}

.article-pic {
  height: 200px;
  width: 100%;
  border-radius: 2px;
}

.article-content h2{
  min-height: 72px;
  font-size: 21px;
}

</style>
