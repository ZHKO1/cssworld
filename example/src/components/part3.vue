<template>
  <div>
    <div class="container type1">
      <h6>不受字体和字号影响的内联元素的垂直居中对齐效果</h6>
      <div id="divTest1">ROW ROW xxx<i class="icon-arrow"></i></div>
      <div id="divTest2">FIGHT THE POWER xxx <i class="icon-arrow"></i></div>
    </div>
    <div class="container type2">
      <h6>所谓的em-box，半边距，内容区域是什么？</h6>
      <div class="test">
        <span>sphinx</span>
      </div>
    </div>
    <div class="container type3">
      <div class="box">
        <img src="../assets/makelei.png" height="128"/>
      </div>
    </div>
    <div class="container type4">
      <div class="box"><span>FUCK</span><div class="content">基于行高实现的多行文字垂直居中效果，需要vertical-align属性帮助。</div></div>
    </div>
  </div>
</template>

<script>
  import img1URI from "../assets/makelei.png"
  export default {
    name: 'part3',
    methods: {
    },
    data () {
      return {
      }
    },
    mounted:function () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  .container {
    border: 1px solid black;
    margin-bottom: 20px;
    font-family: "微软雅黑";
  }
  .type1{
    font-size: 14px;
    .icon-arrow {
      display: inline-block;
      width: 20px;
      height: 1ex;
      background: url(../assets/arrow.svg) no-repeat center/20px 20px;
    }
  }
  .type2{
    width: 300px;
    .test {
      font-family: simsun;
      font-size: 80px;
      line-height: 120px;
      background-color: yellow;
    }
    .test > span {
      background-color: white;
    }
  }
  .type3{
    .box{
      line-height: 256px;
    }
  }
  .type4{
    .box {
      width: 480px;
      line-height: 120px;
      background-color: #f0f3f9;
      margin: auto;
    }
    .content {
      width: 300px;
      display: inline-block;
      line-height: 20px;
      margin: 0 20px;
      text-align: left;
      vertical-align: middle;
    }
  }
</style>
