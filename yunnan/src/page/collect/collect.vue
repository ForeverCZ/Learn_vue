<template>
  <div>
    <Header></Header>
    <List></List>
  </div>
</template>
<script>
import Header from "./components/header";
import List from "./components/list";
export default {
  name: "Collect",
  components: {
    Header,
    List
  }
};
</script>