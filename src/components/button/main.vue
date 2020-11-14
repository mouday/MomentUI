<template>
  <Delete v-if="type=='delete'"
    v-bind="$attrs"
    v-on="$listeners" />

  <Common v-else
    :type="type"
    v-bind="$attrs"
    v-on="$listeners" />
</template>

<script>
/**
 *
 * type==delete
 * onConfirm	点击确认按钮时触发
 * onCancel	点击取消按钮时触发
 * 
 * success edit detail
 * click 点击事件
 */
import Common from "./src/common.vue";
import Delete from "./src/delete.vue";

export default {
  name: "MoButton",

  props: {
    //  delete success edit detail
    type: {
      type: String,
      default: "success",
    },
  },
  
  components: { Common, Delete },
};
</script>

<style lang="scss" scoped>
</style>