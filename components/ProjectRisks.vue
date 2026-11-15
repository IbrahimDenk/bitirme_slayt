<script setup lang="ts">
import { useIsSlideActive } from '@slidev/client'
import { workPackages } from '../data/workPackages'
const isActive = useIsSlideActive()
</script>
<template>
  <section class="risks-overview" :class="{ 'is-active': isActive }" aria-labelledby="risks-title">
    <header class="risks-heading"><h1 id="risks-title">Project Management Risks and B-Plans</h1></header>
    <table class="risks-table" aria-label="Work package risks and contingency plans">
      <colgroup><col class="risks-wp"><col class="risks-risk"><col></colgroup>
      <thead><tr><th scope="col">WP</th><th scope="col"><span class="risk-column-title"><span class="warning-icon-frame"><svg class="warning-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="m16 4 14 24H2L16 4Z M16 12v8 M16 24v.2" /></svg></span><span>Risk</span></span></th><th scope="col"><span class="risk-column-title"><span class="bplan-icon"><svg class="bplan-spin" viewBox="0 0 32 32" aria-hidden="true"><path d="M6 28V17a7 7 0 0 1 7-7h13 M21 5l5 5-5 5 M6 20h14a6 6 0 0 0 6-6" /></svg></span><span>B-Plan</span></span></th></tr></thead>
      <tbody><tr v-for="wp in workPackages" :key="wp.id"><th scope="row"><span class="risk-wp-label"><span class="risk-wp-color" :style="{ background: wp.color }" aria-hidden="true" />{{ wp.id }}</span></th><td>{{ wp.risk }}</td><td><template v-if="wp.id === 'WP3'">Verify the excerpt against the CV and show <strong>Needs review</strong> when the link is uncertain.</template><template v-else>{{ wp.bPlan }}</template></td></tr></tbody>
    </table>
  </section>
</template>
<style scoped>
.risks-overview { position: absolute; inset: 0; color: var(--capstone-paper); font-family: var(--capstone-font); }
.risks-heading { position: absolute; top: 49px; left: var(--capstone-margin); }
.risks-heading h1 { margin: 0; font-size: 40px; font-weight: 600; line-height: 1.25; letter-spacing: -1px; }
.risks-table { position: absolute; top: 157px; left: var(--capstone-margin); width: 1152px; table-layout: fixed; border-collapse: collapse; font-size: 20px; line-height: 1.4; }
.risks-wp { width: 100px; }
.risks-risk { width: 490px; }
.risks-table th, .risks-table td { padding: 12px 20px 12px 0; border-bottom: 1px solid var(--capstone-rule); text-align: left; vertical-align: middle; }
.risks-table thead tr { height: 58px; }
.risks-table thead th { color: var(--capstone-teal); font-size: 17px; font-weight: 600; }
.risks-table tbody tr { height: 90px; }
.risks-table tbody th { font-size: 17px; font-weight: 600; }
.risks-table tbody td:last-child { color: var(--capstone-muted); }
.risks-table strong { color: var(--capstone-paper); font-weight: 600; }
.risk-column-title { display: flex; align-items: center; gap: 11px; font-size: 17.85px; }
.risk-column-title svg { display: block; width: 26.25px; height: 26.25px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.risk-wp-label { display: flex; align-items: center; gap: 11px; }
.risk-wp-color { width: 12px; height: 12px; border-radius: 50%; }
.warning-icon-frame, .bplan-icon { position: relative; display: block; flex: 0 0 26.25px; width: 26.25px; height: 26.25px; }
.warning-icon { color: #F87171; transform-box: view-box; transform-origin: 50% 50%; transform: scale(1); filter: brightness(1) drop-shadow(0 0 0 #f8717100); }
.bplan-spin { transform-box: view-box; transform-origin: 50% 50%; transform: rotate(0deg); }
.is-active .warning-icon { animation: warning-attention 6s ease-in-out infinite; }
.is-active .bplan-spin { animation: bplan-turn 6s ease-in-out infinite; animation-delay: 1.8s; }
@keyframes warning-attention {
  0%, 17%, 100% { transform: scale(1); filter: brightness(1) drop-shadow(0 0 0 #f8717100); }
  5%, 10% { transform: scale(1.11); filter: brightness(1.14) drop-shadow(0 0 4px #f8717199); }
}
@keyframes bplan-turn { 0% { transform: rotate(0deg); } 20%, 100% { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  .is-active .warning-icon, .is-active .bplan-spin { animation: none; transform: none; filter: none; }
}
</style>
