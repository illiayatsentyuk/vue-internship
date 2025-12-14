<template>
  <div class="task-heading-section">
    <div>
      <h1>{{ task.heading }}</h1>
      <span>{{ task.status }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TaskComponentSection, TaskComponent } from '@/types';
const props = defineProps<{
  section: TaskComponentSection;
  task: TaskComponent;
}>()
const { section, task } = props;
console.log(section)
console.log(task)
</script>

<style scoped>

</style>