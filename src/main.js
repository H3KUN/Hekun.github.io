// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// DOM Ready状態を確認してからVueアプリを初期化
function initVueApp() {
  const appElement = document.getElementById('app')
  if (appElement) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
    console.log("Vue app initialized successfully")
  } else {
    console.error("App element not found")
    // 少し待ってリトライ
    setTimeout(initVueApp, 100)
  }
}

// DOMContentLoadedイベントを待つ
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVueApp)
} else {
  // すでにDOMがロードされている場合
  initVueApp()
}