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
        {url:"/part1",text:"第一、二章",items:[
          "关系选择器",
          "未定义行为",
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
