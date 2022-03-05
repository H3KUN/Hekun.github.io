
<template>
  <div id="app">
    <header></header>
    <main>
      <transition mode="out-in">
        <router-view/>
      </transition>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Roboto', 'Noto Sans JP', 'Vollkorn', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
.section-index::after {
  content: "";
  display: block;
  height: 2px;
  width: 50px;
  background-color: #ccc;
  margin: auto;
}
p {
  margin: 0;
}
</style>