<template>
  <div>
    <div class="container">
      <h5>在web开发时，为了提高加载性能以及节约带宽费用，产生了滚屏来实时异步加载，需要考虑到用透明图片占位</h5>
      <div class="transparentImgContainer">
        <img src>
      </div>
      <div class="transparentImgContainer" style="background:lightgreen">
        <img>
      </div>
      <h5>来看看火狐下纯img元素的表现，类似于内联元素，需要加上display:inline-block才会按照样式来</h5>
      <div class="transparentImgContainer">
        <img style="width: 100px;height:150px;visibility: visible;"/>
      </div>
    </div>
    <div class="container">
      <h5>伪元素的content为图片，无法用样式控制其大小</h5>
      <div class="beforeImgContainer"></div>
    </div>
    <div class="container">
      <h5>探讨火狐浏览器下缺省src的img元素</h5>
      <div>
        <img style="display: block;outline: 1px solid red">
      </div>
    </div>
    <div class="container">
      <div class="srcDisplayImg">
        <img id="img1" alt="守望先锋麦克雷">
        <p><button id="button1">设置src属性显示图片</button></p>
      </div>
    </div>
    <div class="container type1">
      <h5>img{content:url(1.jpg)} &ltimg&gt,和 &ltimg src='1.jpg'&gt</h5>
      <img src="../assets/makelei.png">
      <img>
    </div>
    <div class="container type2">
      <h5>:hover新增content属性，不过右键保存的图片依然还是src属性图片</h5>
      <img class="DAMN" src="../assets/makelei.png">
    </div>
    <div class="container type3">
      <h5>甚至h标签也能搞个content属性</h5>
      <h6></h6>
    </div>
    <div class="container type4">
      <h6>有内容</h6>
      <div class="box">有内容</div>
      <h6>无内容</h6>
      <div class="box"></div>
      <h6>空格也算内容</h6>
      <div class="box">&nbsp;</div>
      <h6>伪元素不算内容</h6>
      <div class="box pseudo"></div>
    </div>
    <div class="container type5">
      <h6>画表格的例子</h6>
      <div class="box"><i class="bar" style="height:90px;"></i>
        <i class="bar"  style="height:100px;"></i>
        <i class="bar"  style="height:150px;"></i>
        <i class="bar"  style="height:70px;"></i>
      </div>
    </div>
    <div class="container type6">
      <h6>dot是自定义的表情元素，同时也方便向下兼容IE8等低版本的浏览器</h6>
      <h6>设置before而不是after的原因是能把dot标签本身内容...给顶下去</h6>
      <h6>'...\A..\A.'而不是'.\A..\A...'的原因是需要考虑到IE9支持dot标签和before伪元素，但是不支持animation属性，因此这么处理</h6>
      <h6>white-space: pre-wrap;pre-wrap和pre这里效果一样，深入差别后续作者解释</h6>
      正在加载中<dot>...</dot>
    </div>
    <div class="container type7">
      <p>content生成图片例子</p>
      <p>点击<a href="#/part2">这个链接</a>当前页刷新，看看有没有标记；点击<a href="#/part2" target="_blank">这个链接</a>，新标签页新打开一次本页面，看看有没有标记。</p>
    </div>
    <div class="container type8">
      <h6>没咋鸟用，参个观</h6>
      <p lang="ch"><q>这本书很赞</q></p>
      <p lang="en"><q>This book is very good</q></p>
    </div>
    <div class="container type9">
      <h6>content attr属性值内容生成</h6>
      <div style="background: yellow"></div>
    </div>
    <div class="container type10">
      <h6 style="text-align: center">content计数器 错误的示范 自行思考错误原因</h6>
      <div class="reset">
        <div class="counter">我是王小二</div>
        <div class="reset">
          <div class="counter">我是王小二的大儿子</div>
          <div class="counter">我是王小二的二儿子</div>
          <div class="reset">
            <div class="counter">我是王小二的二儿子的大孙子</div>
            <div class="counter">我是王小二的二儿子的二孙子</div>
            <div class="counter">我是王小二的二儿子的小孙子</div>
          </div>
          <div class="counter">我是王小二的三儿子</div>
        </div>
        <div class="counter">我是王小三</div>
        <div class="counter">我是王小四</div>
        <div class="reset">
          <div class="counter">我是王小四的大儿子</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import img1URI from "../assets/makelei.png"
  export default {
    name: 'part2',
    methods: {
    },
    data () {
      return {
      }
    },
    mounted:function () {
      var eleButton = document.getElementById('button1'),
        eleImg = document.getElementById('img1');
      var initValueButton = eleButton.innerHTML;
      // 图片地址
      var srcImage = img1URI;
      // 按钮点击事件
      eleButton.addEventListener('click', function() {
        if (this.innerHTML == initValueButton) {
          this.innerHTML = '移除src属性';
          // 图片显示
          eleImg.setAttribute('src', srcImage);
        } else {
          this.innerHTML = initValueButton;
          // src属性移除
          eleImg.removeAttribute('src');
        }
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .container {
    border: 1px solid black;
    margin-bottom: 20px;
  }
  .transparentImgContainer{
    width: 60px;
    height:60px;
    background:yellow;
    img{
      visibility: hidden;
    }
    img[src]{
      visibility: visible;
    }
  }
  .beforeImgContainer:before {
    content: url("../assets/makelei.png");
    object-fit: fill;
    display: block;
    width: 200px; height: 200px;
  }

  .srcDisplayImg{
    img {
      display: inline-block;
      width: 100px; height: 100px;
      /* 隐藏Firefox alt文字 */
      color: transparent;
      position: relative;
      overflow: hidden;
    }
    img:not([src]) {
      /* 隐藏Chrome alt文字以及银色边框 */
      visibility: hidden;
    }
    img::before {
      /* 淡蓝色占位背景 */
      content: "";
      position: absolute; left: 0;
      width: 100%; height: 100%;
      background-color: #f0f3f9;
      visibility: visible;
    }
    img::after {
      /* 黑色alt信息条 */
      content: attr(alt);
      position: absolute;
      left: 0; bottom: 0;
      width: 100%;
      line-height: 30px;
      background-color: rgba(0,0,0,.5);
      color: white;
      font-size: 14px;
      transform: translateY(100%);
      /* 来点过渡动画效果 */
      transition: transform .2s;
      visibility: visible;
    }
    img:hover::after {
      transform: translateY(0);
    }
  }
  .type1{
    img{
      width: 100px;
      height: 100px;
    }
    img:not([src]) {
      content: url("../assets/makelei.png");
    }
  }
  .type2{
    img{
      width:100px;
      height:100px;
    }
    .DAMN:hover {
      content: url("../assets/logo.png");
    }
  }
  .type4{
    h6{margin:0.5rem}
    .box {
      width: 216px;
      padding: 10px;
      border: 10px solid #cd0000;
      margin: auto;
    }
    .box:empty {
      border-style: dashed;
    }
  }
  .type5{
    padding:20px;
    .box {
      margin: auto;
      width: 256px;
      height: 256px;
      border:1px solid black;
      text-align: justify;
    }
    .box:before {
      content: "";
      display: inline-block;
      height: 100%;
    }
    .box:after {
      content: "";
      display: inline-block;
      width: 100%;
      height:20px;
      background: yellow;
    }
    .bar {
      display: inline-block;
      width: 20px; height: 0;
      border:1px solid black;
    }
  }
  .type6{
    dot {
      display: inline-block;
      height: 1em;
      line-height: 1;
      text-align: left;
      vertical-align: -.25em;
      overflow: hidden;
    }
    dot::before {
      display: block;
      content: '...\A..\A.';
      white-space: pre-wrap;
      animation: dot 3s infinite step-start both;
    }
    @keyframes dot {
      33% { transform: translateY(-2em); }
      66% { transform: translateY(-1em); }
    }
  }
  .type7{
    a {
      text-decoration: underline;
      color: #cd0000;
    }
    a[target="_blank"]:after {
      content: url(data:image/gif;base64,R0lGODlhBQAFAIABAM0AAAAAACH5BAEAAAEALAAAAAAFAAUAAAIHRIB2eKuOCgA7);
    }
  }
  .type8{
    :lang(ch) > q{quotes:'提问：“' '”回答'}
    :lang(en) > q{quotes:'"' '"'}
    q:before{content: open-quote;}
    q:after{content: close-quote;}
  }
  .type9{
    div{
      width:300px;
      height:40px;
      line-height: 40px;
      border:1px solid black;
      margin: auto;
      &::before{
         content:attr(style);
         width:100%;
      }
    }
  }
  .type10{
    text-align:left;
    .reset {
      padding-left: 20px;
      counter-reset: wangxiaoer;
    }
    .counter:before {
      content: counters(wangxiaoer, '-') '. ';
      counter-increment: wangxiaoer;
    }
  }

</style>
