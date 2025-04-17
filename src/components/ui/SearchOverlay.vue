<template>
  <v-dialog v-model="isOpen" fullscreen transition="dialog-bottom-transition">
    <v-card class="pa-4">
      <!-- Top bar -->
      <div class="d-flex justify-between align-center mb-4">
        <v-text-field
          v-model="searchQuery"
          placeholder="Mahsulotlarni qidirish"
          variant="outlined"
          density="comfortable"
          :prepend-inner-icon="icons.mdiMagnify"
          class="flex-grow-1 mr-3"
          rounded="lg"
        />
        <v-btn variant="text" @click="closeSearch" class="text-primary mb-6">Ortga</v-btn>
      </div>

      <!-- Recent searches -->
      <div>
        <div class="d-flex justify-space-between align-center mb-2" v-if="recentSearches.length">
          <h3 class="text-subtitle-1 font-weight-medium">Siz yaqinda qidirgansiz</h3>
          <v-btn variant="text" class="text-grey" @click="clearRecent">Tozalash</v-btn>
        </div>

        <v-list class="pt-0">
          <v-list-item v-for="(item, index) in recentSearches" :key="index" class="px-0">
            <div class="d-flex justify-space-between align-center">
              <div>
                <v-icon>
                  <v-icon :icon="icons.mdiClockOutline" size="18" color="grey" />
                </v-icon>
              </div>
              <div>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </div>
              <div>
                <v-icon :icon="icons.mdiClose" size="16" color="grey" @click="removeItem(index)" />
              </div>
            </div>
          </v-list-item>
        </v-list>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { mdiMagnify, mdiClockOutline, mdiClose } from '@mdi/js'

const isOpen = ref(false)
const searchQuery = ref('')
const recentSearches = ref(['search', 'search2', 'search3'])

const icons = {
  mdiMagnify,
  mdiClockOutline,
  mdiClose
}

function closeSearch() {
  isOpen.value = false
}

function clearRecent() {
  recentSearches.value = []
}

function removeItem(index) {
  recentSearches.value.splice(index, 1)
}

defineExpose({
  isOpen
})
</script>

<style scoped>
.v-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
