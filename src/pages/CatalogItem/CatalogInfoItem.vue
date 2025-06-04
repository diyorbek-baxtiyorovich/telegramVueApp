<template>
  <div class="catalogItem">
    <!-- Sarlavha -->
    <div class="catalogItem-header">
      <p>{{ pageTitle }}</p>
    </div>

    <div class="chip-items d-flex flex-wrap mb-2">
      <v-chip
        v-for="tag in allTags"
        :key="tag"
        :class="['ma-1', selectedTags.includes(tag) ? 'selected-chip' : '']"
        :color="selectedTags.includes(tag) ? 'black' : ''"
        :text-color="selectedTags.includes(tag) ? 'white' : 'black'"
        :variant="selectedTags.includes(tag) ? 'flat' : 'outlined'"
        @click="toggleTag(tag)"
        pill
      >
        <span>{{ tag }}</span>
        <v-icon
          v-if="selectedTags.includes(tag)"
          size="18"
          class="ms-1"
          @click.stop="removeTag(tag)"
        >
          {{ icons.mdiClose }}
        </v-icon>
      </v-chip>
    </div>

    <div class="d-flex justify-start mb-2 gap-2">
      <v-btn @click="dialog = true" variant="outlined" rounded class="sort-btn mr-2">
        Saralash
      </v-btn>
      <v-btn @click="priceDialog = true" variant="outlined" rounded class="sort-btn"> Narx </v-btn>
    </div>

    <v-bottom-sheet v-model="dialog" inset>
      <v-card class="px-4 pt-4 pb-6 rounded-xl">
        <div class="d-flex justify-space-between align-center mb-2">
          <span class="text-subtitle-1 font-weight-bold">Turini tanlang</span>
          <v-btn icon variant="text" @click="dialog = false">
            <v-icon>{{ icons.mdiClose }}</v-icon>
          </v-btn>
        </div>
        <v-divider class="mb-3" />

        <v-radio-group v-model="selectedSort" class="mb-4">
          <v-radio
            v-for="option in sortOptions"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            color="primary"
            class="sort-radio"
          />
        </v-radio-group>

        <v-btn
          block
          color="#182c88"
          class="text-white font-weight-medium"
          rounded
          size="large"
          @click="applySort"
        >
          Qo'llash
        </v-btn>
      </v-card>
    </v-bottom-sheet>

    <!-- Narx bo'yicha filter oynasi -->
    <v-bottom-sheet v-model="priceDialog" inset>
      <v-card class="px-4 pt-4 pb-6 rounded-xl">
        <!-- Sarlavha va yopish -->
        <div class="d-flex justify-space-between align-center mb-2">
          <span class="text-subtitle-1 font-weight-bold">Narx bo‘yicha filter</span>
          <v-btn icon variant="text" @click="priceDialog = false">
            <v-icon>{{ icons.mdiClose }}</v-icon>
          </v-btn>
        </div>
        <v-divider class="mb-3" />
        <!-- Range slider -->
        <v-range-slider
          v-model="priceRange"
          :min="0"
          :max="1000000"
          step="10000"
          class="mt-4"
          thumb-label
          color="primary"
        />

        <v-btn
          block
          color="#182c88"
          class="text-white font-weight-medium"
          rounded
          size="large"
          @click="applyPriceFilter"
        >
          Qo'llash
        </v-btn>
      </v-card>
    </v-bottom-sheet>

    <v-row dense class="mt-4">
      <v-col v-for="product in products" :key="product.id" cols="6" sm="6" md="4">
        <v-card class="product-card" flat>
          <v-img :src="product.image" height="180" cover class="rounded-img" />
          <v-card-text class="py-2">
            <div class="d-flex align-center mb-1">
              <v-chip size="x-small" color="red" class="text-white me-2">🔥 Chegirmalar</v-chip>
              <span class="text-red text-subtitle-2 font-weight-bold">
                {{ product.discountPercent }}
              </span>
            </div>
            <div class="text-subtitle-2 font-weight-bold text-red">{{ product.price }} so'm</div>
            <div class="text-caption text-decoration-line-through text-grey">
              {{ product.oldPrice }} so'm
            </div>
            <!-- Tooltip orqali mahsulot nomini to'liq ko'rsatish -->
            <v-tooltip location="top">
              <template #activator="{ props }">
                <div v-bind="props" class="text-caption ellipsis">
                  {{ product.title }}
                </div>
              </template>
              <span>{{ product.title }}</span>
            </v-tooltip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <div>
    <SearchOverlay ref="searchOverlay" />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import SearchOverlay from '../../components/ui/SearchOverlay.vue'
