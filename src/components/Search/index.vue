<template>
  <div class="Search-container">
    <header>
      <span class="icon icon-zhenhuichongtubiaozhizuo-kuozhan-"></span>
      <input v-model="message" type="text" placeholder="输入电影名字" />
    </header>
    <h1 class="title">电影/电视剧/综艺</h1>
    <div class="movieContent" ref="wrapper">
      <scroller>
        <ul>
          <li v-for="item in movieList" :key="(item.id)">
            <img :src="item.img | imgFilter" alt />
            <div class="introduce">
              <h1>{{ item.nm }}</h1>
              <p>{{ item.enm }}</p>
              <p class="type">{{ item.cat }}</p>
              <p>{{ item.frt }}</p>
            </div>
            <span class="score">{{ item.sc }}</span>
          </li>
        </ul>
      </scroller>
    </div>
    <transition name="notFindTrans">
      <div v-if="findFlag" class="notFind">没有找到相关电影</div>
    </transition>
  </div>
</template>

<script>
// import  BScroll from 'better-scroll'
import { setTimeout, clearTimeout } from 'timers';
import pinyin from '@/assets/pinyin/py'

export default {
  data(){
    return {
      message: '',
      timer: '',
      movieList: [],
      findFlag: false
    }
  },
  filters:{
    imgFilter(url){
      return url.replace(/w\.h/,'128.180')
    }
  },
  methods:{
    getData(val){
      val = pinyin.chineseToPinYin(val)
      this.$axios.get(`/api/searchList?cityId=${this.$store.state.city.id}&kw=${val}`).then((res) => {
        let msg = res.data.msg
        let movies = res.data.data.movies
        if(msg === 'ok' && movies){
          this.findFlag = false
          this.movieList = movies.list
        }else{
          this.movieList = []
          this.findFlag = true
        }
      })
    },
  },
  created(){
  },
  mounted(){
  },
  watch:{
    message(val){
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        if(val){
          this.getData(val)
        }
      }, 1000)
    }
  }
}
</script>

<style lang='scss' scoped>
.Search-container {
  height: calc(100% - 50px);
  height: -webkit-calc(100% - 50px);
  height: -moz-calc(100% - 50px);
  header {
    position: relative;
    padding: 10px 10px;
    background: #f5f5f5;
    span {
      top: 19px;
      left: 16px;
      position: absolute;
    }
    input {
      width: 100%;
      height: 28px;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      text-indent: 25px;
    }
  }
  .title {
    line-height: 15px;
    padding: 12px;
    border-bottom: 1px solid #e6e6e6;
    font-size: 16px;
    font-weight: 600;
    color: #999999;
  }
  .movieContent {
    height: calc(100% - 140px);
    height: -moz-calc(100% - 200px);
    height: -webkit-calc(100% - 150px);
    overflow: hidden;
    li {
      position: relative;
      display: flex;
      flex-flow: nowrap;
      padding: 10px;
      border-bottom: 1px solid #e6e6e6;
      img {
        width: 64px;
        height: 102px;
      }
      .introduce {
        margin-left: 10px;
        h1 {
          font-size: 20px;
          margin-bottom: 6px;
        }
        p {
          font-size: 13px;
          line-height: 25px;
        }
      }
      .score {
        position: absolute;
        right: 10px;
        display: inline-block;
        color: #fc7103;
      }
    }
  }
  .notFind {
    width: 160px;
    height: 50px;
    position: absolute;
    line-height: 50px;
    left: 50%;
    bottom: 12%;
    margin-left: -80px;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    background-color: rgba(236, 61, 61, 0.777);
  }
  .notFindTrans-enter-active,
  .notFindTrans-leave-active {
    transition: opacity 0.5s;
  }
  .notFindTrans-enter,
  .notFindTrans-leave-to {
    opacity: 0;
  }
}
</style>
