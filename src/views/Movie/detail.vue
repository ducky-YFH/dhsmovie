<template>
  <div class="detail-container">
        <header>
          <span class="back" @touchstart="handleBack()">返回</span>
          <span>影片详情</span>
        </header>
        <div class="scroll-outer">
          <scroller>
            <div class="scroller-inner">
              <section class="detail-section">
                <img class="movie-img" :src="movieDetail.img | imgFilter" alt="">
                <div class="detail-item">
                  <h1>{{ movieDetail.nm }}</h1>
                  <p>{{ movieDetail.enm }}</p>
                  <p>评分：{{ movieDetail.sc }}</p>
                  <p>{{ movieDetail.cat }}</p>
                  <p>{{ movieDetail.src }}/{{ movieDetail.dur }}分钟</p>
                  <p>{{ movieDetail.pubDesc }}</p>
                </div>
                <div class="background">
                  <img :src="movieDetail.img | imgFilter" alt="">
                </div>
              </section>
              <section class="section-introduce cartBox">
                <p class="text">{{ movieDetail.dra }}</p>
              </section>
              <section class="section-img cartBox">
                <h1>图片详情</h1>
                <div class="pic-wrapper" ref="imgWrapper">
                  <ul>
                    <li v-for="(item,index) in movieDetail.photos" :key="index">
                      <img :src="item | imgFilter" alt />
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </scroller>
        </div>
      </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'detail',
  filters:{
    imgFilter(url){
      if(url){
        return url.replace(/w\.h/, '148.208')
      }
    }
  },
  data(){
    return {
      movieDetail: {}
    }
  },
  props:['movieId'],
  methods:{
    _initScroll(){
      this.imgScroll = new BScroll(this.$refs.imgWrapper, {
        scrollX: true,
        click: true,
        tap: true
      })
    },
    handleBack(){
      this.$router.back()
    },
    getData(){
      this.$axios.get(`/api/detailmovie?movieId=${this.movieId}`).then((res)=>{
        const msg = res.data.msg
        if(msg === 'ok'){
          this.movieDetail = res.data.data.detailMovie
        }
      })
    }
  },
  created(){
    this.getData()
  },
  mounted(){
    this.$nextTick(()=>{
      this._initScroll()
    })
  }
}
</script>

<style lang="scss" scoped>
  .detail-container{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
    z-index: 999;
    header{
      position: relative;
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: #fe4365;
      color:#fff;
      .back{
        position: absolute;
        left: 10px;  
      }
    }
    .scroll-outer{
      height: calc(100% - 50px);
    }
    .detail-section{
      position: relative;
      padding: 15px;
      display: flex;
      overflow: hidden;
      .movie-img{
        width: 110px;
        height: 150px;
      }
      .background{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(10px);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .detail-item{
        display: inline-block;
        vertical-align: top;
        margin-left: 20px;
        h1{
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #fff;
        }
        p{
          font-size: 13px;
          line-height: 19px;
          color: #e7e6e5;
        }
      }
    }
    .cartBox{
      padding: 15px;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 10px;
      background-color: #fff;
    }
    .section-introduce{
      font-size: 14px;
      line-height: 20px;
    }
    .section-img {
      background-color: #ffffff;
      border-top: 1px solid #dbdee1;
      h1 {
        font-size: 15px;
        margin-bottom: 8px;
      }
      .pic-wrapper {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        ul {
          display:inline-block;
          li {
            display: inline-block;
            margin-right: 4px;
            img {
              width: 120px;
              height: 90px;
            }
          }
        }
      }
    }
  }
</style>