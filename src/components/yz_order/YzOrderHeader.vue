<template>
  <div class="yz_order_top">
    <i class="iconfont icon-fanhui1"></i>
    <p>填写订单</p>
    <i class="iconfont icon-dianhua"></i>
  </div>
</template>

<script>
    export default {
        name: "YzOrderHeader"
    }
</script>

<style scoped>
  .yz_order_top{
    width: 3.75rem;
    height: 0.44rem;
    background: #fff;
    justify-content: space-between;
    display: -webkit-flex;
    align-items: center;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
  }
  .yz_order_top i{
    color: #ff2f60;
    font-size: 0.2rem;
  }
  .yz_order_top p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    font-size: .18rem;
    color: #444444;
  }
  .yz_order_top i:nth-child(1){
    margin-left: 0.1rem;
  }
  .yz_order_top i:nth-child(3){
    margin-right: 0.1rem;
  }
</style>
