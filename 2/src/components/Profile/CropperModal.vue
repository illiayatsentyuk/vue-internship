<template lang="pug">
	Cropper(v-model="cropper" src="https://images.pexels.com/photos/4323307/pexels-photo-4323307.jpeg" @change="change")
</template>

<script setup lang="ts">
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
const change = ({ coordinates, canvas }: { coordinates: any, canvas: any }) => {
  console.log(coordinates, canvas);
}
</script>

<style lang="scss" scoped>
.cropper {
  width: 100%;
  height: 100%;
}
</style>