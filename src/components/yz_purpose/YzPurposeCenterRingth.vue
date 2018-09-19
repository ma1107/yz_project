<template>
  <div class="yz_purpose_center_b">
    <div class="yz_purpose_center_b_a" >
      <div class="yz_purpose_center_b1">
        <i class="iconfont icon-didian2"></i>
        <span>热门目的地</span>
      </div>
      <ul class="yz_purpose_center_b3">
        <li  v-for="i in yztos1.goalOnea">
          <a href="#">
            <img :src="i.imgs">
            <p>{{i.ps}}</p>
          </a>
        </li>

      </ul>
      <div class="yz_purpose_center_b2">
        <img src="../../../static/img/mz_1.png">
        <span>地区</span>
      </div>
      <ul class="yz_purpose_center_b2_ul">
        <li v-for="a in yztos1.goalOneb">
          <a href="#">{{a.as}}</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
        name: "YzPurposeCenterRingth",
        props:["yztos1"],
    }
</script>

<style scoped>
  .yz_purpose_center_b{
    width: 2.35rem;
    height: 4.72rem;
    float: right;
    padding-right: 0.1rem;
    overflow-y: scroll;
    overflow-x: hidden;
    flex:1;
  }
  .yz_purpose_center_b1{
    display: -webkit-flex;
    width: 100%;
  }
  .yz_purpose_center_b1 i{
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#fd9570), to(#ff1d62));
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
    vertical-align: middle;
    line-height: 0.4rem;
    font-size: 0.18rem;
  }
  .yz_purpose_center_b1 span{
    font-size: 0.16rem;
    color: #444;
    line-height: 0.4rem;
    margin-left: 0.05rem;

  }
  .yz_purpose_center_b3{


  }
  .yz_purpose_center_b3 li{
    width: 1.13rem;
    border-radius: 0.05rem;
    float: left;
    margin-left: 0.04rem;
    margin-top: 0.08rem;
  }
  .yz_purpose_center_b3 li a{
    position: relative;
    box-sizing: border-box;

  }
  .yz_purpose_center_b3 li a img{
    width: 100%;
    height: 0.7rem;
    border-radius: 0.05rem;

  }
  .yz_purpose_center_b3 li a p{
    font-size: 0.14rem;
    color: #fff;
    line-height: 0.13rem;
    position: absolute;
    top: -0.2rem;
    left: 0.2rem;
    width: 0.5rem;
  }
  .yz_purpose_center_b2{
    padding-left: 0.08rem;
    display: -webkit-flex;
    padding-top: 0.15rem;
  }
  .yz_purpose_center_b_a{
    padding-bottom: 1rem;
  }
  .yz_purpose_center_b2 img{
    width: 0.17rem;
    height: 0.16rem;
  }
  .yz_purpose_center_b2 span{
    font-size: 0.16rem;
    color: #444;
    line-height: 0.22rem;
    margin-left: 0.05rem;
  }
  .yz_purpose_center_b2_ul{
    padding-bottom: 1rem;
  }
  .yz_purpose_center_b2_ul li{
    width: 33.3%;
    text-align: center;
    float: left;
  }
  .yz_purpose_center_b2_ul li a{
    width: 0.7rem;
    height: 0.35rem;
    display: inline-block;
    background-size: 100% 100%;
    color: #666;
    font-size: 0.11rem;
    text-align: center;
    line-height: 0.35rem;
    background-image: url("../../../static/img/border1.png");
    margin-left: 0.03rem;
    margin-top: 0.1rem;
    padding-left: 0.02rem;
    padding-right: 0.02rem;
    /*text-overflow: ellipsis-lastline;*/
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

  }
</style>
