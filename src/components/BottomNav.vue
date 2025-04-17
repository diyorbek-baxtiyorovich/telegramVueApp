<template>
  <v-bottom-navigation grow>
    <v-btn to="/" value="home">
      <v-icon :icon="icons.mdiHome" :size="24" color="primary" />
      <span>Menu</span>
    </v-btn>
    <v-btn to="/catalog" value="catalog">
      <v-icon :icon="icons.mdiMagnify" />
      <span>Katalog</span>
    </v-btn>
    <v-btn to="/cart" value="cart">
      <v-icon :icon="icons.mdiCart" />
      <span>Korzinka</span>
    </v-btn>
    <v-btn to="/profile" value="profile">
      <v-icon :icon="icons.mdiAccount" />
      <span>Profil</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
import { reactive } from 'vue'
import { mdiHome, mdiMagnify, mdiCart, mdiAccount } from '@mdi/js'

const icons = reactive({
  mdiMagnify,
  mdiHome,
  mdiCart,
  mdiAccount
})
</script>
