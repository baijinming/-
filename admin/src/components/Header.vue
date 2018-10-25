<template>
    <div class="header">
      <div class="flr clearfix">
        <p class="fll">欢迎你，<strong v-if="this.$store.state.userInfo">{{this.$store.state.userInfo.username}}</strong></p>
        <el-dropdown class="fll select" @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
            更多选择<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="title">欢迎来到华信报修后台管理系统</div>
    </div>
</template>

<script>
  export default {
    methods: {
      handleCommand(command) {
        switch (command) {
          case 'loginOut' :
            this.loginOut();
            break;
          default:
            break;
        }
      },
      loginOut() {
        this.$message.success('退出成功');
        this.$store.commit('UPDATE_INFO', null);
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 50px;
    background-color: #fff;
    text-align: center;
    line-height: 50px;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .select {
    margin-left: 20px;
    color: #333;
  }
</style>
