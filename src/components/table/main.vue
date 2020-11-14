<template>
  <el-table 
    border
    v-bind="$attrs"
    v-on="$listeners"
    header-row-class-name="mo-table-header-row"
    header-cell-class-name="mo-table-header-cell"
    class="mo-table">
    <slot></slot>
  </el-table>
</template>

<script>
/**
 *
 * https://element.eleme.cn/#/zh-CN/component/table
 */
export default {
  name: "MoTable",

};
</script>

<style lang="scss" scoped>
.mo-table {
  width: 100%;
}

.mo-table-header-row {
  background-color: #e3e3e3;
}

/deep/ .mo-table-header-cell {
  background-color: #fafafa;
  height: 40px;
}
</style>