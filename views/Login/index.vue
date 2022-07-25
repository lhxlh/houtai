<template>
  <div class="login">
    <el-card>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        status-icon
        label-width="60px"
      >
        <h3>系统登录</h3>
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item style="text-align: center" label-width="0">
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Mock from 'mockjs'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, message: '用户名长度不能小于3位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '用户名长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          const token = Mock.Random.guid()
          this.$store.commit('setToken', token)
          this.$router.push('/')
        } else {
          this.$alert('请输入账号和密码', '提示', {
            confirmButtonText: '确定',
          })
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>
.login {
  height: 100px;
  width: 100px;
  .el-card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    width: 350px;
    height: 250px;
    background-color: #fff;
    h3 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
}
</style>