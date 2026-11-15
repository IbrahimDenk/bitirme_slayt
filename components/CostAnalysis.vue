<script setup lang="ts">
import { budgetCategories, budgetRows, categoryTotals, totalProposedCost, plannedServices, plannedServicesTotal, formatBudgetAmount } from '../data/projectBudget'
</script>
<template>
  <section class="cost-overview" aria-labelledby="cost-title">
    <header class="cost-heading"><h1 id="cost-title">Cost Analysis</h1></header>
    <h2 id="funding-breakdown-label" class="budget-section-label funding-label">Funding and Cost Breakdown</h2>
    <table class="budget-table" aria-labelledby="funding-breakdown-label">
      <colgroup><col class="budget-source"><col v-for="category in budgetCategories" :key="category" :class="{ 'budget-services-column': category === 'Services' }"><col class="budget-total-column"></colgroup>
      <thead><tr><th scope="col">Funding Source (TRY)</th><th v-for="category in budgetCategories" :key="category" scope="col">{{ category }}</th><th scope="col">Total</th></tr></thead>
      <tbody><tr v-for="source in budgetRows" :key="source.name"><th scope="row">{{ source.name }}</th><td v-for="(amount, index) in source.amounts" :key="index" :class="{ 'service-amount': index === 3 && amount !== 0, 'zero-amount': amount === 0 }">{{ formatBudgetAmount(amount) }}</td><td :class="{ 'service-amount': source.total !== 0, 'zero-amount': source.total === 0 }">{{ formatBudgetAmount(source.total) }}</td></tr></tbody>
      <tfoot><tr><th scope="row">Total Proposed Cost</th><td v-for="(amount, index) in categoryTotals" :key="index" :class="{ 'service-amount': index === 3 && amount !== 0, 'zero-amount': amount === 0 }">{{ formatBudgetAmount(amount) }}</td><td class="budget-grand-total service-amount">{{ formatBudgetAmount(totalProposedCost) }}</td></tr></tfoot>
    </table>
    <h2 id="services-breakdown-label" class="budget-section-label services-label">Planned Services</h2>
    <table class="services-table" aria-labelledby="services-breakdown-label">
      <colgroup><col class="service-name"><col class="service-cost"></colgroup>
      <thead><tr><th scope="col">Service</th><th scope="col">Amount (TRY)</th></tr></thead>
      <tbody><tr v-for="service in plannedServices" :key="service.name"><th scope="row">{{ service.name }}</th><td class="service-value">{{ formatBudgetAmount(service.amount) }}</td></tr></tbody>
      <tfoot><tr><th scope="row">Total</th><td class="services-grand-total">{{ formatBudgetAmount(plannedServicesTotal) }}</td></tr></tfoot>
    </table>
  </section>
</template>
<style scoped>
.cost-overview { position: absolute; inset: 0; color: var(--capstone-paper); font-family: var(--capstone-font); }
.cost-heading { position: absolute; top: 49px; left: var(--capstone-margin); }
.cost-heading h1 { margin: 0; font-size: 44px; font-weight: 600; line-height: 1.25; letter-spacing: -1.2px; }
.budget-section-label { position: absolute; left: var(--capstone-margin); margin: 0; color: var(--capstone-teal); font-size: 14px; font-weight: 600; line-height: 1.4; letter-spacing: 1.7px; text-transform: uppercase; }
.funding-label { top: 148px; }
.services-label { top: 416px; }
.budget-table { position: absolute; top: 179px; left: var(--capstone-margin); width: 1152px; table-layout: fixed; border-collapse: collapse; font-size: 20px; line-height: 1.3; }
.budget-source { width: 350px; }
.budget-services-column, .budget-total-column { background: #112c3a; }
.budget-table th, .budget-table td { padding: 8px 12px; border-bottom: 1px solid var(--capstone-rule); text-align: center; vertical-align: middle; }
.budget-table th:first-child { padding-left: 0; text-align: left; }
.budget-table thead tr { height: 40px; }
.budget-table thead th { color: var(--capstone-muted); font-size: 17px; font-weight: 600; }
.budget-table tbody tr, .budget-table tfoot tr { height: 50px; }
.budget-table tbody th { font-weight: 500; font-size: 19px; }
.budget-table tfoot { background: #15333e; }
.budget-table tfoot th, .budget-table tfoot td { font-weight: 650; }
.budget-table .service-amount { color: var(--capstone-teal); font-weight: 650; }
.budget-table .zero-amount { color: var(--capstone-muted); }
.services-table { position: absolute; top: 446px; left: var(--capstone-margin); width: 700px; table-layout: fixed; border-collapse: collapse; font-size: 20px; line-height: 1.3; }
.service-name { width: 520px; }
.service-cost { width: 180px; }
.services-table th, .services-table td { padding: 6px 12px 6px 0; border-bottom: 1px solid var(--capstone-rule); text-align: left; vertical-align: middle; }
.services-table thead tr { height: 36px; }
.services-table thead th { color: var(--capstone-muted); font-size: 16px; font-weight: 600; }
.services-table tbody tr { height: 38px; }
.services-table tbody th { font-weight: 500; }
.services-table th:last-child, .services-table td:last-child { padding-right: 0; text-align: right; }
.services-table .service-value { color: var(--capstone-paper); font-size: 20px; font-variant-numeric: tabular-nums; }
.services-table tfoot tr { height: 42px; }
.services-table tfoot th { color: var(--capstone-teal); text-align: left; font-weight: 650; }
.services-table tfoot td { color: var(--capstone-teal); font-size: 20px; font-weight: 650; }
</style>
