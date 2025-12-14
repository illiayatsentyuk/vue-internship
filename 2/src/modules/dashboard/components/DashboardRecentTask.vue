<template>
  <div class="recent-task" :class="importance === 'urgent' ? 'urgent' : 'inprogress'">
    <div class="recent-task-heading">
      <h1>{{ heading }}</h1>
      <span :class="importance === 'urgent' ? 'urgent' : 'inprogress'">{{ importance==='urgent' ? 'Urgent' : 'In Progress' }}</span>
    </div>
    <div class="recent-task-progress">
      <div class="recent-task-progress-bar" :class="importance === 'urgent' ? 'urgent' : 'inprogress'"></div>
    </div>
    <div class="recent-task-time">
      <img src="@/assets/dashboard/timer-icon.svg" />
      <p>{{ timeToEnd }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Task } from '@/types';
const props = defineProps<{
  task: Task;
}>()
const {importance, heading, timeToEnd} = props.task;
</script>

<style scoped>
.recent-task {
background: #FFFFFF;
display: flex;
flex-direction: column;
justify-content: space-between;
border-radius: 8px;
padding: 16px 20px;
width: 90%;
box-shadow: 0px 1px 2px 0px #0000000D;
}

.recent-task-heading {
display: flex;
justify-content: space-between;
align-items: center;
}

.recent-task-heading>h1 {
font-weight: 500;
font-style: Medium;
font-size: 16px;
line-height: 16px;
}

.recent-task-heading>span {
font-weight: 400;
font-style: Regular;
font-size: 14px;
line-height: 100%;
padding: 6px 8px;
border: 1px solid #E5E7EB;
border-radius: 4px;
}

.recent-task-heading>span.urgent {
color: #DC2626;
background: #FEE2E2;
}

.recent-task-heading>span.inprogress {
color: #CA8A04;
background: #FEF9C3;
}

.recent-task.urgent {
border-left: 4px solid #EF4444;
}

.recent-task.inprogress {
border-left: 4px solid #EAB308;
}

.recent-task-time {
display: flex;
align-items: center;
color: #6B7280;
gap: 4px;
}

.recent-task-progress {
margin: 12px 0;
height: 8px;
width: 100%;
border-radius: 9999px;
border: 1px solid #E5E7EB;
overflow: hidden;
}

.recent-task-progress-bar {
height: 100%;
width: 67%;
transition: width 0.3s ease;
border-radius: 9999px;
}
.recent-task-progress-bar.urgent{
background-color: #EF4444;
}
.recent-task-progress-bar.inprogress{
background-color: #EAB308;
}
</style>