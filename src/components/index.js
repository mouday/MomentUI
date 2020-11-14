import SingleMessage from "./single-message/main.js";

import Button from "./button/main.vue";
import Switch from "./switch/main.vue";
import Text from "./text/main.vue";
import Join from "./join/main.vue";

const components = [Button, Switch, Text, Join];

// 注册组件
const install = function(Vue, options) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$msg = SingleMessage;
};

/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
