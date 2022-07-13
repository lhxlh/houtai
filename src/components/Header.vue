<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini"></el-button>
      <h3 style="color: #fff">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class="user" src="../assets/liu.png" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
header {
  height: 100%;
  .el-button {
    float: left;
    margin-right: 20px;
    margin-top: 15px;
  }
  h3 {
    float: left;
    margin-top: 15px;
  }
  .el-dropdown {
    float: right;
    .user {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-top: 4px;
    }
  }
}
</style>