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
export default {
  data () {
    return {
      msg: 'No massage',
      github: 'https://github.com/H3KUN',
      qiita: 'https://qiita.com/HeKUN',
      profiles: [
        {id: 1, title: '2017/12:Japan Olympic of Information', description: 'Qualifying'},
        {id: 2, title: '2018/12:Japan Olympic of Information', description: 'Qualifying'},
        {id: 3, title: '2020/04:Entry to Shibaura Institute of Technology', description: 'Department of Electronic Information System'},
        {id: 4, title: '2022/03:Open this pages', description: 'Trying Frontend developing'},
        {id: 5, title: 'Qualification', description: 'TOEIC:660'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: list-item;
  text-align: left;
  margin-bottom: 10px;
}
.myicon {
  display: block;
  border-radius: 50%;
  width: 180px;
  margin: 10px auto;
}
.tips{
  margin: 5px;
  border: 0px;
}
.icon {
  height: 40px;
}
.caption {
  font-size: 1.1em;
  font-weight: bold;
}
.text {
  font-size: 1em;
}

</style>