<template lang="pug">
  .dashboard-recent-tasks-section
    h1.dashboard-recent-tasks-section__title Recent Tasks
    .dashboard-recent-tasks-section__list
      DashboardRecentTask(v-if="content.length > 0" v-for="task in content" :key="task.id" :task="task")
      .dashboard-recent-tasks-section__list-empty(v-else)
        p.dashboard-recent-tasks-section__list-empty-text No recent tasks
</template>
<script setup lang="ts">
import DashboardRecentTask from '@/components/Dashboard/DashboardRecentTask.vue'
import { useTasksStore } from '@/stores/tasks'
import { computed } from 'vue'

const tasksStore = useTasksStore()
const tasks = tasksStore.tasks

const content = computed(() => {
  return tasks.slice(0, 3).map((task) => ({
    id: task.id,
    importance: task.importance,
    heading: task.heading,
    timeToEnd: task.timeToEnd,
    isDone: task.isDone,
    procent: task.procent,
  }))
})
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

.dashboard-recent-tasks-section__list-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.dashboard-recent-tasks-section__list-empty-text {
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 16px;
  color: #6b7280;
}
</style>
