<template>
  <div class="City-container" ref="wrapper">
    <section class="slide-container">
      <!-- 热门城市 -->
      <div class="hotCity">
        <h1>热门城市</h1>
        <ul>
          <li>
            <span>北京</span>
          </li>
          <li>
            <span>上海</span>
          </li>
          <li>
            <span>广州</span>
          </li>
          <li>
            <span>天津</span>
          </li>
          <li>
            <span>杭州</span>
          </li>
        </ul>
      </div>
      <!-- 城市选择 -->
      <div class="citySelect">
        <h1>A</h1>
        <ul>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
        </ul>
      </div>
      <div class="citySelect">
        <h1>A</h1>
        <ul>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
        </ul>
      </div>
    </section>
    <div class="leftNav">
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { setTimeout } from 'timers';
export default {
  name: 'city',
  data(){
    return {}
  },
  methods: {
    _initScroll(){
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    },
  },
  created () {
  },
  mounted () {
    setTimeout(() => {
      this.$nextTick(() => {
        this._initScroll()
      })
    },500)
  }
}
</script>

<style lang='scss' scoped>
.City-container {
  height: calc(100% - 100px);
  overflow: hidden;
  width: calc(100% - 20px);
  .slide-container {
    background-color: #fff5f0;
    .hotCity {
      h1 {
        line-height: 30px;
        font-size: 12px;
        padding-left: 15px;
        background-color: #f0f0f0;
      }
      ul {
        li {
          display: inline-block;
          background: #fff;
          width: 29%;
          height: 33px;
          margin-top: 15px;
          margin-left: 3%;
          padding: 0 4px;
          border: 1px solid #e6e6e6;
          border-radius: 3px;
          line-height: 33px;
          text-align: center;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          cursor: pointer;
        }
      }
    }
    .citySelect {
      margin-top: 20px;
      h1 {
        line-height: 30px;
        font-size: 12px;
        padding-left: 15px;
        background-color: #f0f0f0;
        margin-bottom: 10px;
      }
      ul {
        padding: 0 3%;
        li {
          line-height: 30px;
        }
      }
    }
  }
  .leftNav{
    width: 20px;
    position: absolute;
    right: 0;
    top: 30%;
    ul{
      li{
        text-align: center;
        margin-top: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
