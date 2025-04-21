<template>
  <div class="pa-4 pb-16">
    <div v-if="cartItems.length === 0" class="text-center mt-10">
      <v-img src="../assets/empty.png" max-width="200" class="mx-auto" contain />
      <h3 class="text-h6 font-weight-bold mt-4">Savatda hozircha mahsulot yo'q</h3>
      <p class="text-grey mt-2">
        Bosh sahifadagi mahsulotlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping
      </p>
    </div>

    <div v-else>
      <div class="d-flex justify-space-between align-center mb-4">
        <h3 class="text-h6 font-weight-bold mb-4">Savat</h3>
        <v-btn
          icon
          variant="text"
          size="x-medium"
          color="error"
          class="position-absolute top-0 right-0 mt-4 mr-4"
          @click="openConfirm('all')"
        >
          <v-icon :icon="icons.mdiTrashCan" />
        </v-btn>
      </div>

      <v-card
        v-for="(item, index) in cartItems"
        :key="index"
        class="mb-4 pa-3"
        flat
        position="relative"
      >
        <div class="d-flex align-center justify-space-between">
          <div class="d-flex align-center">
            <v-img :src="item.image" width="64" height="64" class="rounded me-3" />
            <div>
              <div class="text-subtitle-2 font-weight-medium">{{ item.title }}</div>
              <div class="text-grey text-caption">{{ item.variant }}</div>
              <div class="font-weight-bold">{{ item.price }} so'm</div>
            </div>
          </div>
          <div class="d-flex align-center">
            <v-btn icon variant="outlined" size="x-small" color="error" @click="decreaseQty(index)">
              <v-icon :icon="icons.mdiMinus" />
            </v-btn>
            <span class="mx-2">{{ item.quantity }}</span>
            <v-btn
              icon
              variant="outlined"
              size="x-small"
              color="success"
              @click="increaseQty(index)"
            >
              <v-icon :icon="icons.mdiPlus" />
            </v-btn>
          </div>
        </div>
      </v-card>

      <PopularProducts class="mt-6" />

      <v-card class="pa-3 w-full d-flex justify-space-between align-center cart-post" elevation="6">
        <div>
          <div class="font-weight-bold text-h6">{{ totalPrice }} so'm</div>
          <div class="text-caption text-grey">{{ totalCount }} mahsulotlar</div>
        </div>
        <v-btn color="primary" class="rounded-lg px-2"> Rasmiylashtirish </v-btn>
      </v-card>
    </div>

    <!-- Delete confirmation dialog -->
    <v-dialog v-model="confirmDialog" width="400">
      <v-card>
        <v-card-title class="text-h6">
          {{
            itemToDelete === 'all'
              ? 'Savatdagi barcha mahsulotlarni o‘chirishni xohlaysizmi?'
              : 'Mahsulotni o‘chirishni xohlaysizmi?'
          }}
        </v-card-title>
        <v-card-actions class="justify-end">
          <v-btn variant="text" @click="confirmDialog = false">Bekor qilish</v-btn>
          <v-btn color="error" @click="confirmDelete">O‘chirish</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import PopularProducts from '../components/PopularProducts.vue'
import { mdiPlus, mdiMinus, mdiTrashCan } from '@mdi/js'

const icons = reactive({
  mdiPlus,
  mdiMinus,
  mdiTrashCan
})

// Savatcha mahsulotlari
const cartItems = ref([
  {
    title: 'Skullcandy Hesh Evo',
    variant: 'Oq',
    price: 832000,
    quantity: 1,
    image: 'https://i.ibb.co/xLhLt1v/headphones.jpg'
  },
  {
    title: 'ZIPPY Джинсы',
    variant: 'Синий / 11-12y',
    price: 209250,
    quantity: 1,
    image: 'https://i.ibb.co/ZBJd2P5/jeans.jpg'
  }
])

const totalCount = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0))

const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

const confirmDialog = ref(false)
const itemToDelete = ref(null) // number yoki 'all'

const openConfirm = target => {
  itemToDelete.value = target
  confirmDialog.value = true
}

const confirmDelete = () => {
  if (itemToDelete.value === 'all') {
    cartItems.value = []
  } else if (typeof itemToDelete.value === 'number') {
    cartItems.value.splice(itemToDelete.value, 1)
  }

  confirmDialog.value = false
  itemToDelete.value = null
}

const increaseQty = index => {
  cartItems.value[index].quantity++
}

const decreaseQty = index => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--
  } else {
    openConfirm(index)
  }
}
</script>

<style scoped>
.text-grey {
  color: #9e9e9e;
}
.cart-post {
  position: fixed;
  bottom: 55px;
  left: 16px;
  right: 16px;
  z-index: 10;
  border-radius: 12px;
}
</style>
