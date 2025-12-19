<template lang="pug">
  RouterLink.navbar-list-item__link(:to="path" active-class="navbar-list-item__link--active" exact-active-class="navbar-list-item__link--active")
    li.navbar-list-item__item
      img.navbar-list-item__image(:src="imagePath")
      p.navbar-list-item__content {{ content }}
</template>

<script setup lang="ts">
import type { NavBarListItem } from '@/types'
import { RouterLink } from 'vue-router'

defineProps<NavBarListItem>()
</script>

<style lang="scss" scoped>
.navbar-list-item__link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.navbar-list-item__item {
  width: 224px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 14px 0 14px 12px;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 100%;
  border-radius: 8px;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.navbar-list-item__link:hover .navbar-list-item__item {
  cursor: pointer;
  background: #eef2ff;
  color: #4f46e5;
}

.navbar-list-item__link--active .navbar-list-item__item {
  cursor: pointer;
  background: #eef2ff;
  color: #4f46e5;
}

.navbar-list-item__link--active .navbar-list-item__image {
  filter: brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(1352%) hue-rotate(230deg)
    brightness(98%) contrast(90%);
}

.navbar-list-item__content {
  margin-bottom: 0;
}

.navbar-list-item__image {
  // Image styles
}
</style>
