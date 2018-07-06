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
