<template lang="pug">
  .tags-view
    .tags-view__header
      h1 Tags
      RouterLink.tags-view__create-button(to="/tags/create") + Create tag

    .tags-view__content
      .tags-view__empty(v-if="!tags.length")
        p No tags yet. Click "Create tag" to add your first one.

      ul.tags-view__list(v-else)
        li.tags-view__item(v-for="tag in tags" :key="tag.id")
          .tags-view__item-main
            span.tags-view__color-dot(:style="{ backgroundColor: tag.color }")
            span.tags-view__name {{ tag.name }}
            span.tags-view__color-code {{ tag.color }}

          .tags-view__item-actions
            RouterLink.tags-view__edit(:to="`/tags/${tag.id}/edit`") Edit
            button.tags-view__delete(type="button" @click="handleDelete(tag.id)") Delete
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useTagsStore } from '@/stores/tags'

const tagsStore = useTagsStore()
const { tags } = storeToRefs(tagsStore)

const handleDelete = (id: number) => {
  if (confirm('Are you sure you want to delete this tag?')) {
    tagsStore.deleteTag(id)
  }
}
</script>

<style lang="scss" scoped>
.tags-view {
  width: 100%;
  min-height: 100vh;
  padding: 32px 96px;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    h1 {
      font-size: 28px;
      font-weight: 600;
      color: #111827;
      letter-spacing: -0.02em;
    }
  }

  &__create-button {
    text-decoration: none;
    padding: 9px 18px;
    border-radius: 9999px;
    border: none;
    background: linear-gradient(90deg, #4f46e5, #6366f1 70%);
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    box-shadow: 0 4px 8px rgba(99, 102, 241, 0.08);
    transition:
      transform 0.09s cubic-bezier(0.53, 0.02, 0.63, 1.52),
      box-shadow 0.13s cubic-bezier(0.25, 0.45, 0.3, 1.45),
      opacity 0.16s;

    &:hover {
      transform: translateY(-1px) scale(1.03);
      box-shadow: 0 12px 30px rgba(79, 70, 229, 0.22);
      opacity: 0.97;
    }
  }

  &__content {
    flex: 1;
  }

  &__empty {
    padding: 24px;
    border-radius: 12px;
    border: 1px dashed #d1d5db;
    background: #f3f4f6;

    p {
      margin: 0;
      color: #6b7280;
      font-size: 14px;
    }
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-radius: 10px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0 3px 10px rgba(15, 23, 42, 0.04);
  }

  &__item-main {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__color-dot {
    width: 18px;
    height: 18px;
    border-radius: 9999px;
    border: 2px solid #e5e7eb;
  }

  &__name {
    font-size: 15px;
    font-weight: 500;
    color: #111827;
  }

  &__color-code {
    font-size: 13px;
    color: #6b7280;
  }

  &__item-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__edit {
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    color: #2563eb;
    padding: 6px 10px;
    border-radius: 9999px;
    background-color: #eff6ff;
  }

  &__delete {
    font-size: 13px;
    font-weight: 500;
    color: #b91c1c;
    padding: 6px 10px;
    border-radius: 9999px;
    border: none;
    background-color: #fee2e2;
    cursor: pointer;
  }
}
</style>