import { mdiMagnify, mdiClose } from '@mdi/js'

const pageTitle = ref('Kiyimlar')

const products = [
  {
    id: 1,
    title: 'ZIPPY Комплект из 2 лонгсливов с...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SXYlai7feZzU8LJUpqhP6l2JMVBeF6fw8A&s',
    price: '135 200',
    oldPrice: '169 000',
    discountPercent: '-20%'
  },
  {
    id: 2,
    title: 'ZIPPY Набор из 2 лонгсливов с...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUnas_a85YqWKOfhne24q45O4gReCUouRYQ&s',
    price: '239 200',
    oldPrice: '299 000',
    discountPercent: '-20%'
  },
  {
    id: 3,
    title: 'ZIPPY Набор из 2 лонгсливов с...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUnas_a85YqWKOfhne24q45O4gReCUouRYQ&s',
    price: '239 200',
    oldPrice: '299 000',
    discountPercent: '-20%'
  },
  {
    id: 4,
    title: 'ZIPPY Комплект из 2 лонгсливов с...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SXYlai7feZzU8LJUpqhP6l2JMVBeF6fw8A&s',
    price: '135 200',
    oldPrice: '169 000',
    discountPercent: '-20%'
  },
  {
    id: 5,
    title: 'ZIPPY Набор из 2 лонгсливов с...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUnas_a85YqWKOfhne24q45O4gReCUouRYQ&s',
    price: '239 200',
    oldPrice: '299 000',
    discountPercent: '-20%'
  },
  {
    id: 6,
    title: 'ZIPPY Набор из 2 лонгсливов с...',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUnas_a85YqWKOfhne24q45O4gReCUouRYQ&s',
    price: '239 200',
    oldPrice: '299 000',
    discountPercent: '-20%'
  }
]

const allTags = ['Комплект', 'Одежда', 'Каши', 'Футболка', 'Куртка', 'Брюки', 'Шорты', 'Пальто']
const dialog = ref(false)
const priceDialog = ref(false)
const selectedSort = ref('popular')
const priceRange = ref([0, 1000000])
const icons = reactive({
  mdiMagnify,
  mdiClose
})
const searchOverlay = ref(null)
searchOverlay.value = undefined
const selectedTags = ref([])
const visibleCount = ref(2)

const sortOptions = [
  { label: 'Ommabop', value: 'popular' },
  { label: 'Arzonroq', value: 'cheap' },
  { label: 'Qimmatroq', value: 'expensive' },
  { label: "Yaqinda qo'shilgan", value: 'recent' }
]

// Metodlar
function applySort() {
  dialog.value = false
}
const visibleTags = computed(() => {
  return allTags.slice(0, visibleCount.value)
})

function applyPriceFilter() {
  priceDialog.value = false
}

function toggleTag(tag) {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag)
  } else {
    selectedTags.value.push(tag)

    // Har 2 ta bosilganda yangi 2 taga ruxsat beriladi
    const neededVisible = Math.ceil(selectedTags.value.length / 2) * 2
    if (neededVisible > visibleCount.value && neededVisible <= allTags.length) {
      visibleCount.value = neededVisible
    }
  }
}
function removeTag(tag) {
  selectedTags.value = selectedTags.value.filter(t => t !== tag)
}

function openSearch() {
  if (searchOverlay.value) {
    searchOverlay.value.isOpen = true
  }
}
</script>

<style scoped>
.catalogItem {
  padding: 16px;
  background-color: #fff;
}
.catalogItem-header {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  text-align: center;
}
.sort-btn {
  font-size: 14px;
  padding: 6px 16px;
  min-width: 100px;
  border-radius: 12px;
}
.product-card {
  border-radius: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;
  margin-bottom: 16px;
}
.product-card:hover {
  transform: scale(1.02);
}
.rounded-img {
  border-radius: 12px;
  object-fit: cover;
}
.chip-items {
  margin-bottom: 8px;
}
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.selected-chip {
  font-weight: bold;
}
</style>
