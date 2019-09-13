<template>
  <div class="Theater-container">
    <Header title="大黑帅影院"></Header>
    <div class="navBar">
      <span>全城</span>
      <span>品牌</span>
      <span>特色</span>
    </div>
    <div class="wrapper" ref="wrapper">
      <ul>
        <li v-for="item in theaterList" :key="item.id">
          <h1>{{ item.nm }}<span class="price">{{ item.sellPrice }}元起</span>
          </h1>
          <p class="address">
            <span>{{ item.addr }}</span>
            <span>{{ item.distance }}</span>
          </p>
          <div class="feature">
            <!-- <span class="allowRefund">退</span>
            <span class="endorse">退</span>
            <span class="sell">折扣卡</span>
            <span class="snack">小吃</span> -->
            <span v-for="(val,key) in tagList(item.tag)" :key="key" :class="key">
              {{ val | tagItemFilter(key)}}
            </span>
          </div>
          <p class="promotion" v-if="item.promotion.length !== 0">{{ item.promotion.cardPromotionTag }}</p>
        </li>
      </ul>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import BScroll from 'better-scroll'
import { setTimeout } from 'timers';
export default {
  name: 'Movie',
  data(){
    return {
      theaterList: [],
    }
  },
  filters: {
    tagItemFilter(val,key){
      let cardList = {'allowRefund': '改签','endorse': '退','sell': '折扣卡','snack': '小吃'}
      for( var i in cardList){
        if(i === key){
          return cardList[i]
        }
      }
      return val
    }
  },
  methods:{
    _InitScroll(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true
      })
    },
    getData(){
      this.$axios.get('/api/cinemaList?cityId=10').then((res) =>{
        let msg = res.data.msg
        let cinemas = res.data.data.cinemas
        if(msg === 'ok' && cinemas){
          this.theaterList = cinemas
        }
      })
    }
  },
  computed:{
    tagList(){
      return  tag => {
        let newPath = {}
        let rest = 0
        let restname = 'rest'
        for(let key in tag){
          if(tag[key] === 1){
            newPath[key] = 1
          }
          if(key === 'hallTypeVOList' && tag[key].length !== 0){
            tag[key].forEach(item => {
              restname = restname + rest
              rest += 1
              newPath[restname] = item.name
            });
          }
        }
        return newPath
      }
    }
  },
  created(){
    this.getData()
  },
  mounted(){
    setTimeout(()=>{
      this.$nextTick(()=>{
        this._InitScroll()
      })
    },300)
  },
  components: {
    Header,
    TabBar
  }
}
</script>

<style lang="scss" scoped>
  .Theater-container{
    height: calc(100% - 50px);
    height: -webkit-calc(100% - 100px);
    height: -moz-calc(100% - 50px);
    .navBar{
      display: flex;
      justify-content: space-around;
      height: 46px; 
      line-height: 46px;
      border-bottom: 1px solid #ededed;
      span{
        flex: 1;
        text-align: center;
        cursor: pointer;
      }
    }
    .wrapper{
      height: calc(100% - 100px);
      padding: 0 20px;
      overflow: hidden;
      li{
        border-bottom: 1px solid #f0f0f0;
        padding: 20px 0;
        h1{
          font-size: 16px;
          font-weight: 600;
          .price{
            color: #fe4365;
          }
        }
        .address{
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #797979;
          line-height: 30px;
        }
        .feature{
          span{
            font-size: 12px;
            margin: 0 3px 0 0;
            padding: 0 3px;
            border-radius: 2px;
            color: #589daf;
            border: 1px solid #589daf;
          }
          .endorse{
            color: #8cbbc8;
            border: 1px solid #8cbbc8;
          }
          .sell{
            color: #ffa579;
            border: 1px solid #ffa579;
          }
          .snack{
            color: #e54847;
            border: 1px solid #e54847;
          }
          .allowRefund{
            color: #43b984;
            border: 1px solid #43b984;            
          }
        }
        .promotion{
          margin-top: 8px;
          font-size: 12px;
          color: #9999a6;
        }
      }
    }
  }
</style>
