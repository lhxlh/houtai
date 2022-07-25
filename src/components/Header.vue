<template>
  <header>
    <div class="l-content">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="handleMenu"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          :to="{ path: item.path }"
          v-for="item in tags"
          :key="item.path"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class="user" src="../assets/liu.png" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="goOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Header",
  methods: {
    handleMenu() {
      this.$store.commit('collapseValue')
    },
    goOut() {
      this.$store.commit('clearToken')
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
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
  .el-breadcrumb {
    float: left;
    line-height: 60px;
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