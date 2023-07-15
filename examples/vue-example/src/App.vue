<script setup>
import Button from "@opentiny/vue/button/pc.vue";

function ClickHandler(event) {
  console.log("click-handler");
}
</script>

<template>
  <div id="app">
    <Button 
      @click="ClickHandler"
      :reset-time="500"
    />
  </div>
</template>

<style scoped></style>
