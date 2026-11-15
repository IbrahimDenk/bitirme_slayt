<script setup lang="ts">
import { useIsSlideActive } from '@slidev/client'
const isActive = useIsSlideActive()
</script>

<template>
  <section class="objectives-overview" :class="{ 'is-active': isActive }" aria-labelledby="objectives-title">
    <header class="objectives-heading"><h1 id="objectives-title">Project Objectives</h1></header>

    <section class="main-objective" aria-labelledby="main-objective-label">
      <h2 id="main-objective-label" class="objective-label">Main Objective</h2>
      <p>Build a multi-agent platform that shows job seekers how their CV matches a job posting and helps them prepare for an interview for that role.</p>
    </section>

    <section class="objective-flow" aria-label="Planned candidate workflow">
      <div class="flow-track" aria-hidden="true"><span class="flow-light" /></div>
      <ol>
        <li class="flow-step">
          <div class="flow-icon" aria-hidden="true"><span class="icon-highlight" /><svg viewBox="0 0 32 32"><path d="M17 28H6V4h14l6 6v7 M20 4v7h6 M10 13h5 M10 18h5 M18 24l3 3 7-8" /></svg></div>
          <div class="step-copy"><h2>CV &amp; Skills Practice</h2><p>Generate practice questions for skills listed in the candidate’s CV.</p></div>
        </li>
        <li class="flow-step">
          <div class="flow-icon" aria-hidden="true"><span class="icon-highlight" /><svg viewBox="0 0 32 32"><path d="m12 20 8-8 M10 17l-3 3a5 5 0 0 0 7 7l5-5a5 5 0 0 0 0-7 M22 15l3-3a5 5 0 0 0-7-7l-5 5a5 5 0 0 0 0 7" /></svg></div>
          <div class="step-copy"><h2>Explainable Job Matching</h2><p>Score each match and show which CV excerpts support the job requirements.</p></div>
        </li>
        <li class="flow-step">
          <div class="flow-icon" aria-hidden="true"><span class="icon-highlight" /><svg viewBox="0 0 32 32"><path d="m6 21 15-15a3 3 0 0 1 5 5L11 26l-7 2 2-7Z M18 9l5 5 M6 21l5 5" /></svg></div>
          <div class="step-copy"><h2>Tailored CV Guidance</h2><p>Suggest which existing skills and projects to highlight.</p></div>
        </li>
        <li class="flow-step">
          <div class="flow-icon" aria-hidden="true"><span class="icon-highlight" /><svg viewBox="0 0 32 32"><rect x="11" y="3" width="10" height="17" rx="5" /><path d="M7 15v2a9 9 0 0 0 18 0v-2 M16 26v4 M11 30h10" /></svg></div>
          <div class="step-copy"><h2>Mock Interview</h2><p>Run a role-specific video mock interview with AI scoring and feedback.</p></div>
        </li>
      </ol>
    </section>

    <div class="expected-outcomes">
      <section><h2 class="objective-label">At Project Completion</h2><p>Deliver a working prototype that demonstrates the full candidate workflow.</p></section>
      <section><h2 class="objective-label">Longer-Term Goal</h2><p>Evaluate the prototype across more job roles and candidate profiles.</p></section>
      <section><h2 class="objective-label">Expected Impact</h2><p>Help applicants understand their fit for a role and decide what to improve.</p></section>
    </div>
  </section>
</template>

<style scoped>
.objectives-overview { position: absolute; inset: 0; color: var(--capstone-paper); font-family: var(--capstone-font); }
.objectives-heading { position: absolute; top: 49px; left: var(--capstone-margin); }
.objectives-heading h1 { margin: 0; color: var(--capstone-paper); font-size: 44px; font-weight: 600; line-height: 1.25; letter-spacing: -1.2px; }
.objective-label { margin: 0; color: var(--capstone-teal); font-size: 14px; font-weight: 600; line-height: 1.4; letter-spacing: 1.8px; text-transform: uppercase; }
.main-objective { position: absolute; top: 181px; left: var(--capstone-margin); width: 346px; }
.main-objective p { margin: 21px 0 0; color: var(--capstone-paper); font-size: 29px; font-weight: 500; line-height: 1.38; letter-spacing: -0.45px; }
.objective-flow { position: absolute; top: 180px; left: 464px; right: var(--capstone-margin); }
.objective-flow ol { position: relative; display: grid; gap: 26px; margin: 0; padding: 0; list-style: none; }
.flow-step { display: flex; gap: 18px; align-items: flex-start; min-width: 0; height: 54px; margin: 0; padding: 0; }
.flow-icon { position: relative; display: flex; flex: 0 0 38px; align-items: center; justify-content: center; width: 38px; height: 38px; margin-top: 1px; border-radius: 50%; background: var(--capstone-navy); color: var(--capstone-teal); }
.flow-icon svg { position: relative; width: 28px; height: 28px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.step-copy { min-width: 0; }
.step-copy h2 { margin: 0; color: var(--capstone-paper); font-size: 22px; font-weight: 600; line-height: 1.3; letter-spacing: -0.25px; }
.step-copy p { margin: 6px 0 0; color: var(--capstone-muted); font-size: 17px; font-weight: 400; line-height: 1.35; white-space: nowrap; }
.flow-track { position: absolute; top: 20px; left: 14px; width: 10px; height: 240px; overflow: hidden; }
.flow-track::before { position: absolute; top: 0; bottom: 0; left: 4px; width: 1px; background: var(--capstone-teal); opacity: 0.35; content: ''; }
.flow-light { position: absolute; top: 0; left: 2px; width: 5px; height: 14px; margin-top: -7px; border-radius: 50%; background: #acfff1; filter: blur(0.8px); box-shadow: 0 0 6px #69d4ca99; opacity: 0; }
.icon-highlight { position: absolute; inset: -2px; border: 1px solid var(--capstone-teal); border-radius: inherit; background: #69d4ca19; box-shadow: 0 0 12px #69d4ca30; opacity: 0; }
.is-active .flow-light { animation: workflow-travel 7.5s linear infinite; }
.is-active .icon-highlight { animation: workflow-arrival 7.5s linear infinite; }
.flow-step:nth-child(2) .icon-highlight { animation-delay: 0.8s; }
.flow-step:nth-child(3) .icon-highlight { animation-delay: 1.6s; }
.flow-step:nth-child(4) .icon-highlight { animation-delay: 2.4s; }
@keyframes workflow-travel {
  0% { transform: translateY(0); opacity: 0; }
  4% { transform: translateY(0); opacity: 0.95; }
  36% { transform: translateY(240px); opacity: 0.95; }
  38%, 100% { transform: translateY(240px); opacity: 0; }
}
@keyframes workflow-arrival {
  0%, 4%, 8.4%, 100% { opacity: 0; }
  4.4%, 7% { opacity: 1; }
}
.expected-outcomes { position: absolute; top: 529px; right: var(--capstone-margin); left: var(--capstone-margin); display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; padding-top: 26px; border-top: 1px solid var(--capstone-rule); }
.expected-outcomes p { margin: 13px 0 0; color: var(--capstone-muted); font-size: 19px; line-height: 1.45; }
@media (prefers-reduced-motion: reduce) {
  .is-active .flow-light, .is-active .icon-highlight { animation: none; opacity: 0; }
}
</style>
