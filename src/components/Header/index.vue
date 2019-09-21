<template>
  <div class="Header-container">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .Header-container{
    width: 100%;
    line-height: 50px;
    background-color: #fe4365;
    h1{
      text-align: center;
      color: #fff;
    }
  }
</style>
