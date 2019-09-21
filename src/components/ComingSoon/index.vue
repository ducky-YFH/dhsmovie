<template>
  <div class="ComingSoon-container" ref="wrapper">
    <loading v-if="loadingFlag"></loading>
    <scroller v-else :handleScroll="handleScroll" :handleTouchEnd="handleTouchEnd">
      <ul>
        <li v-if="message" class="refresh">{{ message }}</li>
        <li @tap="handleTap(item.id)" class="movie-item" v-for="item in movieList" :key="item.id">
          <div class="movie-detail">
            <img :src="item.img | imgFilter" alt />
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
    </scroller>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  filters: {
    imgFilter(img){
      return img.replace(/w\.h/, '128.180')
    }
  },
  data(){
    return {
      movieList: [],
      message: '',
      loadingFlag: true,
      cityId: -1
    }
  },
  methods:{
    // 获取数据
    getData(){
      this.$axios.get(`/api/movieComingList?cityId=${this.$store.state.city.id}`)
      .then( (res) => {
        if(res.data.msg === 'ok'){
          this.movieList = res.data.data.comingList
          setTimeout(()=>{
            this.loadingFlag = false
            this.cityId = this.$store.state.city.id
          },500)
        }
      })
    },
    handleScroll(pos){
      if(pos.y >= 30){
        this.message = '更新数据中'
      }
    },
    handleTouchEnd(pos){
      if(pos.y >= 30){
        this.$axios.get(`/api/movieComingList?cityId=${this.$store.state.city.id}`).then((res) => {
          if(res.data.msg === 'ok'){
            this.movieList = res.data.data.comingList
            this.message = '更新成功'
            setTimeout(()=>{
              this.message = ''
            },1000)
          }
        })
      }
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
.ComingSoon-container {
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
