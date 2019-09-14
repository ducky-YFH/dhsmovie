<template>
  <div class="City-container" ref="wrapper">
    <section class="slide-container">
      <!-- 热门城市 -->
      <div class="hotCity">
        <h1>热门城市</h1>
        <ul>
          <li v-for="item in hotCity" :key="item.id" @tap="selectCity(item.nm, item.id)">
            <span>{{ item.nm }}</span>
          </li>
        </ul>
      </div>
      <!-- 城市选择 -->
      <div class="citySelect" v-for="item in allCity" :key="item.index">
        <h1>{{ item.index }}</h1>
        <ul>
          <li v-for="itemList in item.list" :key="itemList.id" @tap="selectCity(itemList.name, itemList.id)">
            {{ itemList.name }}
          </li>
        </ul>
      </div>
    </section>
    <div class="rightNav">
      <ul>
        <li v-for="(item,index) in allCity" :key="item.index" @click="selectItem(index, $event)">
          {{item.index}}
        </li>
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
    return {
      hotCity : [],
      allCity : [],
      listHeight: [],
      scrollY: 0,
      clickEvent: false,
    }
  },
  methods: {
    // better-scroll格式化
    _initScroll(){
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        tap: true,
        probeType: 1
      })
    },
    // 从服务器获取城市数据
    getCityData(){
      // 获取本地存储
      let hotCity = JSON.parse(window.localStorage.getItem('hotCity'))
      let allCity = JSON.parse(window.localStorage.getItem('allCity'))
      if(hotCity && allCity){
        this.hotCity = hotCity
        this.allCity = allCity
      }else{
        this.$axios.get('/api/cityList')
        .then((res)=>{
          if (res.data.msg === 'ok'){
            let cityList = res.data.data.cities
            this.formatCityList(cityList)
          }
        })
      }
    },
    // 获取热门城市和城市按首位字母存放
    formatCityList(cityList){
      let hotCity = [];
      let allCity = [];
      cityList.forEach((item)=>{
        // 获取热门城市
        if(item.isHot === 1){
          hotCity.push(item)
        }
        let firstStr = item.py.substr(0,1).toUpperCase()
        function judge(firstStr){
          for (let i = 0; i < allCity.length; i++) {
            if(allCity[i].index === firstStr){
              return false
            }            
          }
          return true
        }
        if(judge(firstStr)){
          allCity.push({index: firstStr, list: [{id: item.id, name: item.nm}]})
        }else{
          allCity.forEach((item2)=>{
            if(item2.index === firstStr){
              item2.list.push({id: item.id, name: item.nm})
            }
          })
        }
      })
      // 将字母由A--Z进行排序
      allCity.sort((n1,n2)=>{
        if(n1.index > n2.index){
          return 1
        }else if(n1.index < n2.index){
          return -1 
        }else{
          return 0
        }
      })
      // eslint-disable-next-line no-console
      this.hotCity = hotCity
      this.allCity = allCity
      // 本地存储
      window.localStorage.setItem('hotCity',JSON.stringify(this.hotCity))
      window.localStorage.setItem('allCity',JSON.stringify(this.allCity))
    },    
    _getHeight () {
      let cityItems = document.getElementsByClassName('citySelect')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < cityItems.length; i++) {
        const el = cityItems[i]
        height += el.clientHeight
        this.listHeight.push(height)
      }
    },
    selectItem (index, event) {
      this.clickEvent = true
      if (!event._constructed) {
        return ''
      } else {
        let cityItems = document.getElementsByClassName('citySelect')
        let el = cityItems[index]
        this.scroll.scrollToElement(el, 300)
      }
    },
    selectCity(name, id){
      this.$store.commit('city/CITY_INFO',{name, id})
      // 本地存储选择城市和id
      localStorage.setItem('city', JSON.stringify({name: name, id: id}))
      this.$router.push('/movie/nowPlaying')
    }
  },
  created () {
  },
  mounted () {
    setTimeout(() => {
      this.$nextTick(() => {
        this._initScroll()
        this.getCityData()
        this._getHeight()
      })
    },500)
  }
}
</script>

<style lang='scss' scoped>
.City-container {
  height: calc(100% - 100px);
  height: -moz-calc(100% - 100px);
  height: -webkit-calc(100% - 100px);
  overflow: hidden;
  width: calc(100% - 20px);
  width: -moz-calc(100% - 20px);
  width: -webkit-calc(100% - 20px);
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
  .rightNav {
    width: 20px;
    position: absolute;
    right: 0;
    top: 20%;
    ul {
      li {
        text-align: center;
        margin-top: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
