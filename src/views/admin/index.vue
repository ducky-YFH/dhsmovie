<template>
  <div class="admin-container">
    <header>
      <h1>管理员:{{ $store.state.user.username }}</h1>
    </header>
    <section>
      <aside>
        <el-col>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#2c3e50"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
          >
            <router-link to="/admin/user">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>
            </router-link>
            <router-link to="/admin/movie">
              <el-menu-item index="2">
                <i class="el-icon-document"></i>
                <span slot="title">电影管理</span>
              </el-menu-item>
            </router-link>
            <router-link to="/admin/theater">
              <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">影院管理</span>
              </el-menu-item>
            </router-link>
          </el-menu>
        </el-col>
      </aside>
      <div class="main">
        <router-view></router-view>
      </div>
    </section>
    <footer></footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    handleOpen(key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath);
    }
  },
  beforeRouteEnter(to,form,next){
  // 不能用this，因为组件还没有被实例化
    axios.get('/api2/users/getUser').then(res => {
      if(res.data.status === 0){
        next();
      }else{
        next('/mine/login')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.admin-container {
  width: 100%;
  height: 100%;
  header {
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: #2c3e50;
    padding: 0 20px;
    color: #fff;
    box-sizing: border-box;
    h1 {
      font-size: 18px;
    }
  }
  section {
    height: calc(100% - 70px);
    display: flex;
    flex-direction: row;
    aside {
      text-align: center;
      width: 150px;
      height: 100%;
      padding: 30px 0;
      box-sizing: border-box;
      color: #fff;
      background-color: #2c3e50;
      border-top: 1px solid #fff;
      .el-menu-vertical-demo {
        border-right: 1px solid #2c3e50;
      }
    }
    .main {
      padding: 20px;
      box-sizing: border-box;
      width: calc(100% - 150px);
      background-color: #ffffff;
    }
  }
}
</style>
