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
import profileData from '@/data/profile.json'

export default {
  data () {
    // アイコンパスを動的に読み込む
    const skills = profileData.skills.skills.map(skill => ({
      ...skill,
      icon1: skill.icon1 ? require('@/assets/' + skill.icon1) : null,
      icon2: skill.icon2 ? require('@/assets/' + skill.icon2) : null,
      icon3: skill.icon3 ? require('@/assets/' + skill.icon3) : null
    }))

    return {
      msg: profileData.skills.message,
      profiles: skills
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
.items {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
}
.left-field{
  flex: 0 0 150px;
  text-align: center;
}
.right-field{
  flex: 1;
  text-align: left;
  padding-left: 20px;
}
.li-footer {
  clear: both;
}
.icon {
  height: 40px;
  margin: 0 5px;
}
.caption {
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
.text {
  color: #666;
}
.msg {
  margin-bottom: 30px;
  font-size: 1.1em;
  color: #666;
}
</style>