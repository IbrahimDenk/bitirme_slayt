<script setup lang="ts">
import { useIsSlideActive } from '@slidev/client'
const isActive = useIsSlideActive()
</script>

<template>
  <figure class="cover-matching" :class="{ 'is-active': isActive }">
    <svg viewBox="-1 -1 412 244" role="img" aria-labelledby="cover-matching-title cover-matching-description">
      <title id="cover-matching-title">Candidate CV matched to a Backend Developer posting</title>
      <desc id="cover-matching-description">REST API project matches API development. PostgreSQL reporting matches SQL experience. A third connection attempts to reach Docker, stops at a cross, and highlights Docker in red because no corresponding CV evidence is shown. This is an illustrative example, not a claim that the candidate lacks the skill.</desc>
      <g class="matching-document">
        <rect class="document-sheet" x="0" y="0" width="180" height="242" rx="7" />
        <text class="document-heading" x="12" y="31">Candidate CV</text>
        <path class="document-detail" d="M12 51H53 M62 51H100" />
        <path class="document-divider" d="M12 68H168" />
        <rect class="row-highlight source first" x="7" y="82" width="166" height="36" rx="4" />
        <text class="document-row source first" x="12" y="105">REST API project</text>
        <rect class="row-highlight source second" x="7" y="138" width="166" height="36" rx="4" />
        <text class="document-row source second" x="12" y="161">PostgreSQL reporting</text>
      </g>
      <g class="matching-document">
        <rect class="document-sheet" x="230" y="0" width="180" height="242" rx="7" />
        <text class="document-heading" x="242" y="31">Backend Developer</text>
        <path class="document-detail" d="M242 51H295 M304 51H332" />
        <path class="document-divider" d="M242 68H398" />
        <rect class="row-highlight target first" x="237" y="82" width="166" height="36" rx="4" />
        <text class="document-row target first" x="242" y="105">API development</text>
        <rect class="row-highlight target second" x="237" y="138" width="166" height="36" rx="4" />
        <text class="document-row target second" x="242" y="161">SQL experience</text>
        <rect class="row-highlight missing-evidence" x="237" y="194" width="166" height="36" rx="4" />
        <text class="document-row unmatched" x="242" y="217">Docker</text>
      </g>
      <g class="matching-links" aria-hidden="true">
        <path class="match-line first" d="M180 100H230" pathLength="1" />
        <path class="match-line second" d="M180 156H230" pathLength="1" />
        <path class="match-attempt" d="M180 212H212" pathLength="1" />
        <path class="match-cross" d="m216 208 8 8 m0-8-8 8" />
      </g>
    </svg>
  </figure>
</template>

