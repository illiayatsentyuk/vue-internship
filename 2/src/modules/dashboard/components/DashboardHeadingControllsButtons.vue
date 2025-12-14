<template>
  <button>
    <img :src="imagePath" />
    <p>{{ content }}</p>
  </button>
</template>
<script setup lang="ts">
import type { DashboardHeadingControllsButtons } from '@/types';
const props = defineProps<{
  button: DashboardHeadingControllsButtons;
}>()
const {imagePath, content} = props.button;
</script>