<template>
  <div class="yz_purpose_top">
    <div class="yz_purpose_top_s">
      <i class="iconfont icon-sousuo"></i>
      <input type="search" placeholder="搜索目的地/景点/关键词">
    </div>
  </div>
</template>

<script>
    export default {
        name: "YzPurposeHeader"
    }
</script >

<style lang="scss" scoped="" type="text/css">

  .yz_purpose_top {
    width: 3.75rem;
    height: 1.4rem;
    background: url("../../../static/img/mz_1.jpg") no-repeat;
    background-size: 3.75rem 1.4rem;
    padding-top: 0.95rem;
    box-sizing: border-box;
  }
  .yz_purpose_top_s{
    width: 3.4rem;
    height: 0.35rem;
    background: #fff;
    border-radius: 0.175rem;
    margin: 0 auto ;
    display: -webkit-flex;
    box-shadow: 0 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.15);
  }
  .yz_purpose_top_s i{
      font-size: 0.23rem;
      color: #999;
      vertical-align: middle;
      margin: 0.07rem 0.1rem 0 0.1rem;
    }
  .yz_purpose_top_s input{
    width: 2.5rem;
    height: 0.35rem;
    /*margin: 0 auto;*/
    font-size: 0.16rem;
  }

</style>
