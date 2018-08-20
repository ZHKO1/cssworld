<template>
  <div>
    <div class="container type1">
      <h6>测试查看float特性之一“包裹性”里自适应性，子元素宽度超出后，首选最小宽度比父元素要大的表现，答案是此时就不自适应父元素宽度了。同时也测试观看float对于display的影响</h6>
      <div style="width:200px;border:1px solid black;">
        <div id="shit" style="float:left;border:1px solid red;display: inline-table">
          <img src="../assets/makelei.png" width="100" alt="">1234444444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <div style="clear:both;"></div>
      </div>
      <div><a name="shitandshit">锚点</a></div>
    </div>
    <div class="container type2">
      <h6>float的作用机制</h6>
      <div class="me">
        <img src="../assets/makelei.png" width="100" alt="">
      </div>
      <p class="fuck">工作生活，身体健康，疫苗事件，怪物猎人审批，中美贸易战，老龄化社会，雾锁中国，1984，蝇王，白鲸记</p>
    </div>
    <div class="container type3">
      <h6>float与流动布</h6>
      <div>
        <div class="me">
          <img src="../assets/makelei.png" width="100" alt="">
        </div>
        <p class="fuck">工作生活，身体健康，疫苗事件，怪物猎人审批，中美贸易战，老龄化社会，雾锁中国，1984，蝇王，白鲸记，幻痛，原爆点，BIG BOSS，Kaz，Quite，Ocelot，The man who sold the world，Sins of the Father，Quite's theme,Here’s to You，Nuclear，HEAVENS DIVIDE</p>
        <div style="clear:both"></div>
      </div>
      <div class="box">
        <a href="#/part4" class="pre">上一章</a>
        <a href="#/part4" class="next">下一章</a>
        <h6 class="title">让子弹飞，蝙蝠侠VS超人</h6>
      </div>
    </div>
    <div class="container type4">
      <h6>clear属性的测试</h6>
      <div class="box">
        <div class="left"></div>
        <div class="clear-both"></div>
      </div>
    </div>
    <div class="container type5">
      <h6>clear:both的作用本质是让自己不和float元素在一行显示，并不是真正意义上的清除浮动</h6>
      <h6>clear:both不靠谱的现象之一</h6>
      <div>
        <div class="me">
          <img src="../assets/makelei.png" width="100" alt="">
        </div>
        <div class="fuck">工作生活，身体健康<div style="height:20px;clear:both"></div>疫苗事件，怪物猎人审批，中美贸易战，老龄化社会，雾锁中国，1984，蝇王，白鲸记，幻痛，原爆点，BIG BOSS，Kaz，Quite，Ocelot，The man who sold the world，Sins of the Father，Quite's theme,Here’s to You，Nuclear，HEAVENS DIVIDE</div>
      </div>
      <div>
        <div class="me1">
          <img src="../assets/makelei.png" width="100" alt="">
          <div>
            <div style="float:left;width:100px;height:10px;background:blue"></div>
            <div style="float:left;width:100px;height:10px;background:green"></div>
            <div style="clear: both;"></div>
          </div>
          <div class="fuck">工作生活，身体健康</div>
        </div>
        <div class="love">1984，蝇王，白鲸记，幻痛，原爆点，BIG BOSS，Kaz，Quite，Ocelot，The man who sold the world，Sins of the Father，Quite's theme,Here’s to You，Nuclear，HEAVENS DIVIDE</div>
      </div>
    </div>
    <div class="container type6">
      <h6>clear:both不靠谱的现象之二,clear元素的margin-top失效</h6>
      <div>
        <div style="border:1px solid;height:20px;"></div>
        <div class="me"></div>
        <div style="border:1px solid;height:20px;background:yellow;margin-top:-200px;clear:both"></div>
      </div>
    </div>
    <div class="container type7">
      <h6>测试如何触发BFC</h6>
      <div class="box">
        <div class="me"></div>
      </div>
    </div>
    <div class="container type8">
      <h6>BFC与流体布局</h6>
      <div>
        <div class="me">
          <img src="../assets/makelei.png" width="100" alt="">
        </div>
        <div class="fuck">工作生活，身体健康<div style="height:20px;clear:both"></div>疫苗事件，怪物猎人审批，中美贸易战，老龄化社会，雾锁中国，1984，蝇王，白鲸记，幻痛，原爆点，BIG BOSS，Kaz，Quite，Ocelot，The man who sold the world，Sins of the Father，Quite's theme,Here’s to You，Nuclear，HEAVENS DIVIDE,a,b,c,d,e,f,g,h,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
      </div>
    </div>
    <div class="container type9">
      <h6>overflow剪裁结线border box</h6>
      <div class="box">
        <img src="../assets/top.jpg" width="500"/>
      </div>
    </div>
    <div class="container type10">
      <h6>overflow-x和overflow-y 永远不能实现一个方向溢出剪裁或者滚动，另一个方向内容溢出显示的效果</h6>
      <div class="box">
        <img src="../assets/makelei.png" width="500"/>
      </div>
    </div>
    <div class="container type11">
      <h6>来看PC端下浏览器滚动条的宽度,滚动条宽度为{{scrollWidth}}px</h6>
      <div class="box">
        <div class="in" id="in"></div>
      </div>
    </div>
    <div class="container type12">
      <h6>依赖overflow的样式表现</h6>
      <div class="box">What a piece of shit...I mean, I feel horrible that I had to play this game in order to make this video. But I did it to demonstrate its dreadfulness and I forced myself to play it just so that you don't have to. So you should thank me for telling you to stay away from this horrible, steaming pile of goat shit.</div>
      <div class="box1">What a piece of shit...I mean, I feel horrible that I had to play this game in order to make this video. But I did it to demonstrate its dreadfulness and I forced myself to play it just so that you don't have to. So you should thank me for telling you to stay away from this horrible, steaming pile of goat shit.</div>
    </div>
    <div class="container type13">
      <h6>测试vue-router下能不能用锚点定位</h6>
      <div><a href="#shitandshit">锚点</a></div>
      <div><a href="#">顶点锚点</a></div>
    </div>
    <div class="container type14">
      <h6>深入锚点定位 看看怎么个由内而外法</h6>
      <div class="box">
        <div class="content"></div>
        <div class="box">
          <div class="content"></div>
          <h4 id="title">标签</h4>
          <div class="content"></div>
        </div>
      </div>
      <p><a href="#title">点击测试</a></p>
    </div>
    <div class="container type15">
      <h6>还是上面的例子，唯一不同的是改成overflow:hidden，依然也能定位</h6>
      <div class="box">
        <div class="content"></div>
        <div class="box">
          <div class="content"></div>
          <h4 id="title1">标签</h4>
          <div class="content"></div>
        </div>
      </div>
      <p><a href="#title1">点击测试</a></p>
    </div>
    <div class="container type16">
      <h6>锚点定位实战 幻灯片机制</h6>
      <div class="box">
        <div class="list" id="one">1</div>
        <div class="list" id="two">2</div>
        <div class="list" id="three">3</div>
        <div class="list" id="four">4</div>
      </div>
      <div class="link">
        <a class="click" href="#one">1</a>
        <a class="click" href="#two">2</a>
        <a class="click" href="#three">3</a>
        <a class="click" href="#four">4</a>
      </div>
    </div>
    <div class="container type17">
      <h6>锚点定位实战 幻灯片机制（利用focus定位特性）</h6>
      <div class="box">
        <div class="list"><input id="one1">1</div>
        <div class="list bg-blue"><input id="two1">2</div>
        <div class="list bg-olive"><input id="three1">3</div>
        <div class="list bg-orange"><input id="four1">4</div>
      </div>
      <div class="link">
        <label class="click" for="one1">1</label>
        <label class="click" for="two1">2</label>
        <label class="click" for="three1">3</label>
        <label class="click" for="four1">4</label>
      </div>
    </div>
    <div class="container type18">
      <h6>内联元素作为包含块</h6>
      <span>我是</span>
      <span class="container_">
        我是<big style="font-size: 200%;">字号很大的</big>文字<div style="position: absolute;top:-1px;right:-1px;left:-1px;bottom:-1px;border:1px dashed blue;"></div>
      </span>
    </div>
    <div class="container type19">
      <h6>内联元素作为包含块 单行下的兼容性 IE8到IE10在P容器左侧外部显示</h6>
      <p><span><img src="../assets/makelei.png" width="50"></span></p>
    </div>
    <div class="container type20">
      <h6>内联元素作为包含块 多行下的兼容性 IE和chrome表现一致，FireFox浏览器仅覆盖第一行</h6>
      <span>我是</span>
      <span class="container_">
        我是<big style="font-size: 200%;">字号很大的</big>文字<div style="position: absolute;top:-1px;right:-1px;left:-1px;bottom:-1px;border:1px dashed blue;"></div>
      </span>
    </div>
    <div class="container type21">
      <h6>绝对定位元素的包裹性中的宽度自适应性也是相对于包含块的，如何不局限于宽度自适应性变为最大可用宽度</h6>
      <a href="javascript:" class="icon-delete tips" data-title="删除">删除</a>
    </div>
  </div>
