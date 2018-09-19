<template>
    <div class="yz_order_center">
      <div class="yz_order_center_message">
        <img src="../../../static/img/mz_2.png">
        <p>  <日本- *和风7日> 【畅销单品】国航直飞,2晚日式温泉酒店,清水寺 金阁寺 春日大社,伊豆半岛,古都奈良,蟹道乐蟹料理</p>
        <div class="yz_order_center_message_a">
          <a href="#">
            <i class="iconfont icon-didian"></i>
            <p>出发</p>
          </a>
          <a href="#">
            <i class="iconfont icon-date2"></i>
            <p>2018/10/24</p>
          </a>
          <a href="#">
            <i class="iconfont icon-guanyuwomen"></i>
            <p>1成人</p>
          </a>
        </div>
      </div>
      <div class="yz_order_center_contact">
        <div class="yz_order_center_contact_a">
          <i class="iconfont icon-guanyuwomen"></i>
          <p>联系人</p>
        </div>
        <div class="yz_order_center_contact_b">
          <p>姓&nbsp;&nbsp;&nbsp;名</p>
          <span>▪</span>
          <input type="text" placeholder="填写联系人姓名">
        </div>
        <div class="yz_order_center_contact_b">
          <p>手机号</p>
          <span>▪</span>
          <input type="text" placeholder="填写联系人手机号">
        </div>
        <div class="yz_order_center_contact_b">
          <p>邮&nbsp;&nbsp;&nbsp;箱</p>
          <input type="text" placeholder="选填，用于接收行程书">
        </div>
      </div>
      <div class="yz_order_center_people">
        <a href="#">
          <img src="../../../static/img/mz_3.png">
          <p>出游人</p>
          <i class="iconfont icon-arrow-right"></i>
        </a>
      </div>
      <div class="yz_order_center_discounts">
        <div class="yz_order_center_discounts_a">
          <i class="iconfont icon-youhui1"></i>
          <p>优惠方案</p>
        </div>
        <div class="yz_order_center_discounts_b">
          <div class="yz_order_center_discounts_b1">
            <i class="iconfont icon-youhui1"></i>
            <p>标准优惠</p>
          </div>
          <div class="yz_order_center_discounts_b2">
            <p>优惠券</p>
            <i class="iconfont icon-arrow-right"></i>
          </div>
          <div class="yz_order_center_discounts_b3">
            <p>积分<span>?</span></p>
            <h5>您无可用积分</h5>
          </div>
        </div>
      </div>
      <div class="yz_order_center_addition">
        <div class="yz_order_center_addition_a">
          <i class="iconfont icon-news"></i>
          <p>备注</p>
        </div>
        <div class="yz_order_center_addition_b">
          <img src="../../../static/img/mz_5.png">
          <textarea placeholder="特殊条件请备注" maxlength="150"></textarea>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "YzOrderCenter"
    }
</script>

