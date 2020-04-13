<template>
  <div
    v-bind:class="containerClass"
    tabindex="-1"
    ref="videoContaner"
  >
    <div class="vjs-video-container">
      <video
        ref="video"
        class="vjs-tech"
        preload="auto"
        webkit-playsinline="true"
        playsinline="playsinline"
        x-webkit-airplay="allow"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        x5-video-orientation="landscape"
        tabindex="-1"
        v-bind:src="option.src"
        @loadedmetadata="videoLoadedmetadataEvent"
        @timeupdate="videoTimeupdateEvent"
        @play="videoPlayEvent"
        @pause="videoPauseEvent"
        @ended="videoEndedEvent"
        @error="videoErrorEvent"
      ></video>
      <div v-bind:class="[{ 'vjs-hidden': !loadingStatus }, 'vjs-loading']"></div>
    </div>
    <div class="vjs-control-bar progress-control" dir="ltr">
      <div class="vjs-progress-control vjs-control">
        <div
          tabindex="0"
          class="vjs-progress-holder vjs-slider vjs-slider-horizontal"
          role="slider"
          ref="controlbar"
          @click.stop.prevent="progressClickEvent"
        >
          <div class="vjs-play-progress vjs-slider-bar"
            ref="sliderbar"
            v-bind:style="progressStyle"
            @mousedown.stop.prevent="progressDownEvent"
            @touchstart.stop.prevent="progressDownEvent"
          >
          </div>
        </div>
      </div>
    </div>
    <div class="vjs-control-bar" dir="ltr">
      <div v-bind:class="buttonClass" @click.stop.prevent="switchPlayIcon">
        <img class="playing" src="./image/playing.png" alt />
        <img class="paused" src="./image/paused.png" alt />
      </div>
      <!--div class="vjs-current-time vjs-time-control vjs-control">
        <span class="vjs-current-time-display" role="presentation">{{stom(this.currentTime)}}</span>
      </div>
      <div class="vjs-duration vjs-time-control vjs-control">
        <span class="vjs-duration-display" role="presentation">{{stom(this.duration)}}</span>
      </div!-->
      <div class="vjs-space"></div>
      <div v-bind:class="fullscreenButtonClass" @click.stop.prevent="toggleFullscreen">
        <img class="tofull" src="./image/tofull.png" alt />
        <img class="exitfull" src="./image/exitfull.png" alt />
      </div>
    </div>
  </div>

</template>

