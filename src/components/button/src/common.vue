<template>
  <el-button type="text"
    v-bind="$attrs"
    v-on="$listeners">

    <i v-if="type=='edit'"
      class="el-icon-edit-outline"></i>

    <i v-if="type=='detail'"
      class="el-icon-tickets"></i>

    <i v-else
      class="el-icon-circle-check success"></i>
  </el-button>
</template>

<script>
export default {
  name: "",

  props: {
    // edit detail success
    type: {
      type: String,
      default: "success",
    },
  },
};
</script>

<style lang="scss" scoped>
.success {
  color: #67c23a;
}
</style>