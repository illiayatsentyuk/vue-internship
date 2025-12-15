<template lang="pug">
  .task-heading-section
    div
      h1 {{ task.heading }}
      span {{ task.status }}
</template>

<script setup lang="ts">
import type { TaskComponentSection, TaskComponent } from '@/types'
const props = defineProps<{
  section: TaskComponentSection
  task: TaskComponent
}>()
const { section, task } = props
console.log(section)
console.log(task)
</script>

<style lang="scss" scoped></style>
