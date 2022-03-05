<template>
  <router-link
    v-bind:to="this.link"
    target="_self"
    class="btn section"
  >
    <p class="caption">
      <span v-bind:class="this.icon"></span>
      {{ this.title }}
    </p>
  </router-link>
</template>

<script>
export default {
  name: 'Item',
  props: [
    'icon',
    'title',
    'link'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>