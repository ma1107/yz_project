<template>
  <div class="yz_s">
    <yz-purpose-header></yz-purpose-header>
    <yz-purpose-center v-if="yzPur !==undefined" class="yz_gd" :yztos="yzPur" ></yz-purpose-center>
    <yz-purpose-footer></yz-purpose-footer>
  </div>

</template>

<script>
    import YzPurposeHeader from "../components/yz_purpose/YzPurposeHeader";
    import YzPurposeFooter from "../components/yz_purpose/YzPurposeFooter";
    import YzPurposeCenter from "../components/yz_purpose/YzPurposeCenter";
    import {yzsc} from "../apis/YzPurpose";
    export default {
        name: "YzPurpose",
      components: {YzPurposeCenter, YzPurposeFooter, YzPurposeHeader},
      data(){
        return{
          yzPur:[],
        }
      },
      methods:{
        getDqq(){
          yzsc.Yzpur((data) => {
            this.yzPur = data.particulars;
            // console.log(data.particulars)
          })
        }
      },
      created(){
        this.getDqq()
      }
    }
</script>

<style scoped>
  .yz_s{
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
