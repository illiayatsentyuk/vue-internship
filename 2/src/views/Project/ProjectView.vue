<template lang="pug">
  .project-view
    .project-view__header
      h1 {{ project.heading }}
      p.project-view__subtitle Project details overview

    .project-view__content
      .project-view__card
        .project-view__section
          h2 Overview
          p {{ project.description }}

        .project-view__grid
          .project-view__section
            h3 Meta
            p
              strong Created at:
              |  {{ ' ' + project.createdAt }}
            p
              strong Updated at:
              |  {{ ' ' + project.updatedAt }}

          .project-view__section
            h3 Contributors
            p {{ project.contributors.map((contributor) => contributor.name).join(', ') }}

        .project-view__section
          h3 Tasks
          p {{ project.tasks.length ? project.tasks.map((task) => task.heading).join(', ') : 'No tasks yet.' }}
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

    h1 {
      font-size: 28px;
      font-weight: 600;
      color: #111827;
      letter-spacing: -0.02em;
    }
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
    h2,
    h3 {
      margin: 0 0 8px;
      font-weight: 600;
      color: #111827;
    }

    p {
      margin: 0 0 4px;
      font-size: 14px;
      color: #4b5563;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  @media (max-width: 768px) {
    padding: 20px 16px;

    &__card {
      padding: 20px 18px;
    }

    &__grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>