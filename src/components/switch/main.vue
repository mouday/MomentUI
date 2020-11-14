<template>
  <el-switch v-model="switchValue"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
    v-bind="$attrs"></el-switch>
</template>

<script>
export default {
  name: "MoSwitch",

  /**
   * 适配后端返回数据
   * 可能是：1/0、'1'/'0'、true/false
   * 返回值类型与之对应
   *
   * v-model: value
   * emit: change
   */
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    activeColor: {
      type: String,
      default: "#4568c5",
    },
    inactiveColor: {
      type: String,
      default: "#C0CCDA",
    },
  },

  model: {
    props: "value",
    event: "change",
  },

  computed: {
    switchValue: {
      // 返回boolean
      get() {
        if (typeof this.value == "boolean") {
          return this.value;
        } else {
          // == 兼容number 和 string
          return this.value == 1 ? true : false;
        }
      },

      // 设置为对应类型值
      set(value) {
        let realValue;

        if (typeof this.value == "number") {
          realValue = value ? 1 : 0;
        } else if (typeof this.value == "string") {
          realValue = value ? "1" : "0";
        } else {
          //  默认为boolean
          realValue = value;
        }

        this.$emit("change", realValue);
      },
    },
  },
};
</script>