<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useIsSlideActive } from '@slidev/client'
const isActive = useIsSlideActive()
const currentStage = ref(-1)
const flowPosition = ref(0)
const flowOpacity = ref(0)
const stageDurationMs = 2000
const travelDurationMs = stageDurationMs * 2
const cycleDurationMs = stageDurationMs * 3
let animationFrame: number | undefined

function stopCycle() {
  if (animationFrame !== undefined) {
    cancelAnimationFrame(animationFrame)
    animationFrame = undefined
  }
}

function startCycle() {
  const startedAt = performance.now()

  function updateFrame(now: number) {
    const elapsed = (now - startedAt) % cycleDurationMs
    flowPosition.value = Math.min(elapsed / travelDurationMs, 1) * 100
    flowOpacity.value = Math.max(0, Math.min(elapsed / 200, (travelDurationMs - elapsed) / 200, 1)) * .95
    const nearestStage = Math.round(flowPosition.value / 50)
    const isOverIcon = Math.abs(flowPosition.value - nearestStage * 50) <= 5
    currentStage.value = flowOpacity.value > 0 && isOverIcon ? nearestStage : -1
    animationFrame = requestAnimationFrame(updateFrame)
  }

  animationFrame = requestAnimationFrame(updateFrame)
}

onMounted(() => {
  watch(isActive, (active) => {
    stopCycle()
    currentStage.value = -1
    flowPosition.value = 0
    flowOpacity.value = 0
    if (active)
      startCycle()
  }, { immediate: true })
})

onBeforeUnmount(stopCycle)
</script>
<template>
  <section class="conclusion-overview" :class="{ 'is-active': isActive }" aria-labelledby="conclusion-title">
    <header class="conclusion-heading"><h1 id="conclusion-title">Conclusion and Discussion</h1></header>
    <div class="conclusion-findings">
      <section><h2>Project Progress</h2><p>The midterm plan defines the candidate workflow, five work packages, and draft validation criteria.</p></section>
      <section><h2>Design Decisions</h2><p>The platform links job requirements to CV quotes. Answers must use the job’s language before AI scores them.</p></section>
    </div>
    <div class="conclusion-divider" aria-hidden="true" />
    <ol class="conclusion-timeline" aria-label="Project stages and planned next steps">
      <li class="conclusion-stage" :class="{ 'is-current': isActive && currentStage === 0 }">
        <div class="timeline-flow" aria-hidden="true"><span class="flow-light" :style="{ left: `${flowPosition}%`, opacity: flowOpacity }" /></div>
        <div class="stage-icon" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M7 28V4h13l6 6v18H7Z M20 4v7h6 M11 16h11 M11 21h8" /></svg></div>
        <h2>Midterm</h2><p>Literature review, project scope, and draft evaluation plan.</p>
      </li>
      <li class="conclusion-stage" :class="{ 'is-current': isActive && currentStage === 1 }">
        <div class="stage-icon" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="m12 20 8-8 M10 17l-3 3a5 5 0 0 0 7 7l5-5a5 5 0 0 0 0-7 M22 15l3-3a5 5 0 0 0-7-7l-5 5a5 5 0 0 0 0 7" /></svg></div>
        <h2>End of Project I</h2><p>Integrate the core workflow and run a small pilot with English and Turkish examples.</p>
      </li>
      <li class="conclusion-stage" :class="{ 'is-current': isActive && currentStage === 2 }">
        <div class="stage-icon" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M12 5h15v23H5V5h3 M11 3h10v5H11V3Z M10 15l2 2 4-4 M18 15h5 M10 23l2 2 4-4 M18 23h5" /></svg></div>
        <h2>Project II</h2><p>Evaluate more roles using English and Turkish CVs, postings, and interview answers.</p>
      </li>
    </ol>
  </section>
