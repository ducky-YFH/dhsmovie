<template>
  <div class="tabBar-container">
    <ul>
      <router-link to="/movie" tag="li">
        <i class="icon icon-movie--line"></i>
        <p>电影</p>
      </router-link>
      <router-link to="/theater" tag="li">
        <i class="icon icon-cinema-"></i>
        <p>影院</p>
      </router-link>
      <router-link to="/mine" tag="li">
        <i class="icon icon-mine"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style lang="scss" scoped>
.active{
  color: #fe4365;
}
.tabBar-container {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    li {
      padding-top: 3px;
      flex: 1;
      cursor: pointer;
      .icon {
        font-size: 20px;
      }
      p {
        margin-top: 3px;
        font-size: 15px;
      }
    }
  }
}
</style>