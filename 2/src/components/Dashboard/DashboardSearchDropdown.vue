<template lang="pug">
  .dashboard-search-dropdown
    p.dashboard-search-dropdown__content {{ content }}
    img.dashboard-search-dropdown__arrow(src="@/assets/dashboard/arrow.svg" alt="arrow")
</template>
<script setup lang="ts">
import type { DashboardSearcgDropdown } from '@/types'
const props = defineProps<{
  dropdown: DashboardSearcgDropdown
}>()
const { content } = props.dropdown
</script>

<style lang="scss" scoped>
.dashboard-search-dropdown {
  border: 1px solid #e5e7eb;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  gap: 12px;
}

.dashboard-search-dropdown__content {
  margin: 0;
}

.dashboard-search-dropdown__arrow {
  // Arrow icon styles
}
</style>
