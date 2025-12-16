<template lang="pug">
    .create-project-view
        h1 Create Project
        CreateProjectForm(@createProject="handleCreateProject")
</template>

<script setup lang="ts">
import CreateProjectForm from '../components/CreateProjectForm.vue'
import { useProjectsStore } from '@/stores/projects.store'
import type { CreateProjectForm as CreateProjectFormType } from '@/types'
import { useRouter } from 'vue-router'
const router = useRouter()
const projectsStore = useProjectsStore()
const handleCreateProject = (project: CreateProjectFormType) => {
    projectsStore.addProject(project)
    router.push('/projects')
}
</script>
<style lang="scss" scoped>
.create-project-view {
    width: 100%;
    height: 100vh;
    padding: 32px 96px;
    background: #F9FAFB;
}
</style>