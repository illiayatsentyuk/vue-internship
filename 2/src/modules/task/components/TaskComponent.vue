<template lang="pug">
  .task-component
    section.task-component-heading
        .task-component-heading-title
            h1 {{ heading }}
            span {{ importance }}
            button(@click="handleEditTask") Edit
        .task-component-heading-tags(v-if="tags && tags.length")
            span Tags:
            .task-component-heading-tags-list
                span.task-tag(v-for="tag in tags" :key="tag.id")
                    span.task-tag-color(:style="{ backgroundColor: tag.color }")
                    span.task-tag-name {{ tag.name }}
        .task-component-heading-description
            .task-component-heading-description-deadline 
                img(src="@/assets/task/deadline-icon.svg" alt="deadline-icon")
                span
                    span Deadline
                    p {{ timeToEnd }}
            .task-component-heading-description-importance
                img(src="@/assets/task/importance-icon.svg" alt="importance-icon")
                span
                    span Importance
                    p {{ importance }}
            .task-component-heading-description-assignedTo
                img(src="@/assets/task/assignedTo-icon.svg" alt="assignedTo-icon")
                span
                    span Assigned To
                    p {{ assignedTo }}
        .task-component-heading-progress
            span
                p Progress
                p 
                    strong 67%
            .task-component-progress
                .task-component-progress-bar(class="review")
    section.task-component-description
        h2 Description
        p {{ description }}
    section.task-component-attachments
        h2 Attachments
        .task-component-attachments-list
            .task-component-attachments-list-item(v-for="attachment in attachments" :key="attachment")
                .task-component-attachments-list-item-info
                    img(src="@/assets/task/attachment-icon.svg" alt="attachment-icon")
                    span
                        p {{ attachment }}
                        p 2.2mb
                img(src="@/assets/task/download-icon.svg" alt="download-icon")
                
    section.task-component-comments
        h2 Comments
        .task-component-comments-input
            form(@submit.prevent="handleAddComment" )
                .task-component-comments-input-wrapper
                    input(type="text" placeholder="Add a comment" v-model="form.comment" :class="{ 'error': v$.comment.$error }")
                    span.error-message(v-if="v$.comment.$error") {{ v$.comment.$errors[0].$message }}
                button(type="submit") Add Comment
        .task-component-comments-list
            .task-component-comments-list-item(v-for="comment in comments" :key="comment")
                img(src="@/assets/task/comment-icon.svg" alt="comment-icon")
                p {{ comment }}
</template>
<script setup lang="ts">
import type { TaskComponent as TaskComponentType } from '@/types'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const rules = {
  comment: { required },
}

const form = reactive({
  comment: '',
})

const v$ = useVuelidate(rules, form)

