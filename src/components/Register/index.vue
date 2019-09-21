<template>
  <div class="Mine-container">
    <div class="registerBox">
      <form>
        <input v-model="email" type="text" name="email" placeholder="输入邮箱地址" />
        <input v-model="username" type="text" name="username" placeholder="设置用户名" />
        <input v-model="password" name="pass" type="password" placeholder="设置登录密码" />
        <div class="verifyBox">
          <input class="verifyInput" v-model="verify" type="text" placeholder="验证码" />
          <input ref="verifyBtn" class="verifyBtn" @click="getVerify()" type="button" :value="verifyText" />
        </div>
        <input class="registerBtn" @click="handleRegister()" type="button" value="注册" />
        <p class="regAndFind">
          <router-link to="login" tag="a">立即登录</router-link>
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
      email: '',
      username: '',
      password: '',
      verify: '',
      verifyText: '发送验证码',
      timer: ''
    }
  },
  methods:{
    handleRegister(){
      let that = this
      this.$axios.post('/api2/users/register',{
        email: this.email,
        username: this.username,
        password: this.password,
        verify: this.verify
      }).then( res => {
        // 弹出自己封住好的消息确认框
        messageBox({
          title: '注册提示',
          content: res.data.msg,
          ok: '确定',
        })
        if(res.data.status === 0){
          that.$router.push('login')
        }
      })
    },
    getVerify(){
      const that = this
      if(that.email){
        // -----------------------验证码定时器-----------------------
        clearInterval(that.timer)
        let verifyBtn = that.$refs.verifyBtn
        verifyBtn.style = "background-color: #a6a6a6"
        let count = 60
        that.timer = setInterval(()=>{
          count -= 1
          that.verifyText = `剩余${count}秒`
          verifyBtn.disabled= 'disabled'
          if(count === 0){
            that.verifyText = '发送验证码'
            verifyBtn.style = "background-color: #149aff"
            verifyBtn.disabled= ''
            clearInterval(that.timer)
          }
        },1000)
        // ------------------------发送验证码------------------------
        that.$axios.get(`/api2/users/verify?email=${that.email}`).then( res => {
          messageBox({
            title: '验证码提示',
            content: res.data.msg,
            ok: '确定',
          })
        })
      }else{
        messageBox({
          title: '验证码提示',
          content: '请输入注册邮箱',
          ok: '确定'
        })
      }
    },
  },
  components: {
    TabBar
  }
}
</script>

<style lang="scss" scoped>
.Mine-container {
  .registerBox {
    padding: 20px;
    input {
      width: 100%;
      height: 40px;
      border: 1px solid transparent;
      outline: none;
      border-bottom: 1px solid #cccccc;
    }
    .verifyBox {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .verifyInput {
        flex: 1;
      }
      .verifyBtn {
        flex: 1;
        color: #fff;
        background-color: #149aff;
        vertical-align: bottom;
      }
    }
    .registerBtn {
      width: 100%;
      height: 40px;
      margin-top: 20px;
      font-size: 20px;
      color: #fff;
      text-align: center;
      background-color: #fe4365;
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