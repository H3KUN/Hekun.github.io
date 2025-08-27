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
import profileData from '@/data/profile.json'

export default {
  components: {
    'work-component': Work
  },
  data () {
    return {
      msg: profileData.work.message,
      posts: profileData.work.projects
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
