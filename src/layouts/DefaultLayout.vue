<template>
  <v-app class="defApp">
    <v-main>
      <router-view />
    </v-main>
    <BottomNav />
  </v-app>
</template>

<script setup>
import BottomNav from '../components/BottomNav.vue'
</script>

<style>
.defApp {
  min-width: 400px;
}
</style>