</template>

<script>
  import img1URI from "../assets/makelei.png"
  export default {
    name: 'part4',
    methods: {
    },
    data () {
      return {
        scrollWidth:0
      }
    },
    mounted:function () {
      this.scrollWidth = 100 - document.getElementById('in').clientWidth;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less" type="text/less">
  .container {
    border: 1px solid black;
    margin-bottom: 20px;
    font-family: "微软雅黑";
    h6{
      margin:0.5em;
    }
    p{font-size: 13px;margin-top: 10px;margin-bottom: 10px}
    &&:last-child{
    margin-bottom: 0px;
     }
  }
  .type2{
    height: 130px;
    .me{
      border:1px solid blue;
      float:left;
      img{
        display: block;
        visibility: hidden;
        opacity:0.5;
      }
    }
    .fuck{
      font-weight: bold;
      background:yellow;
      &:first-line{
        background: red;
        color:white;
      }
    }
  }
  .type3{
    height: 250px;
    .me{
      border:1px solid blue;
      float:left;
      img{
        display: block;
      }
    }
    .fuck{
      margin-left: 110px;
      font-weight: bold;
    }
    .box{
      .pre{float:left;}
      .next{float:right;}
      .title{margin:0 70px;text-align:center;}
    }
  }
  .type4{
    .box{
      width:200px;
      margin:auto;
      border:1px solid red;
      .left{
        float:left;
        width:100px;
        height:50px;
        background:yellow;
      }
      .clear-left{
        clear: left;
      }
      .clear-right{
        clear: right;
      }
      .clear-both{
        clear: both;
      }
    }
  }
  .type5{
    height: 500px;
    .me{
      border:1px solid blue;
      float:left;
      img{
        display: block;
      }
    }
    .fuck{
      margin-left:100px;
      font-weight: bold;
    }
    .me1{
      border:1px solid blue;
      img{
        float:left;
      }
      &::after{
        display: block;
        content:" ";
        clear:both;
      }
    }
    .love{
      margin-top: -2px;
    }
  }
  .type6{
    height: 100px;
    .me{
      float: left;
      width: 200px;
      border: 5px dashed black;
      background: white;
    }
  }
  .type7{
    .box{
      display: inline-block;
      border:1px solid blue;
      .me{
        float: left;
        width: 100px;
        height:100px;
        background: yellow;
      }
    }
  }
  .type8{
    .me{
      border:1px solid blue;
      float:left;
      img{
        display: block;
      }
    }
    .fuck{
      display: table-cell;
      width:2000px;
      word-break: break-word;
      font-weight: bold;
    }
  }
  .type9{
    .box {
      width: 200px; height: 80px;
      margin: auto;
      padding: 10px;
      border: 10px solid;
      overflow: hidden;
      img{}
    }
  }
  .type10{
    .box {
      width: 100px; height: 100px;
      margin: auto;
      padding: 10px;
      border: 10px solid;
      overflow-x: visible;
      overflow-y: hidden;
      img{}
    }
  }
  .type11{
    .box {
      width:100px;height:100px;overflow: scroll;
      .in{
        height: 200px;
        background: lightcyan;
      }
    }
  }
  .type12{
    .box{
      width:170px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .box1{
      display: -webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2;
      overflow: hidden;
    }
  }
  .type14{
    .box{
      height:120px;
      border:1px solid red;
      overflow: auto;
      .content{
        height: 200px;
        background-color:#eee;
      }
    }
  }
  .type15{
    .box{
      height:120px;
      border:1px solid red;
      overflow: hidden;
      .content{
        height: 200px;
        background-color:#eee;
      }
    }
  }
  .type16{
    .box{width:20em; height:10em; line-height:10em; border:1px solid #ddd; overflow:hidden; margin:auto;}
    .list{background:#ddd; text-align:center;font-size:8em;}
    .link{margin-top:1em;}
    .click{display:inline-block; width:2em; height:2em; line-height:2em; border:1px solid #ccc; background:#f7f7f7; color:#333; font-size:1em; font-weight:bold; text-align:center; text-decoration:none;}
    .click:hover{background:#eee; color:#345; text-decoration:none;}
  }
  .type17{
    .box{width:20em; height:10em;line-height:10em;  border:1px solid #ddd; overflow:hidden; margin:auto;}
    .list > input {
      position: absolute; top:0;
      height: 100%; width: 1px;
      border:0; padding: 0; margin: 0;
      clip: rect(0 0 0 0);
    }
    .list{height:100%;background:#ddd; text-align:center; position:relative;font-size:8em;}
    .link{margin-top:1em;}
    .click{display:inline-block; width:2em; height:2em; line-height:2em; border:1px solid #ccc; background:#f7f7f7; color:#333; font-size:1em; font-weight:bold; text-align:center; text-decoration:none;}
    .click:hover{background:#eee; color:#345; text-decoration:none;}
    .bg-blue {
      background-color: #89C6FC;
    }
    .bg-olive {
      background-color: #B9F2D8;
    }
    .bg-orange {
      background-color: #FCCBA2;
    }
  }
  .type18{
    .container_{
      font-size: 30px;
      padding:10px;
      position: relative;
    }
  }
  .type19{
    height:90px;
    p{
      text-align: right;
      span{
        position: relative;
        img{
          position: absolute;
          right:0;
        }
      }
    }
  }
  .type20{
    width:200px;
    .container_{
      position: relative;
    }
  }
  .type21{
    .tips[data-title] {
      position: relative;
    }
    .tips[data-title]::before,
    .tips[data-title]::after {
      position: absolute;
      left: 50%;
      -ms-pointer-events: none;
      pointer-events: none;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      visibility: hidden;
      white-space: nowrap;
    }
    .tips[data-title]::before {
      content: attr(data-title);
      top: -33px;
      padding: 2px 10px 3px;
      line-height: 18px;
      border-radius: 2px;
      background-color: #333;
      text-align: left;
      color: #fff;
      font-size: 12px;
    }
    .tips[data-title]::after {
      content: "";
      border: 6px solid transparent;
      border-top-color: #333;
      top: -10px;
    }
    .tips[data-title]:hover::before,
    .tips[data-title]:hover::after {
      -webkit-transition: visibility .1s .1s;
      transition: visibility .1s .1s;
      visibility: visible;
    }

    .icon-delete {
      display: inline-block;
      width: 20px; height: 20px;
      background: url(../assets/makelei.png) no-repeat center/20px 20px;
      background-size: 16px;
      color: transparent;
      font-size: 0;
    }
  }
</style>
