<template lang="pug">
  .create-tag-view
    h1 Edit tag
    EditTagForm(v-if="tag" :tag="tag" @editTag="handleEditTag")
</template>

<script setup lang="ts">
import EditTagForm from '../components/EditTagForm.vue'
import { useTagsStore } from '@/stores/tags.store'
import type { Tag } from '@/types'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const tagsStore = useTagsStore()

const tagId = Number(route.params.id)
const tag = tagsStore.tags.find((t) => t.id === tagId) as Tag | undefined

if (!tag) {
  router.push('/tags')
}

const handleEditTag = (payload: Omit<Tag, 'id'>) => {
  tagsStore.editTag({ ...payload, id: tagId }, tagId)
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


