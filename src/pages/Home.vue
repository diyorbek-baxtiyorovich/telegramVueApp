<template>
  <div class="bg-color">
    <Header />
    <SearchBar />
    <div class="pt-4">
      <div class="bg-box">
        <div class="d-flex justify-space-between align-center mb-2">
          <h2 class="text-h6 font-weight-bold">Katalog</h2>
          <v-btn
            variant="text"
            @click="$router.push('/catalog')"
            :append-icon="icons.mdiChevronRight"
            class="text-primary"
          >
            Barcha toifalar
          </v-btn>
        </div>
        <CategoryList />
      </div>
      <NewArrivals />
      <PopularProducts />
      <ContactInfo />
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryList from '../components/Caregory/CategoryList.vue'
import { reactive } from 'vue'
import { mdiMapMarker, mdiChevronRight } from '@mdi/js'
import NewArrivals from '../components/NewArrivals.vue'
import PopularProducts from '../components/PopularProducts.vue'
import ContactInfo from '../components/ContactInfo.vue'

const icons = reactive({
  mdiMapMarker,
  mdiChevronRight
})

// const loading = ref(false)
</script>
<style>
.bg-color {
  background-color: #f6f6f6;
}
.bg-box {
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.text-primary {
  color: black;
  background-color: #f6f6f6;
  border-radius: 10px;
}
</style>
