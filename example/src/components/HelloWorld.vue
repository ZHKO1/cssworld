<template>
  <ul>
    <li v-for="href in hrefArray">
      <router-link :to="href.url">{{ href.text }}</router-link> <button class='button' @click='toggle(href)'>{{href.show? 'show' : 'hide'}}</button>
      <ul v-bind:class="{ 'hidden': !href.show}">
        <li v-for="item in href.items">
          <span>{{ item }}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      hrefArray: [
        {url:"/part1",text:"第一、二、三章",items:[
          "首行伪类，首字母伪类，关系选择器",
          "未定义行为",
          "宽度的各种表现，CSS3下的属性",
          "首选最小宽度的使用场景",
          "渲染顺序，width:auto下多个子元素，其中一个子元素width:100%的表现",
          "height:100%在绝对定位元素以及非绝对定位元素下表现不同",
          "max-width权重",
          "max-width在更多，收起场景下的应用",
          "幽灵空白节点",
        ], show: false},
        {url:"/part2",text:"第四章",items:[
          "透明图片占位，火狐纯img的表现",
          "伪元素的content为图片，无法用样式控制其大小",
          "设置src属性显示图片，以及无图片情况下显示alt内容",
          "img{content:url(1.jpg)} <img>,和 <img src='1.jpg'>",
          ":hover新增content属性，不过右键保存的图片依然还是src属性图片",
          "甚至h标签也能搞个content属性",
          "画表格的例子",
          "正在加载中...动态效果",
          "content生成图片例子",
          "content计数器",
          "padding影响滚动条",
          "内联元素设置padding的表现爱你",
          "padding画图标的妙用",
          "用margin来改变尺寸和定位",
          "利用margin的等高布局",
          "margin合并",
          "内联元素的margin渲染",
          "margin失效",
          "border妙用和等高布局",
        ], show: false},
        {url:"/part3",text:"第五章",items:[
          "不受字体和字号影响的内联元素的垂直居中对齐效果",
          "所谓的em-box，半边距，内容区域是什么？",
          "多行垂直居中",
          "line-height:1.5、line-height:150%、line-height:1.5em的差别",
          "内联元素line-height的大值特性",
          "vertical-align属性值 数值百分比类",
          "vertical-align的实用性",
          "图片vertical-align:middle",
          "table-cell元素vertical-align:middle",
          "vertical-align和line-height之间的关系（容器高度不等于行高）",
          "text-align:justify例子",
          "inline-block与baseline的关系",
          "利用inline-block基线原理的小图标对齐实例页面",
          "vertial-align:middle与近似垂直居中",
          "vertical-align文本类属性值深入实例,分别设置为16px 24px 32px试试看",
          "基于vertical-align属性的水平垂直居中弹框",
          "vertical-align是否会影响别的元素基线",
        ], show: false},
        {url:"/part4",text:"第六章",items:[
          "测试查看float特性之一“包裹性”里自适应性",
          "float的作用机制",
          "float与流动布",
          "clear属性的测试",
          "clear:both的作用本质",
          "BFC与流体布局",
          "overflow剪裁结线border box",
          "深入锚点定位",
          "幻灯片机制",
          "内联元素作为包含块",
          "无依赖absolute绝对定位",
          "“无依赖绝对定位”与超越常规布局的排版实例页面",
          "下拉列表的定位",
          "absolute与text-align（针对IE做出兼容处理）",
          "返回顶部，反馈按钮 实战例子",
          "无依赖绝对定位和overflow不为hidden的例子，滚动条不出现",
          "深入了解Clip，chrome依然还保留着滚动条",
        ], show: false},
        {url:"/part5",text:"第七章",items:[
        ], show: false},
        {url:"/CSSpart1",text:"CSS-Inspiration Part1",items:[
        ], show: false},
        {url:"/video",text:"播放组件",items:[
        ], show: false},
      ]
    }
  },
  methods: {
    toggle(obj){
      console.log(obj);
      obj.show = !obj.show;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

.button{
 width: 150px;
}

.hidden{
  display: none;
}
</style>
