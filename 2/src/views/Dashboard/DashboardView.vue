<template lang="pug">
    .dashboard-view.dashboard-view--active
        .dashboard-view__heading
            .dashboard-view__heading-text
                h1.dashboard-view__heading-title Dashboard
                p.dashboard-view__heading-subtitle Welcome back, John!
            .dashboard-view__heading-controlls
                DashboardHeadingControllsButtons(v-for="(button, index) in DASHBOARD_HEADING_CONTROLLS_BUTTONS" :key="button.id" :button="button")
        DashboardSearchSection
        DashboardRecentTasks
        DashboardActiveProjects
</template>

<script setup lang="ts">
import DashboardHeadingControllsButtons from '@/components/Dashboard/DashboardHeadingControllsButtons.vue'
import DashboardSearchSection from '@/components/Dashboard/DashboardSearchSection.vue'
import DashboardRecentTasks from '@/components/Dashboard/DashboardRecentTasks.vue'
import DashboardActiveProjects from '@/components/Dashboard/DashboardActiveProjects.vue'
import addNewTaskIcon from '@/assets/dashboard/add-new-task-icon.svg'
import addNewProjectIcon from '@/assets/dashboard/add-new-project-icon.svg'

const DASHBOARD_HEADING_CONTROLLS_BUTTONS = [
  {
    id: 1,
    imagePath: addNewTaskIcon,
    content: 'New Task',
    to: '/tasks/create',
  },
  {
    id: 2,
    imagePath: addNewTaskIcon,
    content: 'New Project',
    to: '/projects/create',
  },
]
</script>

<style lang="scss" scoped>
.dashboard-view {
  display: none;
  width: 100%;
  background: #f9fafb;
}

.dashboard-view--active {
  display: block;
}

.dashboard-view__heading {
  display: flex;
  justify-content: space-between;
  padding: 32px;
}

.dashboard-view__heading-title {
  font-weight: 700;
  font-style: Bold;
  font-size: 24px;
  line-height: 24px;
}

.dashboard-view__heading-subtitle {
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0%;
  color: #6b7280;
  margin-top: 5px;
}

.dashboard-view__heading-controlls {
  display: flex;
  gap: 12px;
  align-items: center;
}
</style>
