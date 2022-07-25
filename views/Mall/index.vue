<template>
  <div>
    <el-calendar v-model="value"> </el-calendar>
  </div>
</template>

<script>
export default {
  name: 'Mall',
  data() {
    return {
      value: new Date()
    }
  },
}
</script>

<style lang="less" scoped>
.el-calendar {
  height: 600px;
  width: 1000px;
}
</style>