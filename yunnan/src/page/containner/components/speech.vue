<template>
  <div>
    <!-- 音频 -->
    <div class="speech">
      <div class="speech-title">
        <p>{{culum}}</p>
        <p>{{this.lecturer}}</p>
      </div>
      <div>
        <img v-show="play" @click="plays" src="../../../assets/image/bofang.jpg" alt />
        <img v-show="pause" @click="pauses" src="../../../assets/image/zanting.jpg" alt />
        <audio ref="myAudio" @ended="songEnd">
          <source :src="voiceData" type="audio/mpeg" />
        </audio>
      </div>
    </div>
    <!-- 文章 -->
    <div class="strategy" ref="boxConten">
      <div v-html="goods_desc"></div>
    </div>
  </div>
</template>
<script>
import { speeched } from "../../../api/api";
export default {
  name: "speech",
  props: {
    culum: "",
    lecturer: "",
    goods_desc: ""
  },
  data() {
    return {
      play: true,
      pause: false,
      songText: "",
      voiceData: ""
    };
  },
  methods: {
    plays() {
      //var Audio = document.getElementById("myAudio")=var Audio=this.$refs.myAudio
      var Audio = this.$refs.myAudio; //相当于选区dom
      Audio.play();
      this.play = false;
      this.pause = true;
      console.log("我被点击了");
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
    },
    voIce: function() {
      var boxConten = this.$refs.boxConten;
      var con = boxConten.textContent || boxConten.innerText;
      this.songText = con;
      const formData = new FormData();
      formData.append("speechen", this.songText);
      speeched(formData)
        .then(res => {
          console.log("语音合成的数据", res.data.speeching);
          this.voiceData = res.data.speeching;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    goods_desc: function() {
      this.$nextTick(function() {
        this.voIce();
      });
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
.strategy {
  margin-top: 0.5rem;
  padding: 0 0.2rem;
  font-size: 0.35rem;
  line-height: 0.5rem;
  /* word-break: break-all; */
  /* text-indent:0.28rem; */
  text-shadow: 0 0 3px rgb(195, 197, 196);
  text-decoration: blink;
}
.strategy p {
  text-align: center;
}
</style>