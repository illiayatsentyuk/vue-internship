<template lang="pug">
  .tasks
    h1 Recent Tasks
    .dashboard-recent-tasks
      DashboardRecentTask(v-for="task in content" :key="task.id" :task="task")
</template>
<script setup lang="ts">
import DashboardRecentTask from '../components/DashboardRecentTask.vue'
const content = [
  {
    id: 1,
    importance: 'urgent',
    heading: 'Update API Documentation',
    timeToEnd: 'Due Today',
  },
  {
    id: 2,
    importance: 'inprogress',
    heading: 'Design System Updates',
    timeToEnd: 'Due in 3 days',
  },
]
</script>

<style lang="scss" scoped>
.tasks {
  margin-top: 35px;
  padding: 0 32px;
  h1 {
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 18px;
    letter-spacing: 0%;
    margin-bottom: 20px;
  }
}
.dashboard-recent-tasks {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
}
</style>
