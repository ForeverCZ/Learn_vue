<template>
  <div>
    <My></My>
    <Business></Business>
    <Naver></Naver>
  </div>
</template>
<script>
import My from "./compontens/my.vue";
import Naver from "./compontens/nav.vue";
import Business from "./compontens/business";
export default {
  name: "person",
  components: {
    Naver,
    My,
    Business
  }
};
</script>
<style></style>