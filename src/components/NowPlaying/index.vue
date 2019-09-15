<template>
  <div class="NowPlaying-container">
    <loading v-if="loadingFlag"></loading>
    <scroller v-else :handleScroll="handleScroll" :handleTouchEnd="handleTouchEnd">
      <ul>
        <li v-if="message" class="refresh">{{ message }}</li>
        <li @tap="handleTap(item.id)" class="movie-item" v-for="(item) in movieList" :key="item.id">
          <div class="movie-detail">
            <img :src="item.img | imgFilter" alt />
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
    </scroller>
  </div>
</template>

<script>

export default {
  name:'NowPlaying',
  data(){
    return {
      movieList: [],
      message: '',
      loadingFlag: true,
      cityId: -1,
    }
  },
  filters:{
    imgFilter(url){
      return url.replace(/w\.h/,'128.180')
    }
  },
  methods:{
    handleScroll(pos){
      if(pos.y >= 30){
        this.message = '更新数据中'
      }
    },
    handleTouchEnd(pos){
      if(pos.y >= 30){
        this.$axios.get(`/api/movieOnInfoList?cityId=${this.$store.state.city.id}`).then((res) => {
          if(res.data.msg === 'ok'){
            this.movieList = res.data.data.movieList
            this.message = '更新成功'
            setTimeout(()=>{
              this.message = ''
            },1000)
          }
        })
      }
    },
    // 获取服务器数据
    getData(){
      this.$axios.get(`/api/movieOnInfoList?cityId=${this.$store.state.city.id}`)
      .then((res) => {
        if(res.data.msg === 'ok'){
          this.movieList = res.data.data.movieList
          setTimeout(()=>{
            this.loadingFlag = false
            this.cityId = this.$store.state.city.id
          },500)
        }
      })
    },
    handleTap(id){
      this.$router.push(`/movie/detail/${id}`)
    }
  },
  created(){

  },
  mounted(){

  },
  activated(){
    if(this.cityId !== this.$store.state.city.id){
      this.loadingFlag = true
      this.getData()
    }
  }
}
</script>

<style lang='scss' scoped>
.NowPlaying-container {
  height: calc(100% - 100px);
  height: -moz-calc(100% - 100px);
  height: -webkit-calc(100% - 100px);
  overflow: hidden;
  .refresh {
    padding: 15px 0 0 15px;
    color: #fe4365;
  }
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
