<template lang="pug">
  .projects
    h1 Active Projects
    .dashboard-active-projects
      DashboardActiveProject(v-for="project in projects" :key="project.id" :activeProject="project")
</template>
<script setup lang="ts">
import type { DashboardActiveProject as DashboardActiveProjectType } from '@/types'
import DashboardActiveProject from './DashboardActiveProject.vue'
const projects: DashboardActiveProjectType[] = [
  {
    id: 1,
    type: 'ontrack',
    description: 'Upgrading backend infrastructure for better performance',
    heading: 'Backend Infrastructure',
    procent: 60,
    timeToEnd: 'Due Apr 15, 2025',
  },
  {
    id: 2,
    type: 'inprogress',
    description: 'Redesigning the mobile app interface for better user experience',
    heading: 'Mobile App Redesign',
    procent: 75,
    timeToEnd: 'Due Mar 25, 2025',
  },
  {
    id: 3,
    type: 'review',
    description: 'Creating a new analytics dashboard for clients',
    heading: 'Analytics Dashboard',
    procent: 90,
    timeToEnd: 'Due Mar 30, 2025',
  },
]
</script>
<style lang="scss" scoped>
.projects {
  width: 100%;
  padding: 0 32px;
  h1 {
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 18px;
    letter-spacing: 0%;
    margin: 35px 0 20px 0;
  }
}

.dashboard-active-projects {
  width: 100%;
  display: flex;
  gap: 24px;
}
</style>
