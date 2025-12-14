<template>
  <RouterLink class="navbar-list-item-link" :to="path" active-class="active" exact-active-class="active">
    <li class="navbar-list-item">
      <img :src="imagePath" />
      <p>{{ content }}</p>
    </li>
  </RouterLink>
</template>

<script setup lang="ts">
import type { NavBarListItem } from '@/types';
import { RouterLink } from 'vue-router';

const props = defineProps<{
  item: NavBarListItem;
}>();

const { imagePath, content, path } = props.item;
</script>

<style scoped>
.navbar-list-item-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.navbar-list-item {
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
}

.navbar-list-item:hover {
  cursor: pointer;
  background: #eef2ff;
  color: #4F46E5;
}

.navbar-list-item-link.active > .navbar-list-item{
  cursor: pointer;
  background: #eef2ff;
  color: #4F46E5;
}

.navbar-list-item-link.active>.navbar-list-item>img {
  filter: brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(1352%) hue-rotate(230deg) brightness(98%) contrast(90%);
}
</style>