<template>
  <div class="ComingSoon-container" ref="wrapper">
    <ul>
      <li class="movie-item">
        <div class="movie-detail">
          <img
            src="http://p0.meituan.net/128.180/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg"
            alt
          />
          <div class="introduce">
            <h1>小小的愿望</h1>
            <p>234493&nbsp;人想看</p>
            <p>主演：山新，和相海,皇贞季</p>
            <p>2019-09-12上映</p>
          </div>
        </div>
        <button>预售</button>
      </li>
      <li class="movie-item">
        <div class="movie-detail">
          <img
            src="http://p0.meituan.net/128.180/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg"
            alt
          />
          <div class="introduce">
            <h1>小小的愿望</h1>
            <p>234493&nbsp;人想看</p>
            <p>主演：山新，和相海,皇贞季</p>
            <p>2019-09-12上映</p>
          </div>
        </div>
        <button>预售</button>
      </li>
      <li class="movie-item">
        <div class="movie-detail">
          <img
            src="http://p0.meituan.net/128.180/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg"
            alt
          />
          <div class="introduce">
            <h1>小小的愿望</h1>
            <p>234493&nbsp;人想看</p>
            <p>主演：山新，和相海,皇贞季</p>
            <p>2019-09-12上映</p>
          </div>
        </div>
        <button>预售</button>
      </li>
      <li class="movie-item">
        <div class="movie-detail">
          <img
            src="http://p0.meituan.net/128.180/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg"
            alt
          />
          <div class="introduce">
            <h1>小小的愿望</h1>
            <p>234493&nbsp;人想看</p>
            <p>主演：山新，和相海,皇贞季</p>
            <p>2019-09-12上映</p>
          </div>
        </div>
        <button>预售</button>
      </li>
      <li class="movie-item">
        <div class="movie-detail">
          <img
            src="http://p0.meituan.net/128.180/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg"
            alt
          />
          <div class="introduce">
            <h1>小小的愿望</h1>
            <p>234493&nbsp;人想看</p>
            <p>主演：山新，和相海,皇贞季</p>
            <p>2019-09-12上映</p>
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
  data(){
    return {}
  },
  methods:{
    _initScroll(){
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    },
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
