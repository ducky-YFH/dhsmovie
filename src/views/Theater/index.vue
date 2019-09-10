<template>
  <div class="Theater-container">
    <Header title="大黑帅影院"></Header>
    <h1>我是theater</h1>
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

<style>

</style>