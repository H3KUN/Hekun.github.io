<template>
  <div>
    <h1 class="section-index">Skill</h1>
    <p class="msg">{{ msg }}</p>
    <div class="container">
      <ul class="items">
        <li
          v-for="profile in profiles"
          v-bind:key="profile.id"
        >
          <div class="left-field">
            <img
              v-bind:src="profile.icon1"
              class="icon"
            />
            <img
              v-bind:src="profile.icon2"
              class="icon"
            />
            <img
              v-bind:src="profile.icon3"
              class="icon"
            />
          </div>
          <div class="right-field">
            <p class="caption">{{ profile.title }}</p>
            <p class="text">{{ profile.description }}</p>
          </div>
          <div class="li-footer"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Creater and Developer',
      profiles: [
        {id: 1, title: 'PHP', icon1: require('@/assets/php.svg'), icon2: require('@/assets/cakephp.svg'), description: 'Studying'},
        {id: 2, title: 'Java', icon1: require('@/assets/java.svg'), description: 'Studying'},
        {id: 3, title: 'HTML5/CSS3/JavaScript', icon1: require('@/assets/html-5.svg'), icon2: require('@/assets/css-3.svg'), icon3: require('@/assets/javascript.svg'), description: 'Studying'},
        {id: 4, title: 'MySQL',icon1: require('@/assets/mysql.svg'), description: 'Studying'},
        {id: 5, title: 'Linux',icon1: require('@/assets/linux-tux.svg'), description: 'Studying'},
        {id: 6, title: 'Vue.js/Python', icon1: require('@/assets/vue.svg'), icon2: require('@/assets/python.svg'), description: 'Studying'},
        {id: 7, title: 'GCP/Docker/CircleCI/NoSQL', icon1: require('@/assets/google-cloud.svg'), icon2: require('@/assets/circleci.svg'), icon3: require('@/assets/docker.svg'), description: 'Studying'}
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: list-item;
  margin-bottom: 10px;
}
.left-field{
  text-align: right;
}
.right-field{
  text-align: left;
}
.li-footer {
  clear: both;
}
.icon {
  height: 40px;
  margin: 0 5px;
}
</style>