<template>
  <div>
    <h1 class="section-index">Work</h1>
    <p class="msg">{{ msg }}</p>
    <div class="workarea">
      <work-component
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:title="post.title"
          v-bind:url="post.url"
          v-bind:giturl="post.giturl"
          v-bind:description="post.description"
          v-bind:technology="post.technology"
      ></work-component>
    </div>
  </div>
</template>

<script>
import Work from '@/components/work'
export default {
  components: {
    'work-component': Work
  },
  data () {
    return {
      msg: '今まで開発したものです。クリックで詳細が表示されます。',
      posts: [
        //{id: 1, title: 'HomePage', url: 'http://selene.himegimi.jp/', giturl: '', description: '（略）', technology: 'Java, eclipse, html, javascript, css'},
        //{id: 2, title: 'Portfolio', url: 'https://c3drive.github.io/homepage-project/dist/', giturl: 'https://github.com/c3drive/homepage-project', description: 'このサイトです。', technology: 'vue-cli, github, html5, javascript, css'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
