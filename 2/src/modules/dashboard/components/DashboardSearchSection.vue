<template lang="pug">
  .dasboard-serch-section
    .dashboard-search-input
      img(src="@/assets/dashboard/search-icon.svg" alt="search-icon")
      input(placeholder="Search tasks and projects...")
    ul.dashboard-search-dropdowns
      DashboardSearchDropdown(v-for="dropdown in dropdownContent" :key="dropdown.id" :dropdown="dropdown")
</template>
<script setup lang="ts">
import DashboardSearchDropdown from './DashboardSearchDropdown.vue'
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
.dasboard-serch-section {
  padding: 0 32px 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
.dashboard-search-input {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 14px;
  border: 1px solid #e5e7eb;
  gap: 12px;
  background: #ffffff;
  border-radius: 8px;
  input {
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
}


.dashboard-search-dropdowns {
  display: flex;
  gap: 16px;
}
</style>
