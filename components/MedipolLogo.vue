<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  tone?: 'light' | 'dark'
}>(), {
  tone: 'light',
})

const logoSource = computed(() => `${import.meta.env.BASE_URL}medipol-logo-${props.tone}.png`)
</script>

<template>
  <img
    class="medipol-logo"
    :src="logoSource"
    alt="İstanbul Medipol Üniversitesi"
    width="526"
    height="184"
    draggable="false"
  />
</template>

<style scoped>
.medipol-logo {
  position: absolute;
  top: var(--capstone-logo-top, 38px);
  right: var(--capstone-margin, 64px);
  z-index: 20;
  display: block;
  width: var(--capstone-logo-width, 200px);
  height: auto;
  aspect-ratio: 526 / 184;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
}
</style>
