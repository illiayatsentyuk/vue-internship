<template lang="pug">
  .projects-view
    .projects-view__header
      h1.projects-view__header-title Projects
      RouterLink.projects-view__header-button(:to="'/projects/create'") Create project
    ProjectsComponent(v-for="project in projects" :key="project.id" :project="project")
</template>

<script setup lang="ts">
import ProjectsComponent from '@/components/Project/ProjectsComponent.vue'
import { useProjectsStore } from '@/stores/projects'
const projectsStore = useProjectsStore()
const projects = projectsStore.projects
console.log(projects)
</script>

<style lang="scss" scoped>
.projects-view {
  width: 100%;
  min-height: 100vh;
  padding: 32px 96px;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.projects-view__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.projects-view__header-title {
  font-size: 28px;
  font-weight: 600;
  color: #111827;
  letter-spacing: -0.02em;
  margin: 0;
}

.projects-view__header-button {
  text-decoration: none;
  padding: 9px 18px;
  border-radius: 9999px;
  border: none;
  background: linear-gradient(90deg, #4f46e5, #6366f1 70%);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: 0 4px 8px rgba(99, 102, 241, 0.08);
  transition:
    transform 0.09s cubic-bezier(.53,.02,.63,1.52),
    box-shadow 0.13s cubic-bezier(.25,.45,.3,1.45),
    opacity 0.16s;

  &:hover {
    transform: translateY(-1px) scale(1.03);
    box-shadow: 0 12px 30px rgba(79, 70, 229, 0.22);
    opacity: 0.97;
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: 0 2px 8px rgba(79, 70, 229, 0.18);
  }
}
</style>
