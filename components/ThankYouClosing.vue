<script setup lang="ts">
import { useIsSlideActive } from '@slidev/client'
const isActive = useIsSlideActive()
</script>
<template>
  <section class="closing-overview" :class="{ 'is-active': isActive }" aria-labelledby="closing-title">
    <div class="closing-copy"><h1 id="closing-title">Thank You</h1><p>Questions and Discussion</p></div>

    <svg class="closing-diagram" viewBox="0 0 560 300" role="img" aria-labelledby="closing-diagram-title closing-diagram-description">
      <title id="closing-diagram-title">From candidate CV to job match and interview practice</title>
      <desc id="closing-diagram-description">A CV with two skill lines connects to an evidence-based job match, represented by two matching rows and a check. The selected job match then connects to a mock interview, represented by a speech bubble and microphone. This diagram illustrates the planned workflow.</desc>
      <defs><radialGradient id="closing-soft-light"><stop offset="0" stop-color="#69d4ca" stop-opacity="0.14" /><stop offset="1" stop-color="#69d4ca" stop-opacity="0" /></radialGradient></defs>
      <g class="closing-light-fields" aria-hidden="true"><circle cx="68" cy="110" r="83" /><circle cx="280" cy="108" r="104" /><circle cx="492" cy="110" r="83" /></g>

      <g class="closing-connections" fill="none" aria-hidden="true">
        <path class="closing-link first" d="M104 110C151 110 181 100 225 100" pathLength="1" />
        <path class="closing-link second" d="M335 100C379 100 409 110 450 110" pathLength="1" />
      </g>

      <g class="closing-icons" fill="none" aria-hidden="true">
        <g class="cv-icon"><path d="M44 143V77H79L94 92V143Z M79 77V92H94" /><path class="cv-skills" d="M56 111H81 M56 125H75" /></g>
        <g class="job-match-icon">
          <rect class="match-frame" x="235" y="65" width="90" height="86" rx="16" />
          <g class="match-nodes"><circle cx="254" cy="93" r="3" /><circle cx="300" cy="93" r="3" /><circle cx="254" cy="113" r="3" /><circle cx="300" cy="113" r="3" /></g>
          <path class="match-detail first" d="M261 93H293" pathLength="1" />
          <path class="match-detail second" d="M261 113H293" pathLength="1" />
          <path class="match-detail check" d="M273 133L278 138L288 126" pathLength="1" />
        </g>
        <g class="interview-icon">
          <path d="M470 80H518A10 10 0 0 1 528 90V121A10 10 0 0 1 518 131H480L468 141V131A10 10 0 0 1 460 121V90A10 10 0 0 1 470 80Z" />
          <rect x="489" y="91" width="12" height="22" rx="6" /><path d="M484 106V109A11 11 0 0 0 506 109V106 M495 120V126 M490 126H500" />
          <g class="sound-waves"><path d="M533 102Q538 110 533 118 M541 97Q551 110 541 123" /></g>
        </g>
      </g>

      <g class="closing-diagram-labels"><text x="68" y="204" text-anchor="middle">Candidate CV</text><text class="match-label" x="280" y="204" text-anchor="middle">Job Match</text><text x="492" y="204" text-anchor="middle">Mock Interview</text></g>
    </svg>

    <footer class="closing-footer"><p class="closing-team">İbrahim Denk · Fatih Yunus Yıldız</p><p class="closing-advisor">Advisor · Prof. Selim Akyokuş</p></footer>
  </section>
