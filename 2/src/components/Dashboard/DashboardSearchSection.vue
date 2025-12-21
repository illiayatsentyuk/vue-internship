<template lang="pug">
  .dashboard-search-section
    .dashboard-search-section__input
      img.dashboard-search-section__input-icon(src="@/assets/dashboard/search-icon.svg" alt="search-icon")
      input.dashboard-search-section__input-field(placeholder="Search tasks and projects...")
    ul.dashboard-search-section__dropdowns
      DashboardSearchDropdown(v-for="dropdown in dropdownContent" :key="dropdown.id" :dropdown="dropdown")
</template>
<script setup lang="ts">
import DashboardSearchDropdown from '@/components/Dashboard/DashboardSearchDropdown.vue'
const dropdownContent = [
  {
    id: 1,
    content: 'Priority',
  },
  {
    id: 2,
    content: 'Status',
  },
  {
    id: 3,
    content: 'Date',
  },
]
</script>
<style lang="scss" scoped>
.dashboard-search-section {
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.dashboard-search-section__input {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 14px;
  border: 1px solid #e5e7eb;
  gap: 12px;
  background: #ffffff;
  border-radius: 8px;
}

.dashboard-search-section__input-field {
  border: none;
  border-radius: 8px;
  color: #adaebc;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  vertical-align: middle;
  width: 100%;

  &:focus {
    outline: none;
  }
}

.dashboard-search-section__dropdowns {
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
