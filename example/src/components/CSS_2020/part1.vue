<template>
  <div>
    <div class="container type1">
      <h6>CSS 实现瀑布流布局（display: flex）</h6>
      <div class="g-container">
        <div class="g-queue">
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
        </div>
        <div class="g-queue">
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
        </div>
        <div class="g-queue">
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
        </div>
        <div class="g-queue">
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
        </div>
      </div>
    </div>
    <div class="container type2">
      <h6> CSS实现瀑布流布局（column-count）</h6>
      <h6> column-count: 元素内容将被划分的最佳列数 </h6>
      <h6> break-inside: 避免在元素内部插入分页符 </h6>
      <div class="g-container">
        <div class="g-item"></div>
        <div class="g-item"></div>
        <div class="g-item"></div>
        <div class="g-item"></div>
        <div class="g-item"></div>
        <div class="g-item"></div>
        <div class="g-item"></div>
        <div class="g-item"></div>
      </div>
    </div>
    <div class="container type2_1">
      <h6> 题外话 column布局的妙用 起点移动端页面的样式 {{type2_1_style.page}} </h6>
      <div class="g-container" ref="type2_1_container" @click="type2_1_click" v-bind:style="{transform: 'translateX(' + type2_1_style.translateX + 'px' + ')'}">
        <div>
        ひとつめの言叶は梦<br>
        第一个字是梦<br>
        眠りの中から<br>
        从睡梦之中<br>
        胸の奥の 暗闇を<br>
        将心灵深处的黑暗<br>
        そっと 连れ出すの<br>
        悄悄的带出<br>
        ふたつめの言叶は风<br>
        第二个字是风<br>
        行く手を 教えて<br>
        指引我前进的方向<br>
        神样の腕の中へ<br>
        向神的臂膀中<br>
        翼をあおるの<br>
        舞动着翅膀飞去<br>
        とけていった 悲しいことを<br>
        将那已被救赎的悲伤<br>
        かぞえるように<br>
        细细回味<br>
        金色のリンゴが<br>
        金色的苹果<br>
        また ひとつ落ちる<br>
        又落下了一颗<br>
        见たこともない风景<br>
        从未见过的风景<br>
        そこが归る场所<br>
        那就是归宿<br>
        たったひとつのいのちに<br>
        是生命唯一的<br>
        たどりつく场所<br>
        归宿<br>
        古い魔法の本<br>
        古老的魔法书<br>
        月のしずく 夜のとばり<br>
        月之水滴 夜之帷幕<br>
        いつか逢える 予感だけ<br>
        仅有何时相遇的预感<br>
        we can fly<br>
        我们可以飞翔<br>
        we have wings<br>
        我们拥有翅膀<br>
        we can touch floating dreams<br>
        我们可以触碰漂浮的梦<br>
        call me from so far<br>
        从远方呼唤我<br>
        through the wind<br>
        穿过风<br>
        in the night<br>
        在夜晚<br>
        みっつめの言叶は hum…<br>
        第三个字是 hum...<br>
        耳をすましたら<br>
        如侧耳倾听<br>
        あなたのふるえる腕を<br>
        你那颤抖的双臂<br>
        そっと ときはなつ<br>
        必将得到解放<br>
        </div>
      </div>
    </div>
    <div class="container type3">
      <h6> CSS实现瀑布流布局（display: grid）</h6>
      <h6> 使用 grid-template-columns、grid-template-rows 分割行列 </h6>
      <h6> 使用 grid-row 控制每个 item 的所占格子的大小 </h6>
      <div class="g-container">
        <div class="g-item"></div>
        <div class="g-item"></div>
        <div class="g-item"></div>
        <div class="g-item"></div>
        <div class="g-item"></div>
        <div class="g-item"></div>
        <div class="g-item"></div>
        <div class="g-item"></div>
      </div>
    </div>
    <div class="container type_xx1">
      <h6>使用 mix-blend-mode 实现抖音 LOGO</h6>
      <div style="background: black;">
        <div class="g-container">
          <div class="j"></div>
          <div class="j"></div>
        </div>
      </div>
    </div>
    <div class="container type_xx2">
      <h6>使用 mix-blend-mode 实现抖音 LOGO</h6>
      <div class="mix"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CSSpart1',
    methods: {
      type2_1_click: function(){
        this.type2_1_style.translateX = this.type2_1_style.translateX - 300;
        var div = this.$refs.type2_1_container;
        this.type2_1_style.page = div.scrollWidth / 300;
      }
    },
    data () {
      return {
        type2_1_style: {
          translateX: 0,
          page: 0

        }
      }
    },
    mounted:function () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/scss" lang="scss" type="text/scss">
  .container {
    border: 1px solid black;
    margin-bottom: 20px;
    font-family: "微软雅黑";
    h6{
      margin:0.5em;
    }
    p{font-size: 13px;margin-top: 10px;margin-bottom: 10px}
    &:last-child{
    margin-bottom: 0px;
     }
  }
  .type1 {
    $lineCount: 4;
    $count: 3;
    @function randomNum($max, $min: 0, $u: 1) {
      @return ($min + random($max)) * $u;
    }
    @function randomColor() {
      @return rgb(randomNum(255), randomNum(255), randomNum(255));
    }
    .g-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      overflow: hidden;
      height: 300px;
    }
    .g-queue {
      display: flex;
      flex-direction: column;
      flex-basis: 24%;//每格的宽度
    }
    .g-item {
      position: relative;
      width: 100%;
      margin: 2.5% 0;
    }
    @for $i from 1 to $lineCount+1 {
      .g-queue:nth-child(#{$i}) {
        @for $j from 1 to $count+1 {
          .g-item:nth-child(#{$j}) {
            height: #{randomNum(100, 40)}px;
            background: randomColor();

            &::after {
              content: "#{$j}";
              position: absolute;
              color: #fff;
              font-size: 14px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
    }
  }
  .type2 {
    $count: 32;

    @function randomNum($max, $min: 0, $u: 1) {
      @return ($min + random($max)) * $u;
    }

    @function randomColor() {
      @return rgb(randomNum(255), randomNum(255), randomNum(255));
    }

    .g-container {
      column-count: 4;
      column-gap: .5vw;
      padding-top: .5vw;
      padding-bottom: .5vw;
    }

    .g-item {
      position: relative;
      width: 24vw;
      margin-bottom: 1vw;
      break-inside: avoid;
    }

    @for $i from 1 to $count+1 {
      .g-item:nth-child(#{$i}) {
        height: #{randomNum(80, 50)}px;
        background: randomColor();

        &::after {
          content: "#{$i}";
          position: absolute;
          color: #fff;
          font-size: 2vw;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .g-item:nth-child(#{1}) {
      width: auto;
      height: #{randomNum(80, 50)}px;
      background: randomColor();
      column-span: all;

      &::after {
        content: "#{1}";
        position: absolute;
        color: #fff;
        font-size: 2vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .type2_1 {
    width: 300px;
    height: 400px;
    overflow: hidden;
    .g-container {
      margin: 0px;
      padding: 0px;
      column-width: 300px;
      column-gap: 0px;
      height: 350px;
      animation: none 1s infinite;
    }
  }
  .type3 {
    $count: 8;

    @function randomNum($max, $min: 0, $u: 1) {
      @return ($min + random($max)) * $u;
    }

    @function randomColor() {
      @return rgb(randomNum(255), randomNum(255), randomNum(255));
    }

    .g-container {
      height: 400px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(8, 1fr);
    }

    @for $i from 1 to $count+1 {
      .g-item:nth-child(#{$i}) {
        position: relative;
        background: randomColor();
        margin: 0.5vw;

        &::after {
          content: "#{$i}";
          position: absolute;
          color: #fff;
          font-size: 2vw;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .g-item {
      &:nth-child(1) {
        grid-column: 1;
        grid-row: 1 / 3;
      }
      &:nth-child(2) {
        grid-column: 2;
        grid-row: 1 / 4;
      }
      &:nth-child(3) {
        grid-column: 3;
        grid-row: 1 / 5;
      }
      &:nth-child(4) {
        grid-column: 4;
        grid-row: 1 / 6;
      }
      &:nth-child(5) {
        grid-column: 1;
        grid-row: 3 / 9;
      }
      &:nth-child(6) {
        grid-column: 2;
        grid-row: 4 / 9;
      }
      &:nth-child(7) {
        grid-column: 3;
        grid-row: 5 / 9;
      }
      &:nth-child(8) {
        grid-column: 4;
        grid-row: 6 / 9;
      }
    }
  }
  .type_xx1{
    .g-container {
      position: relative;
      width: 200px;
      height: 350px;
      margin: 0px auto;
      filter: contrast(150%) brightness(110%);
    }

    .j {
      position: absolute;
      top: 0;
      left: 0;
      width: 47px;
      height: 218px;
      z-index: 1;
      background: #24f6f0;

      &::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        border: 47px solid #24f6f0;
        border-top: 47px solid transparent;
        border-radius: 50%;
        top: 121px;
        left: -147px;
        transform: rotate(45deg);
      }

      &::after {
        content: "";
        position: absolute;
        width: 140px;
        height: 140px;
        border: 40px solid #24f6f0;
        border-right: 40px solid transparent;
        border-top: 40px solid transparent;
        border-left: 40px solid transparent;
        top: -110px;
        right: -183px;
        border-radius: 100%;
        transform: rotate(45deg);
        z-index: -10;
      }
    }

    .j:last-child {
      left: 10px;
      top: 10px;
      background: #fe2d52;
      z-index: 100;
      mix-blend-mode: lighten;
      animation: moveLeft 10s infinite;

      &::before {
        border: 47px solid #fe2d52;
        border-top: 47px solid transparent;

      }
      &::after {
        border: 40px solid #fe2d52;
        border-right: 40px solid transparent;
        border-top: 40px solid transparent;
        border-left: 40px solid transparent;
      }
    }

    @keyframes moveLeft {
      0% {
        transform: translate(200px);
      }
      50% {
        transform: translate(0px);
      }
      100% {
        transform: translate(0px);
      }
    }
  }
  .type_xx2{
    .mix {
      position: relative;
      width: 240px;
      height: 240px;
      background: url('../../assets/makelei.png'), #0ff;
      background-blend-mode: lighten;

      &::after {
        content: '';
        position: absolute;
        left: 10px;
        width: 240px;
        height: 240px;
        background: url('../../assets/makelei.png'), #f00;
        background-blend-mode: lighten;
        mix-blend-mode: darken;
      }
    }
  }
</style>
