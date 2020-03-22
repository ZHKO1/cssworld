https://chokcoco.github.io/CSS-Inspiration/

一. CSS实现瀑布流布局（display: flex）
知识点：flex
直接设置display:flex或者display:inline-flex的元素称为flex容器，里面的子元素称为flex子项
1. 作用在flex容器上 -> 控制整体
  1). flex-direction: row | row-reverse | column | column-reverse;
  2). flex-wrap: nowrap | wrap | wrap-reverse;
  3). flex-flow: <‘flex-direction’>  <‘flex-wrap’>;
  4). justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    flex-start 默认值。逻辑CSS属性值，与文档流方向相关。默认表现为左对齐。
    flex-end 逻辑CSS属性值，与文档流方向相关。默认表现为右对齐。
    center 表现为居中对齐。
    space-between 表现为两端对齐。between是中间的意思，意思是多余的空白间距只在元素中间区域分配
    space-around around是环绕的意思，意思是每个flex子项两侧都环绕互不干扰的等宽的空白间距，最终视觉上边缘两侧的空白只有中间空白宽度一半。使用抽象图形示意如下：
    space-evenly evenly是匀称、平等的意思。也就是视觉上，每个flex子项两侧空白间距完全相等。
  5). align-items: stretch | flex-start | flex-end | center | baseline;
    stretch 默认值。flex子项拉伸。如果flex子项设置了高度，则按照设置的高度值渲染，而非拉伸。
    flex-start 逻辑CSS属性值，与文档流方向相关。默认表现为容器顶部对齐。
    flex-end 逻辑CSS属性值，与文档流方向相关。默认表现为容器底部对齐。
    center 表现为垂直居中对齐。
    baseline 表现为所有flex子项都相对于flex容器的基线（字母x的下边缘）对齐。
  6). align-content: stretch | flex-start | flex-end | center | space-between | space-around | space-evenly;
    和justify-content类似但不同的属性，垂直方向每一行flex元素的对齐和分布方式
    stretch 默认值。每一行flex子元素都等比例拉伸。例如，如果共两行flex子元素，则每一行拉伸高度是50%。
    flex-start 逻辑CSS属性值，与文档流方向相关。默认表现为顶部堆砌。
    flex-end 逻辑CSS属性值，与文档流方向相关。默认表现为底部堆放。
    center 表现为整体垂直居中对齐。
    space-between 表现为上下两行两端对齐。剩下每一行元素等分剩余空间。
    space-around 每一行元素上下都享有独立不重叠的空白空间。
    space-evenly 每一行元素都完全上下等分。
2. 作用在flex子项上 -> 控制个体
  1). order: <integer>; /* 整数值，默认值是 0 */
    所有flex子项的默认order属性值是0，所以比如设置为-1就能提前到最前面
  2). flex-grow: <number>; /* 数值，可以是小数，默认值是 0 */
    flex-grow不支持负值，默认值是0，表示不占用剩余的空白间隙扩展自己的宽度。如果flex-grow大于0，则flex容器剩余空间的分配就会发生

    所有剩余空间总量是1。
    如果只有一个flex子项设置了flex-grow属性值：
    如果flex-grow值小于1，则扩展的空间就总剩余空间和这个比例的计算值。
    如果flex-grow值大于1，则独享所有剩余空间。

    如果有多个flex设置了flex-grow属性值：
    如果flex-grow值总和小于1，则每个子项扩展的空间就总剩余空间和当前元素设置的flex-grow比例的计算值。
    如果flex-grow值总和大于1，则所有剩余空间被利用，分配比例就是flex-grow属性值的比例。
    例如所有的flex子项都设置flex-grow:1，则表示剩余空白间隙大家等分，如果设置的flex-grow比例是1:2:1，则中间的flex子项占据一半的空白间隙，剩下的前后两个元素等分。
  3). flex-shrink: <number>; /* 数值，默认值是 1 */
    和flex-grow的概念有点类似，只是收缩意义上。 flex-shrink不支持负值，默认值是1，也就是默认所有的flex子项都会收缩。如果设置为0，则表示不收缩，保持原始的fit-content宽度
    如果只有一个flex子项设置了flex-shrink：
    flex-shrink值小于1，则收缩的尺寸不完全，会有一部分内容溢出flex容器。
    flex-shrink值大于等于1，则收缩完全，正好填满flex容器。
    如果多个flex子项设置了flex-shrink：
    flex-shrink值的总和小于1，则收缩的尺寸不完全，每个元素收缩尺寸占“完全收缩的尺寸”的比例就是设置的flex-shrink的值。
    flex-shrink值的总和大于1，则收缩完全，每个元素收缩尺寸的比例和flex-shrink值的比例一样。
  4). flex-basis: <length> | auto; /* 默认值是 auto */
    在分配剩余空间之前元素的默认大小
    默认值是auto，就是自动。有设置width则占据空间就是width，没有设置就按内容宽度来。
    如果同时设置width和flex-basis，就渲染表现来看，会忽略width。
    当剩余空间不足的时候，flex子项的实际宽度并通常不是设置的flex-basis尺寸，因为flex布局剩余空间不足的时候默认会收缩
  5). flex: none | auto | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    其中第2和第3个参数（flex-shrink和flex-basis）是可选的。默认值为0 1 auto。
    根据作者例子来看，none的效果应该是跟0 0 auto一致，auto则是 1 1 auto
    自行思考 一个flex容器，四个flex子项，除了A，别的BCD的flex都是默认值，顺带一提容器已处于睁满状态，思考下A的flex在默认值，none，auto分别是什么情况
  6). align-self: auto | flex-start | flex-end | center | baseline | stretch;
    align-self多了个auto（默认值，继承flex容器的align-items属性）

