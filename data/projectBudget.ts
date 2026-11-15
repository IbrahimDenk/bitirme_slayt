export const budgetCategories = ['People', 'Equipment', 'Materials', 'Services', 'Travel'] as const
type BudgetAmount = number | null
const sumAmounts = (amounts: readonly BudgetAmount[]): BudgetAmount =>
  amounts.some(amount => amount === null) ? null : amounts.reduce<number>((sum, amount) => sum + (amount ?? 0), 0)

// Planned allocation supplied by the team; these are not actual expenses or an award.
export const plannedServices = [
  { name: 'LLM API usage', use: 'CV–job matching, interview questions, feedback, and model comparisons', amount: 6000 },
  { name: 'Cloud hosting and database', use: 'Test and demo environments; usage and vendor rates are not confirmed', amount: 3600 },
  { name: 'Speech-to-text API', use: 'Transcription for interview sessions and repeat tests', amount: 1400 },
  { name: 'Cloud storage', use: 'Temporary storage of recordings and evaluation outputs', amount: 1000 },
] as const
export const plannedServicesTotal = plannedServices.reduce((sum, service) => sum + service.amount, 0)
export const requestedFunding = plannedServicesTotal

// The team-provided plan specifies zero cash costs in the remaining categories.
export const budgetSources: { name: string; amounts: readonly BudgetAmount[] }[] = [
  { name: 'IMU Funding', amounts: [0, 0, 0, 0, 0] },
  { name: 'TÜBİTAK 2209-A (Requested)', amounts: [0, 0, 0, plannedServicesTotal, 0] },
]
export const budgetRows = budgetSources.map(source => ({ ...source, total: sumAmounts(source.amounts) }))
export const categoryTotals = budgetCategories.map((_, column) => sumAmounts(budgetSources.map(source => source.amounts[column])))
export const totalProposedCost = sumAmounts(categoryTotals)
export const formatBudgetAmount = (amount: BudgetAmount) => amount === null ? 'TBD' : amount.toLocaleString('en-GB', { maximumFractionDigits: 2 })
export const formatBudgetCurrency = (amount: BudgetAmount) => amount === null ? 'TBD' : `₺${formatBudgetAmount(amount)}`
