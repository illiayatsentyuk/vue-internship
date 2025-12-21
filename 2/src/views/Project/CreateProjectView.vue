<template lang="pug">
    .create-project-view
        h1.create-project-view__title Create Project
        CreateProjectForm(@createProject="handleCreateProject")
</template>

<script setup lang="ts">
import CreateProjectForm from '@/components/Project/CreateProjectForm.vue'
import { useProjectsStore } from '@/stores/projects'
import type { CreateProjectForm as CreateProjectFormType } from '@/types'
import { useRouter } from 'vue-router'
const router = useRouter()
const projectsStore = useProjectsStore()
const handleCreateProject = (project: CreateProjectFormType) => {
  projectsStore.addProject({ ...project, contributors: project.contributors || [] })
  router.push('/projects')
}
</script>
<style lang="scss" scoped>
.create-project-view {
  width: 100%;
  height: 100%;
  padding: 32px 96px;
  background: #f9fafb;
}

.create-project-view__title {
  margin: 0 0 24px 0;
}
</style>
