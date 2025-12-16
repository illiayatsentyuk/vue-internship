<template lang="pug">
    .create-project-form
        form(@submit.prevent="handleCreateProject")
            .form-group(:class="{ 'has-error': v$.heading.$error }")
                label(for="heading") Title
                input(
                    type="text"
                    id="heading"
                    v-model="form.heading"
                    :class="{ 'input-error': v$.heading.$error }"
                    @blur="v$.heading.$touch"
                    placeholder="Enter project title"
                )
                span.error-message(v-if="v$.heading.$error")
                    | {{ v$.heading.required ? 'Title is required.' : '' }}
                    | {{ v$.heading.minLength?.$invalid ? ' Minimum 3 characters.' : '' }}
                    | {{ v$.heading.maxLength?.$invalid ? ' Maximum 100 characters.' : '' }}
            .form-group(:class="{ 'has-error': v$.description.$error }")
                label(for="description") Description
                textarea(
                    id="description"
                    v-model="form.description"
                    :class="{ 'input-error': v$.description.$error }"
                    @blur="v$.description.$touch"
                    placeholder="Describe the project..."
                )
                span.error-message(v-if="v$.description.$error")
                    | {{ v$.description.required ? 'Description is required.' : '' }}
                    | {{ v$.description.minLength?.$invalid ? ' Minimum 3 characters.' : '' }}
                    | {{ v$.description.maxLength?.$invalid ? ' Maximum 1000 characters.' : '' }}
            button(type="submit") Create
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import type { CreateProjectForm } from '@/types'
const emit = defineEmits(['createProject'])

const form = reactive<CreateProjectForm>({
    heading: '',
    description: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tasks: [],
})

const rules = {
    heading: { required, minLength: minLength(3), maxLength: maxLength(100) },
    description: { required, minLength: minLength(3), maxLength: maxLength(1000) },
}
const v$ = useVuelidate(rules, form)
const handleCreateProject = async () => {
    const result = await v$.value.$validate()
    if (!result) {
        return
    }
    emit('createProject', form)
}
</script>

<style lang="scss" scoped>
.create-project-form {
  max-width: 720px;
  margin: 48px auto;
  padding: 32px 40px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 4px;

  label {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    background: #f9fafb;
    font-size: 15px;
    color: #111827;
    transition:
      border-color 0.15s ease,
      box-shadow 0.15s ease,
      background-color 0.15s ease;

    &:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 1px #6366f1;
      background: #fff;
    }

    &.input-error {
      border-color: #ef4444;
      background-color: #fef2f2;
    }

    &::placeholder {
      color: #9ca3af;
      font-size: 14px;
    }
  }

  textarea {
    min-height: 90px;
    resize: vertical;
  }

  &.has-error label {
    color: #ef4444;
  }

  .error-message {
    font-size: 12.5px;
    color: #ef4444;
    font-weight: 500;
    margin-top: 2px;
    line-height: 1.45;
  }
}

button[type='submit'] {
  margin-top: 12px;
  align-self: flex-start;
  padding: 11px 26px;
  border-radius: 9999px;
  border: none;
  background: linear-gradient(90deg, #4f46e5, #6366f1 70% );
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 8px rgba(99, 102, 241, 0.05);
  transition:
    transform 0.09s cubic-bezier(.53,.02,.63,1.52),
    box-shadow 0.13s cubic-bezier(.25,.45,.3,1.45),
    opacity 0.16s;

  &:hover {
    transform: translateY(-1px) scale(1.035);
    box-shadow: 0 12px 36px rgba(79, 70, 229, 0.18);
    opacity: 0.96;
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: 0 2px 8px rgba(79, 70, 229, 0.17);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
}
</style>