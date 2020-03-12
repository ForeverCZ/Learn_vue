<template>
  <div>
    <My></My>
    <Naver></Naver>
  </div>
</template>
<script>
import My from "./compontens/my.vue";
import Naver from "./compontens/nav.vue";
export default {
  name: "person",
  components: {
    Naver,
    My
  }
};
</script>
<style></style>