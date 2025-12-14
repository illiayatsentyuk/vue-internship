<template>
  <div class="dasboard-serch-section">
    <div class="dashboard-search-input">
      <img src="@/assets/dashboard/search-icon.svg" />
      <input placeholder="Search tasks and projects...">
    </div>
    <ul class="dashboard-search-dropdowns">
      <DashboardSearchDropdown v-for="dropdown in dropdownContent" :key="dropdown.id" :dropdown="dropdown" />
    </ul>
  </div>
</template>
<script setup lang="ts">
import DashboardSearchDropdown from "./DashboardSearchDropdown.vue";
const dropdownContent = [
  {
    id: 1,
    content: "Priority"
  },
  {
    id: 2,
    content: "Status"
  },
  {
    id: 3,
    content: "Date"
  }
]
</script>
<style scoped>
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
    border: 1px solid #E5E7EB;
    gap: 12px;
    background: #ffffff;
    border-radius: 8px;
}

.dashboard-search-input>input {
    border: none;
    border-radius: 8px;
    color: #ADAEBC;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
    vertical-align: middle;
    width: 100%;
}

.dashboard-search-input>input:focus {
    outline: none;
}
.dashboard-search-dropdowns {
    display: flex;
    gap: 16px;
}
</style>