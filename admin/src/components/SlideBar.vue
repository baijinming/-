<template>
  <el-menu
    :router="true"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    style="min-height: 100vh;">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>管理员</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/layout/user">管理员列表</el-menu-item>
        <el-menu-item index="/layout/addUser">添加管理员</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>任务</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/layout/task">任务列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: "SlideBar"
  }
</script>

<style scoped>

</style>
