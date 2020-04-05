<template>
  <div>
    <div class="wrap" v-if="showwrap">{{text}}</div>
  </div>
</template>
<script>
export default {
  name: "Popup"
};
</script>
<style lang="" scoped>
.wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  background: rgba(0, 0, 0, 0.35);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
  animation: fadeOut 2s ease;
}
@keyframes fadeOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>