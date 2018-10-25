<template>
  <div>
    <div class="header">
      华信报修APP
    </div>
    <div  class="warp">
      <div style="display: flex; margin: 10px 0">
        <p>报修标题</p>
        <input class="title" v-model="form.title" type="text">
      </div>
      <div>
        <p>详细描述</p>
        <textarea v-model="form.content" class="content" rows="6"></textarea>
      </div>
      <div>
        <p>报修图片</p>
        <div class="imgs">
          <img v-for="(item, index) in form.imgs " :key="index" :src="item" alt="">
          <label>
            <img src="/static/imgs/上传图片.png" alt="">
            <input style="display: none" type="file" @change="imgAdd">
          </label>
        </div>
      </div>
      <div style="display: flex; margin: 10px 0">
        <p>详细地址</p>
        <input class="title" v-model="form.address" type="text">
      </div>
      <button class="btn" @click="addRepairs">提交</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          title: '',
          content: '',
          address: '',
          imgs: []
        },
        token: ''
      }
    },
    methods: {
      getToken() {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          this.token = res.data.data
        })
      },
      imgAdd(event) {
        let img = event.target.files[0];
        let formData = new FormData();
        formData.append('file', img);
        formData.append('token', this.token);
        axios.post('https://upload-z1.qiniup.com', formData).then(res => {
          this.form.imgs.push(res.data.url)
        })
      },
      addRepairs() {
        this.$axios.post('/repairs/add', this.form).then(res => {
          if(res.code == 200) {

          }else {

          }
        })
      }
    },
    created() {
      this.getToken()
    }
  }
</script>

<style scoped lang="scss">
  .header {
    height: 0.8rem;
    font-size: 16px;
    line-height: 0.8rem;
    text-align: center;
    background-color: skyblue;
    color: #fff;
  }

  .warp {
    padding: 0.15rem;
    box-sizing: border-box;
  }

  p {
    font-size: 16px;
    word-break: keep-all;
    margin-right: 10px;
  }

  .title {
    width: 100%;
    height: 0.6rem;
    border: 1px solid #999;
    border-radius: 4px;
    text-indent: 10px;
  }

  .title:focus {
    outline: none;
  }

  .content {
    width: 100%;
    border: 1px solid #999;
    border-radius: 6px;
    text-indent: 10px;
    margin-top: 10px;
  }

  .content:focus {
    outline: none;
  }

  .imgs {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;

    img {
      width: 2.1rem;
      height: 2.1rem;
      margin: 10px 0.15rem;
    }
  }

  .btn {
    position: fixed;
    bottom: 30px;
    width: 7.2rem;
    height: 0.8rem;
    font-size: 16px;
    line-height: 0.8rem;
    text-align: center;
    background: #c50206;
    color: #fff;
    border: none;
    border-radius: 6px;
  }
</style>
