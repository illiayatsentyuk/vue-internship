<template lang="pug">
  .task-view
    TaskComponent
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import TaskComponent from '../components/TaskComponent.vue'
const route = useRoute()
console.log(route)
</script>

<style lang="scss" scoped>
.task-view {
  width: 100%;
  height: 100vh;
  padding: 96px 32px;
}
</style>