参考 https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/

二. CSS实现瀑布流布局（colum+count）
知识点：columns布局
1. 直接相关属性
  1). column-width: <length> | auto;
    <length> 表示设定的最佳列宽值。实际呈现的每一栏的宽度可能与指定值不同，具体内容参见下面的细节描述。
    auto 默认值。表示每一栏的宽度由其它CSS属性决定，例如column-count。
    column-width有时候会失效，比如容器宽度600像素，设定的每一栏宽度是200像素，但是因为column-gap的默认值1em，所以会导致放不下三列，只能放两列，因此每列宽度为294px（字体大小设置为12px）
    PS: 题外话，值得玩味的是如果字体大小设置小于12px(比如10px)，column-gap的1em还是按照12px来算，border设为1em表现倒没什么问题
  2). column-count: <integer> | auto;
    <integer> 表示分栏数目，整数值。
    auto 默认值。表示分栏数目由其它CSS属性决定，例如column-width
    column-count与column-width都有可能有更高的优先级，要看具体场景。优先级计算诀窍就是统一转换column-count值，哪个小就使用哪一个
  3). columns column-width和column-count属性的缩写
  4). column-rule-color: <color>
  5). column-rule-style
  6). column-rule-width: thin | medium | thick | <length>
    thin：薄薄的，等同于1px；
    medium（默认值）：薄厚均匀，等同于3px；至于为什么是3px按照作者的说法是因为column-rule-style:double至少3px才有效果
    thick：厚厚的，等同于4px；
  7). column-rule
  8). column-span: none | all; 表示某一个内容是否跨多栏显示
  9). column-fill 根据作者说法目前仅有firefox支持，暂且不搞了
  10). column-gap: normal | <length-percentage>;
    normal: 默认值。在多栏布局中为1em，在其它类型的布局中为0。
    column-gap和columns属性发生冲突的时候，例如，column-gap太大，导致空间不足，此时，column-gap是会被舍弃的。
2. 间接相关属性
  1). break-after
  1). break-before
  1). break-inside
    break-inside很好理解，就是控制能否断开就是了
    问题是break-after和break-before简直见鬼了，完全搞不懂什么意思，网上似乎也没详细例子

参考 https://www.zhangxinxu.com/wordpress/2019/01/css-css3-columns-layout/#column-width

columns布局的场景（起点移动端页面的布局）这里也稍微做了个demo
参考 https://www.zhangxinxu.com/wordpress/2017/02/css3-multiple-column-layout-read-horizontal/

