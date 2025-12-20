<template lang="pug">
  .dashboard-active-projects-section
    h1.dashboard-active-projects-section__title Active Projects
    .dashboard-active-projects-section__list
      DashboardActiveProject(v-if="content.length > 0" v-for="project in content" :key="project.id" :activeProject="project")
      .dashboard-active-projects-section__list-empty(v-else)
        p.dashboard-active-projects-section__list-empty-text No active projects
</template>
<script setup lang="ts">
import DashboardActiveProject from '@/components/Dashboard/DashboardActiveProject.vue'
import { useProjectsStore } from '@/stores/projects'
import { computed } from 'vue'

const projectsStore = useProjectsStore()
const projects = projectsStore.projects

const content = computed(() => {
  return projects.slice(0, 3).map((project) => ({
    id: project.id,
    type: project.type,
    description: project.description,
    heading: project.heading,
    procent: project.procent,
    timeToEnd: project.timeToEnd,
  }))
})
</script>
<style lang="scss" scoped>
.dashboard-active-projects-section__list-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.dashboard-active-projects-section__list-empty-text {
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 16px;
  color: #6b7280;
}

.dashboard-active-projects-section {
  width: 100%;
  padding: 0 32px;
}

.dashboard-active-projects-section__title {
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0%;
  margin: 35px 0 20px 0;
}

.dashboard-active-projects-section__list {
  width: 100%;
  display: flex;
  gap: 24px;
}
</style>
