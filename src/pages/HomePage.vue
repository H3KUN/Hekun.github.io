
<template>
  <div>
    <div class="top-wrapper">
      <div class="container">
        <h1>{{ title }}</h1>
        <p>{{ msg }}</p>
      </div>
      <div class="container">
        <div class="items">
          <a
            v-for="section in sections"
            v-bind:key="section.id"
            href="#"
            @click="doSmoothScroll(section.link)"
            class="btn item"
          >
            <p class="caption">
              <span v-bind:class="section.icon"></span>
              {{ section.title }}
            </p>
          </a>
        </div>
      </div>
    </div>
    <about-page id='about' class='section'></about-page>
    <work-page id='work' class='section'></work-page>
    <skill-page id='skill' class='section'></skill-page>
    <contact-page id='contact' class='section'></contact-page>
  </div>
</template>

<script>
import Item from '@/components/Item'
import AboutPage from '@/pages/AboutPage'
import WorkPage from '@/pages/WorkPage'
import SkillPage from '@/pages/SkillPage'
import ContactPage from '@/pages/ContactPage'
export default {
  components: {
    'item-component': Item,
    'about-page': AboutPage,
    'work-page': WorkPage,
    'skill-page': SkillPage,
    'contact-page': ContactPage
  },
  methods: {
    doSmoothScroll (id) {
      this.$SmoothScroll(document.getElementById(id), 1000, null, null, 'y')
    }
  },
  name: 'Home',
  data () {
    return {
      title: 'Hekun\'s portfolio',
      msg: 'wellcome',
      sections: [
        {id: 1, title: 'About', link: 'about', icon: 'fas fa-user'},
        {id: 2, title: 'Work', link: 'work', icon: 'fas fa-images'},
        {id: 3, title: 'Skill', link: 'skill', icon: 'fas fa-list-ul'},
        {id: 4, title: 'Contact', link: 'contact', icon: 'fas fa-envelope'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  font-size: 60px;
  margin-bottom: 10px;
}
header {
  height: 58px;
  width: 100%;
  background-color: rgba(14, 21, 22, 0.9);
  z-index: 1;
}
.top-wrapper {
  padding: 100px 0 50px 0;
  background-image: url(~@/assets/header.jpg);
  background-size: cover;
  color: white;
  border-bottom: 2px solid #dee7ec;
}
.top-wrapper h1 {
  opacity: 0.8;
  font-size: 45px;
  letter-spacing: 3px;
}
.top-wrapper p {
  opacity:0.8;
}
.items {
  padding: 10px 0;
}
.item {
  width: 15%;
  margin: 10px;
  border: 1px solid #dee7ec;
  background-color:rgba(0, 0, 0, 0.3);
}
.item:hover {
  background-color:rgba(255, 255, 255, 0.3);
}
.section {
    width:70%;
    margin: 0 auto;
    padding: 10px;
    border: solid #b0c4de 0px;
}
.section::after {
    content: "";
    display: block;
    clear: both;
}
</style>