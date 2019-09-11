<template>
  <div class="Mine-container">
    <Header title="我的状态"></Header>
    <div class="loginBox">
      <form action>
        <input type="text" name="account" placeholder="账户名/手机号/Email" />
        <input type="text" name="pass" placeholder="请输入你的号码" />
        <button class="loginBtn">登录</button>
        <p class="regAndFind">
          <a href="/">立即注册</a>
          <a href="/">找回密码</a>
        </p>
      </form>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

export default {
  name: 'Movie',
  components: {
    Header,
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