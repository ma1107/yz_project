<template>
  <div class="yz_purpose_center" >
    <div class="yz_purpose_center_a">
      <ul class="yz_purpose_center_ul">
        <li  @click="add(0)">
          <p>热门</p>
          <img src="../../../static/img/89439487194c4d419eb1b0291cf6b1cb.jpg">
          <span></span>
        </li>
        <li  @click="add(1)">
          <p>欧洲</p>
          <img src="../../../static/img/1e0c7db112564ca3aa9b5a4c72a459ef.jpg">
          <span></span>
        </li>
        <li  @click="add(2)">
          <p>日本</p>
          <img src="../../../static/img/89439487194c4d419eb1b0291cf6b1cb.jpg">
          <span></span>
        </li>
        <li  @click="add(3)">
          <p>东南亚</p>
          <img src="../../../static/img/a659facbb32849aea1ba3190503524c2.jpg">
          <span></span>
        </li>
        <li  @click="add(4)">
          <p>魅力海岛</p>
          <img src="../../../static/img/be1ac69f1d0e4f30994d926b934fc46f.jpg">
          <span></span>
        </li>
        <li  @click="add(5)">
          <p>国内</p>
          <img src="../../../static/img/f658fdc1fcb94cf28aaf99b472ad32ee.jpg">
          <span></span>
        </li>
        <li  @click="add(6)">
          <p>中东非洲</p>
          <img src="../../../static/img/dce7230a074243d3b691095766abea9c.jpg">
          <span></span>
        </li>
        <li  @click="add(7)">
          <p>美洲</p>
          <img src="../../../static/img/96d3e3252b044366b6d8ad00ca90251e.jpg">
          <span></span>
        </li>
        <li  @click="add(8)">
          <p>澳洲</p>
          <img src="../../../static/img/e03089f486614c76976690bc2b415a81.jpg">
          <span></span>
        </li>
        <li  @click="add(9)">
          <p>港澳台</p>
          <img src="../../../static/img/89439487194c4d419eb1b0291cf6b1cb.jpg">
          <span></span>
        </li>
      </ul>
    </div>
    <yz-purpose-center-ringth v-if="yztos.goalOne !==undefined" :yztos1="yztos.goalOne"  v-show="flag===0"></yz-purpose-center-ringth>
    <yz-purpose-center-ringth v-if="yztos.goalTwo !==undefined" :yztos1="yztos.goalTwo"  v-show="flag===1"></yz-purpose-center-ringth>
    <yz-purpose-center-ringth v-if="yztos.goalThree !==undefined" :yztos1="yztos.goalThree"  v-show="flag===2"></yz-purpose-center-ringth>
    <yz-purpose-center-ringth v-if="yztos.goalFour !==undefined" :yztos1="yztos.goalFour"  v-show="flag===3"></yz-purpose-center-ringth>
    <yz-purpose-center-ringth v-if="yztos.goalFive !==undefined" :yztos1="yztos.goalFive"  v-show="flag===4"></yz-purpose-center-ringth>
    <yz-purpose-center-ringth v-if="yztos.goalSix !==undefined" :yztos1="yztos.goalSix"  v-show="flag===5"></yz-purpose-center-ringth>
    <yz-purpose-center-ringth v-if="yztos.goalSeven !==undefined" :yztos1="yztos.goalSeven"  v-show="flag===6"></yz-purpose-center-ringth>
    <yz-purpose-center-ringth v-if="yztos.goalEight !==undefined" :yztos1="yztos.goalEight"  v-show="flag===7"></yz-purpose-center-ringth>
    <yz-purpose-center-ringth v-if="yztos.goalNine !==undefined" :yztos1="yztos.goalNine"  v-show="flag===8"></yz-purpose-center-ringth>
    <yz-purpose-center-ringth v-if="yztos.goalTen !==undefined" :yztos1="yztos.goalTen"  v-show="flag===9"></yz-purpose-center-ringth>

  </div>
</template>

<script>
  import $ from 'jquery'
  import YzPurposeCenterRingth from "./YzPurposeCenterRingth";
  import YzPurposeCenterRingthA from "./YzPurposeCenterRingthA";

    export default {
        name: "YzPurposeCenter",
        components: {YzPurposeCenterRingthA, YzPurposeCenterRingth},
      data(){
        return{
          flag:0,
        }
      },
        methods:{
          add(id){
             this.flag=id;
             // console.log(id)
          },
        },
      props:["yztos"],



      mounted(){
        $(".yz_purpose_center_ul li").click(function () {
          $(this).addClass("a").siblings().removeClass('a');
          $(this).find("p").css( "color","#333");
          $(this).css( "backgroundColor","#fff");
          $(this).siblings().css( "backgroundColor","#f7f7f7");
          $(this).find("img").show();
          $(this).siblings().find("p").css( "color","#666");
          $(this).siblings().find("img").hide();
          $(this).find("span").show();
          $(this).siblings().find("span").hide();
      });


      },

    }
</script>

<style scoped>
  .yz_purpose_center{
    width: 100%;
  }
  .a{
    border-left:0.02rem solid red;
    color:#333;
    box-shadow:0.1rem 0 0.18rem 0rgba(0, 0, 0, 0.11);
  }
  .yz_purpose_center_a{
    width: 1.2rem;
    float: left;
    height: 4.72rem;
    overflow-y: hidden;
   position: fixed;
  }
  .yz_purpose_center_ul{
    width: 1.2rem;
    /*overflow-y: hidden;*/
    /*overflow-x: hidden;*/
  }
  .yz_purpose_center_ul li{
    display: block;
    border-top: 1px solid #dddddd;
    width: 1.2rem;
    height: 0.44rem;
    vertical-align: middle;
    background-color: #f7f7f7;
    overflow: hidden;
    position: relative;
  }
  .yz_purpose_center_ul li p{
    line-height: 0.44rem;
    font-size: 0.15rem;
    color: #666;
    text-align: center;
  }
  .yz_purpose_center_ul li img{
     width: 0.4rem;
     height: 0.4rem;
     position: absolute;
     top: 0.02rem;
     left: 0.9rem;
     display: none;
   }
  .yz_purpose_center_ul span{
    width: 0.15rem;
    height: 0.13rem;
    background: url("../../../static/img/sanjiao.png");
    background-size:0.15rem 0.1rem ;
    position: absolute;
    top: 0.18rem;
    left: 1.1rem;
    display: none;
  }

</style>
