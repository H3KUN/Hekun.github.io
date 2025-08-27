<template>
  <div>
    <h1 class="section-index">About</h1>
    <p class="msg">{{ msg }}</p>
    <div class="container">
      <div class="left-field">
        <img
          src="@/assets/icon.jpg"
          class="myicon"
        />
        <a
        v-bind:href="this.github"
        target="_blank"
        rel="noopener noreferrer"
        class="tips"
        >
        <img
          src="@/assets/GitHub-Mark-120px-plus.png"
          class="icon"
        />
        </a>
        <a
        v-bind:href="this.qiita"
        target="_blank"
        rel="noopener noreferrer"
        class="tips"
        >
        <img
          src="@/assets/qiita-square.png"
          class="icon"
        />
        </a>
      </div>
      <div class="right-field">
        <ul class="items">
          <li
            v-for="profile in profiles"
            v-bind:key="profile.id"
          >
            <p class="caption">{{ profile.title }}</p>
            <p class="text">{{ profile.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import profileData from '@/data/profile.json'

export default {
  data () {
    return {
      msg: profileData.about.message,
      github: profileData.basic.github,
      qiita: profileData.basic.qiita,
      profiles: profileData.about.profiles
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}
.left-field {
  flex: 1;
  min-width: 250px;
  text-align: center;
}
.right-field {
  flex: 2;
  min-width: 300px;
}
.items {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  display: list-item;
  text-align: left;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.myicon {
  display: block;
  border-radius: 50%;
  width: 180px;
  margin: 10px auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.tips{
  margin: 5px;
  border: 0px;
  text-decoration: none;
}
.tips:hover {
  opacity: 0.8;
}
.icon {
  height: 40px;
}
.caption {
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
.text {
  font-size: 1em;
  color: #666;
}
.msg {
  margin-bottom: 30px;
  font-size: 1.1em;
  color: #666;
}
</style>