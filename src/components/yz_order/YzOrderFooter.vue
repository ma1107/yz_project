<template>
    <div class="yz_order_bottom">
      <div class="yz_order_bottom_a">
        <p>总计</p>
        <p>￥<span>123</span></p>
      </div>
        <a href="#">提交订单</a>
    </div>
</template>

<script>
    export default {
        name: "YzOrderFooter"
    }
</script>

<style scoped>
  .yz_order_bottom{
    width: 3.75rem;
    height: 0.5rem;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-top: 1px solid #dddddd;
  }
  .yz_order_bottom_a{
    display: -webkit-flex;
    margin-left: 0.25rem;
  }
  .yz_order_bottom_a p:nth-child(1){
    line-height: 0.5rem;
    color: #666666;
    font-size: 0.15rem;
  }
  .yz_order_bottom_a p:nth-child(2){
    font-size: .2rem;
    color: #ff3660;
    line-height: 0.5rem;
    padding-left: .05rem;
    float: left;
  }
  .yz_order_bottom a{
    background: linear-gradient(30deg, #ff1a62, #ff745a);
    color: #ffffff;
    border-radius: 0.1rem;
    font-size: .2rem;
    width: 1.29rem;
    height: 0.416rem;
    text-align: center;
    line-height: 0.416rem;
    margin-right: 0.1rem;
  }
</style>
