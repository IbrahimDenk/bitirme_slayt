<script setup lang="ts">
import { useIsSlideActive } from '@slidev/client'
import { workPackages as packages } from '../data/workPackages'
const isActive = useIsSlideActive()
const total = packages.reduce((sum, wp) => sum + wp.share, 0)
const darken = (hex: string) => '#' + hex.slice(1).match(/../g)!.map(channel => Math.round(parseInt(channel, 16) * 0.56).toString(16).padStart(2, '0')).join('')
const segments = packages.map((wp, index) => {
  const start = packages.slice(0, index).reduce((sum, item) => sum + item.share, 0)
  const angle = ((start + wp.share / 2) * 3.6 - 90) * Math.PI / 180
  return { ...wp, start, sideColor: darken(wp.color), motionStyle: {
    '--wp-pulse-delay': `${index}s`,
    '--wp-color': wp.color,
    '--wp-soft-glow': `${wp.color}20`,
    '--wp-soft-shadow': `${wp.color}12`,
    '--slice-x': `${(Math.cos(angle) * 5).toFixed(3)}px`,
    '--slice-y': `${(Math.sin(angle) * 5).toFixed(3)}px`,
  } }
})
</script>
<template>
  <section class="contribution-overview" :class="{ 'is-active': isActive }" aria-labelledby="contribution-title">
    <header class="contribution-heading"><h1 id="contribution-title">The Contribution of Each WP</h1></header>
    <svg class="contribution-chart" viewBox="0 0 440 440" role="img" aria-labelledby="contribution-chart-title contribution-chart-description">
      <title id="contribution-chart-title">Total planned work package contribution: 100 percent</title>
      <desc id="contribution-chart-description">WP1 15 percent, WP2 20 percent, WP3 25 percent, WP4 25 percent, WP5 15 percent. These are planned shares of project scope, not completion percentages.</desc>
      <g class="donut-segments" fill="none" stroke-width="44">
        <g v-for="wp in segments" :key="`${wp.id}-depth`" class="donut-slice slice-depth" :style="wp.motionStyle" :data-wp="wp.id">
          <g transform="translate(0 3.5)"><circle class="donut-side" cx="220" cy="220" r="156" pathLength="100" :stroke="wp.sideColor" :stroke-dasharray="`${wp.share - 0.6} ${100 - wp.share + 0.6}`" :stroke-dashoffset="-wp.start - 0.3" transform="rotate(-90 220 220)" /></g>
        </g>
        <g v-for="wp in segments" :key="`${wp.id}-face`" class="donut-slice slice-face" :style="wp.motionStyle" :data-wp="wp.id">
          <circle class="donut-segment donut-face" cx="220" cy="220" r="156" pathLength="100" :stroke="wp.color" :stroke-dasharray="`${wp.share - 0.6} ${100 - wp.share + 0.6}`" :stroke-dashoffset="-wp.start - 0.3" transform="rotate(-90 220 220)" />
        </g>
      </g>
      <text class="contribution-total" x="220" y="219" text-anchor="middle">{{ total }}%</text>
      <text class="contribution-caption" x="220" y="255" text-anchor="middle">Total planned contribution</text>
    </svg>
    <ol class="contribution-list" aria-label="Planned contribution by work package">
      <li v-for="wp in segments" :key="wp.id" :style="wp.motionStyle"><span class="wp-color" aria-hidden="true" /><span class="wp-id">{{ wp.id }}</span><span class="wp-name">{{ wp.name }}</span><strong class="wp-share">{{ wp.share }}%</strong></li>
    </ol>
  </section>
</template>
<style scoped>
.contribution-overview { --wp-cycle-duration: 8.5s; position: absolute; inset: 0; color: var(--capstone-paper); font-family: var(--capstone-font); }
.contribution-heading { position: absolute; top: 49px; left: var(--capstone-margin); }
.contribution-heading h1 { margin: 0; font-size: 44px; font-weight: 600; line-height: 1.25; letter-spacing: -1.2px; }
.contribution-chart { position: absolute; top: 169px; left: var(--capstone-margin); display: block; width: 440px; height: 440px; font-family: var(--capstone-font); overflow: visible; }
.contribution-total { fill: var(--capstone-paper); font-size: 60px; font-weight: 600; letter-spacing: -2px; }
.contribution-caption { fill: var(--capstone-muted); font-size: 17.5px; font-weight: 400; }
.donut-slice { transform: translate(0, 0); }
.slice-depth { filter: drop-shadow(0 2px 2px #00000050); }
.donut-face, .wp-color { filter: brightness(1); }
.is-active .donut-slice { animation: slice-emerge var(--wp-cycle-duration) ease-in-out infinite; animation-delay: var(--wp-pulse-delay); }
.is-active .donut-face, .is-active .wp-color { animation: contribution-pulse var(--wp-cycle-duration) ease-in-out infinite; animation-delay: var(--wp-pulse-delay); }
/* Five one-second highlights followed by a 3.5-second pause in each 8.5-second cycle. */
@keyframes slice-emerge { 0%, 11.764706%, 100% { transform: translate(0, 0); } 2.352941%, 8.235294% { transform: translate(var(--slice-x), var(--slice-y)); } }
@keyframes contribution-pulse { 0%, 11.764706%, 100% { filter: brightness(1); } 2.352941%, 8.235294% { filter: brightness(1.18); } }
@keyframes contribution-row-glow { 0%, 11.764706%, 100% { opacity: 0; } 2.352941%, 8.235294% { opacity: 1; } }
.contribution-list { position: absolute; top: 178px; left: 548px; right: var(--capstone-margin); margin: 0; padding: 0; list-style: none; }
.contribution-list li { position: relative; isolation: isolate; display: grid; grid-template-columns: 14px 48px minmax(0, 1fr) 60px; align-items: center; gap: 14px; height: 86px; margin: 0; padding: 0; border-bottom: 1px solid var(--capstone-rule); }
.contribution-list li::before { position: absolute; z-index: -1; inset: 8px -12px; border-radius: 8px; background: linear-gradient(90deg, var(--wp-soft-glow), transparent); box-shadow: inset 0 0 26px var(--wp-soft-glow), 0 0 18px var(--wp-soft-shadow); opacity: 0; pointer-events: none; content: ''; }
.is-active .contribution-list li::before { animation: contribution-row-glow var(--wp-cycle-duration) ease-in-out infinite; animation-delay: var(--wp-pulse-delay); }
.wp-color { width: 13px; height: 13px; border-radius: 50%; background: var(--wp-color); }
.wp-id { color: var(--capstone-muted); font-size: 17px; font-weight: 500; }
.wp-name { color: var(--capstone-paper); font-size: 21px; font-weight: 500; line-height: 1.3; }
.wp-share { color: var(--capstone-paper); font-size: 28px; font-weight: 600; text-align: right; }
@media (prefers-reduced-motion: reduce) {
  .is-active .donut-slice { animation: none; transform: translate(0, 0); }
  .is-active .donut-face, .is-active .wp-color { animation: none; filter: brightness(1); }
  .is-active .contribution-list li::before { animation: none; opacity: 0; }
}
</style>
