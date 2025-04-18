<template>
  <div class="bg-box mt-4">
    <div class="d-flex justify-space-between align-center mb-2">
      <h2 class="text-h6 font-weight-bold">Yangi kelganlar</h2>
      <v-btn
        variant="text"
        @click="$router.push('/category')"
        :append-icon="icons.mdiChevronRight"
        class="text-primary"
      >
        Все
      </v-btn>
    </div>
    <v-row dense>
      <v-col v-for="product in products" :key="product.id" cols="6">
        <v-card class="product-card" flat>
          <v-img :src="product.image" height="180" cover class="rounded-img" />
          <v-card-text class="py-2">
            <div class="d-flex align-center mb-1">
              <v-chip size="x-small" color="red" class="text-white me-2">🔥 Sotish</v-chip>
              <span class="text-red text-subtitle-2 font-weight-bold"
                >{{ product.discountPercent }}%</span
              >
            </div>
            <div class="text-subtitle-2 font-weight-bold text-red">{{ product.price }} so'm</div>
            <div class="text-caption text-decoration-line-through text-grey">
              {{ product.oldPrice }} so'm
            </div>
            <div class="text-caption">{{ product.title }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
    title: 'ZIPPY Комплект из 2 лонгсливов с...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SXYlai7feZzU8LJUpqhP6l2JMVBeF6fw8A&s',
    price: '135 200',
    oldPrice: '169 000',
    discountPercent: '-20'
  },
  {
    id: 2,
    title: 'ZIPPY Набор из 2 лонгсливов с...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUnas_a85YqWKOfhne24q45O4gReCUouRYQ&s',
    price: '239 200',
    oldPrice: '299 000',
    discountPercent: '-20'
  },
  {
    id: 3,
    title: 'ZIPPY Набор из 2 лонгсливов с...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUnas_a85YqWKOfhne24q45O4gReCUouRYQ&s',
    price: '239 200',
    oldPrice: '299 000',
    discountPercent: '-20'
  },
  {
    id: 4,
    title: 'ZIPPY Комплект из 2 лонгсливов с...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SXYlai7feZzU8LJUpqhP6l2JMVBeF6fw8A&s',
    price: '135 200',
    oldPrice: '169 000',
    discountPercent: '-20'
  },
  {
    id: 5,
    title: 'ZIPPY Набор из 2 лонгсливов с...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUnas_a85YqWKOfhne24q45O4gReCUouRYQ&s',
    price: '239 200',
    oldPrice: '299 000',
    discountPercent: '-20'
  },
  {
    id: 6,
    title: 'ZIPPY Набор из 2 лонгсливов с...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUnas_a85YqWKOfhne24q45O4gReCUouRYQ&s',
    price: '239 200',
    oldPrice: '299 000',
    discountPercent: '-20'
  }
]
</script>

<style scoped>
.product-card {
  border-radius: 12px;
  padding: 8px;
  background-color: #fff;
}
.rounded-img {
  border-radius: 12px;
}
.text-red {
  color: #e53935;
}
.text-grey {
  color: #9e9e9e;
}
</style>
