<template>
  <div class="Mine-container">
    <div class="loginBox">
      <form>
        <input v-model="account" type="text" name="account" placeholder="Email" />
        <input v-model="password" name="pass" type="password" placeholder="密码" />
        <div class="captchaBox">
          <input ref="captchaInput" type="text" placeholder="请输入验证码">
          <img ref="captchaImg" src="/api2/users/captcha" @touchstart.stop="changeCaptcha">
        </div>
        <input class="loginBtn" @click="handleLogin()" type="button" value="登录" />
        <p class="regAndFind">
          <router-link to="register" tag="a">立即注册</router-link>
          <router-link to="findpassword" tag="a">找回密码</router-link>
        </p>
      </form>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import { messageBox } from '@/components/JS'

export default {
  name: 'Movie',
  data(){
    return {
      account: '',
      password: '',
    }
  },
  methods:{
    handleLogin(){
      let that = this
      this.$axios.post('/api2/users/login',{
        captcha: this.$refs.captchaInput.value,
        email: this.account,
        password: this.password
      }).then( res => {
        // 弹出自己封住好的消息确认框
        messageBox({
          title: '登录提示',
          content: res.data.msg,
          ok: '确定',
        })
        if(res.data.status === 0){
          that.$router.push('personCenter')
        }
        this.$refs.captchaImg.src = '/api2/users/captcha?' + Math.random()
      })
    },
    // 改变验证码
    changeCaptcha(e){
      e.target.src = '/api2/users/captcha?' + Math.random()
    }
  },
  components: {
    TabBar
  }
}
</script>

<style lang="scss" scoped>
.Mine-container {
  .loginBox {
    padding: 20px;
    input {
      width: 100%;
      height: 40px;
      border: 1px solid transparent;
      outline: none;
      border-bottom: 1px solid #cccccc;
    }
    .captchaBox{
      display: flex;
      justify-content: space-around;
    }
    .loginBtn {
      width: 100%;
      height: 40px;
      margin-top: 20px;
      font-size: 20px;
      color: #fff;
      text-align: center;
      background-color: #3385ff;
    }
    .regAndFind {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }
  }
}
</style>