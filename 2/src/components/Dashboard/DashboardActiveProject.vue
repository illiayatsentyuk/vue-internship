<template lang="pug">
  .dashboard-active-project(@click="$router.push(`/projects/${id}`)")
    .dashboard-active-project__heading
      h1.dashboard-active-project__heading-title {{ heading }}
      span.dashboard-active-project__heading-badge(:class="`dashboard-active-project__heading-badge--${status}`") {{ status === 'ontrack' ? 'On Track' : status === 'inprogress' ? 'In Progress' : 'Review' }}
    span.dashboard-active-project__description {{ description }}
    .dashboard-active-project__progress
      span.dashboard-active-project__progress-header
        p.dashboard-active-project__progress-label Progress
        p.dashboard-active-project__progress-value
          strong {{ procent }}%
      .dashboard-active-project__progress-bar-container
        .dashboard-active-project__progress-bar(:class="`dashboard-active-project__progress-bar--${status}`" :style="{ width: procent ? `${procent}%` : '0%' }")
    span.dashboard-active-project__ending {{ timeToEnd }}
</template>

<script setup lang="ts">
import type { DashboardActiveProject } from '@/types'
const props = defineProps<{
  activeProject: DashboardActiveProject
}>()
const { id, status, description, heading, procent, timeToEnd } = props.activeProject
</script>

<style lang="scss" scoped>
.dashboard-active-project {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: #ffffff;
  cursor: pointer;
}

.dashboard-active-project__heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-active-project__heading-title {
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0%;
}

.dashboard-active-project__heading-badge {
  padding: 6px 8px;
  border-radius: 4px;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
}

.dashboard-active-project__heading-badge--ontrack {
  color: #16a34a;
  background: #dcfce7;
}

.dashboard-active-project__heading-badge--inprogress {
  color: #4f46e5;
  background: #e0e7ff;
}

.dashboard-active-project__heading-badge--review {
  color: #ca8a04;
  background: #fef9c3;
}

.dashboard-active-project__description {
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #6b7280;
  margin: 18px 0;
}

.dashboard-active-project__progress {
  // Progress container
}

.dashboard-active-project__progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.dashboard-active-project__progress-label {
  margin: 0;
}

.dashboard-active-project__progress-value {
  margin: 0;
}

.dashboard-active-project__progress-bar-container {
  background: #e5e7eb;
  width: 100%;
  height: 8px;
  overflow: hidden;
  border-radius: 9999px;
  margin-bottom: 16px;
}

.dashboard-active-project__progress-bar {
  border-radius: 9999px;
  height: 100%;
  transition: width 0.3s ease;
}

.dashboard-active-project__progress-bar--review {
  width: 0%;
  background-color: #eab308;
}

.dashboard-active-project__progress-bar--inprogress {
  width: 0%;
  background-color: #4f46e5;
}

.dashboard-active-project__progress-bar--ontrack {
  width: 0%;
  background-color: #22c55e;
}

.dashboard-active-project__ending {
  width: 100%;
  text-align: left;
  color: #6b7280;
}
</style>