</template>
<style scoped>
.conclusion-overview { position: absolute; inset: 0; color: var(--capstone-paper); font-family: var(--capstone-font); }
.conclusion-heading { position: absolute; top: 49px; left: var(--capstone-margin); }
.conclusion-heading h1 { margin: 0; font-size: 44px; font-weight: 600; line-height: 1.25; letter-spacing: -1.2px; }
.conclusion-findings { position: absolute; top: 164px; right: var(--capstone-margin); left: var(--capstone-margin); display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 48px; }
.conclusion-findings h2 { margin: 0; color: var(--capstone-teal); font-size: 15px; font-weight: 600; line-height: 1.4; letter-spacing: 1.8px; text-transform: uppercase; }
.conclusion-findings p { margin: 18px 0 0; color: var(--capstone-paper); font-size: 24px; font-weight: 400; line-height: 1.42; letter-spacing: -0.2px; }
.conclusion-divider { position: absolute; top: 405px; left: var(--capstone-margin); right: var(--capstone-margin); height: 1px; background: var(--capstone-rule); }
.conclusion-timeline { position: absolute; top: 442px; right: var(--capstone-margin); left: var(--capstone-margin); display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; margin: 0; padding: 0; list-style: none; }
.conclusion-timeline::before { position: absolute; top: 25px; left: calc((100% - 64px) / 6); right: calc((100% - 64px) / 6); height: 1px; background: #527780; content: ''; }
.conclusion-stage { position: relative; margin: 0; padding: 0; text-align: center; }
.timeline-flow { position: absolute; top: 20px; left: 50%; width: calc(200% + 64px); height: 10px; overflow: hidden; pointer-events: none; }
.flow-light { position: absolute; top: 2px; left: 0; width: 14px; height: 5px; margin-left: -7px; border-radius: 50%; background: #acfff1; filter: blur(.8px); box-shadow: 0 0 6px #69d4ca99; opacity: 0; }
.stage-icon { position: relative; display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; margin: 0 auto; border-radius: 50%; background: var(--capstone-navy); color: var(--capstone-muted); transform: translateY(0) scale(1); transition: color 350ms ease, transform 450ms cubic-bezier(.22,.8,.2,1); }
.stage-icon::after { position: absolute; inset: -5px; border: 1.5px solid var(--capstone-teal); border-radius: 50%; background: #69d4ca09; box-shadow: 0 0 14px #69d4ca40, inset 0 0 12px #69d4ca12; opacity: 0; transform: scale(.9); transition: opacity 450ms ease, transform 450ms cubic-bezier(.22,.8,.2,1); pointer-events: none; content: ''; }
.stage-icon svg { display: block; width: 32px; height: 32px; fill: none; color: inherit; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; filter: drop-shadow(0 0 0 #69d4ca00); transition: filter 350ms ease; }
.conclusion-stage h2 { margin: 21px 0 0; color: var(--capstone-paper); font-size: 23px; font-weight: 600; line-height: 1.3; }
.conclusion-stage p { max-width: 340px; margin: 13px auto 0; color: var(--capstone-muted); font-size: 20px; line-height: 1.4; }
.conclusion-stage.is-current .stage-icon { color: var(--capstone-teal); transform: translateY(-3px) scale(1.14); transition: color 250ms ease, transform 300ms cubic-bezier(.22,.8,.2,1); }
.conclusion-stage.is-current .stage-icon svg { filter: drop-shadow(0 0 5px #69d4ca66); transition: filter 250ms ease; }
.conclusion-stage.is-current .stage-icon::after { opacity: 1; transform: scale(1); transition: opacity 300ms ease, transform 300ms cubic-bezier(.22,.8,.2,1); }
@media (prefers-reduced-motion: reduce) {
  .stage-icon, .stage-icon svg, .stage-icon::after, .conclusion-stage.is-current .stage-icon, .conclusion-stage.is-current .stage-icon svg, .conclusion-stage.is-current .stage-icon::after { transition: none; }
  .conclusion-stage.is-current .stage-icon { color: var(--capstone-muted); transform: none; }
  .conclusion-stage.is-current .stage-icon svg { filter: none; }
  .conclusion-stage.is-current .stage-icon::after { opacity: 0; }
  .timeline-flow { display: none; }
}
</style>
