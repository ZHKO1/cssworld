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
      正常情况：
      <a href="javascript:" class="active-btn">按下</a>
      包含JS：
      <a href="javascript:" id="button" class="active-btn" @mousedown="clickevent">按下</a>
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

</style>
