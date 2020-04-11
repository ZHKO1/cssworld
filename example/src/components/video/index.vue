<template>
  <div class='videoExample'>
    <myVideo
        :option='test'
        @loadedmetadata="videoLoadedmetadataEvent"
        @timeupdate="videoTimeupdateEvent"
        @play="videoPlayEvent"
        @pause="videoPauseEvent"
        @ended="videoEndedEvent"
        @error="videoErrorEvent"
    />
  </div>
</template>

<script>
import video from './lib/index.vue'

export default {
  name: "Example",
  components: {myVideo: video},
  methods: {
    videoLoadedmetadataEvent: (duration) => {console.log('videoLoadedmetadataEvent', duration)},
    videoTimeupdateEvent: (currentTime, duration) => {console.log('videoTimeupdateEvent', currentTime, duration)},
    videoPlayEvent: () => {console.log('videoPlayEvent')},
    videoPauseEvent: () => {console.log('videoPauseEvent')},
    videoEndedEvent: () => {console.log('videoEndedEvent')},
    videoErrorEvent: (message) => {console.log('videoErrorEvent', message)},
  },
  data() {
    return {
      test:{
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
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
