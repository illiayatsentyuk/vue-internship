<template>
  <div class="dashboard-search-dropdown">
    <p>{{ content }}</p>
    <img src="@/assets/dashboard/arrow.svg" />
  </div>
</template>
<script setup lang="ts">
import type { DashboardSearcgDropdown } from '@/types';
const props = defineProps<{
  dropdown: DashboardSearcgDropdown;
}>()
const {content} = props.dropdown;
</script>

<style scoped>
.dashboard-search-dropdown {
    border: 1px solid #E5E7EB;
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;
    gap: 12px
}

</style>