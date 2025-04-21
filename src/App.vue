<template>
  <div class="app">
    <div class="app_box">
      <DefaultLayout />
    </div>
  </div>
</template>

<script setup>
import DefaultLayout from './layouts/DefaultLayout.vue'
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.app_box {
  min-width: 320px;
  max-width: 400px;
}
</style>
