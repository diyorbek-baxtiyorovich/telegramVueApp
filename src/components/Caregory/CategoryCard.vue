<template>
  <v-card class="category-card" flat>
    <v-img :src="category.image" height="100" cover class="rounded-img" />
    <v-card-text class="text-caption font-weight-medium font-weight-bold text-2xl">
      {{ category.title }}
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({ category: Object })
</script>

<style scoped>
.category-card {
  text-align: center;
  padding: 8px;
  border-radius: 12px;
}

.rounded-img {
  border-radius: 12px;
}
</style>
