<template>
  <v-row dense>
    <v-col v-for="category in categories" :key="category.id" cols="4">
      <CategoryCard :category="category" />
    </v-col>
    <v-col cols="12" class="text-center"> </v-col>
  </v-row>
</template>
<style></style>
<script setup>
import CategoryCard from './CategoryCard.vue'

const categories = [
  {
    id: 1,
    title: 'Mato',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSighAQNHKEAVjMiUl5gnwbzeJqxr6k3PMP6g&s'
  },
  {
    id: 2,
    title: 'Oziq-ovqat va idishlar',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIULXnoDO1EfI01Goa7A4MA2OI8hP1kPLBQQ&s'
  },
  {
    id: 3,
    title: 'Elektronika',
    image: 'https://uprawnienia-budowlane.com/wp-content/uploads/2022/07/photo-matelect.jpg'
  },
  {
    id: 4,
    title: 'Kosmetika',
    image: 'https://api.cabinet.smart-market.uz/uploads/images/ff8081813fcb51bc617bd9a0'
  },
  {
    id: 5,
    title: 'Aksessuarlar',
    image: 'https://tovar.uz/images/categories/k2851.jpg'
  },
  {
    id: 6,
    title: 'Vitaminlar',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZLecUVLJQ5ngI6sJ4d4yU1f4Y179fuCDaw&s'
  }
]
</script>
