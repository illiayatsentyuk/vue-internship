<template lang="pug">
    AccordionElement(:items="[props.project]" @deleteProject="deleteProject")
</template>
<script setup lang="ts">
import { useProjectsStore } from '@/stores/projects'
import type { Project as ProjectType } from '@/types'
import AccordionElement from '@/ui/Accordion/AccordionElement.vue'

const projectsStore = useProjectsStore()
const props = defineProps<{
  project: ProjectType
}>()
const deleteProject = (id: number) => {
  projectsStore.deleteProject(id)
}
</script>

<style lang="scss" scoped>
.projects-component__description {
  margin: 0;
  color: #4b5563;
}

.projects-component__links {
  display: flex;
  gap: 12px;
  margin-top: 12px;
  margin-right: 8px;
  flex-wrap: wrap;
}

.projects-component__link {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 9999px;
  border: 1px solid transparent;
  background-color: #2563eb;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.05s ease;

  &:hover {
    background-color: #1d4ed8;
    box-shadow: 0 4px 10px rgba(37, 99, 235, 0.35);
    transform: translateY(-1px);
  }

  &:active {
    background-color: #1e40af;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.3);
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid #93c5fd;
    outline-offset: 2px;
  }
}


</style>
