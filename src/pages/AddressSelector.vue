<template>
  <div>
    <h1>Addres</h1>
  </div>
</template>
<!--<script setup>-->
<!--import 'leaflet/dist/leaflet.css'-->
<!--import { ref, computed } from 'vue'-->

<!--const props = defineProps({-->
<!--  modelValue: Boolean-->
<!--})-->
<!--const emit = defineEmits(['update:modelValue', 'save'])-->

<!--const dialogModel = computed({-->
<!--  get: () => props.modelValue,-->
<!--  set: val => emit('update:modelValue', val)-->
<!--})-->

<!--const coords = ref([41.311081, 69.240562])-->
<!--const zoom = ref(12)-->
<!--const addressText = ref(`Lat: ${coords.value[0]}, Lng: ${coords.value[1]}`)-->

<!--const onMapClick = event => {-->
<!--  const { lat, lng } = event.latlng-->
<!--  coords.value = [lat, lng]-->
<!--  addressText.value = `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`-->
<!--}-->

<!--const handleSave = () => {-->
<!--  emit('save', {-->
<!--    coords: coords.value,-->
<!--    addressText: addressText.value-->
<!--  })-->
<!--  dialogModel.value = false-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <v-dialog v-model="dialogModel" persistent max-width="800">-->
<!--    <v-card>-->
<!--      <v-card-title class="text-h6 font-weight-bold">Manzilni tanlang</v-card-title>-->
<!--      <v-card-text style="height: 400px">-->
<!--        <LMap :zoom="zoom" :center="coords" style="height: 100%; width: 100%" @click="onMapClick">-->
<!--          <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />-->
<!--          <LMarker :lat-lng="coords" />-->
<!--        </LMap>-->
<!--      </v-card-text>-->
<!--      <v-card-text>-->
<!--        <v-text-field-->
<!--          v-model="addressText"-->
<!--          label="Tanlangan koordinatalar"-->
<!--          variant="outlined"-->
<!--          readonly-->
<!--        />-->
<!--      </v-card-text>-->
<!--      <v-card-actions>-->
<!--        <v-spacer />-->
<!--        <v-btn color="primary" @click="handleSave">Saqlash</v-btn>-->
<!--      </v-card-actions>-->
<!--    </v-card>-->
<!--  </v-dialog>-->
<!--</template>-->

<!--<style>-->
<!--#map {-->
<!--  height: 400px;-->
<!--}-->
<!--</style>-->
