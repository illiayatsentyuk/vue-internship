<template lang="pug">
  button.dashboard-heading-controls-button(:class="`dashboard-heading-controls-button--secondary`" @click="$router.push(to)")
      img.dashboard-heading-controls-button__icon(:src="imagePath" alt="button icon")
      p.dashboard-heading-controls-button__text {{ content }}
</template>
<script setup lang="ts">
import type { DashboardHeadingControllsButtons } from '@/types'
const props = defineProps<{
  button: DashboardHeadingControllsButtons
}>()
const { imagePath, content, to } = props.button
</script>
<style lang="scss" scoped>
.dashboard-heading-controls-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 11px 16px;
  border-radius: 8px;
  border: 1px solid #4f46e5;
  background: transparent;
  transition: filter 0.15s ease;

  &:hover {
    filter: brightness(0.95);
  }
}

.dashboard-heading-controls-button--primary {
  border: 1px solid #4f46e5;
  background: transparent;
}

.dashboard-heading-controls-button--secondary {
  border: 1px solid #e5e7eb;
  background: #ffffff;
}

.dashboard-heading-controls-button__text {
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  margin: 0;
}
</style>
