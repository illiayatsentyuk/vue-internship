<template>
  <TaskSection :section="section" :task="task" />
</template>

<script setup lang="ts">
import TaskSection from './TaskSection.vue';
import type { TaskComponentSection, TaskComponent } from '@/types';
import { TaskSections } from '@/enums';
const section: TaskComponentSection = {
  section: TaskSections.HEADING,
}
const task: TaskComponent = {
  id: 1,
  heading: 'Task 1',
  description: 'Task 1 description',
  timeToEnd: 'Task 1 time to end',
  importance: 'Task 1 importance',
  status: 'Task 1 status',
  tags: ['Task 1 tag 1', 'Task 1 tag 2'],
  project: 'Task 1 project',
  assignedTo: 'Task 1 assigned to',
  createdAt: 'Task 1 created at',
  updatedAt: 'Task 1 updated at',
  attachments: ['Task 1 attachment 1', 'Task 1 attachment 2'],
  comments: ['Task 1 comment 1', 'Task 1 comment 2'],
}
</script>

<style scoped>
</style>