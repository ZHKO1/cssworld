<template>
  <div>
    <div class="container">
      <p class="p_type1">To stop the degradation of the planet's natural environment and to build a future in which humans live in harmony with nature, by; conserving the world's biological diversity, ensuring that the use of renewable natural resources is sustainable, and promoting the reduction of pollution and wasteful consumption.</p>
      <p class="p_type2">FUCK YOU</p>
      <code>
        #shit2+span{
        color:green
        }
        #shit8~span{
        color:blue
        }
      </code><br>
      <span v-for="item in items" :id="('number' + item)">{{item}} </span>
    </div>
    <div class="container">
      正常情况(chrome和火狐下active伪类都没问题)：
      <a href="javascript:" class="active-btn">按下</a>
      包含JS(火狐下没有触发active伪类)：
      <a href="javascript:" id="button" class="active-btn" @mousedown="clickevent">按下</a>
    </div>
    <div class="container" style="resize: horizontal;overflow: hidden;height:200px;line-height: 200px;">
      <p class="fill-available">
        width:fill-available可以让元素的宽度表现为默认的block水平元素的尺寸表现。<br>
        但这里实际上是display:inline-block水平的，<br>
        于是，我们可以保证宽度满尺寸自适应的同时使用line-height实现近似的垂直居中效果。
      </p>
    </div>
    <div class="container" style="width:50%;">
      <strong>display:inline-block;</strong>
      <div class="box inline-block">
        <img src="../assets/logo.png">
        <p>display:inline-block具有收缩特性，但是，当（例如这里的）描述文字超过一行显示的时候，其会这行，不会让自身的宽度超过父级容器的可用空间的，但是，width:max-content就不是酱样子哦咯！表现得好像设置了white-space:nowrap一样，科科！</p>
      </div>

      <strong>width: max-content;</strong>
      <div class="box max-content">
        <img src="../assets/logo.png">
        <p>display:inline-block具有收缩特性，但是，当（例如这里的）描述文字超过一行显示的时候，其会这行，不会让自身的宽度超过父级容器的可用空间的，但是，width:max-content就不是酱样子哦咯！表现得好像设置了white-space:nowrap一样，科科！</p>
      </div>

      <strong>width: min-content;</strong>
      <div class="box min-content">
        <img src="../assets/logo.png" id="minContentIMG">
        <p>display:inline-block具有收缩特性，但这里宽度随文字。而width:min-content随图片。</p>
      </div>

      <strong>width: fit-content;</strong>
      <div class="box fit-content">
        <img src="../assets/logo.png">
        <p>display:inline-block居中要靠父元素，而width:fit-content直接margin:auto.</p>
      </div>
    </div>
    <div class="container">
      <span class="ao"></span>
      <span class="tu"></span>
    </div>
    <div class="container">
      <h5>红色背景是父级</h5>
      <div class="box_style1">
        <img src="../assets/logo.png">
        <span class="text">红色背景是父级</span>
      </div>
    </div>
    <div class="container" style="width:50%">
      <div class="box_style2">
        <div class="child">高度96px</div>
      </div>
      <div class="box_style2 rel">
        <div class="child">高度156px</div>
      </div>
    </div>
    <div class="container" style="width:50%">
      <h5>max-width权重比!important还高，min-width和max-width冲突，min-width胜</h5>
      <img src="../assets/logo.png" class="img_type1" style="width:480px!important;">
    </div>
    <div class="container" style="width:50%">
      <div class="table">
        <div class="td">
          <input id="check1" type="checkbox">
          <p>个人觉得，display:table-cell最强的应用是可以任意个数列表的等宽效果。</p>
          <div class="element">
            <p>display:table-cell其他一些应用，例如，两栏自适应布局，垂直居中效果等等都是可以通过其他技术手段模拟出来的，但是，根据列表个数自动等宽的效果，其他CSS是很难模拟的，尤其当需要兼容IE8浏览器的时候。</p>
          </div>
          <label for="check1" class="check-in">更多↓</label>
          <label for="check1" class="check-out">收起↑</label>
        </div>
        <div class="td">
          <input id="check2" type="checkbox">
          <p>个人觉得，display:table-cell最强的应用是可以任意个数列表的等宽效果。</p>
          <div class="element">
            <p>display:table-cell其他一些应用，例如，两栏自适应布局，垂直居中效果等等都是可以通过其他技术手段模拟出来的，但是，根据列表个数自动等宽的效果，其他CSS是很难模拟的，尤其当需要兼容IE8浏览器的时候。</p>
            <p>然而，此方法也有局限性，就是只能实现单行列表的等分，所以，如果我们希望列表数目超过一定值的时候变成多行，就需要根据数目不同，输出不同的DOM结构，仅仅靠CSS有难度。</p>
          </div>
          <label for="check2" class="check-in">更多↓</label>
          <label for="check2" class="check-out">收起↑</label>
        </div>
      </div>
    </div>
    <div class="container" style="width:50%">
      <div style="background:yellow"><span style="display: inline-block"></span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'part1',
  methods:{
    clickevent:function(e){
      e.preventDefault();
    },
  },
  data () {
    return {
      items:[
        1,2,3,4,5,7,8,9,10
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    border:1px solid black;
    margin-bottom: 20px;
  }
  #number2+span{
    color:green
  }
  #number8~span{
    color:blue
  }
  p.p_type1:first-line
  {
    background-color:yellow;
  }
  p.p_type2:first-letter
  {
    background-color:yellow;
  }

  .active-btn {
    display: inline-block;
    background-color: white;
  }
  .active-btn:active {
    background-color: yellow;
  }

  .fill-available {
    display: inline-block;
    line-height: 20px;
    padding: 20px;
    background-color: #cd0000;
    color: #fff;
    vertical-align: middle;
    width: -webkit-fill-available;
    width: -moz-fill-available;
    width: -moz-available;    /* FireFox目前这个生效 */
    width: fill-available;
  }

  .box {
    background-color: #f0f3f9;
    padding: 10px;
    margin: 10px auto 20px;
    overflow: hidden;
    text-align: left;
  }

  .inline-block {
    display: inline-block;
  }
  .max-content {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
  }
  .min-content {
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content;
  }
  #minContentIMG:hover{
    width:50px;
  }
  .fit-content{
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }

  .ao,
  .tu {
    display: inline-block;
    width: 0;
    font-size: 14px;
    line-height: 18px;
    margin: 35px;
    color: #fff;
  }
  .ao:before,
  .tu:before {
    outline: 2px solid #cd0000;
    font-family: Consolas, Monaco, monospace;
  }
  .ao:before {
    content: "fuck你fuck";
  }
  .tu {
    direction: rtl;
  }
  .tu:before {
    content: "我fuck你";
  }
  .box_style1 {
    display: inline-block;
    white-space: nowrap;
    background-color: #cd0000;
  }
  .box_style1 .text {
    display: inline-block;
    width: 100%;
    background-color: #34538b;
    color: #fff;
  }
  .box_style2 {
    width: 200px;
    height: 160px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #beceeb;
    border: 2px solid black;
    margin:0 auto 40px auto;
  }
  .box_style2 .child {
    height: 100%;
    background: #cd0000;
  }
  .box_style2.rel {
    position: relative;
  }
  .box_style2.rel > .child {
    width: 100%;
    position: absolute;
  }
  img.img_type1 {
    max-width: 256px;
  }

  .table {
    display: table;
    width: 100%;
    width: calc(100% - 30px);
    max-width: 400px;
    margin: auto;
    table-layout: fixed;
    text-align: left;
  }
  .table .td {
    display: table-cell;
    padding: 5px;
  }

  .table input[type="checkbox"] {
    position: absolute;
    clip: rect(0 0 0 0);
  }
  .table .check-in,
  .check-out {
    color: #34538b;
    cursor: pointer;
  }
  .table .check-out {
    display: none;
  }
  .table :checked ~ .check-out {
    display: inline-block;
  }
  .table :checked ~ .check-in {
    display: none;
  }
  .table .element {
    max-height: 0;
    overflow: hidden;
    transition: max-height .25s;
  }
  .table :checked ~ .element {
    max-height: 666px;
  }
</style>
