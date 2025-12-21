<template lang="pug">
  .task-component
    section.task-component__heading
        .task-component__heading-status
            span.task-component__heading-status-label Is Done:
            span.task-component__heading-status-value {{ isDone ? 'Yes' : 'No' }}
        .task-component__heading-title
            h1.task-component__heading-title-text {{ heading }}
            span.task-component__heading-title-badge {{ importance }}
            button.task-component__heading-title-button(@click="handleEditTask") Edit
        .task-component__heading-tags(v-if="tags && tags.length")
            span.task-component__heading-tags-label Tags:
            .task-component__heading-tags-list
                span.task-component__tag(v-for="tag in tags" :key="tag.id")
                    span.task-component__tag-color(:style="{ backgroundColor: tag.color }")
                    span.task-component__tag-name {{ tag.name }}
        .task-component__heading-description
            .task-component__heading-description-item.task-component__heading-description-item--deadline 
                img.task-component__heading-description-icon(src="@/assets/task/deadline-icon.svg" alt="deadline-icon")
                span.task-component__heading-description-content
                    span.task-component__heading-description-label Deadline
                    p.task-component__heading-description-value {{ timeToEnd }}
            .task-component__heading-description-item.task-component__heading-description-item--importance
                img.task-component__heading-description-icon(src="@/assets/task/importance-icon.svg" alt="importance-icon")
                span.task-component__heading-description-content
                    span.task-component__heading-description-label Importance
                    p.task-component__heading-description-value {{ importance }}
            .task-component__heading-description-item.task-component__heading-description-item--assigned-to
                img.task-component__heading-description-icon(src="@/assets/task/assignedTo-icon.svg" alt="assignedTo-icon")
                span.task-component__heading-description-content
                    span.task-component__heading-description-label Assigned To
                    p.task-component__heading-description-value {{ assignedTo }}
        .task-component__heading-progress
            span.task-component__heading-progress-header
                p.task-component__heading-progress-label Progress
                p.task-component__heading-progress-value 
                    strong {{ task.procent }}%
            .task-component__progress
                .task-component__progress-bar.task-component__progress-bar--procent(:style="{ width: task.procent ? `${task.procent}%` : '0%' }")
    section.task-component__description
        h2.task-component__description-title Description
        p.task-component__description-text {{ description }}
    section.task-component__attachments
        h2.task-component__attachments-title Attachments
        .task-component__attachments-list
            .task-component__attachments-item(v-for="attachment in attachments" :key="attachment")
                .task-component__attachments-item-info
                    img.task-component__attachments-item-icon(src="@/assets/task/attachment-icon.svg" alt="attachment-icon")
                    span.task-component__attachments-item-content
                        p.task-component__attachments-item-name {{ attachment }}
                        p.task-component__attachments-item-size 2.2mb
                img.task-component__attachments-item-download(src="@/assets/task/download-icon.svg" alt="download-icon")
    section.task-component__additional-tasks
        h2.task-component__additional-tasks-title Additional Tasks
        .task-component__additional-tasks-input
            form.task-component__additional-tasks-form(@submit.prevent="handleAddAdditionalTask")
                .task-component__additional-tasks-input-wrapper
                    input.task-component__additional-tasks-input-field(
                        type="text" 
                        placeholder="Enter additional task heading" 
                        v-model="additionalTaskForm.heading" 
                        :class="{ 'task-component__additional-tasks-input-field--error': v$AdditionalTask.heading.$error }"
                    )
                    span.task-component__additional-tasks-error-message(v-if="v$AdditionalTask.heading.$error") {{ v$AdditionalTask.heading.$errors[0].$message }}
                button.task-component__additional-tasks-submit-button(type="submit") Add Additional Task
        .task-component__additional-tasks-list
            .task-component__additional-tasks-item(v-for="additionalTask in task.additionalTasks" :key="additionalTask.id")
                .task-component__additional-tasks-item-info
                    span.task-component__additional-tasks-item-content
                        p.task-component__additional-tasks-item-name {{ additionalTask.heading }}
                        p.task-component__additional-tasks-item-description {{ additionalTask.description }}
                        p.task-component__additional-tasks-item-created-at {{ additionalTask.createdAt }}
                        p.task-component__additional-tasks-item-updated-at {{ additionalTask.updatedAt }}
                        label.task-component__additional-tasks-item-checkbox
                            input.task-component__additional-tasks-item-checkbox-input(
                                type="checkbox" 
                                :checked="additionalTask.isDone" 
                                @change="handleEditAdditionalTask(additionalTask.id)"
                            )
                            span.task-component__additional-tasks-item-checkbox-label Done
                button.task-component__additional-tasks-item-button(@click="handleDeleteAdditionalTask(additionalTask.id)") Delete
    section.task-component__comments
        h2.task-component__comments-title Comments
        .task-component__comments-input
            form.task-component__comments-form(@submit.prevent="handleAddComment" )
                .task-component__comments-input-wrapper
                    input.task-component__comments-input-field(
                        type="text" 
                        placeholder="Add a comment" 
                        v-model="form.comment" 
                        :class="{ 'task-component__comments-input-field--error': v$.comment.$error }"
                    )
                    span.task-component__comments-error-message(v-if="v$.comment.$error") {{ v$.comment.$errors[0].$message }}
                button.task-component__comments-submit-button(type="submit") Add Comment
        .task-component__comments-list
            .task-component__comments-item(v-for="comment in comments" :key="comment")
                img.task-component__comments-item-icon(src="@/assets/task/comment-icon.svg" alt="comment-icon")
                p.task-component__comments-item-text {{ comment }}
