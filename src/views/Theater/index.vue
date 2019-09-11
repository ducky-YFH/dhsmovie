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
        <li>
          <h1>华夏国际影城<span class="price">18元起</span>
          </h1>
          <p class="address">
            <span>江宁区诚信大道990号优尚天地广场A座3楼</span>
            <span>915.1km</span>
          </p>
          <div class="feature">
            <span class="back">退</span>
            <span class="discount">折扣卡</span>
            <span class="snack">小吃</span>
          </div>
        </li>
        <li>
          <h1>华夏国际影城<span class="price">18元起</span>
          </h1>
          <p class="address">
            <span>江宁区诚信大道990号优尚天地广场A座3楼</span>
            <span>915.1km</span>
          </p>
          <div class="feature">
            <span class="back">退</span>
            <span class="discount">折扣卡</span>
            <span class="snack">小吃</span>
          </div>
        </li>
        <li>
          <h1>华夏国际影城<span class="price">18元起</span>
          </h1>
          <p class="address">
            <span>江宁区诚信大道990号优尚天地广场A座3楼</span>
            <span>915.1km</span>
          </p>
          <div class="feature">
            <span class="back">退</span>
            <span class="discount">折扣卡</span>
            <span class="snack">小吃</span>
          </div>
        </li>
        <li>
          <h1>华夏国际影城<span class="price">18元起</span>
          </h1>
          <p class="address">
            <span>江宁区诚信大道990号优尚天地广场A座3楼</span>
            <span>915.1km</span>
          </p>
          <div class="feature">
            <span class="back">退</span>
            <span class="discount">折扣卡</span>
            <span class="snack">小吃</span>
          </div>
        </li>
                <li>
          <h1>华夏国际影城<span class="price">18元起</span>
          </h1>
          <p class="address">
            <span>江宁区诚信大道990号优尚天地广场A座3楼</span>
            <span>915.1km</span>
          </p>
          <div class="feature">
            <span class="back">退</span>
            <span class="discount">折扣卡</span>
            <span class="snack">小吃</span>
          </div>
        </li>
        <li>
          <h1>华夏国际影城<span class="price">18元起</span>
          </h1>
          <p class="address">
            <span>江宁区诚信大道990号优尚天地广场A座3楼</span>
            <span>915.1km</span>
          </p>
          <div class="feature">
            <span class="back">退</span>
            <span class="discount">折扣卡</span>
            <span class="snack">小吃</span>
          </div>
        </li>
        <li>
          <h1>华夏国际影城<span class="price">18元起</span>
          </h1>
          <p class="address">
            <span>江宁区诚信大道990号优尚天地广场A座3楼</span>
            <span>915.1km</span>
          </p>
          <div class="feature">
            <span class="back">退</span>
            <span class="discount">折扣卡</span>
            <span class="snack">小吃</span>
          </div>
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
    return {}
  },
  methods:{
    _InitScroll(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true
      })
    }
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
          }
          .back{
            color: #8cbbc8;
            border: 1px solid #8cbbc8;
          }
          .discount{
            color: #ffa579;
            border: 1px solid #ffa579;
          }
          .snack{
            color: #e54847;
            border: 1px solid #e54847;
          }
        }
      }
    }
  }
</style>
