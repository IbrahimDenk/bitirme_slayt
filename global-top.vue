<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import MedipolLogo from './components/MedipolLogo.vue'

const { currentFrontmatter } = useNav()
// A light logo goes on navy slides; set logoTone: dark on light slides.
const logoTone = computed(() => currentFrontmatter.value.logoTone === 'dark' ? 'dark' : 'light')
</script>

<template>
  <MedipolLogo :tone="logoTone" />
</template>
