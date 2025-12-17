<script setup lang="ts">
import { RouterView } from 'vue-router'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
</script>

<template lang="pug">
  RouterView
</template>

<style lang="scss">
body {
  font-family: 'Inter', sans-serif;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
p{
  margin-bottom: 0 !important;
}
</style>
