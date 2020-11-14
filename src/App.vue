<template>
  <div id="app">
    <mo-button />
    <mo-button type='edit'/>
    <mo-button type='delete'/>
    <mo-button type='detail'/>

    <div>
      <el-button @click="handleClickSuccess">single弹框</el-button>
    </div>

    <div>
      <mo-switch v-model="switchValue"
        @change="handelSwitchChange" />
    </div>

    <div>
      <mo-text text="" />
      <mo-text text="" empty="x"/>
    </div>

    <div>
      <mo-join :list="[1, 2, 3, 0]"/>

      <mo-join :list="['北京', '朝阳区']" separator="-"/>

      <mo-join :list="[]" empty="x"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",

      // switchValue: 0,
      // switchValue: '0',
      switchValue: true,
    };
  },
  methods: {
    handleClickSuccess() {
      this.$msg.success("success");
    },

    handelSwitchChange(val) {
      console.log(val, this.switchValue);
    },
  },
};
</script>

<style lang="scss">
</style>
