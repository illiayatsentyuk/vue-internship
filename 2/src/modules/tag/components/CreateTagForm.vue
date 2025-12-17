<template lang="pug">
  .create-tag-form
    form(@submit.prevent="handleCreateTag")
      .form-group(:class="{ 'has-error': v$.name.$error }")
        label(for="name") Name
        input(
          type="text"
          id="name"
          v-model="form.name"
          :class="{ 'input-error': v$.name.$error }"
          @blur="v$.name.$touch"
          placeholder="Enter tag name"
        )
        span.error-message(v-if="v$.name.$error")
          | {{ v$.name.required ? 'Name is required.' : '' }}
          | {{ v$.name.minLength?.$invalid ? ' Minimum 2 characters.' : '' }}
          | {{ v$.name.maxLength?.$invalid ? ' Maximum 40 characters.' : '' }}

      .form-group(:class="{ 'has-error': v$.color.$error }")
        label(for="color") Color
        input(
          type="color"
          id="color"
          v-model="form.color"
          :class="{ 'input-error': v$.color.$error }"
          @blur="v$.color.$touch"
        )
        span.error-message(v-if="v$.color.$error")
          | {{ v$.color.required ? 'Color is required.' : '' }}

      button(type="submit") Create tag
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import type { Tag } from '@/types'

const emit = defineEmits<{
  (e: 'createTag', payload: Omit<Tag, 'id'>): void
}>()

const form = reactive<Omit<Tag, 'id'>>({
  name: '',
  color: '#4f46e5',
})

const rules = {
  name: { required, minLength: minLength(2), maxLength: maxLength(40) },
  color: { required },
}

const v$ = useVuelidate(rules, form)

const handleCreateTag = async () => {
  const result = await v$.value.$validate()
  if (!result) return
  emit('createTag', form)
}
</script>

<style lang="scss" scoped>
.create-tag-form {
  max-width: 480px;
  margin: 40px auto;
  padding: 24px 32px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);

  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
  }

  input[type='text'] {
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

  input[type='color'] {
    width: 72px;
    height: 36px;
    padding: 0;
    border-radius: 9999px;
    border: 1px solid #e5e7eb;
    background: #f9fafb;
    cursor: pointer;
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
  margin-top: 4px;
  align-self: flex-start;
  padding: 9px 22px;
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
  gap: 8px;
  box-shadow: 0 4px 8px rgba(99, 102, 241, 0.05);
  transition:
    transform 0.09s cubic-bezier(.53,.02,.63,1.52),
    box-shadow 0.13s cubic-bezier(.25,.45,.3,1.45),
    opacity 0.16s;

  &:hover {
    transform: translateY(-1px) scale(1.03);
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.18);
    opacity: 0.97;
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


