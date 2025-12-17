<template lang="pug">
  .projects-view
    h1 Projects
    ProjectsComponent(v-for="project in projects" :key="project.id" :project="project")
</template>

<script setup lang="ts">
import ProjectsComponent from '../components/ProjectsComponent.vue'
import { useProjectsStore } from '@/stores/projects.store'
const projectsStore = useProjectsStore()
const projects = projectsStore.projects
console.log(projects)
</script>

<style lang="scss" scoped>
.projects-view {
  width: 100%;
  height: 100vh;
  padding:0 32px;
  h1 {
    margin-bottom:20px;
  }
}
</style>