三. CSS实现瀑布流布局（display: grid）
知识点: grid布局
给<div>这类块状元素元素设置display:grid或者给<span>这类内联元素设置display:inline-grid，差不多就是Grid布局了
1. 作用在grid容器上	作用在grid子项上
  1). grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
  2). grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
    <track-size>：划分田地的尺寸。可以是长度值，百分比值，以及fr单位（网格剩余空间比例单位）。
    <line-name>：中间用来走路的田垄的名字，可以任意命名。
    例子
    .container {
        grid-template-columns: 80px auto 100px;
        grid-template-rows: 25% 100px auto 60px;
    }
    .container {
        grid-template-columns: [第一根纵线] 80px [纵线2] auto [纵线3] 100px [最后的结束线];
        grid-template-rows: [第一行开始] 25% [第一行结束] 100px [行3] auto [行4] 60px [行末];
    }
    .container {
        grid-template-columns: repeat(24, 40px [col-start]);
        // 等同于
        //  grid-template-columns: 40px [col-start], 40px [col-start], /* ...省略20个...*/, 40px [col-start], 40px [col-start];
    }
    .container {
        grid-template-columns: 1fr 1fr 1fr; //表示三等份
        grid-template-columns: 200px 1fr 1fr 1fr; //划分剩余三等分
        grid-template-columns: auto 1fr 1fr 1fr;
        // 当有设置fr尺寸的时候，auto的尺寸表现为“包裹”，为内容宽度。如果没有设置fr尺寸的网格，则表现为拉伸。
        grid-template-columns: auto 0.25fr .25fr .25fr;
        // 首先fr计算需要的剩余空间尺寸是grid容器的宽度减去之前设置为auto的内容宽度（请注意是包裹状态）的宽度
        // 后面3个0.25fr元素的宽度是：(容器宽度 - 内容宽度) * 0.25
        // 再剩余下来的就是第一个网络宽度
    }
  3). grid-template-areas
    .container {
      grid-template-areas:
        "<grid-area-name> | . | none | ..."
        "...";
    }
    grid-area-name 对应网格区域的名称。
    . 表示空的网格单元格。
    none 没有定义网格区域。
    具体例子如下
    .container {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas:
            "葡萄 葡萄 葡萄"
            "龙虾 养鱼 养鱼"
            "龙虾 养鱼 养鱼"
            "西瓜 西瓜 西瓜";
    }
    <div class="container">
        <div class="putao"></div>
        <div class="longxia"></div>
        <div class="yangyu"></div>
        <div class="xigua"></div>
    </div>
    .putao { grid-area: 葡萄; }
    .longxia { grid-area: 龙虾; }
    .yangyu { grid-area: 养鱼; }
    .xigua { grid-area: 西瓜; }
  4). grid-template
    // 这段主要是语法有点搞浆糊，暂且先这样了，以后有心情再研究
    // 而且作者也推荐用grid属性
    grid-template是grid-template-rows，grid-template-columns和grid-template-areas属性的缩写。
    .container {
        grid-template: none;
    }
    .container {
        grid-template: <grid-template-rows> / <grid-template-columns>;
    }
    grid-template:
        "葡萄 葡萄 葡萄" 1fr
        "龙虾 养鱼 养鱼" 1fr
        "龙虾 养鱼 养鱼" 1fr
        "西瓜 西瓜 西瓜" 1fr
        /1fr 1fr 1fr;
  5). grid-column-gap: <line-size>;
  6). grid-row-gap: <line-size>;
      用来定义网格中网格间隙的尺寸
     .container {
         grid-template-columns: 2fr 1fr;
         grid-template-rows: 1fr 2fr;
         grid-column-gap: 10px;
         grid-row-gap: 15px;
     }
  7). grid-gap: <grid-row-gap> <grid-column-gap>;
    是grid-column-gap和grid-row-gap属性的缩写
  8). justify-items: stretch | start | end | center; //网格元素的水平呈现方式
  9). align-items: stretch | start | end | center; //网格元素的垂直呈现方式
  10). place-items: <align-items> / <justify-items>;
  11). justify-content: stretch | start | end | center | space-between | space-around | space-evenly;
    水平上剩余空间，类似于flex布局的概念
  12). align-content: stretch | start | end | center | space-between | space-around | space-evenly;
  13). place-content: <align-content> / <justify-content>;
  14). grid-auto-columns
  15). grid-auto-rows
    指定任何自动生成的网格轨道（也称为隐式网格轨道）的大小。 当网格项目多于网格中的单元格或网格项目放置在显式网格之外时，将创建隐式轨道
    比如
    .container {
        display: grid;
        width: 150px;
        grid-template-columns: 60px 60px;
        grid-template-rows: 30px 90px;
        grid-auto-columns: 60px;
    }
    .item-a {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
    .item-b {
        /* 容器水平只有2个格子，但这里设定的是第3个，隐式网格创建 */
        grid-column: 3 / 4;
        grid-row: 2 / 3;
        background-color: rgba(255,255,0, .5);
    }
  16). grid-auto-flow: row | column | row dense | column dense
    grid-auto-flow属性控制没有明确指定位置的grid子项的放置方式
  17). grid
    grid: none
    grid: <grid-template>
    grid: <grid-template-rows> / [ auto-flow && dense? ] <grid-auto-columns>?
    grid: [ auto-flow && dense? ] <grid-auto-rows>? / <grid-template-columns>

2. 作用在grid子项上
    1). grid-column-start
    2). grid-column-end
    3). grid-row-start
    4). grid-row-end
    5). grid-column
    6). grid-row
    7). grid-area
    8). justify-self: stretch | start | end | center; //单个网格元素的水平对齐方式
    9). align-self: stretch | start | end | center;
    10). place-items: <align-self> / <justify-self>;


参考 https://www.zhangxinxu.com/wordpress/2018/11/display-grid-css-css3/
参考 https://github.com/sylvainpolletvillard/postcss-grid-kiss
参考 https://www.zhangxinxu.com/wordpress/2020/01/css-grid-auto-flow/
参考 https://www.w3cplus.com/css3/understanding-the-css-grid-auto-placement-algorithm.html