<style scoped>
/* Keep the original grid footprint; the rest of the cover stays fixed. */
.cover-matching {
  --cover-missing-evidence: #E8A0A0;
  position: relative;
  align-self: center;
  width: 310px;
  height: 202px;
  margin: 28px 0 0;
}
svg {
  position: absolute;
  top: 50%;
  right: 0;
  display: block;
  width: 412px;
  height: 244px;
  transform: translateY(-50%);
  overflow: visible;
  font-family: var(--capstone-font);
}
.document-sheet { fill: #13263e; stroke: #465a70; stroke-width: 1; }
.document-heading { fill: var(--capstone-paper); font-size: 15px; font-weight: 600; }
.document-detail, .document-divider { fill: none; stroke: var(--capstone-rule); stroke-width: 1; }
.document-detail { stroke-width: 2; stroke-linecap: round; }
.document-row { fill: var(--capstone-paper); font-size: 14px; font-weight: 500; }
.unmatched { fill: #99a9bb; }
.row-highlight { fill: var(--capstone-teal); opacity: 0; }
.row-highlight.missing-evidence { fill: var(--cover-missing-evidence); }
.match-attempt { fill: none; stroke: var(--cover-missing-evidence); stroke-width: 1.5; stroke-linecap: round; stroke-dasharray: 1; stroke-dashoffset: 0; }
.match-cross { fill: none; stroke: var(--cover-missing-evidence); stroke-width: 1.8; stroke-linecap: round; transform-box: fill-box; transform-origin: center; }
.match-line {
  fill: none;
  stroke: var(--capstone-teal);
  stroke-width: 1.5;
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
}
/* Continuous 2.4 s sequence. Documents and text remain readable throughout. */
.is-active .matching-document { animation: documents-appear 240ms ease-out both; }
.is-active .match-line,
.is-active .match-attempt,
.is-active .match-cross,
.is-active .row-highlight,
.is-active .document-row {
  animation-duration: 2.4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.is-active .match-line.first { animation-name: first-connection; }
.is-active .match-line.second { animation-name: second-connection; }
.is-active .row-highlight.source.first { animation-name: first-source-highlight; }
.is-active .row-highlight.target.first { animation-name: first-target-highlight; }
.is-active .row-highlight.source.second { animation-name: second-source-highlight; }
.is-active .row-highlight.target.second { animation-name: second-target-highlight; }
.is-active .document-row.source.first { animation-name: first-source-text; }
.is-active .document-row.target.first { animation-name: first-target-text; }
.is-active .document-row.source.second { animation-name: second-source-text; }
.is-active .document-row.target.second { animation-name: second-target-text; }
.is-active .match-attempt { animation-name: missing-connection-attempt; }
.is-active .match-cross { animation-name: missing-connection-cross; }
.is-active .row-highlight.missing-evidence { animation-name: missing-evidence-highlight; }
.is-active .document-row.unmatched { animation-name: missing-evidence-text; }
@keyframes documents-appear { from { opacity: 0; } to { opacity: 1; } }
@keyframes first-connection {
  0%, 4% { stroke-dashoffset: 1; opacity: 1; }
  23%, 85% { stroke-dashoffset: 0; opacity: 1; }
  96% { stroke-dashoffset: 0; opacity: 0; }
  100% { stroke-dashoffset: 1; opacity: 0; }
}
@keyframes second-connection {
  0%, 45% { stroke-dashoffset: 1; opacity: 1; }
  64%, 85% { stroke-dashoffset: 0; opacity: 1; }
  96% { stroke-dashoffset: 0; opacity: 0; }
  100% { stroke-dashoffset: 1; opacity: 0; }
}
@keyframes first-source-highlight { 0%, 19%, 100% { opacity: 0; } 3%, 15% { opacity: 0.19; } }
@keyframes first-target-highlight { 0%, 22.999% { opacity: 0; } 23%, 33% { opacity: 0.19; } 39%, 100% { opacity: 0; } }
@keyframes second-source-highlight { 0%, 41%, 60%, 100% { opacity: 0; } 44%, 56% { opacity: 0.19; } }
@keyframes second-target-highlight { 0%, 63.999% { opacity: 0; } 64%, 74% { opacity: 0.19; } 80%, 100% { opacity: 0; } }
@keyframes first-source-text { 0%, 19%, 100% { fill: var(--capstone-paper); } 3%, 15% { fill: var(--capstone-teal); } }
@keyframes first-target-text { 0%, 22.999% { fill: var(--capstone-paper); } 23%, 33% { fill: var(--capstone-teal); } 39%, 100% { fill: var(--capstone-paper); } }
@keyframes second-source-text { 0%, 41%, 60%, 100% { fill: var(--capstone-paper); } 44%, 56% { fill: var(--capstone-teal); } }
@keyframes second-target-text { 0%, 63.999% { fill: var(--capstone-paper); } 64%, 74% { fill: var(--capstone-teal); } 80%, 100% { fill: var(--capstone-paper); } }
@keyframes missing-connection-attempt {
  0%, 69% { stroke-dashoffset: 1; stroke: var(--capstone-teal); opacity: 0; }
  71% { stroke-dashoffset: 1; stroke: var(--capstone-teal); opacity: .9; }
  80% { stroke-dashoffset: 0; stroke: var(--capstone-teal); opacity: .9; }
  85%, 93% { stroke-dashoffset: 0; stroke: var(--cover-missing-evidence); opacity: .9; }
  100% { stroke-dashoffset: 0; stroke: var(--cover-missing-evidence); opacity: 0; }
}
@keyframes missing-connection-cross {
  0%, 80% { opacity: 0; transform: scale(.8); filter: drop-shadow(0 0 0 #e8a0a000); }
  86%, 93% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 3px #e8a0a080); }
  100% { opacity: 0; transform: scale(.95); filter: drop-shadow(0 0 0 #e8a0a000); }
}
@keyframes missing-evidence-highlight {
  0%, 80%, 100% { opacity: 0; }
  86%, 93% { opacity: .14; }
}
@keyframes missing-evidence-text {
  0%, 80%, 100% { fill: #99a9bb; filter: drop-shadow(0 0 0 #e8a0a000); }
  86%, 93% { fill: var(--cover-missing-evidence); filter: drop-shadow(0 0 4px #e8a0a080); }
}
@media (prefers-reduced-motion: reduce) {
  .cover-matching.is-active .matching-document,
  .cover-matching.is-active .match-line,
  .cover-matching.is-active .match-attempt,
  .cover-matching.is-active .match-cross,
  .cover-matching.is-active .row-highlight,
  .cover-matching.is-active .row-highlight.source,
  .cover-matching.is-active .row-highlight.target,
  .cover-matching.is-active .document-row { animation: none; }
  .match-line { stroke-dashoffset: 0; opacity: 1; }
  .match-attempt, .match-cross { opacity: 1; transform: none; filter: none; }
  .document-row.unmatched { fill: var(--cover-missing-evidence); filter: none; }
}
</style>
