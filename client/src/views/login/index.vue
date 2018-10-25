<template>
  <div class="container">
    <h1>华信报修APP</h1>
    <div v-if="!isLogin" class="btns">
      <div class="btn" @click="isLogin = true">维修人员登录</div>
      <div class="btn" @click="() => this.$router.push('/index')">学生直接报修</div>
    </div>
    <div v-else class="login">
      <p>用户名</p>
      <input v-model="form.username" type="text" placeholder="请输入用户名">
      <p>密码</p>
      <input v-model="form.password" type="password" placeholder="请输入密码">
      <div class="btn" @click="handelLogin">登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLogin: false,
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      handelLogin() {
        this.$axios.post('/maintainer/login', this.form) .then(res => {
          this.$store.commit('UPDATE_INFO', res.data)
          this.$router.push('/maintainer')
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    min-height: 100vh;
    text-align: center;

    h1 {
      font-size: 20px;
      line-height: 0.8rem;
      height: 0.8rem;
      color: #fff;
      background-color: skyblue;
    }
  }

  .btns {
    margin-top: 150px;

    .btn {
      width: 80%;
      height: 0.8rem;
      line-height: 0.8rem;
      margin: 40px 10%;
      font-size: 16px;
      color: #fff;
      background: #c50206;
      border-radius: 6px;
    }
  }

  .login {
    padding: 100px 50px 0;
    box-sizing: border-box;

    p {
      font-size: 16px;
      color: #666;
    }

    input {
      width: 100%;
      height: 40px;
      border: 1px solid #e9e9e9;
      border-radius: 6px;
      text-indent: 10px;
      margin-bottom: 50px;
    }

    input:focus {
      outline: none;
    }

    .btn {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 16px;
      color: #fff;
      background: #c50206;
      border-radius: 6px;
    }
  }
</style>
