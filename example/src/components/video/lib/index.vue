<template>
  <div
    v-bind:class="containerClass"
    tabindex="-1"
    @click.stop.prevent="containerClickHover"
    @mouseover.stop.prevent="containerClickHover"
  >
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
    <div class="vjs-control-bar progress-control" dir="ltr">
      <div class="vjs-progress-control vjs-control"
            ref="controlbar"
            @click.stop.prevent="progressClickEvent">
        <div
          tabindex="0"
          class="vjs-progress-holder vjs-slider vjs-slider-horizontal"
          role="slider"
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
      <button v-bind:class="buttonClass" type="button" @click.stop.prevent="switchPlayIcon">
        <span class="vjs-icon-placeholder"></span>
      </button>
      <div class="vjs-current-time vjs-time-control vjs-control">
        <span class="vjs-current-time-display" role="presentation">{{stom(this.currentTime)}}</span>
      </div>
      <div class="vjs-duration vjs-time-control vjs-control">
        <span class="vjs-duration-display" role="presentation">{{stom(this.duration)}}</span>
      </div>
      <div class="vjs-space"></div>
      <div class="vjs-fullscreen tofull" @click.stop.prevent="toggleFullscreen">
        <img class="tofull" src="./image/tofull.png" alt />
        <img class="exitfull" src="./image/exitfull.png" alt />
      </div>
    </div>
    <div class="vjs-debugger"></div>
    <div class="log vjs-hidden"></div>
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
        that.resetTimeOutHide();
        that.resetTimeOutLoading();
      }
    },
    pause: function(parms){
      console.log('fuckyou');
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
      this.resetTimeOutHide();
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
      //TODO 参考cctv的全屏功能
      return;
      var that = this;
      var t = that.$refs.video;
      if(!that.isInFullScreen){
        t.requestFullscreen ? (t.requestFullscreen(),
            that.isInFullScreen = !0) : t.mozRequestFullScreen ? (t.mozRequestFullScreen(),
              that.isInFullScreen = !0) : t.webkitRequestFullscreen ? (t.webkitRequestFullscreen(),
                that.isInFullScreen = !0) : t.webkitEnterFullscreen && (t.webkitEnterFullscreen(),
                that.isInFullScreen = !0);
      }else{
        //document.webkitExitFullscreen && document.webkitExitFullscreen(),
        //this.isInFullScreen = !1;
      }
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
        console.log(this.percentage);
        (this.percentage < 100) && this.play();
      }
      this.resetTimeOutHide();
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
      this.resetTimeOutHide();
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
        startX: 0, // 记录最开始点击的X坐标
        left: 0 // 记录当前已经移动的距离
      }
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
        "vjs-play-control",
        "vjs-control",
        "vjs-button",
        ];
      result.push("vjs-" + this.status);
      return result;
    },
    progressStyle: function(){
      var style = {
        width: this.percentage + '%'
      }
      return style;
    }
  },
  mounted: function() {
    window.apple = this;
    this.$nextTick(() => {
      this.bindEvents();
      /*
      const barWidth = this.$refs.progress.clientWidth - dotWidth
      const offsetWidth = this.percent * barWidth
      this.moveSilde(offsetWidth)
      */
    })
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

  *{
    outline: none;
  }

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

  .vjs-control-bar {
    background: transparent;
    height: 4em;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 1em;
    padding-right: 1em;

    &.progress-control{
      position: absolute;
      bottom: 4em;
      height: 1em;
    }

    .vjs-slider{
      &:focus{
        text-shadow: 0em 0em 0em white;
        -webkit-box-shadow: 0 0 0em #fff;
        box-shadow: 0 0 0em #fff;
      }
    }

    .vjs-progress-control {
      height: 1em;
      max-width: 100%;
      min-width: 100%;
      .vjs-progress-holder {
        font-size: inherit;
        margin: 0px;
        .vjs-play-progress {
          background: #0bf1f9;

          &::before{
            content: " ";
            width: 0.6em;
            height: 1em;
            background: white;
            border-radius: 0.1em;
          }
        }
      }
    }
    .vjs-play-control {
      height: 4em;
      line-height: 4em;
      width: 3em;
    }
    .vjs-time-control {
      display: block;
      height: 4em;
      line-height: 4em;
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
      width: 3em;
      height: 4em;
      line-height: 4em;
      padding-left: 0.8em;
      padding-top: 1.25em;
      padding-right: 0.8em;
      cursor: pointer;
      img {
        display: none;
        width: 100%;
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

  &.vjs-user-inactive .vjs-control-bar{
    display: none;
  }

  .vjs-debugger {
    position: absolute;
    width: 4em;
    height: 4em;
    top: 1.25em;
    right: 1.25em;
  }
}

</style>
