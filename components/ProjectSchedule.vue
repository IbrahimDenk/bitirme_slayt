<script setup lang="ts">
import { useIsSlideActive } from '@slidev/client'
import { workPackages } from '../data/workPackages'
const isActive = useIsSlideActive()
const weeks = Array.from({ length: 14 }, (_, i) => i + 1)
</script>
<template>
  <section class="schedule-overview" :class="{ 'is-active': isActive }" aria-labelledby="schedule-title">
    <header class="schedule-heading"><h1 id="schedule-title">Work Time Plan of the Project</h1></header>
    <p class="schedule-subtitle"><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="6" width="24" height="23" rx="2" /><path d="M10 3v7 M22 3v7 M4 14h24 M10 20h3 M19 20h3 M10 25h3" /></svg><span>Proposed 14-week plan</span></p>
    <div class="gantt" role="table" aria-label="Proposed Project I work plan, weeks 1 through 14">
      <div class="gantt-header gantt-grid" role="row"><span role="columnheader">WP</span><span role="columnheader">Work and Activity</span><span role="columnheader">Proposed Lead</span><span v-for="week in weeks" :key="week" class="week-header" role="columnheader">W{{ week }}</span></div>
      <div v-for="wp in workPackages" :key="wp.id" class="gantt-row gantt-grid" role="row" :data-wp="wp.id">
        <span class="gantt-wp" role="rowheader" :style="{ color: wp.color }">{{ wp.id }}</span><span class="gantt-activity" role="cell">{{ wp.name }}</span><span class="gantt-lead" role="cell">{{ wp.lead }}</span>
        <span v-for="week in weeks" :key="week" class="week-cell" role="cell" :style="{ gridColumn: week + 3 }" :aria-label="`W${week}: ${week >= wp.start && week <= wp.end ? 'planned' : 'not scheduled'}`" />
        <span class="gantt-bar" role="img" :aria-label="`${wp.id}: planned W${wp.start}–W${wp.end}, inclusive`" :data-start="wp.start" :data-end="wp.end" :style="{ gridColumn: `${wp.start + 3} / ${wp.end + 4}`, background: wp.color }"><span class="bar-entry-light" aria-hidden="true" /></span>
      </div>
    </div>
    <p class="preparation-note"><strong>W1–W3</strong><span>Literature review &amp; requirements</span></p>
    <div class="schedule-details">
      <section><h2>Team Leader</h2><p>Fatih Yunus Yıldız coordinates the project and advisor updates.</p></section>
      <section><h2>Task Sharing</h2><p>Both members integrate. W10: test one CV, one saved job, and one sample answer.</p></section>
      <section><h2>Follow-up</h2><p>Weekly team check-ins, advisor reviews, and a shared task board.</p></section>
    </div>
  </section>
</template>
<style scoped>
.schedule-overview { position: absolute; inset: 0; color: var(--capstone-paper); font-family: var(--capstone-font); }
.schedule-heading { position: absolute; top: 49px; left: var(--capstone-margin); }
.schedule-heading h1 { margin: 0; font-size: 42px; font-weight: 600; line-height: 1.25; letter-spacing: -1.1px; }
.schedule-subtitle { position: absolute; top: 129px; left: var(--capstone-margin); display: flex; align-items: center; gap: 13px; margin: 0; color: var(--capstone-teal); font-size: 18px; line-height: 1.4; }
.schedule-subtitle svg { width: 27px; height: 27px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.gantt { position: absolute; top: 184px; right: var(--capstone-margin); left: var(--capstone-margin); }
.gantt-grid { display: grid; grid-template-columns: 60px 328px 190px repeat(14, minmax(0, 1fr)); }
.gantt-header { height: 44px; align-items: center; border-bottom: 1px solid var(--capstone-rule); color: var(--capstone-teal); font-size: 14px; font-weight: 600; }
.week-header { text-align: center; font-size: 14px; }
.gantt-row { height: 54px; border-bottom: 1px solid var(--capstone-rule); align-items: center; }
.gantt-row > * { grid-row: 1; min-width: 0; }
.gantt-wp { font-size: 16px; font-weight: 600; }
.gantt-activity { padding-right: 12px; font-size: 17px; font-weight: 500; line-height: 1.3; }
.gantt-lead { padding-right: 12px; color: var(--capstone-muted); font-size: 16px; line-height: 1.35; }
.week-cell { align-self: stretch; border-left: 1px solid #26384d; }
.week-cell:last-of-type { border-right: 1px solid #26384d; }
.gantt-bar { position: relative; z-index: 1; height: 21px; margin: 0 3px; border-radius: 3px; overflow: hidden; }
.bar-entry-light { position: absolute; top: 0; bottom: 0; left: -40px; width: 40px; background: linear-gradient(90deg, transparent, #ffffffbb, transparent); opacity: 0; }
.is-active .bar-entry-light { animation: gantt-entry 2.5s ease-out infinite; }
@keyframes gantt-entry { 0% { left: -40px; opacity: 0; } 6% { opacity: 0.65; } 48%, 100% { left: 100%; opacity: 0; } }
.preparation-note { position: absolute; top: 521px; left: var(--capstone-margin); display: flex; gap: 14px; margin: 0; color: var(--capstone-muted); font-size: 17px; line-height: 1.4; }
.preparation-note strong { color: var(--capstone-teal); font-weight: 500; }
.schedule-details { position: absolute; top: 565px; right: var(--capstone-margin); left: var(--capstone-margin); display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; padding-top: 22px; border-top: 1px solid var(--capstone-rule); }
.schedule-details h2 { margin: 0; color: var(--capstone-teal); font-size: 14px; font-weight: 600; line-height: 1.4; letter-spacing: 1.8px; text-transform: uppercase; }
.schedule-details p { margin: 10px 0 0; color: var(--capstone-muted); font-size: 18px; line-height: 1.4; }
@media (prefers-reduced-motion: reduce) { .is-active .bar-entry-light { animation: none; opacity: 0; } }
</style>
