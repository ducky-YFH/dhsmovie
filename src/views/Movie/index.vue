<template>
  <div class="Movie-container">
    <Header title="大黑帅电影"></Header>
    <nav>
      <router-link tag="span" class="city" to="/movie/city">成都</router-link>
      <router-link tag="span" to="/movie/nowPlaying">正在热映</router-link>
      <router-link tag="span" to="/movie/comingSoon">即将上映</router-link>
      <router-link tag="span" to="/movie/search" class="icon icon-zhenhuichongtubiaozhizuo-kuozhan-"></router-link>
    </nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
.active{
  color: #fe4365;
}
.Movie-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  -moz-box-sizing: border-box;
  padding-bottom: 50px;
  box-sizing: border-box;
  nav {
    height: 46px;
    line-height: 46px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e6e6e6;
    span {
      font-size: 15px;
      font-weight: 600;
      flex: 1;
      text-align: center;
      cursor: pointer;
    }
    .city {
    }
    .icon {
      font-size: 20px;
    }
  }
}
</style>