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
    <div class="container type10">
      <h6>vertical-align和line-height之间的关系（容器高度不等于行高）</h6>
      <h6>解决方案1：让幽灵空白节点和后面span元素字号一样大</h6>
      <h6>解决方案2：改变垂直对齐方式</h6>
      <div class="box">
        x<span>文本</span>
      </div>
    </div>
    <div class="container type11">
      <h6>text-align:justify例子</h6>
      <div class="box">
        <img src="../assets/makelei.png" width="96" alt="">
        <img src="../assets/makelei.png" width="96" alt="">
        <img src="../assets/makelei.png" width="96" alt="">
        <img src="../assets/makelei.png" width="96" alt="">
        <i class="justify-fix">&nbsp;</i>
        <i class="justify-fix">&nbsp;</i>
        <i class="justify-fix">&nbsp;</i>
      </div>
    </div>
    <div class="container type12">
      <h6>inline-block与baseline的关系</h6>
      <div class="box" style="line-height: 3px">
        x<i class="justify-fix"></i>
        <i class="justify-fix" style="overflow: hidden">xyz</i>
      </div>
    </div>
    <div class="container type13">
      <h6>利用inline-block基线原理的小图标对齐实例页面</h6>
      <div class="box">
        <h6>1. 空标签后面跟随文本</h6>
        <p><i class="icon icon-delete"></i>删除</p>
        <h6>2. 标签里面有“删除”文本</h6>
        <p><i class="icon icon-delete">删除</i>随便什么文字</p>
        <h6>3. 字号变大</h6>
        <p class="large">
          <i class="icon icon-delete"></i>删除
        </p>
        <p class="large">
          <i class="icon icon-delete">删除</i>随便什么文字
        </p>
      </div>
    </div>
    <div class="container type14">
      <h6>没咋意义，就是想看看容器不设定高度，纯设置line-height，内i标签以及文本字体大小会不会改变高度</h6>
      <div class="box" style="border:1px solid red;line-height: 20px;font-size: 30px;">
        <i style="width:20px;height:20px;">xy</i>SHIT
      </div>
    </div>
    <div class="container type15">
      <h6>vertial-align:middle与近似垂直居中</h6>
      <div id="box" class="box" style="font-size: 48px;">
        <span class="wrap"><img src="../assets/makelei.png"></span>x
      </div>
    </div>
    <div class="container type16">
      <h6>vertical-align文本类属性值深入实例,分别设置为16px 24px 32px试试看</h6>
      <div class="box box-1" style="font-size: 16px;">
        <span class="wrap"><img src="../assets/makelei.png"></span>
        <span class="f16">16px</span><span class="f24">24px</span><span class="f32">32px</span>
      </div>
    </div>
    <div class="container type17">
      <h6>基于vertical-align属性的水平垂直居中弹框</h6>
      <div class="button"><button @click="type17Click">ROW!ROW!FIGHT THE POWER!</button></div>
      <div class="container" id="type17" style="display: none" @click="type17Click">
        <span style="color:white;font-size: 14px;">xyz</span>
      </div>
    </div>
  </div>
</template>

<script>
  import img1URI from "../assets/makelei.png"
  export default {
    name: 'part3',
    methods: {
      type17Click: function(event){
        //肯定还有更加优雅的方式，见鬼了
        var div = document.getElementById("type17");
        if(div.style.display == "none"){
          div.style.display = "block"
        }else{
          if(event.srcElement.id == "type17"){
            div.style.display = "none"
          }
        }
        event=event||window.event;
        event.stopPropagation();
      },
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
    &&:last-child{
    margin-bottom: 0px;
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
  .type10{
    .box {
      display: inline-block;
      line-height: 32px;
      border: 1px solid red;
    }
    .box > span {
      font-size: 24px;
      background:yellow;
    }
  }
  .type11{
    .box {
      width: 300px;
      text-align: justify;
      border:1px solid red;
      margin:auto;
      line-height: 0px;
    }
    .justify-fix{
      display: inline-block;
      width:96px;
      outline: 1px solid red;
    }
  }
  .type12{
    .box {
      width: 300px;
      border:1px solid red;
      margin:auto;
      line-height: 0px;
    }
    .justify-fix{
      display: inline-block;
      width:96px;
      outline: 1px solid red;
    }
  }
  .type13{
    .box {
      display: inline-block;
      text-align: left;
      line-height: 20px;
    }
    .icon {
      display: inline-block;
      width:20px; height:20px;
      white-space: nowrap;
      letter-spacing: -1em;
      text-indent: -999em;
    }
    .icon:before {
      content: '\3000';
    }
    .icon-delete {
      background: url(../assets/makelei.png) no-repeat center/20px 20px;
    }
    .large {
      font-size: 30px;
    }
  }
  .type15{
    .box {
      width: 280px;
      line-height: 128px;
      margin: auto;
      background-color: #f0f3f9;
      font-size: 16px;
      position: relative;
    }
    .box img {
      height: 96px;
      vertical-align: middle;
    }
    .wrap {
      display: inline-block;
      line-height: 0;
      color: red;
      position: relative;
    }
    .wrap:before,
    .box:after {
      content: '';
      position: absolute;
      top: 50%; left: 0; right: 0;
      border-top: 1px solid;
    }
    .box:after {
      color: green;
    }
  }
  .type16{
    .box {
      width: 300px;
      margin: auto;
      background-color: #f0f3f9;
      text-align: left;
      font-size: 16px;
      white-space: nowrap;
      position: relative;
    }
    .box img {
      height: 96px;
    }
    .box-1 img {
      vertical-align: text-top;
    }
    .box-2 img {
      vertical-align: text-bottom;
    }
    .wrap {
      display: inline-block;
      line-height: 0;
      color: red;
    }
    .wrap:before,
    .wrap:after {
      content: '';
      display: none;
      position: absolute;
      left: 0;
      right: 0;
      border-top: 1px solid;
    }
    .box-1 .wrap:before {
      display: block;
    }
    .box-2 .wrap:after {
      display: block;
    }
    .f16 { font-size: 16px; }
    .f24 { font-size: 24px; }
    .f32 { font-size: 32px; }

    .f16, .f24, .f32 {
      background-color: #308CFE;
      color: #fff;
    }
  }
  .type17{
    .container {
      position: fixed;
      top: 0; right: 0; bottom: 0; left: 0;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);
      background: rgba(0,0,0,.5), none;
      text-align: center;
      white-space: nowrap;
      font-size: 0;
      z-index: 99;
    }
    .container:after {
      content: "";
      display: inline-block;
      height: 100px;
      width:2px;
      background:yellow;
    }
    span{
      vertical-align: top;
    }
    .dialog {
      display: inline-block;
      border-radius: 6px;
      vertical-align: middle;
      background-color: #fff;
      font-size: 14px;
      text-align: left;
      white-space: normal;
    }
    .content {
      width: 240px;
      height: 120px;
      padding: 20px;
    }
  }
</style>
