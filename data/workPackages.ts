// Shared planned scope, colors and scheduling for slides 8–10.
export const workPackages = [
  { id: 'WP1', name: 'CV Analysis & Skills Assessment', share: 15, color: '#60A5FA', lead: 'İbrahim Denk', start: 3, end: 6,
    risk: 'Practice questions miss the intended CV skill.',
    bPlan: 'Select questions from a reviewed bank tagged by skill.' },
  { id: 'WP2', name: 'Job Posting Collection & Ranking', share: 20, color: '#2DD4BF', lead: 'Fatih Yunus Yıldız', start: 3, end: 7,
    risk: 'Online job sources become unavailable or change format.',
    bPlan: 'Use a curated set of saved job postings for ranking and tests.' },
  { id: 'WP3', name: 'Match Explanations & CV Guidance', share: 25, color: '#FBBF24', lead: 'İbrahim Denk', start: 6, end: 10,
    risk: 'A quoted CV excerpt does not support the job requirement.',
    bPlan: 'Verify the excerpt against the CV and show Needs review when the link is uncertain.' },
  { id: 'WP4', name: 'Mock Interview & Feedback', share: 25, color: '#C084FC', lead: 'Fatih Yunus Yıldız', start: 7, end: 12,
    risk: 'Speech recognition misreads technical terms in Turkish answers.',
    bPlan: 'Retry transcription. If the transcript is still unclear, ask the candidate to repeat the answer.' },
  { id: 'WP5', name: 'Integration & Evaluation', share: 15, color: '#FB7185', lead: 'Both team members', start: 10, end: 14,
    risk: 'Integration delays leave too little time for the pilot.',
    bPlan: 'Test one end-to-end scenario early and prioritize the core workflow.' },
] as const
