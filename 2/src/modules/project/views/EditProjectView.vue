<template lang="pug">
    .create-project-view
        h1 Edit Project
        EditProjectForm(:project="project" @editProject="handleEditProject")
</template>

<script setup lang="ts">
import EditProjectForm from '../components/EditProjectForm.vue'
import { useProjectsStore } from '@/stores/projects.store'
import type { Project } from '@/types'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()
const projectsStore = useProjectsStore()
const project = projectsStore.getProjectById(Number(route.params.id))
if (!project) {
    router.push('/projects')
}
const handleEditProject = (project: Omit<Project, 'id'>) => {
    projectsStore.editProject({ ...project, contributors: project.contributors || [] }, Number(route.params.id))
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