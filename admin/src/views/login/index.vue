<template>
  <div class="container">
    <div class="warp">
      <h2>欢迎来到华信报修后台管理系统</h2>
      <el-form v-model="form">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button class="login-btn" type="primary" @click="handleLogin">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: "",
          password: ""
        }
      }
    },
    methods: {
      handleLogin() {
        this.$axios.post('/admin/login', this.form).then(res => {
          if (res.code == 200) {
            this.$message.success('登录成功');
            this.$store.commit('UPDATE_INFO', res.data)
            setTimeout(() => {
              this.$router.push('/layout/admin')
            },1000)
          }else {
            this.$message.warning(res.msg)
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    background: #304156;
    min-height: 100vh;
    overflow: hidden;
  }

  .warp {
    width: 400px;
    height: 350px;
    margin: 200px auto;
    padding: 30px;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 6px;
    color: #fff;
    text-align: center;

    h2 {
      margin-bottom: 20px;
    }

    /deep/ .el-form-item {
      margin-bottom: 0;
      color: #fff;
    }

    /deep/ .el-form-item__label {
      color: #fff;
    }

    .login-btn {
      width: 100%;
      margin-top: 20px;
    }
  }
</style>
