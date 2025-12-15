<template lang="pug">
  button(@click="$router.push(to)")
      img(:src="imagePath")
      p {{ content }}
</template>
<script setup lang="ts">
import type { DashboardHeadingControllsButtons } from '@/types'
const props = defineProps<{
  button: DashboardHeadingControllsButtons
}>()
const { imagePath, content, to } = props.button
</script>
<style lang="scss" scoped></style>
