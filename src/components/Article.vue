<template>

  <div class="article-card animated rollIn delay 5s">
    <a :href="article.url" target="_blank">
      <img class="article-pic":src="article.urlToImage"></img>
      <div class="article-content">
        <h2>{{ article.title }}</h2>
        <h3>{{ article.source.name }}</h3>
      </div>
    </a>
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
  width: 350px;
  flex-wrap: wrap;
  margin: 15px;
  justify-content: space-around;
}

a {
  text-decoration: none;
}

.article-pic {
  height: 200px;
  width: 100%;
  border-radius: 2px;
}

.article-content h3 {
  text-align: right;
  font-size: 15px;
}

.article-content h2 {
  min-height: 81px;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  text-decoration: none;
}

.article-content.article-content h2, h3 {
/*  color: #334152;*/
  color: #121212;
  font-family: 'Libre Franklin', sans-serif;
}

</style>
