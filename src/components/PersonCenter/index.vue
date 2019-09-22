<template>
  <div class="person-container">
    <div class="personMessage cartBox">
      <span class="avatar">
        <img :src="$store.state.user.avatarUrl" alt />
      </span>
      <h1 class="username">{{ $store.state.user.username }}</h1>
    </div>
    <div class="editAvatar">
      <span>更改头像</span>
      <input type="file" name="imgFile" @change="uploadAvatar" /> cartBox">
    </div>
    <div class="cartBox indent">
      <span class="movie">电影</span>
      <span class="identity">{{ str = $store.state.user.isAdmin === true ? '' : '非' }}管理员</span>
      <span class="store">商城</span>
    </div>
    <div class="cartBox" v-if="$store.state.user.isAdmin">
      <h1>
        管理员地址：
        <a href="/dhsmovie/admin" target="_blank" style="color: #fe4365;">进入管理后台</a>
      </h1>
    </div>
    <div class="cartBox">
      <h1>在线观影</h1>
    </div>
    <button class="logoutBtn" @click="handleLogout">退出登录</button>
  </div>
</template>

<script>
import axios from 'axios'
import { messageBox } from '../../components/JS/index'
export default {
  methods:{
    handleLogout(){
      this.$axios.get('/api2/users/logout').then( res => {
        if(res.data.status === 0){
          this.$store.commit('CHANGE_USERNAME', 
          {
            username: '', 
            isAdmin: false,
            avatarUrl: ''
          })
          localStorage.removeItem('username')
          localStorage.removeItem('isAdmin')
          this.$router.push('login')
        }
      })
    },
    uploadAvatar(e){
      let that = this
      let imgFile = e.target.files[0] // 获取头像文件
      let param = new FormData()
      param.append('imgFile', imgFile, imgFile.name)
      let config = {header:{'Content-Type':'multipart/form-data'}}
      this.$axios.post('/api2/users/uploadAvatar',param,config).then(res => {
        var status = res.data.status
        if(status === 0){
          messageBox({
            title: '信息',
            content: '上传头像成功',
            ok: '确定',
            handleOk(){
              that.$store.commit('CHANGE_USERNAME', 
              { 
                avatarUrl: res.data.avatarUrl + '?' + Math.random(),
                username: that.$store.state.user.username, 
                isAdmin: that.$store.state.user.isAdmin,
              })
            }
          })
        }else{
          messageBox({
            title: '信息',
            content: '上传头像失败',
            ok: '确定'
          })
        }
      })
    }
  },
  beforeRouteEnter(to,form,next){
    // 不能用this，因为组件还没有被实例化
    axios.get('/api2/users/getUser').then( res => {
      if(res.data.status === 0){
        next(vm => {
          vm.$store.commit('CHANGE_USERNAME', 
          {
            username: res.data.data.username, 
            isAdmin: res.data.data.isAdmin,
            avatarUrl: res.data.data.avatarUrl
          })
          localStorage.setItem('username', res.data.data.username)
          localStorage.setItem('isAdmin', res.data.data.isAdmin)
        })
      }else{
        next('/mine/login')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.person-container {
  padding: 5px;
  box-sizing: border-box;
  height: 100%;
  .title {
    line-height: 25px;
    color: #000000;
  }
  .cartBox {
    width: 100%;
    height: 100px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
  }
  .personMessage {
    flex-direction: column;
    .avatar {
      display: inline-block;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .username {
      margin-top: 6px;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .editAvatar {
    width: 80px;
    height: 20px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    border-radius: 5px;
    span {
      width: 80px;
      line-height: 20px;
      text-align: center;
      position: absolute;
      background-color: #24292e;
      font-size: 10px;
      color: #fff;
      z-index: -11;
    }
    input {
      opacity: 0;
      z-index: 22;
    }
  }
  .indent {
    display: flex;
    justify-content: space-around;
    .movie,
    .identity,
    .store {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      line-height: 50px;
      text-align: center;
    }
    .identity {
      font-size: 12px;
      font-weight: 600;
      border: 1px solid red;
      color: red;
    }
    .movie {
      border: 1px solid purple;
      color: purple;
    }
    .store {
      border: 1px solid #40d6c2;
      color: #40d6c2;
    }
  }
  .logoutBtn {
    margin-top: 4px;
    width: 100%;
    height: 40px;
  }
}
</style>
