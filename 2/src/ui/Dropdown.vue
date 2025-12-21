<template lang="pug">
    .dropdown-wrapper
      //- Trigger
      .dropdown-trigger(@click="toggleDropdown")
        slot(name="trigger" :isOpen="open") Toggle Dropdown

      //- Dropdown Menu
      .dropdown-menu(v-show="open" @click.stop)
        slot(name="content")
          .dropdown-default-content Default content
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const open = ref(false)

const toggleDropdown = () => {
  open.value = !open.value
}

const close = () => {
  open.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.dropdown-wrapper')) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

defineExpose({
  close,
  isOpen: open,
})
</script>

<style lang="scss" scoped>
.dropdown-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.dropdown-trigger {
  width: 100%;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  min-width: 100%;
  width: 100%;
  display: block;
  visibility: visible;
}

.dropdown-default-content {
  padding: 8px;
}
</style>
