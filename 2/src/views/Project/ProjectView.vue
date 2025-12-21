<template lang="pug">
  .project-view
    .project-view__header
      h1.project-view__title {{ project.heading }}
      p.project-view__subtitle Project details overview

    .project-view__content
      .project-view__card
        .project-view__section
          h2.project-view__section-title Overview
          p.project-view__section-text {{ project.description }}

        .project-view__grid
          .project-view__section
            h3.project-view__section-title Meta
            p.project-view__section-text
              strong Created at:
              |  {{ ' ' + project.createdAt }}
            p.project-view__section-text
              strong Updated at:
              |  {{ ' ' + project.updatedAt }}

          .project-view__section
            h3.project-view__section-title Contributors
            p.project-view__section-text {{ project.contributors.map((contributor) => contributor.firstName + ' ' + contributor.lastName).join(', ') }}

        .project-view__section
          h3.project-view__section-title Tasks
          p.project-view__section-text.project-view__section-text--clickable(v-if="project.tasks.length > 0" v-for="task in project.tasks" :key="task.id" @click="$router.push(`/tasks/${task.id}`)") {{ task.heading }}
          p.project-view__section-text(v-else) No tasks yet.
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useProjectsStore } from '@/stores/projects'
const projectsStore = useProjectsStore()
const route = useRoute()
const router = useRouter()
const projectId = route.params.id
const project = projectsStore.getProjectById(Number(projectId))
if (!project) {
  router.push('/projects')
}
</script>

<style lang="scss" scoped>
.project-view {
  width: 100%;
  min-height: 100vh;
  padding: 24px 32px;
  background: #f3f4f6;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__title {
    font-size: 28px;
    font-weight: 600;
    color: #111827;
    letter-spacing: -0.02em;
    margin: 0;
  }

  &__subtitle {
    font-size: 14px;
    color: #6b7280;
  }

  &__content {
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  &__card {
    width: 100%;
    max-width: 960px;
    padding: 24px 28px;
    border-radius: 16px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__section {
    display: flex;
    flex-direction: column;
  }

  &__section-title {
    margin: 0 0 8px;
    font-weight: 600;
    color: #111827;
  }

  &__section-text {
    margin: 0 0 4px;
    font-size: 14px;
    color: #4b5563;

    &:last-child {
      margin-bottom: 0;
    }

    &--clickable {
      cursor: pointer;

      &:hover {
        color: #111827;
      }
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
}
.project-view__section-text.project-view__section-text--clickable{
  cursor: pointer;
  &:hover {
    color: #111827;
  }
}
</style>
