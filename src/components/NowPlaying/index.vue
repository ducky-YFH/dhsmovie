<template>
  <div class="NowPlaying-container" ref="wrapper">
    <ul>
      <li class="movie-item" v-for="(item) in movieList" :key="item.id">
        <div class="movie-detail">
          <img
            :src="item.img | imgFilter"
            alt
          />
          <div class="introduce">
            <h1>{{ item.nm }}</h1>
            <p>
              观众评
              <span class="score">{{ item.sc }}</span>
            </p>
            <p>主演：{{ item.star }}</p>
            <p>{{ item.showInfo }}</p>
          </div>
        </div>
        <button>购票</button>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { setTimeout } from 'timers';
export default {
  name:'NowPlaying',
  data(){
    return {
      movieList: []
    }
  },
  filters:{
    imgFilter(url){
      return url.replace(/w\.h/,'128.180')
    }
  },
  methods:{
    _initScroll(){
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    },
    // 获取服务器数据
    getData(){
      this.$axios.get('/api/movieOnInfoList?cityId=10')
      .then((res) => {
        if(res.data.msg === 'ok'){
            this.movieList = res.data.data.movieList
        }
      })
    }
  },
  created(){
    this.getData()
  },
  mounted(){
    setTimeout(() => {
      this.$nextTick(() => {
        this._initScroll()
      })
    },500)
  }
}
</script>

<style lang='scss' scoped>
.NowPlaying-container {
  height: calc(100% - 100px);
  height: -moz-calc(100% - 100px);
  height: -webkit-calc(100% - 100px);
  overflow: hidden;
  .movie-item {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    .movie-detail {
      display: flex;
      align-items: flex-start;
      img {
        width: 64px;
        height: 102px;
        cursor: pointer;
      }
      .introduce {
        margin-left: 10px;
        display: inline-block;
        h1 {
          font-weight: 600;
          font-size: 18px;
          cursor: pointer;
          margin-bottom: 5px;
        }
        .score {
          color: #faaf00;
          font-weight: 600;
        }
        p {
          font-size: 14px;
          line-height: 20px;
          color: #666666;
        }
      }
    }
    button {
      width: 47px;
      height: 27px;
      line-height: 27px;
      color: #fff;
      background-color: #e54847;
    }
  }
}
</style>
