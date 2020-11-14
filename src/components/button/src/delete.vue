<template>
  <el-popconfirm title="确定删除？"
    v-bind="$attrs"
    v-on="$listeners">
    <el-button slot="reference"
      type="text">
      <i class="el-icon-delete delete"></i>
    </el-button>
  </el-popconfirm>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="scss" scoped>
.delete {
  color: #F56C6C;
}
</style>