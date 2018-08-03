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
      <h6>box设置line-height扩大高度，span居中，同时content跟span保持同一个baseline线上</h6>
      <h6>vertical-align: middle;能让content真正地在box垂直居中，而不是按照baseline来</h6>
      <div class="box"><span>FUCK</span><div class="content">基于行高实现的多行文字垂直居中效果，需要vertical-align属性帮助。</div></div>
    </div>
    <div class="container type4">
      <h6>line-height:1.5、line-height:150%、line-height:1.5em的差别</h6>
      <div class="box box-1">
        <h3>标题</h3>
        <p>内容</p>
      </div>
      <div class="box box-2">
        <h3>标题</h3>
        <p>内容</p>
      </div>
      <div class="box box-3">
        <h3>标题</h3>
        <p>内容</p>
      </div>
    </div>
    <div class="container type5">
      <h6>内联元素line-height的"大值特性"</h6>
      <div class="box box1">
        <span class="shit">span: line-height:20px</span>
      </div>
      <div class="box box2">
        <span class="shit">span: line-height:96px</span>
      </div>
    </div>
    <div class="container type6">
      <h6>vertical-align属性值 数值百分比类 </h6>
      <span>FXXX xxx</span>
      <span class="ver">字母x</span>
      <img src="../assets/makelei.png" width="92" height="92">
    </div>
    <div class="container type7">
      <h6>vertical-align的实用性</h6>
      <p>请选择xxx<i class="icon-arrow"></i></p>
      <p>请选择xxx<i class="icon-arrow valign-1"></i></p>
      <p>请选择xxx<i class="icon-arrow valign-2"></i></p>
    </div>
    <div class="container type8">
      <div class="box">
        <span class="shit2">OH SHIT</span>
      </div>
    </div>
    <div class="container type9">
      <div class="box">
        <h4>图片vertical-align:middle</h4>
        <p class="cell cell-1"><img src="../assets/makelei.png"></p>
      </div>
      <div class="box">
        <h4>table-cell元素vertical-align:middle</h4>
        <p class="cell cell-2"><img src="../assets/makelei.png"></p>
      </div>
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
    h6{
      margin:0.5em;
    }
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
    .box {
      width: 80%;
      line-height: 120px;
      background-color: #f0f3f9;
      margin: auto;
    }
    .content {
      width: 60%;
      display: inline-block;
      line-height: 20px;
      margin: 0 20px;
      text-align: left;
      vertical-align: middle;
      background:yellow;
    }
  }
  .type4{
    .box   { font-size: 14px; }
    .box-1 { line-height: 1.5; }
    .box-2 { line-height: 150%; }
    .box-3 { line-height: 1.5em; }
    h3, p {
      margin: 0;
    }
    h3 { font-size: 32px; }
    p  { font-size: 20px; }
  }
  .type5{
    .box {
      width: 280px;
      margin: 1em auto;
      outline: 1px solid #beceeb;
      background: #f0f3f9;
    }
    .box1 {
      line-height: 96px;
    }
    .box1 .shit {
      line-height: 20px;
      display: inline-block;
    }
    .box2 {
      line-height: 20px;
    }
    .box2 .shit{
      line-height: 96px;
      display: inline-block;
    }
  }
  .type6{
    .ver{
      vertical-align: -50%;
    }
  }
  .type7{
    font-family: simsun;
    .icon-arrow {
      display: inline-block;
      width: 20px; height: 20px;
      background: url(../assets/arrow.svg) no-repeat center/20px 20px;;
      border: 1px solid red;
    }
    .valign-1 {
      vertical-align: middle;
    }
    .valign-2 {
      vertical-align: -5px;
    }
  }
  .type8{
    .box{
      height:100px;
      .shit1{
        line-height: 100px;
      }
      .shit2{
        vertical-align: middle;
      }
    }
  }
  .type9{
    .box {
      width: 280px;
      display: table;
      margin: 1em auto;
      text-align: left;
    }
    .box h4 {
      display: table-row;
      line-height: 3;
    }
    .cell {
      height: 128px; width: 100%;
      display: table-cell;
      background-color: #f0f3f9;
      text-align: center;
    }
    .cell img {
      height: 96px;
    }

    .cell-1 img {
      vertical-align: middle;
    }
    .cell-2 {
      vertical-align: middle;
    }
  }
</style>
