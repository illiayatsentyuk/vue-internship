<template lang="pug">
    CAccordion
      CAccordionItem(:item-key="id")
        CAccordionHeader {{ heading }}
        CAccordionBody
          p.projects-component__description {{ description }}
          div.projects-component__links
            RouterLink.projects-component__link(:to="`/projects/${id}`") View Project
            RouterLink.projects-component__link(:to="`/projects/${id}/edit`") Edit Project
            RouterLink.projects-component__link(:to="`/projects/${id}/delete`") Delete Project
</template>
<script setup lang="ts">
import type { Project as ProjectType } from '@/types'
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/vue'
import { RouterLink } from 'vue-router'
const props = defineProps<{
  project: ProjectType
}>()
const { heading, description, id } = props.project
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

:deep(.accordion-item) {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
}

:deep(.accordion-button) {
  font-weight: 600;
  font-size: 16px;
  color: #111827;
  background-color: #f9fafb;
  padding: 14px 20px;

  &:not(.collapsed) {
    color: #1d4ed8;
    background-color: #eef2ff;
    box-shadow: inset 0 -1px 0 #e5e7eb;
  }
}

:deep(.accordion-body) {
  padding: 16px 20px 18px;
  background-color: #ffffff;
}
</style>
