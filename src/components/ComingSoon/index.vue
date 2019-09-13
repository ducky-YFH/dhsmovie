<template>
  <div class="ComingSoon-container" ref="wrapper">
    <ul>
      <li class="movie-item" v-for="item in movieList" :key="item.id">
        <div class="movie-detail">
          <img
            :src="item.img | imgFilter"
            alt
          />
          <div class="introduce">
            <h1>{{ item.nm }}</h1>
            <p>{{ item.wish }}&nbsp;人想看</p>
            <p>{{ item.star }}</p>
            <p>{{ item.rt }}上映</p>
          </div>
        </div>
        <button>预售</button>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { setTimeout } from 'timers';
export default {
  name: 'ComingSoon',
  filters: {
    imgFilter(img){
      return img.replace(/w\.h/, '128.180')
    }
  },
  data(){
    return {
      movieList: []
    }
  },
  methods:{
    _initScroll(){
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    },
    // 获取数据
    getData(){
      this.$axios.get('/api/movieComingList?cityId=10')
      .then( (res) => {
        if(res.data.msg === 'ok'){
          this.movieList = res.data.data.comingList
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
.ComingSoon-container {
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
      background-color: #3c9fe6;
    }
  }
}
</style>
