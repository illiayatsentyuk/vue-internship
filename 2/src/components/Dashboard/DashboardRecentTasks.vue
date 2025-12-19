<template lang="pug">
  .dashboard-recent-tasks-section
    h1.dashboard-recent-tasks-section__title Recent Tasks
    .dashboard-recent-tasks-section__list
      DashboardRecentTask(v-for="task in content" :key="task.id" :task="task")
</template>
<script setup lang="ts">
import DashboardRecentTask from '@/components/Dashboard/DashboardRecentTask.vue'
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
.dashboard-recent-tasks-section {
  margin-top: 35px;
  padding: 0 32px;
}

.dashboard-recent-tasks-section__title {
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0%;
  margin-bottom: 20px;
}

.dashboard-recent-tasks-section__list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
}
</style>
