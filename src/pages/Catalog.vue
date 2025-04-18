<template>
  <div class="bac_bt">
    <div class="catalog-section">
      <h2 class="catalog-title">Katalog</h2>

      <v-text-field
        placeholder="Mahsulotlarni qidirish"
        :prepend-inner-icon="icons.mdiMagnify"
        variant="solo-filled"
        density="comfortable"
        rounded="lg"
        hide-details
        class="search-input"
        readonly
        @click="openSearch"
      />

      <SearchOverlay ref="searchOverlay" />
    </div>
    <div class="bg-box mt-2 px-3">
      <CategoryList />
    </div>
    <div class="bg-box mt-2 px-3">
      <!-- Saralash va Narx tugmalari -->
      <div class="d-flex justify-space-between mb-2">
        <v-btn @click="dialog = true" variant="outlined" rounded> Saralash </v-btn>
        <v-btn variant="outlined" rounded> Narx </v-btn>
      </div>

      <!-- Modal oynasi -->
      <v-bottom-sheet v-model="dialog" inset>
        <v-card class="pa-2">
          <v-card-title class="text-h6 font-weight-bold">Avval ko'rsatiladi</v-card-title>
          <v-divider class="my-2" />

          <v-list>
            <v-list-item
              v-for="option in sortOptions"
              :key="option.value"
              @click="selectSort(option.value)"
              class="cursor-pointer"
            >
              <v-list-item-action>
                <v-radio :model-value="selectedSort" :value="option.value" />
              </v-list-item-action>
              <v-list-item-title>{{ option.label }}</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-btn block @click="dialog = false" color="primary">Qo'llash</v-btn>
          </v-card-actions>
        </v-card>
      </v-bottom-sheet>

      <!-- Mahsulotlar -->
      <v-row dense>
        <v-col v-for="product in products" :key="product.id" cols="6">
          <v-card class="product-card" flat>
            <v-img :src="product.image" height="180" cover class="rounded-img" />
            <v-card-text class="py-2">
              <div class="d-flex align-center mb-1">
                <v-chip size="x-small" color="red" class="text-white me-2">🔥 Chegirma</v-chip>
                <span class="text-red text-subtitle-2 font-weight-bold">
                  -{{ product.discountPercent }}%
                </span>
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
  </div>
</template>

<script setup>
// import
import { ref, reactive } from 'vue'
import { mdiMagnify } from '@mdi/js'
import SearchOverlay from '../components/ui/SearchOverlay.vue'
import CategoryList from '../components/Caregory/CategoryList.vue'

// data
const icons = reactive({
  mdiMagnify
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
const dialog = ref(false)
const selectedSort = ref('popular')
const searchOverlay = ref(null)

const sortOptions = [
  { label: 'Ommabop', value: 'popular' },
  { label: 'Arzonroq', value: 'cheap' },
  { label: 'Qimmatroq', value: 'expensive' },
  { label: "Yaqinda qo'shilgan", value: 'recent' }
]

// Method
function openSearch() {
  if (searchOverlay.value) {
    searchOverlay.value.isOpen = true
  }
}

const selectSort = value => {
  selectedSort.value = value
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.bac_bt {
  background-color: #f6f6f6;
}
.catalog-section {
  background-color: #324387;
  padding: 24px;
  border-radius: 0 0 12px 12px;
}
.bg-box {
  background-color: #fff;
  border-radius: 12px;
}

.catalog-title {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
}
.catalog-title {
  font-family: 'Montserrat', sans-serif;
}
.search-input {
  background-color: #f3f5f9 !important;
  border-radius: 12px;
}

.product-card {
  border-radius: 12px;
  padding: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
