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
    <div class="container type3_1">
      <h6> grid布局1</h6>
      <div class="container_">
        <div class="putao">1</div>
        <div class="longxia">2</div>
        <div class="yangyu">3</div>
        <div class="xigua">4</div>
        <div class="fuck">请注意，这里运用了grid-auto-columns的属性</div>
      </div>
    </div>
    <div class="container type3_2">
      <h6> grid布局2 看看grid: auto-flow 50px / repeat(4, 1fr)会怎么显示</h6>
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
    <div class="container type4">
      <h6> 多方案实现跨行或跨列布局</h6>
      <div class="g-container">
        <h6>float 实现</h6>
        <div class="g-float">
          <div class="g-item">0</div>
          <div class="g-item">1</div>
          <div class="g-item">2</div>
        </div>
        <h6>flex 实现</h6>
        <div class="g-flex">
          <div class="g-item">0</div>
          <div class="g-item">1</div>
          <div class="g-item">2</div>
        </div>
        <h6>grid 实现</h6>
        <div class="g-grid">
          <div class="g-item">0</div>
          <div class="g-item">1</div>
          <div class="g-item">2</div>
        </div>
      </div>
    </div>
    <div class="container type5">
      <h6> 多种方案实现单列等宽，其他多列自适应均匀布局</h6>
      <h6>display: grid 实现</h6>
      <div class="g-grid">
        <div class="g-item">0</div>
        <div class="g-item">1</div>
        <div class="g-item">2</div>
        <div class="g-item">3</div>
      </div>
      <h6>display: flex 实现</h6>
      <div class="g-flex">
        <div class="g-item">0</div>
        <div class="g-item">1</div>
        <div class="g-item">2</div>
        <div class="g-item">3</div>
      </div>
      <h6>position: aboslute + float 实现</h6>
      <div class="g-position">
        <div class="g-item">0</div>
        <div class="g-item">1</div>
        <div class="g-item">2</div>
        <div class="g-item">3</div>
      </div>
      <h6>position: aboslute + float +非calc实现</h6>
      <div class="g-justify">
        <div class="g-left">0</div>
        <div class="g-col">
          <div class="g-row">
            <div class="g-item-box">
              <div class="g-item">1</div>
            </div>
            <div class="g-item-box">
              <div class="g-item">2</div>
            </div>
            <div class="g-item-box">
              <div class="g-item">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container type6">
      <h6> 6种实现多列等高的方法</h6>
      <div class="g-container">
        <h6>padding + margin + overflow，实现多列等高效果，兼容性好</h6>
        <div class="g-padmar">
          <div class="g-left">
            content<br>
          </div>
          <div class="g-right">
            content<br>
            content<br>
            content<br>
            content<br>
          </div>
        </div>
        <h6>border实现多列等高，左边框宽度为200px，左列浮动，伪元素清除浮动</h6>
        <div class="g-border">
          <div class="g-left">
            content<br>
          </div>
          <div class="g-right">
            content<br>
            content<br>
            content<br>
            content<br>
          </div>
        </div>
        <h6>父元素线性渐变背景色实现多列等高（同理各种颜色障眼法）</h6>
        <div class="g-lineargradient">
          <div class="g-left">
            content<br>
          </div>
          <div class="g-right">
            content<br>
            content<br>
            content<br>
            content<br>
          </div>
        </div>
        <h6>display：flex实现多列等高</h6>
        <div class="g-flex">
          <div class="g-left">
            content<br>
          </div>
          <div class="g-right">
            content<br>
            content<br>
            content<br>
            content<br>
          </div>
        </div>
        <h6>display：grid实现多列等高</h6>
        <div class="g-grid">
          <div class="g-left">
            content<br>
          </div>
          <div class="g-right">
            content<br>
            content<br>
            content<br>
            content<br>
            content<br>
          </div>
        </div>
        <h6>display:table-cell 实现多列等高</h6>
        <div class="g-table">
          <div class="g-left">
            content<br>
          </div>
          <div class="g-right">
            content<br>
            content<br>
            content<br>
            content<br>
            content<br>
          </div>
        </div>
      </div>
    </div>
    <div class="container type7">
      <h6> 圣杯布局</h6>
      <div class="g-container">
        <div class="g-middle">middle</div>
        <div class="g-left">left</div>
        <div class="g-right">right</div>
      </div>
    </div>
    <div class="container type8">
      <h6> 圣杯布局(flex)</h6>
      <div class="g-container">
        <div class="g-middle">middle</div>
        <div class="g-left">left</div>
        <div class="g-right">right</div>
      </div>
    </div>
    <div class="container type9">
      <h6> 双飞翼布局</h6>
      <div class="g-container">
        <div class="g-middle">
          <div class="g-middle-inner">middle-inner </div>
        </div>
        <div class="g-left">left</div>
        <div class="g-right">right</div>
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
  @function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
  }
  @function randomColor() {
    @return rgb(randomNum(255), randomNum(255), randomNum(255));
  }

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
  .type3_1 {
    .container_ {
      display: grid;
      width: 300px;
      height: 300px;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas:
        "a a a"
        "b c c"
        "b c c"
        "d d d"
        ". . .";
      grid-auto-columns: 30px;
    }
    .container_ > div {
      outline: 1px dotted;
      background-color: hsla(0,0%,100%,.6);
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .putao { grid-area: a; }
    .longxia { grid-area: b; }
    .yangyu { grid-area: c; }
    .xigua { grid-area: d; }
    .fuck { grid-row: 5/6; grid-column: 1/5; }
  }
  .type3_2 {
    $count: 20;
    .g-container {
      display: grid;
      grid: auto-flow 50px / repeat(4, 1fr);
    }
    @for $i from 1 to $count+1 {
      .g-item:nth-child(#{$i}) {
        position: relative;
        background: randomColor();
        margin: 10px;

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
    .g-item:nth-child(1) {
      grid-row: 1/4;

    }
  }
  .type4 {
    .g-container {
      margin: 20px auto;
      width: 400px;
    }
    .g-item {
      width: 190px;
      height: 190px;
      box-sizing: border-box;
      border: 1px solid #666;
      border-radius: 10px;
      line-height: 190px;
      font-size: 32px;
      text-align: center;
      cursor:pointer;
      margin: 5px;
      transition: .1s all;
    }
    .g-float {
      overflow: hidden;
      .g-item {
        float: left;
      }
      .g-item:first-child {
        height: 390px;
      }
      .g-item:first-child:hover {
        height: 190px;
        width: 390px;
      }
    }
    .g-flex {
      width: 400px;
      height: 400px;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-direction: column;

      .g-item:first-child {
        height: 390px;
      }
    }
    .g-flex:hover {
      flex-direction: row;

      .g-item:first-child {
        height: 190px;
        width: 390px;
      }
    }
    .g-grid {
      width: 400px;
      height: 400px;
      overflow: hidden;
      display: grid;
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(2, 50%);

      .g-item {
        width: unset;
        height: unset;
      }

      .g-item:first-child {
        grid-row: 1 / 3;
        grid-column: 1 / 2;
      }
    }
    .g-grid:hover {
      .g-item:first-child {
        grid-row: 1 / 2;
        grid-column: 1 / 3;
      }
    }
  }
  .type5 {
    .g-left,
    .g-item {
      background: #3f51b5;
      line-height: 200px;
      color: #fff;
      text-align: center;
      font-size: 24px;
    }
    .g-grid {
      height: 200px;
      background: #ff9800;
      display: grid;
      grid-template-columns: 200px repeat(3, 1fr);
      grid-column-gap: 10px;
      margin-bottom: 20px;
    }
    .g-flex {
      height: 200px;
      background: #ff9800;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      margin-bottom: 20px;
      .g-item {
        flex: 0 1 calc((100% - 200px - 30px) / 3);
      }
      .g-item:first-child {
        flex: 0 1 200px;
      }
    }
    .g-position {
      position: relative;
      height: 200px;
      background: #ff9800;
      margin-bottom: 20px;
      .g-item {
        float: left;
        width: calc((100% - 200px - 30px) / 3);
        margin-left: 10px;
      }
      .g-item:nth-child(2) {
        float: left;
        width: calc((100% - 200px - 30px) / 3);
        margin-left: 210px;
      }
      .g-item:first-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        float: unset;
        margin-left: unset;
      }
    }
    .g-justify {
      position: relative;
      height: 200px;
      background: #ff9800;
      margin-bottom: 20px;

      .g-col,
      .g-row,
      .g-item-box {
        box-sizing: border-box;
      }

      .g-left {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
      }

      .g-row {
        margin-right: -5px;
        margin-left: -5px;
      }

      .g-col {
        position: absolute;
        top: 0;
        left: 210px;
        right: 0;
        height: 200px;
        overflow: hidden;

        &:before,
        &:after {
          display: table;//清除浮动
          content: " ";
        }

        &:after {
          clear: both;
        }

        .g-item-box {
          position: relative;
          float: left;
          width: 33.33%;
          padding-left: 5px;
          padding-right: 5px;
        }
      }
    }
  }
  .type6 {
    h6{
      color: black;
    }
    .g-container {
      width: 100%;
      margin: 0 auto;
      line-height: 2;
      color: #fff;
      & > div {
        margin-bottom: 10px;
      }
    }
    .g-padmar {
      position: relative;
      overflow: hidden;
      .g-left {
        float: left;
        width: 200px;
        background: #4caf50;
        padding-bottom:9999px;
        margin-bottom:-9999px;
      }
      .g-right {
        float: left;
        width: 800px;
        background: #99afe0;
        padding-bottom: 9999px;
        margin-bottom: -9999px;
      }
    }
    .g-border {
      position: relative;
      width: 800px;
      border-left: 200px solid #4caf50;
      background: #99afe0;
      &::after {
        content: ".";
        display:block;
        height: 0;
        clear: both;
      }
      .g-right {
        width: 800px;
      }
      .g-left {
        float: left;
        width: 200px;
        margin-left: -200px;
      }
    }
    .g-lineargradient {
      background: linear-gradient(90deg, #4caf50 0, #4caf50 20%, #99afe0 20%, #99afe0);
      overflow: hidden;
      .g-left {
        float: left;
        width: 200px;
      }
      .g-right {
        float: left;
        width: 800px;
      }
    }
    .g-flex {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: stretch;
      .g-left {
        flex: 200px 0 0 ;
        background: #4caf50;
      }
      .g-right {
        flex: auto 1 0;
        background: #99afe0;
      }
    }
    .g-grid {
      display: grid;
      // align-items: stretch; 默认值
      grid-template-columns: 200px auto;

      .g-left {
        background: #4caf50;
      }

      .g-right {
        background: #99afe0;
      }
    }
    .g-table {
      overflow:hidden;
      display:table;
      .g-left {
        width: 200px;
        display: table-cell;
        background: #4caf50;
      }
      .g-right {
        width: 800px;
        display: table-cell;
        background: #99afe0;
      }
    }
  }
  .type7 {
    .g-container {
      // overflow: hidden;
      position: relative;
      height: 100px;
      padding: 0 200px;
      min-width: 100px;
      & > div {
        height: 100px;
        float: left;
        text-align: center;
        color: #fff;
        line-height: 100px;
        font-size: 3vw;
      }
    }
    .g-middle {
      position: relative;
      width: 100%;
      background: #cc6630;
    }
    .g-left {
      position: relative;
      width: 200px;
      background: #ffcc00;
      margin-left: -100%;
      left: -200px;
    }
    .g-right {
      position: relative;
      width: 200px;
      background: pink;
      margin-left: -200px;
      right: -200px;
    }
  }
  .type8 {
    .g-container {
      position: relative;
      height: 100px;
      min-width: 100px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      & > div {
        height: 100px;
        text-align: center;
        color: #fff;
        line-height: 100px;
        font-size: 12px;
      }
    }
    .g-left{
      order: 1;
      flex: 0 0 200px;
      background: #ffcc00;
    }
    .g-middle{
      order: 2;
      flex: 1 0 auto;
      background: #cc6630;
    }
    .g-right{
      order: 3;
      flex: 0 0 200px;
      background: pink;
    }
  }
  .type9 {
    .g-container {
      position: relative;
      height: 100px;
      min-width: 400px;
      & > div {
        height: 100px;
        float: left;
        text-align: center;
        color: #fff;
        line-height: 100px;
        font-size: 3vw;
      }
    }
    .g-middle {
      position: relative;
      width: 100%;
      background: #cc6630;
      .g-middle-inner {
        margin: 0 200px;
      }
    }
    .g-left {
      position: relative;
      width: 200px;
      background: #ffcc00;
      margin-left: -100%;
    }
    .g-right {
      position: relative;
      width: 200px;
      background: pink;
      margin-left: -200px;
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
