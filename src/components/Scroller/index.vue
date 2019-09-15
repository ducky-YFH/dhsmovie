<template>
  <div class="scroller-container" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
    handleScroll:{
      type: Function,
      default: function(){}
    },
    handleTouchEnd:{
      type: Function,
      default: function(){}
    }
  },
  methods:{
    _initScroll(){
      this.$scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        tap: true,
        probeType: 1
      })
      this.$scroll.on('scroll',(pos) => {
        this.handleScroll(pos)
      })
      this.$scroll.on('touchEnd',(pos)=>{
        this.handleTouchEnd(pos)
      })
    },
  },
  mounted(){
    setTimeout(()=>{
      this.$nextTick(()=>{
        this._initScroll()
      })
    },300)
  }
}
</script>

<style lang="scss" scoped>
.scroller-container {
  height: 100%;
  overflow: hidden;
}
</style>