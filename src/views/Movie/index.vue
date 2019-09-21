<template>
  <div class="Movie-container">
    <Header title="大黑帅电影"></Header>
    <nav>
      <router-link tag="span" class="city" to="/movie/city">{{ $store.state.city.nm }}</router-link>
      <router-link tag="span" to="/movie/nowPlaying">正在热映</router-link>
      <router-link tag="span" to="/movie/comingSoon">即将上映</router-link>
      <router-link tag="span" to="/movie/search" class="icon icon-zhenhuichongtubiaozhizuo-kuozhan-"></router-link>
    </nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <TabBar></TabBar>
    <router-view name="detail"></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import {messageBox} from '@/components/JS'


export default {
  name: 'Movie',
  components: {
    Header,
    TabBar,
  },
  mounted(){
    setTimeout(()=>{
      this.$axios.get('/api/getLocation').then(res => {
        let msg = res.data.msg
        if(msg === 'ok'){
          let name = res.data.data.nm;
          let id = res.data.data.id
          if(this.$store.state.city.id == id) return
          messageBox({
            title: '定位',
            content: '深圳',
            cancel: '取消',
            ok: '切换定位',
            handleOk:()=>{
              window.localStorage.setItem('cityName',JSON.stringify(name))
              window.localStorage.setItem('cityId',JSON.stringify(id))              
              window.location.reload()
            }
          })
        }
      })
    },2000)
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