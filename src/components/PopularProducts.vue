<template>
  <div class="bg-box mt-4">
    <div class="d-flex justify-space-between align-center mb-2">
      <h2 class="text-h6 font-weight-bold">Mashhur tovar</h2>
      <v-btn
        variant="text"
        @click="$router.push('/popular')"
        :append-icon="icons.mdiChevronRight"
        class="text-primary"
      >
        Все
      </v-btn>
    </div>
    <v-slide-group show-arrows>
      <v-slide-group v-for="product in products" :key="product.id">
        <v-card class="product-card mx-2" flat>
          <v-img :src="product.image" height="140" cover class="rounded-img" />
          <v-card-text class="py-2">
            <div v-if="product.discount" class="mb-1">
              <v-chip size="x-small" color="red" class="text-white">Sotish</v-chip>
            </div>
            <div class="text-subtitle-2 font-weight-bold">{{ product.price }} so'm</div>
            <div
              v-if="product.oldPrice"
              class="text-caption text-grey text-decoration-line-through"
            >
              {{ product.oldPrice }} so'm
            </div>
            <div class="text-caption">{{ product.title }}</div>
          </v-card-text>
        </v-card>
      </v-slide-group>
    </v-slide-group>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { mdiChevronRight } from '@mdi/js'

const icons = reactive({
  mdiChevronRight
})

const products = [
  {
    id: 1,
    title: 'Minipicco Кеды Nansi',
    image:
      'https://cdn.shopify.com/s/files/1/0613/2160/9273/products/5063af95-2d86-4d36-b5a1-5102d713b283_61c0f589-6ca5-4cdd-aa76-1f00a3e37811.jpg?v=1682332298',
    price: '404 100',
    oldPrice: '449 000',
    discount: true
  },
  {
    id: 2,
    title: 'Minipicco Кеды Nansi',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ErY7OC_54hC9NiJMVDhwRgGgu7rzHXS9sOl5IzJuJqonuBhvbtxZY3wyWUjBx52zeq8&usqp=CAU',
    price: '404 100',
    oldPrice: '449 000',
    discount: true
  },
  {
    id: 3,
    title: 'Apple iPhone 14 Pro Max 1TB',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCUYSjsf79PUbyhd2-VL3g9-ojeiYOcMcmg&s',
    price: '27 482 000',
    discount: false
  }
]
</script>

<style scoped>
.product-card {
  width: 140px;
  border-radius: 12px;
  padding: 8px;
  background-color: #fff;
}
.rounded-img {
  border-radius: 12px;
}
.text-grey {
  color: #9e9e9e;
}
</style>
