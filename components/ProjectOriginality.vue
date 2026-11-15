<script setup lang="ts">
import RequirementEvidenceIcon from './RequirementEvidenceIcon.vue'
import ComparisonMark from './ComparisonMark.vue'
const capabilities = [
  { name: 'CV-based job ranking', marks: [true, false, false, true, true, true] },
  { name: 'CV excerpts for matched requirements', marks: [false, false, false, true, false, true] },
  { name: 'Job-specific CV guidance', marks: [false, false, false, true, true, true] },
  { name: 'Role-specific spoken mock interview', marks: [false, true, false, false, true, true] },
  { name: 'Role-specific mock interview with candidate video', marks: [false, true, false, false, false, true] },
  { name: 'Skill extraction from Turkish job ads', marks: [false, false, true, false, false, true] },
]
</script>
<template>
  <section class="originality-overview" aria-labelledby="originality-title">
    <header class="originality-heading"><h1 id="originality-title">Originality of the Project</h1></header>
    <div class="originality-message"><RequirementEvidenceIcon /><p>Our prototype will link job requirements to CV evidence and use the same posting for Turkish video interview practice with AI scoring and feedback.</p></div>
    <table class="originality-table" aria-label="Documented or verified study and product capabilities, and planned capabilities of the proposed system">
      <colgroup><col class="capability-column"><col class="jobmatch-column"><col class="polyinterview-column"><col class="skill-column"><col class="startline-column"><col class="interviewplan-column"><col class="proposed-column"></colgroup>
      <thead><tr><th scope="col">Capability</th><th scope="col">JobMatchAI<br><span>[1]</span></th><th scope="col">PolyInterview<br><span>[2]</span></th><th scope="col">Turkish Skill<br>Extraction <span>[3]</span></th><th scope="col">Startline <span>[4]</span><small>Product</small></th><th scope="col">InterviewPlan<br>AI <span>[5]</span><small>Product</small></th><th scope="col">Proposed<br>System<small class="planned-label">(Planned)</small></th></tr></thead>
      <tbody><tr v-for="capability in capabilities" :key="capability.name"><th scope="row">{{ capability.name }}</th><td v-for="(checked, column) in capability.marks" :key="column"><ComparisonMark :checked="checked" :planned="column === 5" /></td></tr></tbody>
    </table>
    <div class="comparison-legend" aria-label="Comparison legend"><span><ComparisonMark :checked="true" />Documented</span><span><ComparisonMark :checked="false" />Not documented or unverified</span></div>
  </section>
</template>
<style scoped>
.originality-overview { position: absolute; inset: 0; color: var(--capstone-paper); font-family: var(--capstone-font); }
.originality-heading { position: absolute; top: 49px; left: var(--capstone-margin); }
.originality-heading h1 { margin: 0; font-size: 44px; font-weight: 600; line-height: 1.25; letter-spacing: -1.2px; }
.originality-message { position: absolute; top: 139px; left: var(--capstone-margin); right: var(--capstone-margin); display: flex; gap: 19px; align-items: flex-start; }
.originality-message svg { flex: 0 0 29px; width: 29px; height: 29px; margin-top: 2px; color: var(--capstone-teal); }
.originality-message p { margin: 0; font-size: 22px; font-weight: 500; line-height: 1.42; }
.originality-table { position: absolute; top: 212px; left: var(--capstone-margin); width: 1152px; table-layout: fixed; border-collapse: collapse; font-size: 19px; line-height: 1.3; }
.originality-table .capability-column { width: 330px; }
.originality-table .jobmatch-column { width: 130px; }
.originality-table .polyinterview-column { width: 145px; }
.originality-table .skill-column { width: 155px; }
.originality-table .startline-column { width: 115px; }
.originality-table .interviewplan-column { width: 150px; }
.originality-table .proposed-column { width: 127px; background: #163740; }
.originality-table th, .originality-table td { box-sizing: border-box; padding: 0 10px; border-bottom: 1px solid var(--capstone-rule); }
.originality-table thead tr { height: 76px; }
.originality-table thead th { color: var(--capstone-paper); text-align: center; font-size: 17px; font-weight: 600; }
.originality-table thead th:first-child { text-align: left; }
.originality-table thead th span { color: var(--capstone-teal); }
.originality-table thead th small { display: block; margin-top: 4px; color: var(--capstone-muted); font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; }
.originality-table thead th .planned-label { font-size: 13px; letter-spacing: 0; text-transform: none; }
.originality-table tbody tr { height: 60px; }
.originality-table tbody th { position: relative; padding-left: 10px; padding-right: 20px; text-align: left; font-weight: 400; }
.originality-table td { text-align: center; vertical-align: middle; }
.originality-table td svg { margin: 0 auto; }
.comparison-legend { position: absolute; top: 668px; left: var(--capstone-margin); right: var(--capstone-margin); display: flex; align-items: center; gap: 48px; font-size: 16px; line-height: 1.4; color: var(--capstone-muted); }
.comparison-legend > span { display: flex; align-items: center; gap: 10px; white-space: nowrap; }
.comparison-legend svg { flex: 0 0 25px; }
</style>
