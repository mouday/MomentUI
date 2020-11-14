<template>
  <el-pagination background
    v-bind="$attrs"
    v-on="$listeners"
    hide-on-single-page
    :total="innerTotal"
    :page-size.sync="innerSize"
    :current-page.sync="innerPage"
    :layout="layout"
    :page-sizes="[10, 20, 50, 100]">
  </el-pagination>
</template>

<script>
/**
 *
 * hide-on-single-page  只有一页时是否隐藏
 */
export default {
  name: "MoPagination",

  /**
   * sync: page、size
   * emit: change
   */
  props: {
    page: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number | String,
      default: 0,
    },
    layout: {
      type: String,
      default: "total, prev, pager, next",
    },
  },

  computed: {
    // 兼容后端传过来的字符串
    innerTotal() {
      if (typeof this.total == "string") {
        return parseInt(this.total);
      } else {
        return this.total;
      }
    },

    innerSize: {
      get() {
        return this.size;
      },
      set(val) {
        this.$emit("update:size", val);
        this.$emit("change");
      },
    },
    
    innerPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit("update:page", val);
        this.$emit("change");
      },
    },
  },
};
</script>