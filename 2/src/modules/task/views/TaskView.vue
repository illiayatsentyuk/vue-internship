<template lang="pug">
  .task-view
    TaskComponent(:task="task")
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { TaskComponent as TaskComponentType } from '@/types'
import TaskComponent from '../components/TaskComponent.vue'

const task: TaskComponentType = {
  id: 1,
  heading: 'Task 1',
  description: 'Description 1',
  timeToEnd: '10:00',
  importance: 'High',
  status: 'Pending',
  tags: ['Tag 1', 'Tag 2'],
  project: 'Project 1',
  assignedTo: 'User 1',
  createdAt: '2021-01-01',
  updatedAt: '2021-01-01',
  attachments: ['Attachment 1', 'Attachment 2'],
  comments: ['Comment 1', 'Comment 2'],
}
const route = useRoute()
console.log(route)
</script>

<style lang="scss" scoped>
.task-view {
  width: 100%;
  height: 100vh;
  padding: 32px 96px;
  background: #F9FAFB;
}
</style>
