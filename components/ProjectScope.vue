<script setup lang="ts">
import { useIsSlideActive } from '@slidev/client'
import RequirementEvidenceIcon from './RequirementEvidenceIcon.vue'
const isActive = useIsSlideActive()
const packages = [
  ['WP1', 'CV Analysis & Skills Assessment', 'Extract CV skills and generate practice questions relevant to each target skill.'],
  ['WP2', 'Job Posting Collection & Ranking', 'Find English or Turkish job postings based on user preference, then rank them by CV fit.'],
  ['WP3', 'Match Explanations & CV Guidance', 'Link each requirement to CV evidence in the required language and suggest what to highlight.'],
  ['WP4', 'Mock Interview & Feedback', 'Run video interviews in the required language. AI scores accepted answers and gives feedback.'],
  ['WP5', 'Integration & Evaluation', 'Test CV matching and video interview feedback with English and Turkish examples.'],
]
const inputPaths = ['M194 30H326V97H430', 'M194 120H326V97H430']
const outputPaths = ['M917 97H941V32H967', 'M917 97H941V158H967']
</script>
<template>
  <section class="scope-overview" :class="{ 'is-active': isActive }" aria-labelledby="scope-title">
    <header class="scope-heading"><h1 id="scope-title">Project Scope and Work Packages</h1></header>
    <h2 class="architecture-label scope-label">Proposed System Architecture</h2>
    <svg class="system-architecture" viewBox="0 0 1152 240" role="img" aria-labelledby="architecture-title architecture-description">
      <title id="architecture-title">Proposed candidate workflow</title>
      <desc id="architecture-description">The user chooses English or Turkish postings, including jobs abroad. Candidate CV and Online Job Postings merge into Job Ranking and Requirement–Evidence Mapping. The job requirements set the language used to find original CV quotes; missing evidence is shown. The selected job also sets the video interview language. Questions and answers must use that language. A wrong-language answer is not scored; the candidate must try again in the required language. AI scores accepted answers and gives feedback using past interview examples. A separate CV-based Skills Assessment branch provides practice questions. The candidate’s country does not change these rules.</desc>
      <defs><marker id="scope-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 7 3.5 0 7Z" fill="#819aa8" /></marker></defs>
      <g class="architecture-links" aria-hidden="true">
        <path v-for="d in inputPaths" :key="d" :d="d" marker-end="url(#scope-arrow)" />
        <path d="M760 97H795" marker-end="url(#scope-arrow)" />
        <path v-for="d in outputPaths" :key="d" :d="d" marker-end="url(#scope-arrow)" />
        <path class="assessment-link" d="M24 30H8V207H24" marker-end="url(#scope-arrow)" />
      </g>
      <g class="architecture-motion" aria-hidden="true">
        <path v-for="d in inputPaths" :key="d" class="input-light" :d="d" pathLength="100" />
        <path class="selection-light" d="M760 97H795" pathLength="100" />
        <path v-for="d in outputPaths" :key="d" class="output-highlight" :d="d" />
      </g>
      <g class="architecture-node">
        <rect x="24" y="0" width="170" height="60" rx="6" />
        <svg x="38" y="18" width="25" height="25" viewBox="0 0 32 32" class="node-icon"><path d="M7 28V4h13l6 6v18H7Z M20 4v7h6 M11 16h11 M11 21h8" /></svg>
        <text x="73" y="36" class="node-title">Candidate CV</text>
      </g>
      <g class="architecture-node">
        <rect x="24" y="90" width="170" height="60" rx="6" />
        <svg x="38" y="108" width="25" height="25" viewBox="0 0 32 32" class="node-icon"><rect x="3" y="10" width="26" height="18" rx="2" /><path d="M11 10V5h10v5 M3 17c8 5 18 5 26 0 M16 18v5" /></svg>
        <text x="73" y="115" class="node-title">Online Job</text><text x="73" y="136" class="node-title">Postings</text>
      </g>
      <g class="architecture-node assessment-node">
        <rect x="24" y="178" width="250" height="58" rx="6" />
        <text x="40" y="202" class="node-title">CV-based Skills Assessment</text>
        <text x="40" y="222" class="node-detail">Questions on skills listed in the CV</text>
      </g>
      <g class="architecture-node mapping-node">
        <rect x="430" y="48" width="330" height="100" rx="6" />
        <RequirementEvidenceIcon x="445" y="60" width="25" height="25" class="evidence-icon" />
        <text x="480" y="78" class="node-title">Job Ranking &amp;</text>
        <text x="446" y="103" class="node-title">Requirement–Evidence Mapping</text>
        <text x="446" y="129" class="node-detail">Scores · CV quotes in the required language</text>
      </g>
      <g class="architecture-node selected-node"><rect x="795" y="72" width="122" height="50" rx="6" /><text x="856" y="102" text-anchor="middle" class="node-title">Selected Job</text></g>
      <g class="architecture-node output-node">
        <rect x="967" y="0" width="185" height="64" rx="6" />
        <svg x="979" y="20" width="25" height="25" viewBox="0 0 32 32" class="node-icon"><path d="m6 21 15-15a3 3 0 0 1 5 5L11 26l-7 2 2-7Z M18 9l5 5 M6 21l5 5" /></svg>
        <text x="1014" y="28" class="node-title">Tailored CV</text><text x="1014" y="49" class="node-title">Guidance</text>
      </g>
      <g class="architecture-node output-node">
        <rect x="967" y="126" width="185" height="64" rx="6" />
        <svg x="979" y="146" width="25" height="25" viewBox="0 0 32 32" class="node-icon"><rect x="11" y="3" width="10" height="17" rx="5" /><path d="M7 15v2a9 9 0 0 0 18 0v-2 M16 26v4 M11 30h10" /></svg>
        <text x="1014" y="154" class="node-title">Mock Interview</text><text x="1014" y="175" class="node-title">&amp; Feedback</text>
      </g>
      <g class="architecture-language-notes">
        <text x="212" y="145" class="node-detail">English or Turkish postings</text>
        <text x="212" y="162" class="node-detail">Based on user search preference</text>
        <text x="430" y="30" class="node-detail">Job requirements and required language</text>
        <text x="446" y="165" class="node-detail">Show gaps when no CV evidence is found</text>
        <text x="795" y="143" class="node-detail">Required interview</text>
        <text x="795" y="160" class="node-detail">language</text>
        <text x="430" y="209" class="node-detail">Questions and answers use the job’s required language.</text>
        <text x="430" y="229" class="language-rule">Check language before scoring. Wrong language: retry, no score. AI uses past examples.</text>
      </g>
    </svg>
    <section class="work-packages" aria-labelledby="packages-title">
      <h2 id="packages-title" class="scope-label">Work Packages</h2>
      <table class="packages-table"><colgroup><col class="wp-number"><col class="wp-name"><col></colgroup><thead><tr><th scope="col">WP</th><th scope="col">Work Package</th><th scope="col">Scope</th></tr></thead><tbody><tr v-for="wp in packages" :key="wp[0]"><th scope="row">{{ wp[0] }}</th><td>{{ wp[1] }}</td><td>{{ wp[2] }}</td></tr></tbody></table>
    </section>
  </section>
