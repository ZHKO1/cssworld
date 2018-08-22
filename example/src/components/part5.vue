<template>
  <div>
    <div class="container type1">
      <h6>对于position值为relative/absolute以及火狐/IE浏览器（不包括Chrome浏览器）下含有position:fixed声明的定位元素，当其z-index值不是auto的时候，会创建层叠上下文</h6>
      <div style="position:relative; z-index:auto;">
        <img width="200" src="../assets/makelei.png" style="position:absolute; z-index:2;">
      </div>
      <div style="position:relative; z-index:auto;">
        <img width="200" src="../assets/ARX7.jpg" style="position:relative; z-index:1;">
      </div>
      <div style="position:relative; z-index:0;">
        <img width="200" src="../assets/makelei.png" style="position:absolute; z-index:2;">
      </div>
      <div style="position:relative; z-index:0;">
        <img width="200" src="../assets/ARX7.jpg" style="position:relative; z-index:1;">
      </div>
    </div>
    <div class="container type2">
      <h6>加深理解层叠上下文和层叠顺序(思考为什么文字在后面)</h6>
      <div class="box">
        <span class="text">只有图片淡出，文案一直100%透明</span>
        <img class="fade" width="256" src="../assets/makelei.png">
      </div>
    </div>
    <div class="container type3">
      <h6>z-index负值深入理解 同是z-index:-1 差距从何而来</h6>
      <div class="box">
        <img  width="100" src="../assets/makelei.png">
      </div>
      <p></p>
      <div class="box1">
        <img  width="100" src="../assets/makelei.png">
      </div>
    </div>
    <div class="container type4">
      <h6>z-index负值与纸张卷边阴影模拟实例</h6>
      <div class="container">
        <div class="page">
          <p>We passed upon the stair, we spoke of was and when
            Although I wasn't there, he said I was his friend
            Which came as some surprise I spoke into his eyes
            I thought you died alone, a long long time ago
            Oh no, not me
            I never lost control
            You're face to face
            With the Man Who Sold The World
            I laughed and shook his hand, and made my way back home
            I searched for form and land, for years & years I roamed
            I gazed a gazely stare at all the millions here
            We must have died alone, a long long time ago
            Who knows? not me
            We never lost control
            You're face to face
            With the Man Who Sold The World.
            Who knows? not me
            We never lost control
            You're face to face
            With the Man Who Sold The World</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import img1URI from "../assets/makelei.png"
  export default {
    name: 'part5',
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
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      90%, 100% {
        opacity: 1;
      }
    }
    .box {
      width: 256px; height: 256px;
      margin: auto;
      position: relative;
    }
    .text {
      line-height: 30px;
      position: absolute; left: 0; right: 0; bottom: 0;
      background-color: rgba(0,0,0,.5);
      color: #fff;
      text-align: center;
      font-size: 14px;
    }
    .fade {
      //-webkit-animation: fadeIn 2s 2s infinite;
      //animation: fadeIn 2s 2s infinite;
      opacity: 0.9;
    }
  }
  .type3{
    .box{
      width: 200px;
      margin: auto;
      background: blue;
      img{
        position: relative;
        z-index: -1;
      }
    }
    .box1{
      width: 200px;
      margin: auto;
      background: blue;
      position: relative;
      z-index: 0;
      img{
        position: relative;
        z-index: -1;
      }
    }
  }
  .type4{
    .container {
      background-color: #666;
      /* 创建层叠上下文 */
      position: relative;
      z-index: 0;
    }
    .page {
      width: 600px;
      margin: auto;
      background-color: #f4f39e;
      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .2);
      text-shadow: 0 1px 0 #f6ef97;
      position: relative;
    }
    .page:before {
      transform: skew(-15deg) rotate(-5deg);
      transform-origin: left bottom;
      left: 0;
    }
    .page:after {
      transform: skew(15deg) rotate(5deg);
      transform-origin: right bottom;
      right: 0;
    }
    /* 边角卷边阴影 */
    .page:before, .page:after {
      width: 90%; height: 20%;
      content: "";
      box-shadow: 0 8px 16px rgba(0, 0, 0, .3);
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
</style>
