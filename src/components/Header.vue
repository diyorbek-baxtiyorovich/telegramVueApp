<template>
  <div class="header">
    <div class="title-map" @click="dialogOpen = true">
      <v-icon :icon="icons.mdiMapMarker" class="left-icon" />
      <span class="title-text">Iltimos, manzilingizni kiriting</span>
      <v-icon :icon="icons.mdiMapMarkerAlert" class="right-icon" />
    </div>
  </div>

  <v-container fluid>
    <!--    <MapDialog v-model="dialogOpen" @save="onAddressSelected" />-->
    <div v-if="selectedAddress" class="selected-address mt-4 px-4 pb-2">
      <strong>Tanlangan manzil:</strong>
      <p>{{ selectedAddress.addressText }}</p>
    </div>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { mdiMapMarker, mdiMapMarkerAlert } from '@mdi/js'
// import MapDialog from '../pages/AddressSelector.vue'

const icons = reactive({
  mdiMapMarker,
  mdiMapMarkerAlert
})

const dialogOpen = ref(false)
const selectedAddress = ref(null)

const onAddressSelected = data => {
  selectedAddress.value = data
  console.log('Tanlangan manzil:', data)
}
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #f9f9f9;
  border-top: 4px solid #0a4d78;
}

.title-map {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
}

.title-text {
  font-size: 18px;
  font-weight: 500;
  color: #000;
}

.left-icon {
  color: #0a4d78;
}

.right-icon {
  color: #f9ae36;
}

.selected-address {
  background: #f1f1f1;
  border-left: 4px solid #0a4d78;
  border-radius: 4px;
}
</style>
