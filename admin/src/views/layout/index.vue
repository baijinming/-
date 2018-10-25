<template>
  <div>
    <el-col :span="4">
      <SlideBar></SlideBar>
    </el-col>
    <el-col :span="20" style="min-height: 100vh; overflow: scroll; background-color: #f1f1f1;">
      <Header></Header>
      <div style="padding: 30px;box-sizing: border-box;">
        <router-view></router-view>
      </div>
    </el-col>
  </div>
</template>

<script>
  import SlideBar from '../../components/SlideBar'
  import Header from '../../components/Header'
  export default {
    components: {
      SlideBar,
      Header
    }
  }
</script>

<style scoped>

</style>
