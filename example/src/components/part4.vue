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
</style>
