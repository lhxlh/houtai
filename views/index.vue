<template>
  <el-container style="height: 100%">
    <el-aside width="auto"><Aside /></el-aside>
    <el-container>
      <el-header><Header /></el-header>
      <CommonTags />
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template> 

<script>
import Aside from '../src/components/Aside.vue'
import Header from '../src/components/Header.vue'
import CommonTags from '../src/components/CommonTags.vue'
export default {
  name: 'Main',
  components: {
    Aside,
    Header,
    CommonTags
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
  background-color: #f2f3f4;
}
</style>
