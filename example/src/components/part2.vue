<template>
  <div>
    <div class="container">
      <img src="../assets/logo.png" width="100">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'part1',
    methods: {
      clickevent: function (e) {
        e.preventDefault();
      },
    },
    data () {
      return {
        items: [
          1, 2, 3, 4, 5, 7, 8, 9, 10
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    border: 1px solid black;
    margin-bottom: 20px;
  }

</style>
