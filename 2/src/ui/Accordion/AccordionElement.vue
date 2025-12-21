<template lang="pug">
    .accordion-element
      AccordionItem(v-for="item in items" :key="item.id")
        template(v-slot:title)
          h1.accordion-element__title {{ item.heading }}
        template(v-slot:content)
          p.accordion-element__description {{ item.description }}
          div.accordion-element__links
            RouterLink.accordion-element__link(:to="`/projects/${item.id}`") View Project
            RouterLink.accordion-element__link(:to="`/projects/${item.id}/edit`") Edit Project
            button.accordion-element__link(@click="deleteProject(item.id)") Delete Project
</template>
<script setup lang="ts">
import AccordionItem from '@/ui/Accordion/AccordionItem.vue'
import type { Project } from '@/types'

const emit = defineEmits(['deleteProject'])
const props = defineProps<{
  items: Project[]
}>()
const { items } = props
const deleteProject = (id: number) => {
  emit('deleteProject', id)
}
</script>
<style lang="scss" scoped>
.accordion-element {
  &__title {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.5;
    color: inherit;
  }

  &__description {
    margin: 0 0 1rem 0;
    font-size: 0.875rem;
    line-height: 1.5;
    color: inherit;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.75rem;
  }

  &__link {
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
      transform 0.09s cubic-bezier(0.53, 0.02, 0.63, 1.52),
      box-shadow 0.13s cubic-bezier(0.25, 0.45, 0.3, 1.45),
      opacity 0.16s;

    &:hover {
      transform: translateY(-1px) scale(1.03);
      box-shadow: 0 12px 30px rgba(79, 70, 229, 0.22);
      opacity: 0.97;
    }
  }
}
</style>
