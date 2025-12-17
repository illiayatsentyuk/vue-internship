<template lang="pug">
    CAccordion
      CAccordionItem(:item-key="id")
        CAccordionHeader {{ heading }}
        CAccordionBody
          p {{ description }}
          div.project-heading-links
            RouterLink(:to="`/projects/${id}`" class="project-heading-link") View Project
            RouterLink(:to="`/projects/${id}/edit`" class="project-heading-link") Edit Project
            RouterLink(:to="`/projects/${id}/delete`" class="project-heading-link") Delete Project
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
.project-heading-links {
  display: flex;
  gap: 12px;
  margin-top: 12px;
  margin-right: 8px;
  flex-wrap: wrap;
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

  p {
    margin: 0;
    color: #4b5563;
  }
}
.project {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  padding: 18px 20px;
  width: 100%;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  border: 1px solid #e5e7eb;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.1);
    border-color: #d1d5db;
  }

  &.urgent {
    border-left: 4px solid #ef4444;
  }

  &.inprogress {
    border-left: 4px solid #eab308;
  }
}

.project-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;

  h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: 0.01em;
    color: #111827;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    font-weight: 500;
    font-size: 13px;
    line-height: 1;
    padding: 6px 10px;
    border-radius: 9999px;
    border: 1px solid #e5e7eb;
    color: #6b7280;
    background: #f9fafb;
    white-space: nowrap;

    &.urgent {
      color: #b91c1c;
      background: #fee2e2;
      border-color: #fecaca;
    }

    &.inprogress {
      color: #92400e;
      background: #fef3c7;
      border-color: #fde68a;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;

    h1 {
      width: 100%;
    }
  }
}

.project-heading-link {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 14px;
  margin-top: 12px;
  margin-right: 8px;
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

.project-time {
  display: flex;
  align-items: center;
  color: #6b7280;
  gap: 4px;
  font-size: 13px;
}

.project-progress {
  margin: 12px 0;
  height: 8px;
  width: 100%;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  background: #f3f4f6;
}

.project-progress-bar {
  height: 100%;
  width: 67%;
  transition: width 0.3s ease;
  border-radius: 9999px;

  &.urgent {
    background-color: #ef4444;
  }

  &.inprogress {
    background-color: #eab308;
  }
}
</style>
