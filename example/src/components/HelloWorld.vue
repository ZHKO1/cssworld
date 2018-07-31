<template>
  <ul>
    <li v-for="href in hrefArray">
      <router-link :to="href.url">{{ href.text }}</router-link><br>
      <ul>
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
        ]},
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
        ]},
        {url:"/part3",text:"第五章",items:[
        ]}
      ]
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
</style>