<script>
import Hls from 'hls.js'
const dotWidth = 10;
export default {
  name: "Video",
  props: ["option"],
  methods: {
    switchPlayIcon: function(){
      var that = this;
      if(that.status == "paused"){
        that.play();
      }else{
        that.pause();
      }
    },
    play: function(parms){
      var that = this;
      if(that.status == "playing"){
        return;
      }
      that.status = "playing";
      var videoNode = that.$refs.video;
      if(!parms){
        videoNode.play();
        //that.resetTimeOutHide();
        that.resetTimeOutLoading();
      }
    },
    pause: function(parms){
      var that = this;
      if(that.status == "paused"){
        return;
      }
      that.status = "paused";
      var videoNode = that.$refs.video;
      if(!parms){
        videoNode.pause();
      }
    },
    videoLoadedmetadataEvent: function(){
      var videoNode = this.$refs.video;
      if(!videoNode.duration || videoNode.duration == Infinity){
        this.duration = 0;
      } else {
        this.duration = videoNode.duration;
      }
      this.$emit('loadedmetadata', this.duration);
    },
    videoTimeupdateEvent: function(e){
      var videoNode = this.$refs.video;
      if(!videoNode.duration || videoNode.duration == Infinity){
        this.duration = 0;
      } else {
        this.duration = videoNode.duration;
      }
      if(!videoNode.currentTime || videoNode.currentTime == Infinity){
        this.currentTime = 0;
      }else{
        this.currentTime = videoNode.currentTime;
      }
      this.resetTimeOutLoading();
      this.percentage = (100 * this.currentTime / this.duration) || 0;
      this.$emit('timeupdate', this.currentTime, this.duration);
    },
    videoPlayEvent: function(){
      this.play(true);
      this.$emit('play');
    },
    videoPauseEvent:function(){
      this.cleanTimeOutLoading();
      this.pause(true);
      this.$emit('pause');
    },
    videoEndedEvent:function(){
      this.cleanTimeOutLoading();
      this.$emit('ended');
    },
    videoErrorEvent:function(){
      var videoNode = this.$refs.video;
      var message = "Error " + videoNode.error.code + "; details: " + videoNode.error.message;
      this.$emit('error', message);
    },
    resetTimeOutLoading: function(){
      var that = this;
      that.cleanTimeOutLoading();
      if(that.status == 'playing'){
        that.loadingTimer = setTimeout(function(){
          that.loadingStatus = true;
        }, 300);
      }
    },
    cleanTimeOutLoading: function(){
      var that = this;
      if(that.loadingTimer){
        clearTimeout(that.loadingTimer);
      }
      that.loadingStatus = false;
    },
    containerClickHover: function(){
      if (!this.userActiveStatus) {
        this.userActiveStatus = true;
      } else {
      }
      //this.resetTimeOutHide();
    },
    resetTimeOutHide: function(){
      var that = this;
      if (that.hideTime) {
        clearTimeout(that.hideTime);
      }
      that.hideTime = setTimeout(function() {
        that.userActiveStatus = false;
      }, 5000);
    },
    toggleFullscreen: function(){
      var videoContaner = this.$refs.videoContaner;
      if(!this.fullscreenStatus){
        if (videoContaner.RequestFullScreen) {
            videoContaner.RequestFullScreen();
        } else if (videoContaner.webkitRequestFullScreen) {
            videoContaner.webkitRequestFullScreen();
        } else if (videoContaner.mozRequestFullScreen) {
            videoContaner.mozRequestFullScreen();
        } else if (videoContaner.msRequestFullscreen) {
            videoContaner.msRequestFullscreen();
        } else {
        }
        this.fullscreenStatus = true;
      }else{
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else {
        }
        this.fullscreenStatus = false;
      }
      return;
    },
    stom: function(t) {
      var m = Math.floor(t / 60);
      m < 10 && (m = '0' + m);
      return m + ":" + (t % 60 / 100).toFixed(2).slice(-2);
    },
    progressDownEvent: function(e){
      clearTimeout(this.hideTime);
      this.cleanTimeOutLoading();
      this.preStatus = this.status;
      this.$refs.video.pause();

      this.move.status = true
      let endX = e.pageX || e.touches[0].pageX
      let rect = this.$refs.controlbar.getBoundingClientRect()

      let width = Math.min(
        this.$refs.controlbar.clientWidth,
        Math.max(0, endX - rect.left)
      )
      this.percentage = 100 * width / this.$refs.controlbar.clientWidth;
    },
    progressMoveEvent: function(e){
      if (!this.move.status) {
        return false;
      }
      let endX = e.pageX || e.touches[0].pageX
      let rect = this.$refs.controlbar.getBoundingClientRect()

      let width = Math.min(
        this.$refs.controlbar.clientWidth,
        Math.max(0, endX - rect.left)
      )
      this.percentage = 100 * width / this.$refs.controlbar.clientWidth;
    },
    progressUpEvent: function(){
      if (!this.move.status) {
        return false;
      }
      this.move.status = false

      var videoNode = this.$refs.video;
      videoNode.currentTime = this.duration * this.percentage / 100;
      if(this.preStatus == "paused"){
        this.pause();
      }else{
        (this.percentage < 100) && this.play();
      }
      //this.resetTimeOutHide();
    },
    progressClickEvent: function(e){
      this.preStatus = this.status;
      let endX = e.pageX || e.touches[0].pageX
      let rect = this.$refs.controlbar.getBoundingClientRect()

      let width = Math.min(
        this.$refs.controlbar.clientWidth,
        Math.max(0, endX - rect.left)
      )
      this.percentage = 100 * width / this.$refs.controlbar.clientWidth;

      var videoNode = this.$refs.video;
      videoNode.currentTime = this.duration * this.percentage / 100;
      if(this.preStatus == "paused"){
        this.pause();
      }else{
        this.play();
      }
      //this.resetTimeOutHide();
    },
    bindEvents() {
      document.addEventListener('mousemove', this.progressMoveEvent)
      document.addEventListener('mouseup', this.progressUpEvent)
      document.addEventListener('touchmove', this.progressMoveEvent)
      document.addEventListener('touchend', this.progressUpEvent)
    },
    unbindEvents() {
      document.removeEventListener('mousemove', this.progressMoveEvent)
      document.removeEventListener('mouseup', this.progressUpEvent)
      document.removeEventListener('touchmove', this.progressMoveEvent)
      document.removeEventListener('touchend', this.progressUpEvent)
    },
  },
  data() {
    return {
      userActiveStatus: true,
      status: "paused",
      preStatus: "",
      loadingStatus: false,
      src: this.option.src,
      currentTime: 0,
      duration: 0,
      percentage: 0,
      move: {
        status: false, // 是否可拖动
      },
      fullscreenStatus: false,
    };
  },
  computed: {
    containerClass: function(){
      var result = [
        "video-js",
        "vjs-has-started",
        "vjs-fill",
        "vjs-controls-enabled",
        "vjs-touch-enabled",
        ];
      if(!this.userActiveStatus){
        result.push("vjs-user-inactive");
      }
      result.push("vjs-" + this.status);
      return result;
    },
    buttonClass: function(){
      var result = [
        "vjs-play-pause-button",
        ];
      result.push("vjs-" + this.status);
      return result;
    },
    progressStyle: function(){
      var style = {
        width: this.percentage + '%'
      }
      return style;
    },
    fullscreenButtonClass: function(){
      var result = [
        "vjs-fullscreen"
        ];
      if(this.fullscreenStatus) {
        result.push("exitfull");
      } else {
        result.push("tofull");
      }
      return result;
    }
  },
  mounted: function() {
    this.$nextTick(() => {
      this.bindEvents();
      var video = this.$refs.video;
      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(this.src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
          //video.play();
        });
      }
      else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = this.src;
      }
    })
  },
  beforeDestroy: function(){
    this.unbindEvents();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/scss" lang="scss" type="text/scss">
* {
  margin: 0;
  padding: 0;
}
*::-webkit-media-controls-panel {
  display: none !important;
  -webkit-appearance: none;
}
*::--webkit-media-controls-play-button {
  display: none !important;
  -webkit-appearance: none;
}
*::-webkit-media-controls-start-playback-button {
  display: none !important;
  -webkit-appearance: none;
}

@-webkit-keyframes loadingImage {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    -webkit-transform: translate(-50%, -50%) rotate(180deg);
    transform: translate(-50%, -50%) rotate(180deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes loadingImage {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    -webkit-transform: translate(-50%, -50%) rotate(180deg);
    transform: translate(-50%, -50%) rotate(180deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.video-js {
  font-size: 15px;
  position: relative;

  *{
    outline: none;
  }

  .vjs-video-container{
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 57px;

    .vjs-loading {
      position: absolute;
      left: 50%;
      width: 2.6em;
      height: 2.6em;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      background-image: url("./image/loading.png");
      background-repeat: round;
      -webkit-animation: loadingImage 1.5s infinite linear;
      animation: loadingImage 1.5s infinite linear;
    }
  }

  .vjs-control-bar {
    background: #1a1a1a;
    height: 42px;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 6px;
    padding-bottom: 12px;


    &.progress-control{
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 42px;
      width: 100%;
      height: 15px;
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 0px;
      padding-bottom: 0px;
      font-size: 0px;
      line-height: 0px;

      .vjs-progress-control {
        height: 4px;
        margin-top: 5px;
        background: #111111;
        max-width: 100%;
        min-width: 100%;

        .vjs-progress-holder {
          margin: 0px;
          height: 4px;

          &.vjs-slider{
            background: #111111;
            margin-right: 10px;
            &:focus{
              text-shadow: 0em 0em 0em white;
              -webkit-box-shadow: 0 0 0em #fff;
              box-shadow: 0 0 0em #fff;
            }
          }

          .vjs-play-progress {
            background: #DC1D33;

            &::before{
              content: " ";
              width: 10px;
              height: 10px;
              background: white;
              border-radius: 5px;
              position: absolute;
              right: -10px;
              top: -3px;
            }
          }
        }
      }

    }

    .vjs-play-pause-button {
      width: 27px;
      height: 24px;
      display: flex;
      cursor: pointer;
      img {
        display: none;
        width: 27px;
        height: 24px;
        margin: auto;
      }
      &.vjs-playing img.playing{
        display: block;
      }
      &.vjs-paused img.paused{
        display: block;
      }
    }
    .vjs-time-control {
      display: block;
      height: 42px;
      line-height: 42px;
      padding-left: 0.2em;
      padding-right: 0.2em;

      &.vjs-current-time {
        text-align: right;
        &::after{
          content: " /";
        }
      }
      &.vjs-duration {
        text-align: left;
      }
    }
    .vjs-space {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      -webkit-flex: 1;
      flex: 1;
    }
    .vjs-fullscreen {
      width: 24px;
      height: 24px;
      display: flex;
      cursor: pointer;
      img {
        display: none;
        width: 24px;
        height: 24px;
        margin: auto;
      }
      &.tofull img.tofull{
        display: block;
      }
      &.exitfull img.exitfull{
        display: block;
      }
    }
    .vjs-button {
      & > .vjs-icon-placeholder{
        &::before{
          line-height: inherit;
        }
      }
      .video-js button:focus {
        outline: none;
      }
    }
  }
}


</style>
