<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{ checked: boolean, planned?: boolean }>(), { planned: false })
const label = computed(() => props.checked ? (props.planned ? 'Planned' : 'Documented') : 'Not documented or unverified')
</script>
<template>
  <svg class="comparison-mark" :class="checked ? 'mark-check' : 'mark-cross'" viewBox="0 0 24 24" role="img" :aria-label="label">
    <title>{{ label }}</title>
    <path v-if="checked" d="m5 12 4 4L19 6" />
    <path v-else d="m6 6 12 12 M18 6 6 18" />
  </svg>
</template>
<style scoped>
.comparison-mark { display: block; flex-shrink: 0; width: 25px; height: 25px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.mark-check { color: #86C7A6; }
.mark-cross { color: #E8A0A0; }
</style>
