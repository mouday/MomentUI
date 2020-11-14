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

## 使用示例

mo-button 是对业务按钮的统一封装

```html
<mo-button />
<mo-button type='success' />
<mo-button type='edit' />
<mo-button type='delete' />
<mo-button type='detail' />
```

`this.$msg.success('message')` 确保只有一个弹框

```html
<div>
  <el-button @click="handleClickSuccess">single弹框</el-button>
</div>
```

mo-switch兼容传递过来的数字0/1和字符串'0'/'1'

```html
<div>
  <mo-switch v-model="switchValue"
    @change="handelSwitchChange" />
</div>
```

mo-text 用于显示文本，如果文本为空替换为默认值

```html
<div>
  <mo-text text="" />
  <mo-text text=""
    empty="x" />
</div>
```

mo-join 用于显示列表数据，如果文本为空替换为默认值

```html
<div>
  <mo-join :list="[1, 2, 3, 0]" />

  <mo-join :list="['北京', '朝阳区']"
    separator="-" />

  <mo-join :list="[]"
    empty="x" />
</div>
```

mo-pagination 简化参数，并且兼容后端传递的字符串total（虽然不规范，但是避免不了有些后端人员不懂数据类型，非要传递字符串格式的数据）
```html
<div>
  <mo-pagination total='23' />
</div>
```

mo-table  修改了默认的头部背景色

```html
<div>
  <mo-table :data="tableData">

    <el-table-column prop="date"
      label="日期"
      width="180">
    </el-table-column>

    <el-table-column prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    
    <el-table-column prop="address"
      label="地址">
    </el-table-column>
  </mo-table>
</div>
```