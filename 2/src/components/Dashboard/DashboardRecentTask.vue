<template lang="pug">
  .dashboard-recent-task(:class="`dashboard-recent-task--importance-${importance}`" @click="$router.push(`/tasks/${id}`)")
    .dashboard-recent-task__heading
      h1.dashboard-recent-task__heading-title {{ heading }}
      span.dashboard-recent-task__heading-badge(:class="`dashboard-recent-task__heading-badge--importance-${importance}`") {{ importanceLabel }}
    .dashboard-recent-task__progress
      .dashboard-recent-task__progress-bar(:class="`dashboard-recent-task__progress-bar--importance-${importance}`" :style="{ width: isDone ? '100%' : procent ? `${procent}%` : '0%' }")
    .dashboard-recent-task__time
      img.dashboard-recent-task__time-icon(src="@/assets/dashboard/timer-icon.svg" alt="timer-icon")
      p.dashboard-recent-task__time-text {{ timeToEnd }}
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { Task } from '@/types'

const props = defineProps<{
  task: Task
}>()
const { importance, heading, timeToEnd, isDone, procent, id } = props.task

const importanceLabel = computed(() => {
  switch (importance) {
    case 'low':
      return 'Low'
    case 'medium':
      return 'Medium'
    case 'high':
      return 'High'
    case 'critical':
      return 'Critical'
    default:
      return 'Unspecified'
  }
})
</script>

<style lang="scss" scoped>
.dashboard-recent-task {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  padding: 16px 20px;
  width: 90%;
  box-shadow: 0px 1px 2px 0px #0000000d;
  cursor: pointer;
}

.dashboard-recent-task--importance-critical {
  border-left: 4px solid #ef4444;
}

.dashboard-recent-task--importance-high {
  border-left: 4px solid #f97316;
}

.dashboard-recent-task--importance-medium {
  border-left: 4px solid #eab308;
}

.dashboard-recent-task--importance-low {
  border-left: 4px solid #3b82f6;
}

.dashboard-recent-task__heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-recent-task__heading-title {
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  line-height: 16px;
}

.dashboard-recent-task__heading-badge {
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 100%;
  padding: 6px 8px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
}

.dashboard-recent-task__heading-badge--importance-critical {
  color: #b91c1c;
  background: #fee2e2;
}

.dashboard-recent-task__heading-badge--importance-high {
  color: #c2410c;
  background: #ffedd5;
}

.dashboard-recent-task__heading-badge--importance-medium {
  color: #a16207;
  background: #fef9c3;
}

.dashboard-recent-task__heading-badge--importance-low {
  color: #1d4ed8;
  background: #eff6ff;
}

.dashboard-recent-task__progress {
  margin: 12px 0;
  height: 8px;
  width: 100%;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.dashboard-recent-task__progress-bar {
  height: 100%;
  width: 0%;
  transition: width 0.3s ease;
  border-radius: 9999px;
}

.dashboard-recent-task__progress-bar--importance-critical {
  background-color: #ef4444;
}

.dashboard-recent-task__progress-bar--importance-high {
  background-color: #f97316;
}

.dashboard-recent-task__progress-bar--importance-medium {
  background-color: #eab308;
}

.dashboard-recent-task__progress-bar--importance-low {
  background-color: #3b82f6;
}

.dashboard-recent-task__time {
  display: flex;
  align-items: center;
  color: #6b7280;
  gap: 4px;
}

.dashboard-recent-task__time-text {
  margin: 0;
}
</style>
