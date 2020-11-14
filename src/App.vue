<template>
  <div id="app">
    <mo-button />
    <mo-button type='edit' />
    <mo-button type='delete' />
    <mo-button type='detail' />

    <div>
      <el-button @click="handleClickSuccess">single弹框</el-button>
    </div>

    <div>
      <mo-switch v-model="switchValue"
        @change="handelSwitchChange" />
    </div>

    <div>
      <mo-text text="" />
      <mo-text text=""
        empty="x" />
    </div>

    <div>
      <mo-join :list="[1, 2, 3, 0]" />

      <mo-join :list="['北京', '朝阳区']"
        separator="-" />

      <mo-join :list="[]"
        empty="x" />
    </div>

    <div>
      <mo-pagination total='23' />
    </div>

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

      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
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
