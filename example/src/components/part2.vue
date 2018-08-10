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
    <div class="container type11">
      <div></div>
      <a href="">链接</a>
    </div>
    <div class="container type12">
      <a href="">登录</a><a href="">注册</a>
    </div>
    <div class="container type13">
      <div class="box">
        <img src="../assets/top.jpg">
      </div>
    </div>
    <div class="container type14">
      <h6>测试内联元素设置padding百分比会有什么表现，可以看到padding:0 50%;下内左边的宽度和干右边宽度是一样的</h6>
      <h6>如果是padding:50%;则下面的一块会覆盖掉上面一块</h6>
      <h6>顺便也可以测试空文本下padding:50%;是否正方形，如果不是如何解决，原书有讲</h6>
      <span>内有文字若干</span>
    </div>
    <div class="container type15">
      <h6>button在不同浏览器下padding有不同表现，解决方案是搞个label for=""</h6>
      <h6>火狐浏览器下可能需要加个button::-moz-focus-inner{padding:0;}（这里我实践过了，暂且看不出什么问题）</h6>
      <h6>IE浏览器下可能需要加个button{overflow:visible}</h6>
      <button>按钮</button>
    </div>
    <div class="container type16">
      <h6>注意background-color: currentColor; background-clip: content-box;</h6>
      <i class="icon-menu"></i>
      <i class="icon-dot"></i>
    </div>
    <div class="container type17">
      <h6>margin不仅仅能改变普通流体元素水平方向下的尺寸</h6>
      <h6>还能改变绝对定位元素水平或垂直方向的尺寸</h6>
      <div class="box"></div>
    </div>
    <div class="container type18">
      <div class="container">
        <h4>左侧固定</h4>
        <div class="box box-left">
          <img src="../assets/makelei.png" class="img">
          <p>DOM文档流中，图片定宽在左侧，文字内容在右侧，和视觉呈现的前后顺序一致。</p>
        </div>
        <h4>右侧固定-DOM顺序相反</h4>
        <div class="box box-right">
          <img src="../assets/makelei.png" class="img">
          <p>DOM文档流中，图片定宽在左侧，视觉上却在右侧，顺序表现不一致。</p>
        </div>
        <h4>右侧固定-DOM顺序和视觉一致</h4>
        <div class="box box-right-same">
          <div class="full">
            <p>DOM文档流中，图片定宽在右侧，视觉呈现也在右侧，顺便表现此时一致。</p>
          </div>
          <img src="../assets/makelei.png" class="img">
        </div>
      </div>
    </div>
    <div class="container type19">
      <ul class="ui">
        <li><a href="#" >首页</a></li>
        <li><a href="#">登录</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">服务大厅</a></li>
        <li><a href="#">需求大厅</a></li>
      </ul>
    </div>
    <div class="container type20">
      <h6>padding:50px 0;容器有滚动条情况下，火狐浏览器和IE都看不到padding-bottom，解决方案是用子元素的margin-bottom来解决</h6>
      <div style="height:100px;padding:50px 0;overflow: auto;border: 1px solid red;">
        <img src="../assets/makelei.png" height="300" style="display: block">
      </div>
    </div>
    <div class="container type21" style="max-width: 600px;overflow: hidden;">
      <h6>1.父元素使用overflow:hidden能取消浮动，高度依然是由子元素高度来撑开 2.子元素的外部尺寸高度是由padding和margin来做到的，设定很大的值是为了保证背景足够</h6>
      <h6>点击色块，能增加观点，查看效果</h6>
      <div id="colLeft" class="column-left" @click="addLeft">
        <h4>一种布局方式</h4>
        <p>观点1</p>
      </div>
      <div id="colRight" class="column-right" @click="addRight">
        <h4>反方观点</h4>
        <p>观点1</p>
      </div>
    </div>
    <div class="container type22">
      <div class="container_">
        <h2>CSS世界</h2>
      </div>
    </div>
    <div class="container type23">
      <h6 style="border: 1px solid red">空块级元素的margin合并</h6>
      <div class="father">
        <span>fuck</span>
        <div class="son"></div>
      </div>
    </div>
    <h6 style="border: 1px solid red">依靠margin:auto来居中的例子</h6>
    <div class="container type24">
      <div class="son"></div>
    </div>
    <div class="container type25">
      <div class="son"></div>
    </div>
    <div class="container type26">
      <h6 style="border: 1px solid red">来看看内联元素的margin渲染是什么情况</h6>
      <span>FUCK YOU</span>
    </div>
    <div class="container type27">
      <h6 style="border: 1px solid red">margin失效情形，作者给出的的第六个情况，鞭长莫及导致marigi你无效</h6>
      <div class="box">
        <img src="../assets/makelei.png" width="100" height="100" alt="">
        <p>内容</p>
      </div>
    </div>
    <div class="container type28">
      <h6 style="border: 1px solid red">margin失效情形，作者给出的的第七个情况，内联特性导致margin无效</h6>
      <div class="box">
        <img src="../assets/makelei.png" width="96" height="96" alt="">
      </div>
    </div>
    <div class="container type29">
      <h6 style="border: 1px solid red">可以看见3px下，火狐下dotted表现为圆点，chrome表现为方块,IE倒是一直都是圆点·1</h6>
      <div class="box"></div>
    </div>
    <div class="container type30">
      <h6>三道杠的另外一种画法</h6>
      <div class="box"></div>
    </div>
    <div class="container type31">
      <h6>border-color取决于color的一个例子</h6>
      <a href class="add" title="继续上传">
        添加图片
      </a>
    </div>
    <div class="container type33">
      <h6>利用border来绘制三角形</h6>
      <div class="draw"></div>
      <h6>利用border来绘制梯形部分，效果类似于圆角。（border-radius更加简单暴力）</h6>
      <a href class="button">我是按钮</a>
    </div>
    <div class="container type34">
      <h6>border等高布局技术（思考为什么父容器不用overflow:hidden）</h6>
      <div class="box">
        <nav>
          <h3 class="nav">导航1</h3>
          <h3 class="nav">导航1</h3>
          <h3 class="nav">导航1</h3>
        </nav>
        <section>
          <div class="module">模块1</div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import img1URI from "../assets/makelei.png"
  export default {
    name: 'part2',
    methods: {
      addLeft: function(){
        var colLeft = document.getElementById("colLeft");
        this.indexLeft++;
        colLeft.insertAdjacentHTML('beforeend', '<p>观点'+ this.indexLeft +'</p>');
      },
      addRight: function(){
        var colRight = document.getElementById("colRight");
        this.indexRight ++;
        colRight.insertAdjacentHTML('beforeend', '<p>观点'+ this.indexRight +'</p>');
      },
    },
    data () {
      return {
        indexLeft:1,
        indexRight:1,
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
<style scoped rel="stylesheet/less" lang="less" type="text/less">
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
  .type11{
    overflow:auto;
    div{
      width:80px;
      height:80px;
      background:yellow;
      box-sizing: border-box;
      padding:20px 60px;
      margin: auto;
    }
    a {
      padding:50px;
      background-color: #cd0000;
      color: #fff;
    }
  }
  .type12{
    font-size: 14px;
    a + a:before {
      content: "";
      font-size: 0;
      padding: 10px 3px 1px;
      margin-left: 6px;
      border-left: 1px solid gray;
    }
  }
  .type13{
    .box {
      padding: 10% 50%;
      position: relative;
    }
    .box > img {
      position: absolute;
      width: 100%; height: 100%;
      left: 0; top: 0;
    }
  }
  .type14{
    width:300px;
    font-size: 14px;
    .box{
      border: 2px dashed #cd0000
    }
    span{
      padding:0 50%;
      background: yellow;
    }
  }
  .type15{
    button{
      padding:0px;
    }
    button::-moz-focus-inner{
      padding:0;
    }
    button{
      overflow:visible;
    }
  }
  .type16{
    i{
      vertical-align: middle;
      margin: 0 20px;
    }
    .icon-menu {
      display: inline-block;
      width: 140px; height: 10px;
      padding: 35px 0;
      border-top: 10px solid;
      border-bottom: 10px solid;
      background-color: currentColor;
      background-clip: content-box;
    }
    .icon-dot {
      display: inline-block;
      width: 100px; height: 100px;
      padding: 10px;
      border: 10px solid;
      border-radius: 50%;
      background-color: currentColor;
      background-clip: content-box;
    }
  }
  .type17{
    width: 500px;
    height: 300px;
    position: relative;
    .box{
      position: absolute;
      top:0px;
      left:0px;
      right:0px;
      bottom:0px;
      margin: 100px;
      background:yellow;
    }
  }
  .type18{
    height:550px;
    .container{
      width: 300px;
      margin: auto;
      text-align: left;
      animation: width 3s infinite alternate;
      @keyframes width {
        from { width: 300px; }
        to   { width: 260px; }
      }
      .box {
        overflow: hidden;
      }
      .img {
        width: 100px; height: 100px;
      }
      p{
        margin-top: 0px;
        margin-bottom: 0px;
      }
      /* 左浮动 */
      .box-left > img {
        float: left;
      }
      .box-left > p {
        margin-left: 140px;
      }
      /* 右浮动，但图片DOM在前 */
      .box-right > img {
        float: right;
      }
      .box-right > p {
        margin-right: 140px;
      }
      /* 右浮动，图片DOM在后，和视觉表现一致 */
      .box-right-same > .full {
        width: 100%;
        float: left;
      }
      .box-right-same > .full > p {
        margin-right: 140px;
      }
      .box-right-same > img {
        float: left;
        margin-left: -128px;
      }
    }
  }
  .type19{
    width:300px;
    .ui{
      height:50px;
      list-style: none;
      margin:0 -30px 0 0;
      padding:0;
    }
    .ui li{
      width:78px;
      border:1px solid red;
      margin:0 30px 0 0;
      float: left;/*该处换为display:inline-block;同样效果*/
    }
  }
  .type21{
    .column-left,
    .column-right {
      width: 50%;
      float: left;
      margin-bottom: -100px;
      padding-bottom: 100px;
      color: #fff;
    }
    .column-left {
      background-color: #34538b;
    }
    .column-right {
      background-color: #cd0000;
    }
  }
  .type22{
    .container_ {
      max-width: 1920px;
      height: 200px;
      background: url("../assets/top.jpg") no-repeat center;
    }
    .container_ > h2 {
      margin-top: 100px;
      color: #fff;
    }
  }
  .type23{
    width:300px;
    .father {
      overflow:hidden;
      .son{
        margin:50%;
      }
    }
  }
  .type24{
    height:200px;
    width:100px;
    writing-mode:vertical-lr;
    .son{
      width:100px;
      height:100px;
      background:yellow;
      margin:auto;
    }
  }
  .type25{
    height: 200px;
    width:300px;
    position:relative;
    .son{
      position: absolute;
      top:0px;right:0px;left:0px;bottom:0px;
      background:yellow;
      width:200px;height:50px;
      margin:auto;
    }
  }
  .type26{
    span{
      background:yellow;
      margin-top: 10px;
    }
  }
  .type27{
    .box > img{
      float: left;
      width:100px;
    }
    .box > p{
      text-align: left;
      border: 1px solid red;
      overflow: hidden;
      margin-left:200px;
    }
  }
  .type28{
    .box > img{
      height:96px;
      margin-top:-30000px;
    }
  }
  .type29{
    width:156px;
    .box{
      width:150px;
      height:150px;
      border: 3px dotted black;
    }
  }
  .type30{
    width:160px;
    .box{
      width:120px;
      margin: auto;
      height:20px;
      border-top: 60px double;
      border-bottom:20px solid;
    }
  }
  .type31{
    .add {
      display: inline-block;
      width: 76px; height: 76px;
      color: #ccc;
      border: 2px dashed;
      text-indent: -12em;
      transition: color .25s;
      position: relative;
      overflow: hidden;
    }
    .add:hover {
      color: #34538b;
    }
    .add::before, .add::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
    }
    .add::before {
      width: 20px;
      border-top: 4px solid;
      margin: -2px 0 0 -10px;
    }
    .add::after {
      height: 20px;
      border-left: 4px solid;
      margin: -10px 0 0 -2px;
    }
  }
  .type33{
    .draw{
      margin:auto;
      width:0px;
      border-width: 10px 20px;
      border-color: red transparent transparent;
      border-style: solid
    }
    .button {
      display: inline-block;
      line-height: 36px;
      padding: 0 40px;
      color: #fff;
      background-color: #cd0000;
      position: relative;
    }
    .button:before,
    .button:after {
      content: "";
      position: absolute;
      left: 0; right: 0;
      border-style: solid;
    }
    .button:before {
      top: -2px;
      border-width: 0 2px 2px;
      border-color: transparent transparent #cd0000;
    }
    .button:after {
      bottom: -2px;
      border-width: 2px 2px 0;
      border-color: #cc0000 transparent transparent;
    }
  }
  .type34{
    h1, h2, h3, h4, h5, h6 {
      font-size: 100%;
      margin: 0;
      font-weight: 400;
    }
    .box {
      border-left: 150px solid #333;
      background-color: #f0f3f9;
    }
    /* 清除浮动影响，不能使用overflow:hidden */
    .box:after {
      content: "";
      display: block;
      clear: both;
    }
    /* 布局主结构 */
    .box > nav {
      width: 150px;
      margin-left: -150px;
      float: left;
    }
    .box > section {
      overflow: hidden;
    }
    /* 导航列表和模块列表 */
    .nav {
      line-height: 40px;
      color: #fff;
    }
    .module {
      line-height: 40px;
    }
  }
</style>