</template>
<style scoped>
.closing-overview { position: absolute; inset: 0; color: var(--capstone-paper); font-family: var(--capstone-font); }
.closing-copy { position: absolute; top: 242px; left: var(--capstone-margin); }
.closing-copy h1 { margin: 0; color: var(--capstone-paper); font-size: 96px; font-weight: 600; line-height: 1.1; letter-spacing: -3.5px; white-space: nowrap; }
.closing-copy p { margin: 20px 0 0; color: var(--capstone-teal); opacity: 1; font-size: 28px; font-weight: 400; line-height: 1.4; letter-spacing: -0.3px; }
.closing-diagram { position: absolute; top: 214px; right: var(--capstone-margin); width: 560px; height: 300px; overflow: visible; font-family: var(--capstone-font); }
.closing-light-fields { fill: url(#closing-soft-light); }
.closing-link { --closing-rest-stroke: #527780; stroke: #527780; stroke-width: 1.25; stroke-linecap: round; stroke-dasharray: 1; stroke-dashoffset: 0; }
.closing-icons { stroke: var(--capstone-muted); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
.match-frame { fill: #142b40; stroke: #476575; }
.match-nodes { stroke: #86aaaF; }
.match-detail { stroke-dasharray: 1; stroke-dashoffset: 0; }
.match-detail.check { --closing-rest-stroke: var(--capstone-teal); stroke: var(--capstone-teal); }
.sound-waves { transform-box: fill-box; transform-origin: left center; }
.closing-diagram-labels { fill: var(--capstone-muted); font-size: 18px; font-weight: 500; }
.match-label { fill: var(--capstone-paper); font-size: 20px; font-weight: 600; }
.closing-footer { position: absolute; top: 553px; right: var(--capstone-margin); left: var(--capstone-margin); padding-top: 27px; border-top: 1px solid var(--capstone-rule); }
.closing-team { margin: 0; color: var(--capstone-paper); font-size: 26px; font-weight: 500; line-height: 1.4; }
.closing-advisor { margin: 11px 0 0; color: var(--capstone-muted); font-size: 22px; font-weight: 400; line-height: 1.4; }

/* One continuous 2.4 s cycle, including the matching lines and approval check. */
.is-active .closing-link, .is-active .match-detail {
  animation-duration: 2.4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.is-active .cv-skills { animation: closing-skills 2.4s ease-out infinite; }
.is-active .closing-link.first { animation-name: draw-first-link; }
.is-active .match-detail.first { animation-name: draw-first-match; }
.is-active .match-detail.second { animation-name: draw-second-match; }
.is-active .match-detail.check { animation-name: draw-check; }
.is-active .closing-link.second { animation-name: draw-second-link; }
.is-active .sound-waves { animation: closing-wave 2.4s ease-out infinite; }
@keyframes draw-first-link {
  0%, 12.5% { stroke-dashoffset: 1; opacity: 1; }
  29.167%, 88% { stroke-dashoffset: 0; opacity: 1; }
  96% { stroke-dashoffset: 0; opacity: 0; }
  100% { stroke-dashoffset: 1; opacity: 0; }
}
@keyframes draw-first-match {
  0%, 29.167% { stroke-dashoffset: 1; opacity: 1; }
  35.833%, 88% { stroke-dashoffset: 0; opacity: 1; }
  96% { stroke-dashoffset: 0; opacity: 0; }
  100% { stroke-dashoffset: 1; opacity: 0; }
}
@keyframes draw-second-match {
  0%, 35.833% { stroke-dashoffset: 1; opacity: 1; }
  42.5%, 88% { stroke-dashoffset: 0; opacity: 1; }
  96% { stroke-dashoffset: 0; opacity: 0; }
  100% { stroke-dashoffset: 1; opacity: 0; }
}
@keyframes draw-check {
  0%, 42.5% { stroke-dashoffset: 1; opacity: 1; }
  50%, 88% { stroke-dashoffset: 0; opacity: 1; }
  96% { stroke-dashoffset: 0; opacity: 0; }
  100% { stroke-dashoffset: 1; opacity: 0; }
}
@keyframes draw-second-link {
  0%, 50% { stroke-dashoffset: 1; opacity: 1; }
  66.667%, 88% { stroke-dashoffset: 0; opacity: 1; }
  96% { stroke-dashoffset: 0; opacity: 0; }
  100% { stroke-dashoffset: 1; opacity: 0; }
}
@keyframes closing-skills {
  0%, 20.833%, 100% { stroke: var(--capstone-muted); }
  6.25%, 13.54% { stroke: var(--capstone-teal); }
}
@keyframes closing-wave {
  0%, 66.667%, 81.25%, 100% { transform: scale(1); stroke: var(--capstone-muted); }
  73.23% { transform: scale(1.13); stroke: var(--capstone-teal); }
}
@media (prefers-reduced-motion: reduce) {
  .closing-overview.is-active .cv-skills,
  .closing-overview.is-active .closing-link,
  .closing-overview.is-active .match-detail,
  .closing-overview.is-active .sound-waves { animation: none; }
  .closing-link, .match-detail { stroke-dashoffset: 0; opacity: 1; }
  .sound-waves { transform: none; }
}
</style>
