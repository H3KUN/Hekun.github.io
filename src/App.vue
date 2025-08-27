
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
.section-index {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}
.section-index::after {
  content: "";
  display: block;
  height: 2px;
  width: 50px;
  background-color: #ccc;
  margin: 10px auto;
}
p {
  margin: 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #0056b3;
  color: white;
  text-decoration: none;
}
</style>