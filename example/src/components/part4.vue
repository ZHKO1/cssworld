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
          <div class="fuck">工作生活，身体健康</div>
        </div>
        <div class="love">1984，蝇王，白鲸记，幻痛，原爆点，BIG BOSS，Kaz，Quite，Ocelot，The man who sold the world，Sins of the Father，Quite's theme,Here’s to You，Nuclear，HEAVENS DIVIDE</div>
      </div>
    </div>
    <div class="container type6">
      <h6>clear:both不靠谱的现象之二,clear元素的margin-top失效</h6>
      <div>
        <div class="me">
          <img src="../assets/makelei.png" width="100" alt="">
        </div>
        <div style="height:20px;background:yellow;margin-top:20px;clear:both"></div>
      </div>
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
      }
    },
    mounted:function () {
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
      margin-left: 110px;
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
    height: 500px;
    .me{
      border:1px solid blue;
      float:left;
      img{
        display: block;
      }
    }
  }
</style>
