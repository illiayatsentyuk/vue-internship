import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Tag } from '@/types'

export const useTagsStore = defineStore('tags', () => {
  const tags = ref<Tag[]>([
    {
      id: 1,
      name: 'Tag 1',
      color: '#FF0000',
    },
    {
      id: 2,
      name: 'Tag 2',
      color: '#00FF00',
    },
  ])
  const returnBiggestId = computed(() => {
    return tags.value.reduce((max, tag) => Math.max(max, tag.id), 0)
  })
  function addTag(tag: Omit<Tag, 'id'>) {
    tags.value.push({
      id: returnBiggestId.value + 1,
      ...tag,
    })
  }
  function editTag(tag: Tag, id: number) {
    tags.value = tags.value.map((element) => (element.id === id ? tag : element))
  }
  function deleteTag(id: number) {
    tags.value = tags.value.filter((element) => element.id !== id)
  }
  return { tags, addTag, editTag, deleteTag }
})
