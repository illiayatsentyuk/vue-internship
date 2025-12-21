<template lang="pug">
    .accordion-item
      button.accordion-item__button(
        @click="toggleAccordion()"
        :aria-expanded="isOpen"
        :aria-controls="`collapse${_uid}`"
      )
        slot(name="title")
        svg.accordion-item__icon(
          :class="{'accordion-item__icon--open': isOpen, 'accordion-item__icon--closed': !isOpen}"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 10"
          aria-hidden="true"
        )
          path(
            d="M15 1.2l-7 7-7-7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          )
      div.accordion-item__content(:id="`collapse${_uid}`" v-show="isOpen")
        slot(name="content")
</template>
<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const toggleAccordion = () => {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>
.accordion-item {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 200ms ease;

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 1.25rem;
    gap: 0.75rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background-color 200ms ease;
    color: inherit;
    font-family: inherit;
    font-size: inherit;

    &:hover {
      background-color: rgba(0, 0, 0, 0.02);
    }
  }

  &__icon {
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
    transition: transform 200ms ease;
    transform: rotate(0deg);
    color: currentColor;

    &--open {
      transform: rotate(180deg);
    }

    &--closed {
      transform: rotate(0deg);
    }
  }

  &__content {
    padding: 0 1.25rem 1rem 1.25rem;
    animation: slideDown 200ms ease-out;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
