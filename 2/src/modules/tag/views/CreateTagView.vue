<template lang="pug">
  .create-tag-view
    h1 Create tag
    CreateTagForm(@createTag="handleCreateTag")
</template>

<script setup lang="ts">
import CreateTagForm from '../components/CreateTagForm.vue'
import { useTagsStore } from '@/stores/tags.store'
import type { Tag } from '@/types'
import { useRouter } from 'vue-router'

const router = useRouter()
const tagsStore = useTagsStore()

const handleCreateTag = (tag: Omit<Tag, 'id'>) => {
  tagsStore.addTag(tag)
  router.push('/tags')
}
</script>

<style lang="scss" scoped>
.create-tag-view {
  width: 100%;
  height: 100vh;
  padding: 32px 96px;
  background: #f9fafb;
}
</style>


