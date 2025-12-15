<template lang="pug">
    .tab-content.active
        .dashboard-heading
            .dashboard-heading-text
                h1 Dashboard
                p Welcome back, John!
            .dashboard-heading-controlls
                DashboardHeadingControllsButtons(v-for="button in DASHBOARD_HEADING_CONTROLLS_BUTTONS" :key="button.id" :button="button")
        DashboardSearchSection
        DashboardRecentTasks
        DashboardActiveProjects
</template>

<script setup lang="ts">
import DashboardHeadingControllsButtons from '../components/DashboardHeadingControllsButtons.vue'
import DashboardSearchSection from '../components/DashboardSearchSection.vue'
import DashboardRecentTasks from '../components/DashboardRecentTasks.vue'
import DashboardActiveProjects from '../components/DashboardActiveProjects.vue'
import addNewTaskIcon from '@/assets/dashboard/add-new-task-icon.svg'
import addNewProjectIcon from '@/assets/dashboard/add-new-project-icon.svg'
const DASHBOARD_HEADING_CONTROLLS_BUTTONS = [
  {
    id: 1,
    imagePath: addNewTaskIcon,
    content: 'New Task',
  },
  {
    id: 2,
    imagePath: addNewProjectIcon,
    content: 'New Project',
  },
]
</script>

<style lang="scss" scoped>
.tab-content {
  display: none;
  width: 100%;
  background: #f9fafb;
  &.active {
    display: block;
  }
}
.dashboard-heading {
  display: flex;
  justify-content: space-between;
  padding: 32px;
  p {
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0%;
    color: #6b7280;
    margin-top: 5px;
  }
  h1 {
    font-weight: 700;
    font-style: Bold;
    font-size: 24px;
    line-height: 24px;
  }
}
.dashboard-heading-controlls {
  display: flex;
  gap: 12px;
  align-items: center;
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 11px 16px 11px 16px;
    border-radius: 8px;
    border: 1px solid #4f46e5;
    &:hover {
        filter: brightness(0.95);
    }
    &:first-child {
        border: 1px solid #e5e7eb;
        background: #ffffff;
    }
    p {
        font-weight: 400;
        font-style: Regular;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0%;
        text-align: center;
    }
  }
}
</style>
