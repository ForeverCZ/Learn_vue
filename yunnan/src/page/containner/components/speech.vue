<template>
  <div>
    <div class="speech">
      <div class="speech-title">
        <p>标题1</p>
        <p>标题1</p>
      </div>
      <div>
        <img v-show="play" @click="plays" src="../../../assets/image/bofang.jpg" alt />
        <img v-show="pause" @click="pauses" src="../../../assets/image/zanting.jpg" alt />
        <audio ref="myAudio" @ended="songEnd">
          <source src="https://dwz.cn/4uY517d4" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "speech",
  data() {
    return {
      play: true,
      pause: false
    };
  },
  methods: {
    plays() {
      //var Audio = document.getElementById("myAudio")=var Audio=this.$refs.myAudio
      var Audio = this.$refs.myAudio; //相当于选区dom
      Audio.play();
      this.play = false;
      this.pause = true;
    },
    pauses() {
      //var Audio = document.getElementById("myAudio")=var Audio=this.$refs.myAudio
      var Audio = this.$refs.myAudio; //相当于选区dom
      Audio.pause();
      this.play = true;
      this.pause = false;
    },
    songEnd() {
      this.play = true;
      this.pause = false;
    }
  }
};
</script>
<style scoped>
.speech {
  display: flex;
  justify-content: flex-end;
  background: #cacaca;
  align-items: center;
  margin: 0.3rem 0.1rem;
  border-radius: 3px;
}
.speech img {
  width: 1rem;
  padding-left: 0.5rem;
}
.speech-title {
  text-align: center;
  line-height: 1.5;
}
.speech-title p:nth-child(2) {
  color: #888;
  font-size: 0.2rem;
}
</style>