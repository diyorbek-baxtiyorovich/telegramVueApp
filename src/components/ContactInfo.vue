<template>
  <div class="bg-box mt-4 pa-4">
    <div class="text-subtitle-1 font-weight-medium mb-2">Biz ijtimoiy tarmoqlardamiz</div>
    <div class="d-flex align-center gap-2 mb-3">
      <v-btn icon size="40" href="https://t.me/your_channel" target="_blank">
        <v-icon :icon="icons.mdiAlphaVCircle" />
      </v-btn>
      <v-btn icon size="40" href="https://instagram.com/your_profile" target="_blank">
        <v-icon :icon="icons.mdiInstagram" />
      </v-btn>
      <v-btn icon size="40" href="https://youtube.com/your_channel" target="_blank">
        <v-icon :icon="icons.mdiYoutubeTv" />
      </v-btn>
    </div>

    <div class="text-body-2 mb-1">Aloqa telefon raqami:</div>
    <a href="tel:+998771149998" class="text-blue font-weight-bold">+998 99 122 51 03</a>

    <v-divider class="my-3"></v-divider>

    <div class="text-caption text-center">Xizmat ko'rsatuvchi: Kenzo MCHJ. STIR: 309991999</div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { mdiInstagram, mdiYoutubeTv, mdiAlphaVCircle } from '@mdi/js'

const icons = reactive({
  mdiInstagram,
  mdiYoutubeTv,
  mdiAlphaVCircle
})
</script>

<style scoped>
.bg-box {
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
}
.gap-2 > * + * {
  margin-left: 12px;
}
.text-blue {
  color: #1e88e5;
}
</style>