const props = defineProps<{
  task: TaskComponentType
  addComment: (comment: string, id: number) => void
}>()
const emit = defineEmits(['addComment'])
const { heading, importance, timeToEnd, assignedTo, status, description, attachments, comments, id, tags } = props.task
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
</script>
<style lang="scss" scoped>
.task-component-comments {
    padding:27px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px #0000000d;
    h2 {
        font-family: Inter;
        font-weight: 600;
        font-style: Semi Bold;
        margin-bottom: 16px;
    }
    .task-component-comments-input {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .task-component-comments-input-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        input {
            width: 100%;
            padding: 16px;
            border: 1px solid #E5E7EB;
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
            &.error {
                border-color: #ef4444;
                &:focus {
                    border-color: #ef4444;
                }
            }
        }
        .error-message {
            font-family: Inter;
            font-weight: 400;
            font-style: Regular;
            font-size: 14px;
            color: #ef4444;
            margin-top: 4px;
        }
        button {
            background: #4f46e5;
            color: #ffffff;
            font-family: Inter;
            font-weight: 500;
            font-style: Medium;
            font-size: 14px;
            border: 1px solid #E5E7EB;
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
    }
    .task-component-comments-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
        .task-component-comments-list-item {
            display: flex;
            align-items: center;
        }
        img {
            width: 24px;
            height: 24px;
        }
        p {
            font-family: Inter;
            font-weight: 400;
            font-style: Regular;
            font-size: 16px;
            leading-trim: NONE;
            line-height: 100%;
            letter-spacing: 0%;
            margin-left:16px;
        }
        span {
            display: flex;
            flex-direction: column;
            gap: 4px;
            p {
                font-family: Inter;
                font-weight: 400;
                font-style: Regular;
            }
        }
    }
}
.task-component-attachments{
    padding:33px 24px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px #0000000d;
    h2 {
        font-family: Inter;
        font-weight: 600;
        font-style: Semi Bold;
        font-size: 18px;
        leading-trim: NONE;
        line-height: 18px;
        letter-spacing: 0%;
    }
    .task-component-attachments-list {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        .task-component-attachments-list-item {
            display: flex;
            padding:19px;
            border: 1px solid #E5E7EB;
            justify-content: space-between;
            width:45%;
            align-items: center;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0px 1px 2px 0px #0000000d;
            img {
                width: 24px;
                height: 24px;
            }
            .task-component-attachments-list-item-info {
                display: flex;
                align-items: center;
                gap: 16px;
                img {
                    width: 24px;
                    height: 24px;
                }
                span {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    p {
                        font-family: Inter;
                        font-weight: 400;
                        font-style: Regular;
                    }
                }
            }
        }
    }
}
.task-component-description {
    padding:24px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px #0000000d;
    h2 {
        font-family: Inter;
        font-weight: 600;
        font-style: Semi Bold;
        font-size: 18px;
        leading-trim: NONE;
        line-height: 18px;
        letter-spacing: 0%;
        margin-bottom: 16px;
    }
    p {
        font-family: Inter;
        font-weight: 400;
        font-style: Regular;
        font-size: 16px;
        leading-trim: NONE;
        line-height: 16px;
        letter-spacing: 0%;
        color:#4B5563;
    }
}
.task-component-progress {
  background: #e5e7eb;
  width: 100%;
  height: 8px;
  overflow: hidden;
  border-radius: 9999px;
  margin-bottom: 16px;
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
}

.task-component-progress-bar {
  border-radius: 9999px;
  &.review {
    width: 90%;
    height: 100%;
    background-color: #eab308;
    transition: width 0.3s ease;
  }
  &.inprogress {
    width: 75%;
    height: 100%;
    background-color: #4f46e5;
    transition: width 0.3s ease;
  }
  &.ontrack {
    width: 60%;
    height: 100%;
    background-color: #22c55e;
    transition: width 0.3s ease;
  }
}
.task-component-progress {
    position: relative;
    width: 100%;
    height: 8px;
    border-radius: 9999px;
    border: 1px solid #e5e7eb;
    overflow: hidden;
    .task-component-progress-bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 67%;
        transition: width 0.3s ease;
        border-radius: 9999px;
        background-color: #eab308;
        z-index: 1231231;
    }
}
.task-component {
  width: 100%;
  padding: 16px 96px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.task-component-heading {
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
.task-component-heading-tags {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  > span {
    font-family: Inter;
    font-weight: 500;
    font-size: 14px;
    color: #6b7280;
  }
}

.task-component-heading-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.task-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 9999px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
}

.task-tag-color {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
}

.task-tag-name {
  font-family: Inter;
  font-weight: 500;
  font-size: 13px;
  color: #374151;
}
.task-component-heading-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    padding: 15px 42px;
    border-radius: 8px;
    background: #4f46e5;
    color: #ffffff;
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    border:1px solid #E5E7EB;
  }
  button:hover {
    background: #4338ca;
    cursor: pointer;
  }
  h1 {
    font-family: Inter;
    font-weight: 700;
    font-style: Bold;
    font-size: 24px;
    leading-trim: NONE;
    line-height: 24px;
    letter-spacing: 0%;
  }
  span {
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
  }
}
.task-component-heading-description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 8px;
    img {
      width: 24px;
      height: 24px;
    }
    span {
      display: flex;
      flex-direction: column;
      gap: 4px;
      p {
        font-family: Inter;
        font-weight: 500;
        font-style: Medium;
        font-size: 16px;
        leading-trim: NONE;
        line-height: 16px;
        letter-spacing: 0%;
        color: #000000;
      }
      span {
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
    }
  }
}
.task-component-heading-progress {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  span {
    display: flex;
    align-items: center;
    gap: 8px;
    p {
      font-family: Inter;
    }
    .task-component-progress {
      width: 100%;
      height: 8px;
      border-radius: 9999px;
      border: 1px solid #e5e7eb;
      overflow: hidden;
    }
    .task-component-progress-bar {
      width: 100%;
      height: 100%;
      border-radius: 9999px;
      background: #e5e7eb;
    }
  }
}
</style>
