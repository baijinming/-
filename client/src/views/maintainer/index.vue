<template>
  <div class="container">
    <p class="title">欢迎您,<strong>{{this.$store.state.maintainer.username}}</strong></p>
    <div class="task">
      <p>任务列表</p>
      <div class="task-item" v-for="(item, index) in this.$store.state.maintainer.task" :key="index">
        <div class="content">
          <div>任务标题：{{item.title}}</div>
          <div>任务地址：{{item.address}}</div>
        </div>
        <div class="state">
          <div v-text="item.type == 0 ? '未维修' : '已维修'"></div>
          <div v-if="item.type == 0" class="btn" @click="handleComplete(item._id)">点击完成</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      getData() {
        this.$axios.get(`/maintainer/${this.$store.state.maintainer._id}`).then(res => {
          this.$store.commit('UPDATE_INFO', res.data)
        })
      },
      handleComplete(id) {
        this.$axios.post(`/repairs/${id}`, {type: '1'}).then(res => {
          if(res.code == 200){
            this.getData()
          }
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .container {
    padding: 0 20px;
    box-sizing: border-box;
    text-align: center;
  }

  .title {
    margin: 30px 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
  }

  .task {
    font-size: 16px;
    text-align: left;

    p {
      font-size: 18px;
      text-align: left;
      color: skyblue;
      height: 30px;
      border-bottom: 1px solid #e9e9e9;
    }
  }

  .task-item {
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
    border-bottom: 1px solid #e9e9e9;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .state {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .btn {
        padding: 5px;
        background-color: skyblue;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
</style>
