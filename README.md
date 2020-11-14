# MomentUI

一个基于Vue和ElementUI的扩展UI组件库

https://element.eleme.cn/#/zh-CN/component/installation

用于业务统一封装

## 方式一：CDN引入

```html
<script src="https://cdn.jsdelivr.net/npm/moment-ui@1.0.2/dist/moment-ui.js"></script>
```

Hello world

```html
<html lang="en">
  <head>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/moment-ui@1.0.2/dist/moment-ui.js"></script>
  </head>

  <body>
    <div id="app">
      
      <mo-button></mo-button>
      
    </div>

    <script>
      new Vue({
        el: "#app",
      });
    </script>
  </body>
</html>
```

## 方式二：NPM

```
npm i moment-ui -S
```

main.js
```js
import Vue from 'vue'
import App from './App.vue'
import MomentUI from 'moment-ui'

Vue.use(MomentUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```