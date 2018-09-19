<template>
  <div class="article-card animated pulse slow-3s">
    <a :href="article.url" target="_blank">
      <img class="article-pic":src="article.urlToImage"></img>
      <div class="article-content">
        <h2>{{ article.title }}</h2>
        <h4>
          <span class="spec-details">{{ moment(article.publishedAt).fromNow() }}</span>
          <span>{{ article.source.name }}</span>
        </h4>
      </div>
    </a>
  </div>
</template>


<script>
  var moment = require('moment');
  export default {
    name: 'Article',
    props: {
      article: { type: Object, required: true }
    },
    data() {
      return {
        moment:moment,
      }
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
  border: 1px;
  padding: 10px;
  box-shadow: 5px 10px #f7f7f7;
  /*box-shadow: 5px 10px rgb(247, 247, 247);*/
  /*box-shadow: 0px 5px 40px rgba(41,30,226,0.3);*/
  margin-bottom: 2%;
  border-radius: 3px;
  border-style: white;
/*  background-color: #f7f7f7;*/
  /*background-color: white;*/
}

.article-card:hover {
  background-color: #f7f7f7;
  transition: all .7s;
}

.article-card animated {
  position: relative;
  z-index: -1;
}

a {
  text-decoration: none;
}

.article-pic {
  overflow: hidden;
  height: 200px;
  width: 100%;
  border-radius: 2px;
  margin-top: 0px;
}

/*.article-pic:hover {
  width: 108%;
  margin: 0 0 0 -10%;
  transition: all .3s;
}*/

.article-content h4 {
  text-align: right;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  font-weight: lighter;
/*  color: #c4c4c4;*/
  color: rgba(0,0,0,.54);
}

.article-content h2 {
  min-height: 63px;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  text-decoration: none;
}

.article-content.article-content h2, h4 {
/*  color: #334152;*/
  color: #121212;
  font-family: 'Libre Franklin', sans-serif;
/*  padding: 2%;*/
  padding-right: 4px;
  padding-left: 4px;
}

</style>
