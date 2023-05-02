<template>
  <h2>座標X {{point.x}}, 座標Y {{point.y}}</h2>
</template>

<script>
import usePoint from "@/vue3/hooks/usePoint";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Demo",
  setup(){
    let point = usePoint();
    return {point}
  }
}
</script>

<style scoped>

</style>