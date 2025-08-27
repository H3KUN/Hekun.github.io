<template>
  <div>
    <h1 class="section-index">Contact</h1>
    <p class="msg">{{ msg }}</p>
    <ul>
      <li>
        {{ mail }}
        <div class="li-footer"></div>
      </li>
      <li>
        <a
        v-bind:href="this.twitter"
        target="_blank"
        rel="noopener noreferrer"
        class="btn twitter"
        >
        <span class="fab fa-twitter"></span>
        twitter
        </a>
        <div class="li-footer"></div>
      </li>
      <li>
        <a
        v-bind:href="this.facebook"
        target="_blank"
        rel="noopener noreferrer"
        class="btn facebook"
        >
        <span class="fab fa-facebook"></span>
        facebook
        </a>
        <div class="li-footer"></div>
      </li>
      <li>
        <a
        v-bind:href="this.wantedly"
        class="btn wantedly"
        target="_blank"
        rel="noopener noreferrer"
        >
          <img
            class="icon"
            src="@/assets/wantedly_logo_print.png"
          />
        </a>
        <div class="li-footer"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import profileData from '@/data/profile.json'

export default {
  data () {
    return {
      msg: profileData.contact.message,
      mail: profileData.contact.mail,
      twitter: profileData.contact.social.twitter,
      facebook: profileData.contact.social.facebook,
      wantedly: profileData.contact.social.wantedly
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
li {
  width: 200px;
  text-align: center;
}
.twitter {
  background-color: #55acee;
}
.twitter:hover {
  background-color: #4a9bd6;
}
.facebook {
  background-color: #1D3C78;
}
.facebook:hover {
  background-color: #173366;
}
.wantedly {
  background-color: #00A4BB;
}
.wantedly:hover {
  background-color: #0092a8;
}
.icon {
  display: inline-block;
  padding: 1px;
  height: 18px;
  vertical-align: bottom;
}
.li-footer {
  display: none;
}
.msg {
  margin-bottom: 30px;
  font-size: 1.1em;
  color: #666;
}
</style>