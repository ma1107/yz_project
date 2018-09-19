<template>
  <footer>
    <div class="yz_footer_box" >
      <i class="iconfont icon-xiaoxi1"></i>
      <a class="yz_footer_box_p">首页</a>
    </div>
    <div class="yz_footer_box" >
      <i class="iconfont icon-tool-shizhong-"></i>
      <a class="yz_footer_box_p">特卖会</a>
    </div>
    <div class="yz_footer_box ax"  >
      <i class="iconfont icon-didian1"></i>
      <a class="yz_footer_box_p">目的地</a>
    </div>
    <div class="yz_footer_box" >
      <i class="iconfont icon-find1"></i>
      <a class="yz_footer_box_p">发现</a>
    </div>
    <div class="yz_footer_box" >
      <i class="iconfont icon-wode"></i>
      <a class="yz_footer_box_p">我的</a>
    </div>
  </footer>
</template>
<script>
    export default {
        name: "YzPurposeFooter",

    }
</script>
<style scoped>
  footer{
    background:#f7f7f7;
    display: -webkit-flex;
    justify-content: space-around;
    height: 0.55rem;
  }
  .yz_footer_box{
    width: 20%;
    height: 0.55rem;
    display: flex;
    flex-direction: column;
    background:#f7f7f7;
  }
  .yz_footer_box i{
   font-size: 0.24rem;
    margin: 0.05rem auto 0;
    color: #e1e1e1;
     }
  .ax{
    position: relative;
  }
  .ax .yz_footer_box_p{
    margin-top: 0.3rem;
    color:#f74a66;
  }
  .ax i{
    position: absolute;
    top: -0.25rem;
    left: 0.14rem;
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ff745a), to(#ff1a62));
    -webkit-background-clip: text;
    color:#f74a66;
    text-shadow: 1px 2px 6px rgba(255, 77, 119, 0.6);
    font-size: 0.44rem;

  }
  .yz_footer_box_p{
    font-size: 0.14rem;
    color:#9f9e9f;
    text-align: center;
  }
</style>