</template>
<script setup lang="ts">
import type { TaskComponent as TaskComponentType } from '@/types'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useTasksStore } from '@/stores/tasks'

const rules = {
  comment: { required },
}

const additionalTaskRules = {
  heading: { required },
}

const form = reactive({
  comment: '',
})

const additionalTaskForm = reactive({
  heading: '',
})

const v$ = useVuelidate(rules, form)
const v$AdditionalTask = useVuelidate(additionalTaskRules, additionalTaskForm)

const props = defineProps<{
  task: TaskComponentType
}>()
const emit = defineEmits(['addComment'])
const {
  heading,
  importance,
  timeToEnd,
  assignedTo,
  status,
  description,
  attachments,
  comments,
  id,
  tags,
  isDone,
  additionalTasks,
  procent,
} = props.task
const tasksStore = useTasksStore()
const router = useRouter()

const handleAddComment = async () => {
  const isFormValid = await v$.value.$validate()
  if (!isFormValid) {
    return
  }
  emit('addComment', form.comment, id)
  form.comment = ''
  v$.value.$reset()
}
const handleEditTask = () => {
  router.push(`/tasks/${id}/edit`)
}
const handleEditAdditionalTask = (
  additionalTaskId: number,
  updates?: Partial<{ isDone: boolean }>,
) => {
  const additionalTask = props.task.additionalTasks.find((task) => task.id === additionalTaskId)
  if (additionalTask) {
    const updatedTask = {
      ...additionalTask,
      ...(updates || { isDone: !additionalTask.isDone }),
      updatedAt: new Date().toISOString(),
    }
    tasksStore.editAdditionalTask(id, updatedTask)
    tasksStore.updateTasksProcent()
  }
}
const handleDeleteAdditionalTask = (additionalTaskId: number) => {
  tasksStore.deleteAdditionalTask(id, additionalTaskId)
  tasksStore.updateTasksProcent()
}
const handleAddAdditionalTask = async () => {
  const isFormValid = await v$AdditionalTask.value.$validate()
  if (!isFormValid) {
    return
  }
  const newAdditionalTask = {
    id: 0, // Will be auto-generated by the store
    heading: additionalTaskForm.heading,
    isDone: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  tasksStore.addAdditionalTask(id, newAdditionalTask)
  tasksStore.updateTasksProcent()
  additionalTaskForm.heading = ''
  v$AdditionalTask.value.$reset()
}
</script>
<style lang="scss" scoped>
.task-component {
  width: 100%;
  padding: 16px 96px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.task-component__heading {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 1px 2px 0px #0000000d;
  margin-bottom: 12px;
}

.task-component__heading-status {
  display: flex;
  align-items: center;
  gap: 8px;
}

.task-component__heading-status-label {
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  color: #6b7280;
}

.task-component__heading-status-value {
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
}

.task-component__heading-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-component__heading-title-text {
  font-family: Inter;
  font-weight: 700;
  font-style: Bold;
  font-size: 24px;
  leading-trim: NONE;
  line-height: 24px;
  letter-spacing: 0%;
  margin: 0;
}

.task-component__heading-title-badge {
  padding: 8px 16px;
  background: #fef9c3;
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  color: #a16207;
  border-radius: 4px;
}

.task-component__heading-title-button {
  padding: 15px 42px;
  border-radius: 8px;
  background: #4f46e5;
  color: #ffffff;
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #4338ca;
  }
}

.task-component__heading-tags {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.task-component__heading-tags-label {
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  color: #6b7280;
}

.task-component__heading-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.task-component__tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 9999px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
}

.task-component__tag-color {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
}

.task-component__tag-name {
  font-family: Inter;
  font-weight: 500;
  font-size: 13px;
  color: #374151;
}

.task-component__heading-description {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-component__heading-description-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.task-component__heading-description-icon {
  width: 24px;
  height: 24px;
}

.task-component__heading-description-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.task-component__heading-description-label {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 14px;
  letter-spacing: 0%;
  color: #6b7280;
  margin-bottom: 4px;
}

.task-component__heading-description-value {
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 16px;
  letter-spacing: 0%;
  color: #000000;
  margin: 0;
}

.task-component__heading-progress {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
}

.task-component__heading-progress-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.task-component__heading-progress-label {
  font-family: Inter;
  margin: 0;
}

.task-component__heading-progress-value {
  font-family: Inter;
  margin: 0;
}

.task-component__progress {
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  margin-bottom: 16px;
}

.task-component__progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 67%;
  transition: width 0.3s ease;
  border-radius: 9999px;
  background-color: #eab308;
}

.task-component__progress-bar--review {
  width: 90%;
  background-color: #eab308;
}

.task-component__progress-bar--inprogress {
  width: 75%;
  background-color: #4f46e5;
}

.task-component__progress-bar--ontrack {
  width: 60%;
  background-color: #22c55e;
}

.task-component__description {
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px #0000000d;
}

.task-component__description-title {
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 18px;
  leading-trim: NONE;
  line-height: 18px;
  letter-spacing: 0%;
  margin-bottom: 16px;
  margin-top: 0;
}

.task-component__description-text {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 16px;
  letter-spacing: 0%;
  color: #4b5563;
  margin: 0;
}

.task-component__attachments {
  padding: 33px 24px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px #0000000d;
}

.task-component__attachments-title {
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 18px;
  leading-trim: NONE;
  line-height: 18px;
  letter-spacing: 0%;
  margin: 0 0 16px 0;
}

.task-component__attachments-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.task-component__attachments-item {
  display: flex;
  padding: 19px;
  border: 1px solid #e5e7eb;
  justify-content: space-between;
  width: 45%;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px #0000000d;
}

.task-component__attachments-item-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.task-component__attachments-item-icon {
  width: 24px;
  height: 24px;
}

.task-component__attachments-item-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.task-component__attachments-item-name {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  margin: 0;
}

.task-component__attachments-item-size {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  margin: 0;
}

.task-component__attachments-item-download {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.task-component__additional-tasks {
  padding: 27px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px #0000000d;
}

.task-component__additional-tasks-title {
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  margin-bottom: 16px;
  margin-top: 0;
}

.task-component__additional-tasks-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.task-component__additional-tasks-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.task-component__additional-tasks-input-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.task-component__additional-tasks-input-field {
  width: 100%;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }

  &--error {
    border-color: #ef4444;

    &:focus {
      border-color: #ef4444;
    }
  }
}

.task-component__additional-tasks-error-message {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  color: #ef4444;
  margin-top: 4px;
}

.task-component__additional-tasks-submit-button {
  background: #4f46e5;
  color: #ffffff;
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  border: 1px solid #e5e7eb;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #4338ca;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
}

.task-component__additional-tasks-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.task-component__additional-tasks-item {
  display: flex;
  padding: 19px;
  border: 1px solid #e5e7eb;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px #0000000d;
}

.task-component__additional-tasks-item-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.task-component__additional-tasks-item-icon {
  width: 24px;
  height: 24px;
}

.task-component__additional-tasks-item-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.task-component__additional-tasks-item-name {
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  margin: 0;
}

.task-component__additional-tasks-item-description {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.task-component__additional-tasks-item-is-done {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.task-component__additional-tasks-item-created-at {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  color: #9ca3af;
  margin: 0;
}

.task-component__additional-tasks-item-updated-at {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  color: #9ca3af;
  margin: 0;
}

.task-component__additional-tasks-item-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  color: #374151;
}

.task-component__additional-tasks-item-checkbox-input {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #4f46e5;
}

.task-component__additional-tasks-item-checkbox-label {
  user-select: none;
}

.task-component__additional-tasks-item-button {
  padding: 8px 16px;
  border-radius: 8px;
  background: #4f46e5;
  color: #ffffff;
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #4338ca;
  }
}

.task-component__additional-tasks-item-button {
  padding: 8px 16px;
  border-radius: 8px;
  background: #4f46e5;
  color: #ffffff;
}

.task-component__additional-tasks-item-button:hover {
  background: #4338ca;
}

.task-component__comments {
  padding: 27px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px #0000000d;
}

.task-component__comments-title {
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  margin-bottom: 16px;
  margin-top: 0;
}

.task-component__comments-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.task-component__comments-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.task-component__comments-input-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.task-component__comments-input-field {
  width: 100%;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }

  &--error {
    border-color: #ef4444;

    &:focus {
      border-color: #ef4444;
    }
  }
}

.task-component__comments-error-message {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  color: #ef4444;
  margin-top: 4px;
}

.task-component__comments-submit-button {
  background: #4f46e5;
  color: #ffffff;
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  border: 1px solid #e5e7eb;
  padding: 10px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #4338ca;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
}

.task-component__comments-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.task-component__comments-item {
  display: flex;
  align-items: center;
}

.task-component__comments-item-icon {
  width: 24px;
  height: 24px;
}

.task-component__comments-item-text {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  margin-left: 16px;
  margin: 0 0 0 16px;
}
</style>
