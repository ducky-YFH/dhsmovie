<template>
  <div class="NowPlaying-container" ref="wrapper">
    <ul>
      <li class="movie-item">
        <div class="movie-detail">
          <img
            src="http://p0.meituan.net/128.180/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg"
            alt
          />
          <div class="introduce">
            <h1>罗小黑战记</h1>
            <p>
              观众评
              <span class="score">9.4</span>
            </p>
            <p>主演：山新，和相海,皇贞季</p>
            <p>今天111家影院放映1408场</p>
          </div>
        </div>
        <button>购票</button>
      </li>
      <li class="movie-item">
        <div class="movie-detail">
          <img
            src="http://p0.meituan.net/128.180/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg"
            alt
          />
          <div class="introduce">
            <h1>罗小黑战记</h1>
            <p>
              观众评
              <span class="score">9.4</span>
            </p>
            <p>主演：山新，和相海,皇贞季</p>
            <p>今天111家影院放映1408场</p>
          </div>
        </div>
        <button>购票</button>
      </li>
      <li class="movie-item">
        <div class="movie-detail">
          <img
            src="http://p0.meituan.net/128.180/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg"
            alt
          />
          <div class="introduce">
            <h1>罗小黑战记</h1>
            <p>
              观众评
              <span class="score">9.4</span>
            </p>
            <p>主演：山新，和相海,皇贞季</p>
            <p>今天111家影院放映1408场</p>
          </div>
        </div>
        <button>购票</button>
      </li>
      <li class="movie-item">
        <div class="movie-detail">
          <img
            src="http://p0.meituan.net/128.180/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg"
            alt
          />
          <div class="introduce">
            <h1>罗小黑战记</h1>
            <p>
              观众评
              <span class="score">9.4</span>
            </p>
            <p>主演：山新，和相海,皇贞季</p>
            <p>今天111家影院放映1408场</p>
          </div>
        </div>
        <button>购票</button>
      </li>
      <li class="movie-item">
        <div class="movie-detail">
          <img
            src="http://p0.meituan.net/128.180/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg"
            alt
          />
          <div class="introduce">
            <h1>罗小黑战记</h1>
            <p>
              观众评
              <span class="score">9.4</span>
            </p>
            <p>主演：山新，和相海,皇贞季</p>
            <p>今天111家影院放映1408场</p>
          </div>
        </div>
        <button>购票</button>
      </li>
      <li class="movie-item">
        <div class="movie-detail">
          <img
            src="http://p0.meituan.net/128.180/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg"
            alt
          />
          <div class="introduce">
            <h1>罗小黑战记</h1>
            <p>
              观众评
              <span class="score">9.4</span>
            </p>
            <p>主演：山新，和相海,皇贞季</p>
            <p>今天111家影院放映1408场</p>
          </div>
        </div>
        <button>购票</button>
      </li>
      <li class="movie-item">
        <div class="movie-detail">
          <img
            src="http://p0.meituan.net/128.180/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg"
            alt
          />
          <div class="introduce">
            <h1>罗小黑战记</h1>
            <p>
              观众评
              <span class="score">9.4</span>
            </p>
            <p>主演：山新，和相海,皇贞季</p>
            <p>今天111家影院放映1408场</p>
          </div>
        </div>
        <button>购票</button>
      </li>
      <li class="movie-item">
        <div class="movie-detail">
          <img
            src="http://p0.meituan.net/128.180/movie/2918a5e403dde6e4254941968d7719ce3942369.jpg"
            alt
          />
          <div class="introduce">
            <h1>罗小黑战记</h1>
            <p>
              观众评
              <span class="score">9.4</span>
            </p>
            <p>主演：山新，和相海,皇贞季</p>
            <p>今天111家影院放映1408场</p>
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
.NowPlaying-container {
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
