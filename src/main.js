// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Font Awesome ローカルインポート
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

// DOM Ready状態を確認してからVueアプリを初期化
let retryCount = 0
const maxRetries = 50 // 5秒間リトライ

function initVueApp() {
  const appElement = document.getElementById('app')
  
  if (appElement && document.body) {
    try {
      /* eslint-disable no-new */
      new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>',
        mounted() {
          console.log("Vue app mounted successfully")
          // アプリのロード完了を確実にする
          this.$nextTick(() => {
            console.log("Vue app fully rendered")
          })
        },
        errorCaptured(err, instance, info) {
          console.error("Vue error captured:", err, info)
          return false
        }
      })
      console.log("Vue app initialized successfully")
    } catch (error) {
      console.error("Vue initialization error:", error)
      if (retryCount < maxRetries) {
        retryCount++
        setTimeout(initVueApp, 100)
      }
    }
  } else {
    console.warn(`App element not ready. Retry ${retryCount}/${maxRetries}`)
    if (retryCount < maxRetries) {
      retryCount++
      setTimeout(initVueApp, 100)
    } else {
      console.error("Failed to initialize Vue app after maximum retries")
    }
  }
}

// 複数の初期化トリガーを設定
function safeInit() {
  // FontAwesome等の外部スクリプトの読み込み完了を待つ
  if (document.readyState === 'complete') {
    setTimeout(initVueApp, 100) // 少し待ってから初期化
  } else {
    window.addEventListener('load', () => {
      setTimeout(initVueApp, 100)
    })
  }
}

// DOMContentLoadedとloadの両方で安全に初期化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', safeInit)
} else {
  safeInit()
}