<template lang="pug">
  .task-heading-properties
    img(:src="imagePath")
    span.task-heading-properties-text
      h1 {{ heading }}
      span {{ status }}
</template>

<script setup lang="ts">
import type { TaskHeadingProperties } from '@/types'
const props = defineProps<{
  properties: TaskHeadingProperties
}>()
const { imagePath, heading, status } = props.properties
</script>

<style lang="scss" scoped>
.task-heading-properties {
  display: flex;
  align-items: center;
  gap: 10px;
}

.task-heading-properties-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.task-heading-properties-text > h1 {
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  line-height: 16px;
}

.task-heading-properties-text > span {
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 14px;
}
</style>
