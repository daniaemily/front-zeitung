<template>
  <div>
    <h1>Top News Articles from Around the World</h1>
    <ul>
      <button @click="fetchArticles('business')">Business</button>
      <button @click="fetchArticles('popCulture')">Pop Culture</button>
      <button @click="fetchArticles('tech')">Technology</button>
      <button @click="fetchArticles('science')">Science</button>
      <button @click="fetchArticles('sports')">Sports</button>
    </ul>
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
  import Article from './Article';

  const categories = {
    business: {
      label: 'Business',
      path: "business"
    },
    popCulture: {
      label: 'Pop Culture',
      path: "entertainment"
    },
    tech: {
      label: 'Technology',
      path: "technology"
    },
    science: {
      label: 'Science',
      path: "science"
    },
    sports: {
      label: 'Sports',
      path: "sports"
    }
  }
  export default {
    name: 'TopNews',
    components: { Article },
    data () {
      return {
        info: null,
      }
    },
    methods: {
      // key has 1000 requests per day limit
      fetchArticles(categoryId) {
        const path = categories[categoryId].path;
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${path}&apiKey=3bd915d84a3042d1be0b723b6ba01fa5`)
        // top-headlines?country=us&category=${category}
        .then(response => (this.info = response.data.articles))
      }
    }
  }

</script>

<style scoped>

</style>
