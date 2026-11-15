<script setup lang="ts">
import PendingValidation from './PendingValidation.vue'
</script>
<template>
  <section class="targets-overview" aria-labelledby="targets-title">
    <header class="targets-heading"><h1 id="targets-title">Project Targets and Success Criteria</h1></header>
    <p class="targets-subtitle"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M12 5h15v23H5V5h3 M11 3h10v5H11V3Z M10 15l2 2 4-4 M18 15h5 M10 23l2 2 4-4 M18 23h5" /></svg><span>Proposed pilot targets for English and Turkish</span></p>
    <table class="targets-table" aria-label="Proposed draft success criteria for English and Turkish; all targets pending validation">
      <colgroup><col class="target-id"><col class="target-name"><col class="target-criterion"><col class="target-verification"><col></colgroup>
      <thead><tr><th scope="col">ID</th><th scope="col">Project Target</th><th scope="col">Draft Success Criterion</th><th scope="col">Verified By</th><th scope="col">Status</th></tr></thead>
      <tbody>
        <tr><th scope="row">T1 · WP1</th><td>Relevant CV skill practice questions</td><td>At least <strong>80%</strong> of sampled questions address the intended CV skill.</td><td>Independent reviewer ratings</td><td><PendingValidation /></td></tr>
        <tr><th scope="row">T2 · WP2</th><td>Relevant jobs near the top</td><td><strong>nDCG@5 exceeds the BM25 baseline</strong> on the <strong>same job pool</strong>.</td><td>Human-labeled CV–job pairs in English and Turkish</td><td><PendingValidation /></td></tr>
        <tr><th scope="row">T3 · WP3</th><td>Evidence-grounded explanations and CV guidance</td><td>At least <strong>85%</strong> of sampled evidence links and <strong>85%</strong> of sampled CV suggestions are valid, <strong>measured separately</strong>.</td><td>Review against the original CV and job posting</td><td><PendingValidation /></td></tr>
        <tr><th scope="row">T4 · WP4</th><td>AI interview scoring and feedback</td><td>Score only answers in the required language: <strong>0–3 per rubric criterion</strong>, plus an improvement tip backed by an answer quote.</td><td>Automated tests with English and Turkish answers, including wrong-language cases</td><td><PendingValidation /></td></tr>
        <tr><th scope="row">T5 · WP5</th><td>Complete candidate workflow</td><td>All predefined core scenarios pass end-to-end testing.</td><td>End-to-end test checklist</td><td><PendingValidation /></td></tr>
      </tbody>
    </table>
  </section>
</template>
<style scoped>
.targets-overview { position: absolute; inset: 0; color: var(--capstone-paper); font-family: var(--capstone-font); }
.targets-heading { position: absolute; top: 49px; left: var(--capstone-margin); }
.targets-heading h1 { margin: 0; font-size: 40px; font-weight: 600; line-height: 1.25; letter-spacing: -1px; }
.targets-subtitle { position: absolute; top: 129px; left: var(--capstone-margin); display: flex; align-items: center; gap: 13px; margin: 0; color: var(--capstone-teal); font-size: 18px; line-height: 1.4; }
.targets-subtitle svg { width: 27px; height: 27px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.targets-table { position: absolute; top: 170px; left: var(--capstone-margin); width: 1152px; table-layout: fixed; border-collapse: collapse; font-size: 17.5px; line-height: 1.35; }
.target-id { width: 98px; }
.target-name { width: 230px; }
.target-criterion { width: 350px; }
.target-verification { width: 288px; }
.targets-table th, .targets-table td { padding: 8px 12px; border-bottom: 1px solid var(--capstone-rule); text-align: left; vertical-align: middle; }
.targets-table th:first-child { padding-left: 0; }
.targets-table thead tr { height: 50px; }
.targets-table thead th { color: var(--capstone-teal); font-size: 15px; font-weight: 600; }
.targets-table tbody th { color: var(--capstone-teal); font-size: 16px; font-weight: 600; white-space: nowrap; }
.targets-table tbody tr:nth-child(1), .targets-table tbody tr:nth-child(2) { height: 86px; }
.targets-table tbody tr:nth-child(3) { height: 116px; }
.targets-table tbody tr:nth-child(4) { height: 120px; }
.targets-table tbody tr:nth-child(5) { height: 68px; }
.targets-table tbody td:nth-child(4) { color: var(--capstone-muted); }
.targets-table strong { color: var(--capstone-paper); font-weight: 650; }
</style>
