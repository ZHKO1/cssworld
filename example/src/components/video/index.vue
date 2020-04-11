<template>
  <div class='videoExample'>
    <myVideo v-bind:option='test'/>
  </div>
</template>

<script>
import video from './lib/index.vue'

export default {
  name: "Example",
  components: {myVideo: video},
  methods: {},
  data() {
    return {
      test:{
        url: 'fuck'
      }
    };
  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/scss" lang="scss" type="text/scss">
  .videoExample{
    width: 781px;
    height: 498px;
  }
</style>
