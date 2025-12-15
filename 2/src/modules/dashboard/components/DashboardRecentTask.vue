<template lang="pug">
  .recent-task(:class="importance === 'urgent' ? 'urgent' : 'inprogress'")
    .recent-task-heading
      h1 {{ heading }}
      span(:class="importance === 'urgent' ? 'urgent' : 'inprogress'") {{ importance==='urgent' ? 'Urgent' : 'In Progress' }}
    .recent-task-progress
      .recent-task-progress-bar(:class="importance === 'urgent' ? 'urgent' : 'inprogress'")
    .recent-task-time
      img(src="@/assets/dashboard/timer-icon.svg" alt="timer-icon")
      p {{ timeToEnd }}
</template>
<script setup lang="ts">
import type { Task } from '@/types'
const props = defineProps<{
  task: Task
}>()
const { importance, heading, timeToEnd } = props.task
</script>

<style lang="scss" scoped>


.recent-task-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    line-height: 16px;
  }
  span {
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    line-height: 100%;
    padding: 6px 8px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    &.urgent {
      color: #dc2626;
      background: #fee2e2;
    }
    &.inprogress {
      color: #ca8a04;
      background: #fef9c3;
    }
  }
}

.recent-task {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  padding: 16px 20px;
  width: 90%;
  box-shadow: 0px 1px 2px 0px #0000000d;
  &.urgent {
    border-left: 4px solid #ef4444;
  }
  &.inprogress {
    border-left: 4px solid #eab308;
  }
}

.recent-task-time {
  display: flex;
  align-items: center;
  color: #6b7280;
  gap: 4px;
}

.recent-task-progress {
  margin: 12px 0;
  height: 8px;
  width: 100%;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.recent-task-progress-bar {
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
