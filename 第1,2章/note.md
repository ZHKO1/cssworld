第一章 概述
css的优势 流的特性（CSS世界里引导元素排列和定位的一条看不见的"水流"）
div标签和span标签 分别对应块级元素和内联级元素
1.3.2 流是如何影响整个CSS世界
1).只要让html默认的表现符合流，整个css世界就可以被流给统治
2).特殊布局与流的破坏
3).流向的改变
1.5 table自己的世界
table标签可能比css还悠久，因此流的特性对table标签不适用
1.6 CSS新世界——CSS3
1).布局更为丰富
作者提及了图片元素的srcset属性，css的object-fit属性，flex布局，grid layout格栅布局
2).视觉表现长足进步
圆角，阴影和渐变 transform变换 filter滤镜和混合模式 animation

第二章 需要提前了解的术语和概念
2.1 专业术语
11.选择器
伪类选择器
伪元素选择器
12.关系选择器
后代选择器 空格连接
相邻后代选择器 >连接
兄弟选择器 ～连接
相邻兄弟选择器 +连接

第三章 流，元素与基本尺寸
3.1 块级元素 block-level element
下面是作者的解释，非专业用语
外在盒子负责元素是可以一行显示还是只能换行显示
内在盒子（容器盒子）负责宽高，内容呈现
顺着这个思路跟下去，width/height作用在容器盒子上

3.2 width/height作用的具体细节
一般来说width:auto是默认的声明
不过我们需要注意到，它也会有以下四种不同的宽度表现
1).充分利用可用空间
最常见的表现，div默认的宽度百分之百
fill-available
2).收缩与包裹
典型代表就是浮动，绝对定位以及inline-block
fit-content
3).收缩到最小
table-layout为auto的表格
min-content
4).超出容器限制
在明确的width下，连续多个英文数字，或者内联元素被设置了white-space:nowrap
max-content
因此这几个CSS2原本就有的概念在CSS3里也有对应的进化
width分别为fill-available，fit-content，min-content，min-content
最大的妙处就是width的表现可以自由定义，不再受display局限，当然前提是不冲突
1.外部尺寸与流体特征
1).正常流宽度
大意是display:block时，width:100%其实没必要
也方便样式的计算和维护
2).格式化宽度
仅出现在position:absolute或flexed，绝对定位元素的宽度表现一般由内部尺寸决定，也有由外部尺寸决定
非替换元素，当left/right 或 top/bottom同时存在的时候，就相对于最近的具有定位特性(position不是static)的祖先元素计算
2.内部尺寸与流体特征
1).包裹性（shrink-to-fit）
元素尺寸永远以内部元素决定，但永远小于包含块容器的尺寸（除非容器尺寸小于元素的“首选最小宽度”）
实际开发应用场景之一: 某个div内文字少时是居中的，多时超过一行居左显示
2).首选最小宽度
实际开发应用场景: 没咋好说的，要么画个图可能还用得到（参见原书这段）
3).最大宽度
作者的解释是元素可以有的最大宽度，实际等同于包裹性元素设置white-space:nowrap声明后的宽度
如果内部没有块级元素或者块级元素没有设定宽度值，则“最大宽度”实际上是最大的连续内联盒子的宽度
3.2.2 width值作用的细节
margin border padding content 老生常谈
width一般就是作用与content上，造成了流动性丢失和与现实世界表现不一致的困扰
3.2.3 CSS流体布局下的宽度分离原则
一个方案，多使用一层标签，外标签设定width，内标签设定margin,padding和border
另一个方案，box-sizing，默认的content-box和border-box
这里作者提到为何没有margin-box，本身没有价值，关系到语义
box-sizing的初衷
唯一离不开box-sizing:border-box的是原生普通文本框input和文本域textarea的100%自适应父容器宽度
这两个都是替换元素。替换元素特性之一，尺寸由内部元素决定，无视display
换句话说input设置为display:block，也不会自适应父容器，需要width属性来操作
各方面来看box-sizing:border-box都是最优解，还能保持:focus高亮父级的边框，外面嵌套DIV模拟border和padding，内嵌替换元素的老方案就做不到这点
因此，作者的态度是没有必要*{box-sizing:border-box}，对于内联元素没影响，是不必要的消耗。或者search类型的input本身就是这属性
作者给出更佳的方案是input,textarea,img,video,object{box-sizing:border-box}
3.2.5 相对简单而单纯的height:auto
height:100%要起效果，其元素的父级必须要有一个可以生效的高度值
比如：body的子元素div如果要height:100%起效，那么必须同时设置html和body为height:100%，才能起效
可能会有人这么想，父元素height:auto，还设置子元素height:100%，那么随便再插入个图片之类，就很容易导致死循环
其实是错的，浏览器渲染机制如下，先下载文档头，加载样式资源，然后从上而下，从外到内渲染DOM内容，有先后顺序
比如渲染到父元素，子元素的width:100%还没渲染，父元素的宽度是图片加文字内容，然后到子元素渲染，才会根据渲染好的父元素宽度来，宽度不够则溢出
那么为什么width:100%没问题，height:100%就有问题了呢？
答案是规范已指定了如果包含块的搞定没有显式指定，而且该元素也不是绝对定位，那么计算值是auto
至于规范内宽度的解释，作者解释得不清楚，貌似也是各厂商的默认未定义行为
注意，绝对定位元素的百分比计算是根据padding-box来的，非绝对定位元素则是相对于content box计算的