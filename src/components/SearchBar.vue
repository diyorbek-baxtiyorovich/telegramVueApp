<template>
  <div class="search-container">
    <div class="top-bar">
      <div class="logo">Kenzo<span class="blue">bot</span><span class="sparkle">✧</span></div>

      <v-menu>
        <template #activator="{ props }">
          <v-btn icon class="lang-btn" elevation="0" v-bind="props">
            <v-img
              :src="selectedLanguage.flag"
              :alt="selectedLanguage.label"
              width="24"
              height="16"
            />
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="lang in languages" :key="lang.code" @click="selectLanguage(lang)">
            <v-avatar>
              <v-img :src="lang.flag" />
            </v-avatar>
            <v-list-item-title>{{ lang.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-text-field
      placeholder="Mahsulotlarni qidirish"
      :prepend-inner-icon="icons.mdiMagnify"
      variant="solo-filled"
      rounded="lg"
      hide-details
      class="search-input"
      readonly
      @click="openSearch"
    />
    <SearchOverlay ref="searchOverlay" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { mdiMagnify } from '@mdi/js'
import SearchOverlay from './ui/SearchOverlay.vue'

const icons = reactive({
  mdiMagnify
})
const searchOverlay = ref(null)
searchOverlay.value = undefined

const languages = [
  { code: 'uz', label: 'Oʻzbekcha', flag: 'https://flagcdn.com/w40/uz.png' },
  { code: 'ru', label: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' }
]

const selectedLanguage = ref(languages[0])

function selectLanguage(lang) {
  selectedLanguage.value = lang
  // i18n global locale update (if needed):
  // i18n.global.locale = lang.code
}
function openSearch() {
  if (searchOverlay.value) {
    searchOverlay.value.isOpen = true
  }
}
</script>

<style scoped>
.search-container {
  padding: 10px 20px;
  width: 100%;
  background-color: #fff;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.logo {
  font-size: 20px;
  font-weight: 600;
  color: #1e1e1e;
}

.logo .blue {
  color: #3b82f6;
}

.sparkle {
  font-size: 14px;
  color: #3b82f6;
  margin-left: 2px;
  animation: sparkle 1.5s infinite ease-in-out;
}

.search-input {
  background-color: #f5f6f8;
  font-size: 14px;
  cursor: pointer;
}
@keyframes sparkle {
  0% {
    opacity: 0.3;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0.3;
    transform: scale(0.9);
  }
}

.lang-btn {
  background-color: #f3f3f3;
  border-radius: 12px;
  padding: 6px;
}

.search-input {
  background-color: #f5f6f8;
  font-size: 14px;
}
</style>
