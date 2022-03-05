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
.workindex {
  display: inline-block;
  width: 25%;
  background-color: #24292D;
}
.work {
    margin: 10px auto;
    padding: 10px;
    border: solid #b0c4de 1px;
}

.work a {
    color: black;
    text-decoration-line: underline;
}
</style>