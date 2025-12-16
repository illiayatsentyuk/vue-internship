<template lang="pug">
    .create-task-form
        form(@submit.prevent="handleEditTask")
            .form-group
                label(for="title") Title
                input(type="text" id="title" v-model="form.heading")
            .form-group
                label(for="description") Description
                textarea(id="description" v-model="form.description")
            .form-group
                label Tags
                .tags-selector
                    .tag-option(v-for="tag in availableTags" :key="tag.id")
                        input(type="checkbox" :id="tag.id" :value="tag.id" v-model="form.tags")
                        label(:for="tag.id") {{ tag.name }}
                        span(:style="{ backgroundColor: tag.color }") {{ tag.color }}
            .form-group
                label(for="project") Project
                input(type="text" id="project" v-model="form.project")
            .form-group
                label(for="assignedTo") Assigned To
                input(type="text" id="assignedTo" v-model="form.assignedTo")
            .form-group
                label(for="timeToEnd") Time to End
                input(type="time" id="timeToEnd" v-model="form.timeToEnd")
            button(type="submit") Edit

</template>

<script setup lang="ts">     
import { reactive } from 'vue'
import type { CreateTaskForm, TaskComponent } from '@/types'
import { useTagsStore } from '@/stores/tags.store'
const props = defineProps<{
    task: TaskComponent
}>()
const emit = defineEmits(['editTask'])
const task = props.task
const tagsStore = useTagsStore()
const availableTags = tagsStore.tags

const form = reactive<CreateTaskForm>({
    heading: task.heading,
    description: task.description,
    timeToEnd: task.timeToEnd,
    importance: task.importance,
    status: task.status,
    tags: task.tags,
    project: task.project,
    assignedTo: task.assignedTo,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
    attachments: task.attachments,
    comments: task.comments,
})
const handleEditTask = () => {
    emit('editTask', form)
}
</script>

<style lang="scss" scoped>
.create-task-form {
  max-width: 720px;
  margin: 48px auto;
  padding: 32px 40px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 14px;
    font-weight: 500;
    color: #4b5563;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    background-color: #f9fafb;
    font-size: 14px;
    color: #111827;
    transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;

    &:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 1px #6366f1;
      background-color: #ffffff;
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  textarea {
    min-height: 90px;
    resize: vertical;
  }
}

.tags-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background-color: #f9fafb;

  .tag-option {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    input[type='checkbox'] {
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: #6366f1;
    }

    label {
      font-size: 14px;
      font-weight: 400;
      color: #111827;
      cursor: pointer;
      margin: 0;
      padding: 0;
    }
  }
}

button[type='submit'] {
  margin-top: 8px;
  align-self: flex-start;
  padding: 10px 20px;
  border-radius: 9999px;
  border: none;
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.1s ease, box-shadow 0.15s ease, opacity 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(79, 70, 229, 0.25);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
}
</style>