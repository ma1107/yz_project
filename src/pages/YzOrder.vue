<template>
  <div class="yz_x">
    <yz-order-header></yz-order-header>
    <yz-order-center class="yz_gd"></yz-order-center>
    <yz-order-footer></yz-order-footer>
  </div>

</template>

<script>
    import YzOrderHeader from "../components/yz_order/YzOrderHeader";
    import YzOrderCenter from "../components/yz_order/YzOrderCenter";
    import YzOrderFooter from "../components/yz_order/YzOrderFooter";
    export default {
        name: "YzOrder",
      components: {YzOrderFooter, YzOrderCenter, YzOrderHeader}
    }
</script>

<style scoped>
  .yz_x{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .yz_gd{
    width: 100%;
    overflow-x: hidden;
    flex:1;
    overflow-y: scroll;
  }
</style>
