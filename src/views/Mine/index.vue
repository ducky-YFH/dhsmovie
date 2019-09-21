<template>
  <div class="Mine-container">
    <Header title="我的状态"></Header>
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

export default {
  name: 'Movie',
  components: {
    Header,
    TabBar
  }
}
</script>

<style lang="scss" scoped>
</style>
