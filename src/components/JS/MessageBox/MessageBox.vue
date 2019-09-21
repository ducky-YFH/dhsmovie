<template>
  <div class="messageBox">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <div class="btn">
      <button v-if="cancel" @touchstart="handleCancel">{{ cancel }}</button>
      <button @touchstart="handleOk">{{ ok }}</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .messageBox{
    position: absolute;
    width: 200px;
    height: 150px;
    left: 50%;
    top:50%;
    margin: -75px 0 0 -100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color:#ffffff;
    box-shadow: 5px 5px 10px 1px #e6e6e6;
    border-radius: 5px;
    z-index: 9999;
    h2{
      line-height: 50px;
      font-size: 20px;
      font-weight: bold;
    }
    p{
      line-height: 15px;
      line-height: 50px;
    }
    .btn{
      width: 100%;
      display: flex;
      button{
        color: #fff;
        display: inline-block;
        flex: 1;
        height: 50px;
        border-radius: 2px;
      }
      button:first-child{
        background-color: rgba(236, 45, 77, 0.6);
      }
      button:last-child{
        background-color: #fe4365;
      }
    }
  }
</style>