</template>
<style scoped>
.scope-overview { position: absolute; inset: 0; color: var(--capstone-paper); font-family: var(--capstone-font); }
.scope-heading { position: absolute; top: 49px; left: var(--capstone-margin); }
.scope-heading h1 { margin: 0; font-size: 40px; font-weight: 600; line-height: 1.25; letter-spacing: -1px; }
.scope-label { margin: 0; color: var(--capstone-teal); font-size: 14px; font-weight: 600; line-height: 1.4; letter-spacing: 1.8px; text-transform: uppercase; }
.architecture-label { position: absolute; top: 131px; left: var(--capstone-margin); }
.system-architecture { position: absolute; top: 172px; left: var(--capstone-margin); width: 1152px; height: 240px; overflow: visible; font-family: var(--capstone-font); }
.architecture-node > rect { fill: #13263e; stroke: var(--capstone-rule); stroke-width: 1; }
.mapping-node > rect { fill: #15333e; stroke: #527780; }
.assessment-node > rect { fill: #102238; }
.node-title { fill: var(--capstone-paper); font-size: 16px; font-weight: 500; }
.node-detail { fill: var(--capstone-muted); font-size: 13px; }
.language-rule { fill: var(--capstone-teal); font-size: 13px; }
.node-icon { fill: none; stroke: var(--capstone-teal); stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.evidence-icon { color: var(--capstone-teal); }
.architecture-links { fill: none; stroke: #819aa8; stroke-width: 1.3; stroke-linejoin: round; }
.assessment-link { stroke: #527780; }
.architecture-motion { fill: none; stroke: var(--capstone-teal); stroke-width: 2.5; stroke-linecap: round; filter: drop-shadow(0 0 3px #69d4ca66); }
.input-light, .selection-light { stroke-dasharray: 6 100; stroke-dashoffset: 6; opacity: 0; }
.output-highlight { opacity: 0; }
.is-active .input-light { animation: scope-input 9s linear infinite; }
.is-active .selection-light { animation: scope-selection 9s linear infinite; }
.is-active .output-highlight { animation: scope-outputs 9s ease-in-out infinite; }
@keyframes scope-input { 0% { opacity: 0; stroke-dashoffset: 6; } 3% { opacity: 1; stroke-dashoffset: 6; } 17% { opacity: 1; stroke-dashoffset: -100; } 19%, 100% { opacity: 0; stroke-dashoffset: -100; } }
@keyframes scope-selection { 0%, 19% { opacity: 0; stroke-dashoffset: 6; } 20% { opacity: 1; stroke-dashoffset: 6; } 28% { opacity: 1; stroke-dashoffset: -100; } 30%, 100% { opacity: 0; stroke-dashoffset: -100; } }
@keyframes scope-outputs { 0%, 31%, 44%, 100% { opacity: 0; } 34%, 40% { opacity: 0.9; } }
.work-packages { position: absolute; top: 435px; left: var(--capstone-margin); right: var(--capstone-margin); }
.packages-table { width: 100%; margin-top: 9px; table-layout: fixed; border-collapse: collapse; font-size: 16px; line-height: 1.25; }
.wp-number { width: 65px; }
.wp-name { width: 360px; }
.packages-table th, .packages-table td { padding: 0 12px 0 0; border-bottom: 1px solid var(--capstone-rule); text-align: left; }
.packages-table thead tr { height: 30px; }
.packages-table thead th { color: var(--capstone-muted); font-size: 13px; font-weight: 500; }
.packages-table tbody tr { height: 38px; }
.packages-table tbody th { color: var(--capstone-teal); font-weight: 600; }
.packages-table tbody td:nth-child(2) { font-weight: 600; }
.packages-table tbody td:last-child { color: var(--capstone-muted); font-size: 15.5px; }
@media (prefers-reduced-motion: reduce) {
  .is-active .input-light, .is-active .selection-light, .is-active .output-highlight { animation: none; opacity: 0; }
}
</style>