<style scoped>
  .yz_order_center{
    width: 3.75rem;
    height: 100%;

  }
  .yz_order_center_message{
    width: 96%;
    margin: 0.4rem auto 0;
    /*height: 1rem;*/
    background: #fff;
    border-radius: 0.05rem;
    position: relative;
  }
  .yz_order_center_message img{
    width: 0.35rem;
    height: 0.35rem;
    position: absolute;
    top: -0.18rem;
    left: 1.62rem;
  }
  .yz_order_center_message p{
    font-size: 0.16rem;
    color: #666666;
    line-height: 0.2rem;
    font-weight: normal;
    padding: 0.2rem 0.15rem 0.15rem;
    margin-top: -0.08rem;
  }
  .yz_order_center_message_a{
    padding: 0.1rem 0.1rem 0.2rem;
    display: -webkit-flex;
    text-align: center;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
  }
  .yz_order_center_message_a a{
    justify-content: space-around;
    align-items: center;
    display: -webkit-flex;
    /*margin-right: 0.18rem;*/
  }
  .yz_order_center_message_a a i{
    font-size: 0.2rem;
    color: #dddddd;
    margin-right: 0.05rem;
  }
  .yz_order_center_message_a a p{
    font-size: 0.14rem;
    color: #666666;
    padding: 0;
    margin-top: 0.02rem;
  }
  .yz_order_center_contact{
    width: 96%;
    margin: 0.15rem auto 0;
    background: #fff;
    border-radius: 0.1rem;
    -webkit-border-radius: 0.1rem;
  }
  .yz_order_center_contact_a{
    margin: 0 0.15rem;
    display: -webkit-flex;
  }
  .yz_order_center_contact_a i{
     color: #ff745a;
     text-shadow: 1px 2px 6px rgba(255, 77, 119, 0.6);
     font-size: 0.21rem;
     margin-right: 0.05rem;
    line-height: 0.5rem;
   }
  .yz_order_center_contact_a p{
    line-height: 0.5rem;
    font-size: 0.14rem;
    color: #666666;
  }
  .yz_order_center_contact_b{
    display: -webkit-flex;
    align-items: center;
    margin: 0 0.17rem;
    padding-top: 0.1rem;
  }
  .yz_order_center_contact_b p{
  line-height: 0.34rem;
    font-size: 0.14rem;
    color: #999999;
  }
  .yz_order_center_contact_b span{
    margin-left: 0.08rem;
    font-size: 0.14rem;
    color: #ff475e;
  }
  .yz_order_center_contact_b input{
    line-height: 0.34rem;
    font-size: 0.14rem;
    color: #666666;
    margin-left: 0.2rem;
    border-bottom: 1px solid #dddddd;
    width: 2.35rem;
  }
  .yz_order_center_contact .yz_order_center_contact_b:nth-child(4){
    padding-bottom: 0.1rem;
  }
  .yz_order_center_contact .yz_order_center_contact_b:nth-child(4) input{
    border-bottom: 0;
    margin-left: 0.35rem;
  }
  .yz_order_center_people{
    width: 96%;
    margin: 0.15rem auto 0;
    background: #fff;
    border-radius: 0.1rem;
    -webkit-border-radius: 0.1rem;
  }
  .yz_order_center_people a{
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    margin: 0 auto;
  }
  .yz_order_center_people a p{
      line-height: 0.5rem;
      font-size: 0.14rem;
      color: #666666;
    margin-left: -2.37rem;
    }
  .yz_order_center_people a img{
    width: 0.2rem;
    height: 0.22rem;
  }
  .yz_order_center_people a i{
    font-size: 0.16rem;
    color: #d0d0d0;
  }
  .yz_order_center_discounts{
    width: 96%;
    margin: 0.2rem auto 0;
    background: #fff;
    border-radius: 0.05rem;
    padding-bottom: 0.06rem;
  }
  .yz_order_center_discounts_a{
    display: -webkit-flex;
    text-align: center;
    width: 93%;
    margin: 0 auto;
  }
  .yz_order_center_discounts_a i{
    color: #ff745a;
    text-shadow: 1px 2px 6px rgba(255, 77, 119, 0.6);
    font-size: 0.21rem;
    margin-right: 0.05rem;
    line-height: 0.5rem;
  }
  .yz_order_center_discounts_a p{
    line-height: 0.5rem;
    font-size: 0.14rem;
    color: #666666;
    margin-left: 0.02rem;
  }
  .yz_order_center_discounts_b{
    width: 92%;
    margin: 0 auto;
    border-radius: 0.05rem;
    background: #fafafa;
    margin-bottom: 0.1rem;
  }
  .yz_order_center_discounts_b1{
    display: -webkit-flex;
  }
  .yz_order_center_discounts_b1 i{
    font-size: 0.2rem;
    color: #eb525b;
    line-height: 0.4rem;
    margin-left: 0.14rem;
  }
  .yz_order_center_discounts_b1 p{
    font-size: 0.16rem;
    color: #eb525b;
    margin-left: 0.08rem;
    line-height: 0.4rem;
  }
  .yz_order_center_discounts_b2{
    width: 92%;
    margin: 0 auto;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
  }
  .yz_order_center_discounts_b2 p{
    line-height: 0.42rem;
    font-size: 0.14rem;
    color: #999999;
  }
  .yz_order_center_discounts_b2 i{
    color: #d0d0d0;
    font-size: 0.16rem;
  }
  .yz_order_center_discounts_b3{
    width: 92%;
    margin: 0 auto;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
  }
  .yz_order_center_discounts_b3 p{
    line-height: 0.42rem;
    font-size: 0.16rem;
    color: #999999;
  }
  .yz_order_center_discounts_b3 p span{
    width: 0.2rem;
    height: 0.2rem;
    margin-left: 0.15rem;
    border-radius: 0.1rem;
    display: inline-block;
    line-height: 0.2rem;
    color: #dddddd;
    font-size: 0.15rem;
    background: #efefef;
    text-align: center;
  }
  .yz_order_center_discounts_b3 h5{
    line-height: 0.42rem;
    font-weight: 100;
    font-size: 0.14rem;
    color: #999999;
  }
  .yz_order_center_addition{
    width: 96%;
    margin: 0.2rem auto 0;
    background: #fff;
    border-radius: 0.05rem;
    padding-bottom: 0.06rem;
    margin-bottom: 0.2rem;
  }
  .yz_order_center_addition_a{
    width: 93%;
    margin: 0 auto;
    display: -webkit-flex;
    align-items: center;
  }
  .yz_order_center_addition_a i{
    color: #ff1a62;
    font-size: 0.2rem;
  }
  .yz_order_center_addition_a p{
    line-height: 0.5rem;
    font-size: 0.14rem;
    color: #666666;
    margin-left: 0.07rem;
  }
  .yz_order_center_addition_b{
    width: 93%;
    margin: 0 auto;
    display: -webkit-flex;
    border-top: 1px solid #dddddd;
  }
  .yz_order_center_addition_b img{
    width: 0.12rem;
    height: 0.16rem;
    margin-top: 0.1rem;
  }
  .yz_order_center_addition_b textarea{
    outline: none;
    font-size: 0.16rem;
    resize: none;
    border: 0;
    margin: 0.1rem 0.1rem 0 0.1rem;
    color: #666666;
    -webkit-user-select: text;
    user-select: text;
  }
</style>
