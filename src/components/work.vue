<template>
  <div class="container">
    <a
      v-on:click.prevent="show = !show"
      href="#!"
      class="btn workindex"
    >
        {{ this.title}}
    </a>
    <br>
    <transition>
      <div
        v-show="show"
        name="slide-fade"
      >
      <div class="work">
        <h3>{{ this.title}}</h3>
        <ul>
          <li>
            <div class="left-field">
              <p class="caption">URL</p>
            </div>
            <div class="right-field">
              <a
                class="text"
                v-bind:href="this.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ this.url }}
              </a>
            </div>
          </li>
          <li>
            <div class="left-field">
              <p class="caption">ソースコード</p>
            </div>
            <div class="right-field">
              <a
                class="text"
                v-if="this.giturl.length"
                v-bind:href="this.giturl"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ this.giturl }}
              </a>
              <p class="text" v-else>ソースコードは有りません。</p>
            </div>
          </li>
          <li>
            <div class="left-field">
              <p class="caption">説明</p>
            </div>
            <div class="right-field">
              <p class="text">{{ this.description }}</p>
            </div>
          </li>
          <li>
            <div class="left-field">
              <p class="caption">使用した主な技術・ツール</p>
            </div>
            <div class="right-field">
              <p class="text">{{ this.technology }}</p>
            </div>
          </li>
        </ul>
        <br>
      </div>
      </div>
    </transition>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Work',
  props: [
    'title',
    'url',
    'giturl',
    'description',
    'technology'
  ],
  data () {
    return {
      show: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    clear: both;
}
h3::after {
  content: "";
  display: block;
  height: 0px;
  width: 30%;
  background-color: #ccc;
  margin: auto;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
    display: list-item;
    padding: 10px 8px;
    text-align: left;
    border-bottom: solid #ccc 1px;
}
li::after {
    content: "";
    display: block;
    clear: both;
}
.left-field {
  float: left;
  width: 30%;
  font-weight: bold;
}
.right-field {
  float: right;
  width: 70%;
}
.caption {
  margin: 0;
  font-weight: bold;
}
.text {
  margin: 0;
}
.workindex {
  display: inline-block;
  width: 25%;
  background-color: #24292D;
  color: white;
  padding: 10px;
  margin: 5px;
  text-decoration: none;
  border-radius: 4px;
}
.workindex:hover {
  background-color: #333;
}
.work {
    margin: 10px auto;
    padding: 10px;
    border: solid #b0c4de 1px;
    border-radius: 4px;
}

.work a {
    color: #007bff;
    text-decoration-line: underline;
}
.work a:hover {
    color: #0056b3;
}
</style>