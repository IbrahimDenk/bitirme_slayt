---
theme: default
title: Multi-Agent CV–Job Matching and Interview Preparation
titleTemplate: '%s · Medipol Capstone Project 1'
author: İbrahim Denk, Fatih Yunus Yıldız
info: false
aspectRatio: 16/9
canvasWidth: 1280
colorSchema: dark
transition: fade
fonts:
  provider: none
  sans: Manrope
drawings:
  enabled: false
layout: cover
logoTone: light
clicks: 0
---

<header class="cover-course">MEDIPOL CAPSTONE PROJECT 1</header>

<main class="cover-main">
  <div class="cover-copy">
    <p class="cover-type">MIDTERM PRESENTATION</p>
    <h1 class="cover-title"><span>Multi-Agent CV–Job Matching</span><span>and Interview Preparation</span></h1>
  </div>
  <CoverMatchingDiagram />
</main>

<footer class="cover-footer">
  <dl class="cover-details">
    <div>
      <dt>TERM</dt>
      <dd>Fall 2026–2027</dd>
    </div>
    <div>
      <dt>DATE</dt>
      <dd>20.11.2026</dd>
    </div>
    <div>
      <dt>PRESENTED BY</dt>
      <dd class="cover-presenters"><span>İbrahim Denk</span><span>Fatih Yunus Yıldız</span></dd>
    </div>
  </dl>
</footer>

<!--
Project title and academic term are provisional. Presentation date: 20.11.2026.
The skill diagram illustrates correspondence only. It does not report a measured result.
Docker is an example requirement with no supporting CV passage shown. Its animated
connection stops at a cross and the requirement glows red. This indicates missing
CV evidence, not a claim that the candidate lacks the skill.
Information fields follow Capstone_Project_1_Midterm_Template_v2.pptx, slide 1 and its speaker notes.
Original Medipol logo PNGs are reused unchanged from that template's slide layouts.
-->

---
layout: team
title: About the Team
logoTone: light
clicks: 0
---

<TeamOverview />

<!--
Team content follows slide 2 of Capstone_Project_1_Midterm_Template_v2.pptx.
Fatih Yunus Yıldız: Computer Engineering, Team Leader, Job Ranking and Mock Interviews
(WP2 and WP4). İbrahim Denk: Computer Engineering, CV Assessment and Match
Explanations (WP1 and WP3). Both members handle WP5 integration and evaluation.
Advisor: Prof. Selim Akyokuş, consistent with the closing slide.
TÜBİTAK 2209-A appears as Funding Application. The existing project source records
Application pending. No award or approved funding is documented in the workspace.
-->

---
layout: objectives
title: Project Objectives
logoTone: light
clicks: 0
---

<ProjectObjectives />

<!--
All content on this slide describes planned objectives and expected outcomes,
not completed capabilities or measured results. CV skill practice questions target
skills stated in the candidate's CV. The generation method is not yet confirmed.
The first release supports English and Turkish postings. The user chooses a search
language; this selects the postings returned, including suitable jobs abroad. The
selected job’s required language controls both the CV evidence and the video
interview. For an English-required job, find English CV quotes and ask and accept
answers only in English; apply the same rule in Turkish for a Turkish-required job.
The candidate’s country or native language does not change this rule. Wrong-language
answers receive no score; ask the candidate to answer again in the required language.
AI alone scores accepted answers and gives improvement suggestions. The model uses past
interview examples to guide scoring and feedback. The example-delivery mechanism
is undecided, so no specific training or retrieval technique is claimed.
CV guidance concerns existing skills, projects and experience.
Automatic CV rewriting and job applications are outside the confirmed scope.
Content fields follow the midterm template's Project Objectives slide and notes.
-->

---
layout: literature
title: Literature Overview
logoTone: light
transition: fade
---

<LiteratureOverview />

<!--
References for Literature Overview and the subsequent Originality comparison:

[1] Mayank Vyas, Abhijit Chakraborty and Vivek Gupta (2026). JobMatchAI - An
Intelligent Job Matching Platform Using Knowledge Graphs, Semantic Search and
Explainable AI. Proceedings of ACL, Volume 3: System Demonstrations, pp. 526–535.
https://aclanthology.org/2026.acl-demo.52/
DOI: https://doi.org/10.18653/v1/2026.acl-demo.52
Numerical ranking result: Table 2, BM25 nDCG@10 0.756 versus hybrid + reranker 0.810.
The 40 human-verified pairs refer to the gold evaluation subset, not all training data.
See Section 4.6 for the small-benchmark limitation; explanations narrate score factors.
See §3 and Figure 2 for the score-component breakdown and skill-graph-grounded
explanations: https://aclanthology.org/2026.acl-demo.52.pdf
The table's CV-excerpt criterion means an original CV passage displayed alongside
the corresponding job requirement, not a factor-score narrative.

[2] Zhiyuan Wen et al. (2026). PolyInterview: An LLM-based Platform for Immersive
Mock Interview Practice with Comprehensive Multimodal Assessment. arXiv:2607.10310.
https://arxiv.org/abs/2607.10310
DOI: https://doi.org/10.48550/arXiv.2607.10310
Section 5: role relevance of question plans 4.80/5; this is not overall interview scoring accuracy.
Ten experts reviewed 12 text-based artifacts: four question plans, four follow-up
pairs and four reports. The 4.80/5 value is a role relevance subscore, not the
aggregate question-plan rating or evidence of answer-scoring accuracy.
Section 2.1 documents spoken responses and candidate video. The artifact review
does not validate answer-level scoring accuracy; see Limitations.

[3] Ezgi Arslan İltüzer, Özgür Anıl Özlü, Vahid Farajijobehdar and Gülşen Eryiğit
(2026). Leveraging LLMs for Turkish Skill Extraction. arXiv:2601.22885.
https://arxiv.org/abs/2601.22885
DOI: https://doi.org/10.48550/arXiv.2601.22885
Table 5: skill retrieval on gold-standard mentions, fuzzy HitRate@10 0.46 versus embeddings 0.88.
The dataset contains 327 Turkish job postings. This retrieval result uses human-annotated
skill mentions as input and is not an end-to-end extraction result.

[4] Startline. Match Audit (commercial product).
https://startline.io/check
The CV-excerpt capability covers supporting passages shown for strong matches.
The page also documents CV-fit ranking and job-specific CV drafts. Its paid plan
reports gaps; a gap label for every unsupported requirement in the same view is
unverified. Preparation suggestions include likely interview questions, but an
interactive mock session answered by the candidate is unverified. Both mock
interview rows on slide 5 therefore remain × for Startline.

[5] InterviewPlan AI (commercial product).
Job Search: https://interviewplan.ai/job-search
Resume AI: https://interviewplan.ai/resume-ai
Mock Interviews: https://interviewplan.ai/mock-interviews
A saved posting carries into CV tailoring and scored spoken mock interviews with
feedback. This supports ✓ for spoken practice. Public mock interview documentation
does not confirm candidate video, so that row remains ×. Live-call copilot
compatibility with video meeting platforms is not evidence of candidate video in
the mock-practice product.

Keep [1]–[5] assigned to these same works and products on slide 5.
[3] evaluates skill extraction and ESCO linking from Turkish JOB POSTINGS.
The project supports English and Turkish postings. The proposed interview branch
accepts answers only in the selected job’s required language, then uses AI scoring. It uses past interview examples to guide scoring and feedback. The way
these examples reach the model is not yet decided. The Key Takeaway describes
a planned evaluation of the candidate workflow, not achieved project results.
-->

---
layout: originality
title: Originality of the Project
logoTone: light
clicks: 0
---

<ProjectOriginality />

<!--
✓ means documented in the cited study/product; the Proposed System (Planned)
column denotes planned scope. × means not documented or unverified, not proof
that the system cannot support it.
All Proposed System checks describe planned scope at midterm, not implemented or
validated results. The comparison table is static.

JobMatchAI §3 and Figure 2 show score components and skill-graph-grounded
explanations. The CV-excerpt criterion in row 2 means an original CV passage
displayed alongside the relevant job requirement. A score-component explanation
does not establish this capability.
PolyInterview §2.1 documents both spoken responses and candidate video, supporting
✓ in both mock-interview rows. Expert ratings of 12 text-based system artifacts
do not establish answer-level scoring accuracy; see Limitations.
[3] documents skill extraction from Turkish JOB POSTINGS and ESCO linking. The
final row is Skill extraction from Turkish job ads: the [3] check denotes the
documented research capability, while the Proposed System check denotes planned
scope. This row concerns skill extraction from job ads, not interview scoring.
The contribution sentence links requirement-level CV evidence to video practice
for the same selected posting. The job’s required language sets the CV quote
language and interview questions and answers. English and Turkish are supported.
Wrong-language answers are not scored; request a new answer in the required language.
AI uses past interview examples to guide scoring and feedback. It does not claim a verified unique feature combination.
Other tools cover portions of the workflow; do not claim that combining matching,
CV guidance and interview practice alone establishes originality.

[1] JobMatchAI, Vyas et al., ACL System Demonstrations, 2026.
https://aclanthology.org/2026.acl-demo.52/
DOI: https://doi.org/10.18653/v1/2026.acl-demo.52
§3 and Figure 2: https://aclanthology.org/2026.acl-demo.52.pdf
[2] PolyInterview, Wen et al., arXiv preprint, 2026.
https://arxiv.org/abs/2607.10310
DOI: https://doi.org/10.48550/arXiv.2607.10310
[3] Leveraging LLMs for Turkish Skill Extraction, Arslan İltüzer et al., arXiv preprint, 2026.
https://arxiv.org/abs/2601.22885
DOI: https://doi.org/10.48550/arXiv.2601.22885
[4] Startline. Match Audit (commercial product).
https://startline.io/check
The CV-excerpt check covers evidence passages for STRONG MATCHES, not a claim
that every possible requirement or every returned job has an excerpt.
CV-fit ranking and posting-specific tailored resume drafts are also documented.
The paid plan reports gaps, but a gap label for every unsupported requirement in
the same view is unverified. Likely interview-question suggestions do not establish
an interactive practice session answered by the candidate. Both mock rows are ×.

[5] InterviewPlan AI (commercial product).
Job Search: https://interviewplan.ai/job-search
Resume AI: https://interviewplan.ai/resume-ai
Mock Interviews: https://interviewplan.ai/mock-interviews
The documents support job ranking, CV tailoring and scored spoken role-specific
mock interviews with feedback. The spoken-practice row is ✓. Candidate video in
mock practice is not confirmed by the public documentation, so that row is ×.
Do not treat the live-call copilot's video-platform compatibility as evidence of
candidate-camera support during mock practice.
CV evidence excerpts and skill extraction from Turkish job ads are not documented
or verified in these sources and remain × as specified.
Reference names and numbering [1]–[5] are identical to slide 4.
-->

---
layout: scope
title: Project Scope and Work Packages
logoTone: light
clicks: 0
---

<ProjectScope></ProjectScope>

<!--
This diagram shows the proposed architecture, not completed features.
The first release supports English and Turkish job postings, including jobs abroad.
User search preference selects which language of postings to fetch. It does not
set the interview language. The selected job’s required language sets the language
used to find supporting CV quotes and to run the video interview.
For an English-required posting, check English CV quotes and ask English questions;
accept only English answers. Apply the same rule in Turkish for a Turkish-required
posting. Show both supporting excerpts and requirements with no CV evidence found.
The candidate’s country and native language do not change these rules. The system
does not count a quote in another language as evidence in the required language.
Check answer language before scoring. If it is wrong, return no score and ask the
candidate to answer again in the required language. This gate is separate from
retrying an unclear speech-to-text transcript.
AI alone scores accepted answers and gives feedback using past interview examples.
How examples reach the model remains undecided. No human interview scorer is added.
The CV-based skill practice branch is separate from the selected-job interview.
Its question-generation method is not confirmed. Video does not imply facial or
visual-content analysis. CV guidance highlights existing experience; automatic
CV rewriting and job applications are outside the confirmed scope.
Other languages may be added later, outside the first-release scope.
Stable work-package identifiers for contribution, schedule and risk slides:
WP1: CV Analysis & Skills Assessment.
WP2: Job Posting Collection & Ranking.
WP3: Match Explanations & CV Guidance.
WP4: Mock Interview & Feedback.
WP5: Integration & Evaluation.
The shared document-and-link icon carries the requirement-level evidence concept
from slide 5 into the central mapping block on this slide.
-->

---
layout: targets
title: Project Targets and Success Criteria
logoTone: light
clicks: 0
---

<ProjectTargets />

<!--
All thresholds are proposed draft criteria for an English and Turkish pilot. These are not
achieved project results or performance values reported in the literature.
All five targets remain Pending validation.

T1 / WP1: A question is relevant if it directly assesses the intended CV skill.
This checks skill-targeted question practice, not scoring of interview answers.
Independent reviewers resolve disagreements together.
T2 / WP2: Compare BM25 and the proposed method using the same CVs, the same job pool
and the same human relevance labels in English and Turkish. Human labels here
concern job relevance, not interview answer scoring. nDCG@5 evaluates the ordering of relevant jobs
among the first five results.
T3 / WP3: An evidence link is valid when the CV excerpt exists in the source document
and supports the associated job requirement. A CV suggestion is valid when it is
relevant to the posting and grounded in the candidate's existing experience.
Report validity for links and CV suggestions separately, each against the draft 85% threshold.
T4 / WP4: Check the answer language before AI scoring. Test English answers in
English-required sessions and Turkish answers in Turkish-required sessions. Also
test a Turkish answer in an English session and an English answer in a Turkish
session. Reject each wrong-language answer without a score and ask for a new answer
in the required language. Country and native language must not override this gate.
AI alone scores accepted answers using past interview examples. Automated checks
verify a numeric 0–3 score per rubric criterion, an improvement suggestion, and
an exact quote that occurs in the accepted answer. These checks do not establish
score accuracy, score calibration or the quality of feedback. No human interview
scorer or human–AI score comparison is part of T4. The example-delivery method is
undecided. T4 remains Pending validation.
T5 / WP5: Predefine core end-to-end scenarios covering CV upload, job ranking,
inspection of explained matches, selected-job CV guidance, and viewing feedback
after the mock interview.
-->

---
layout: contribution
title: The Contribution of Each WP
logoTone: light
clicks: 0
---

<WorkPackageContribution />

<!--
Proposed shares describe each work package's planned contribution to total project
scope, not progress, completed work, individual effort or measured performance.
WP1: CV Analysis & Skills Assessment, 15%.
WP2: Job Posting Collection & Ranking, 20%.
WP3: Match Explanations & CV Guidance, 25%.
WP4: Mock Interview & Feedback, 25%.
WP5: Integration & Evaluation, 15%.
Total: 100%. Names, numbering and order match slide 6.
WP3 and WP4 receive the highest planned shares because CV-evidence-grounded
explanations and role-specific interview feedback are the project's two main outputs.
Keep these WP identifiers consistent in the contribution, schedule and risk slides.
-->

---
layout: schedule
title: Work Time Plan of the Project
logoTone: light
clicks: 0
---

<ProjectSchedule />

<!--
Proposed Project I schedule, W1–W14; week labels are relative, not confirmed dates.
W1–W3: Literature review & requirements. This preparation is not a separate WP.
WP1: CV Analysis & Skills Assessment; proposed lead İbrahim Denk; W3–W6 inclusive.
WP2: Job Posting Collection & Ranking; proposed lead Fatih Yunus Yıldız; W3–W7 inclusive.
WP3: Match Explanations & CV Guidance; proposed lead İbrahim Denk; W6–W10 inclusive.
WP4: Mock Interview & Feedback; proposed lead Fatih Yunus Yıldız; W7–W12 inclusive.
WP5: Integration & Evaluation; both team members; W10–W14 inclusive.
At the W10 start of WP5, plan an early integration check using one CV, one saved
job posting and one sample answer. Check data flow through the core modules
before the wider English and Turkish pilot. This is planned work, not a completed test.
Lead identifies the primary responsible person, not the sole contributor.
Fatih Yunus Yıldız coordinates the project and advisor updates.
Both members handle integration and evaluation. Weekly team check-ins, advisor
reviews and a shared task board support follow-up.
Completed work and individual effort or contribution percentages await team-approved data.
WP numbering, names and colors match the contribution and risk slides.
-->

---
layout: risks
title: Project Management Risks and B-Plans
logoTone: light
clicks: 0
---

<ProjectRisks />

<!--
Prospective risks and contingency plans for the same WP1–WP5 as slides 6, 8 and 9.
These are anticipated risks, not a report of incidents that have occurred.
WP1: If generated questions miss the target skill, use a reviewed bank tagged by skill.
The primary question source remains an open design decision.
WP2: If online sources fail or change format, use curated saved postings for ranking and tests.
WP3: Verify quoted excerpts against the CV; flag an uncertain link as Needs review.
WP4: Speech recognition may misread technical terms in English or Turkish. Retry
transcription; if it remains unclear, ask the candidate to repeat the answer in
the required language. This is an unclear-transcript fallback, not the wrong-language
gate. A clear answer in the wrong language is rejected before scoring and must also
be repeated in the required language. No observer approves the transcript and no
person scores interview answers. AI alone scores accepted answers and gives feedback.
WP5: Test one complete scenario early and prioritize the core workflow if integration is delayed.
WP colors use the same shared palette as slides 8 and 9.
-->

---
layout: cost
title: Cost Analysis
logoTone: light
clicks: 0
---

<CostAnalysis />

<!--
All amounts are in TRY. This slide uses the team's supplied requested cash budget,
not actual spending, approved funding or a confirmed award. TÜBİTAK 2209-A:
Application pending, consistent with slide 2.
The plan assumes existing computers and cameras will be used. No cash costs are
planned for People, Equipment, Materials or Travel, and IMU Funding is zero.
Requested TÜBİTAK 2209-A funding is 12,000 TRY, entirely allocated to Services.

Planned service allocation:
LLM API usage: 6,000 TRY for CV–job matching, interview questions, feedback and model comparisons.
Cloud hosting and database: 3,600 TRY allocated to test and demo environments.
Speech-to-text API: 1,400 TRY for interview transcription and repeat tests.
Cloud storage: 1,000 TRY for temporary recordings and evaluation outputs.
Total: 6,000 + 3,600 + 1,400 + 1,000 = 12,000 TRY. Both tables derive from the same service allocation data.
No verified TYBS budget breakdown was found in the project workspace. The service
amounts therefore represent the supplied planned distribution, not a reconciliation
to an official TYBS record or vendor invoices. Reconcile with that record when available.
Usage-based API and transcription estimates can be refined using anticipated
usage multiplied by documented unit costs; the allocations here are the team's plan.
No verified request/token counts, transcription minutes, storage volume or vendor
unit prices are documented in the workspace. Do not infer a usage calculation or
present the former monthly hosting assumption as a verified price or volume.
-->

---
layout: conclusion
title: Conclusion and Discussion
logoTone: light
clicks: 0
---

<ConclusionDiscussion />

<!--
The midterm plan documents the literature review, candidate workflow, five work
packages and draft validation criteria defined in this presentation.
No verified prototype demo or experiment results were supplied or found in the
project workspace. Design Decisions describes the proposed workflow, not
measured performance or successful validation. Requirement-level CV excerpts
ground the match explanations. The model uses past interview examples to guide
scoring and feedback. The example-delivery mechanism is undecided.
All success criteria remain Pending validation, consistent with slide 7.

The End of Project I goal follows slide 9: integrate the core workflow and run an
initial English and Turkish pilot during the proposed WP5 W10–W14 window.
To test CV grounding, reviewers check that sampled excerpts exist in the original
CV and support the associated job requirements; evaluate CV guidance separately
against the candidate's existing experience (T3 / WP3).
To check AI interview outputs, first test the required-language gate, including
both directions of English/Turkish wrong-language answers. Then run automated
per-criterion score-presence and 0–3 range checks, suggestion-presence checks and
exact answer-quote checks described in T4 / WP4. These checks do not establish scoring accuracy.
Thresholds remain draft criteria from slide 7, not achieved results.
The Project I goal is an integrated workflow and a small English and Turkish pilot.
Project II will refine the prototype and evaluate more roles using English and
Turkish CVs, postings and interview answers. Both stages are plans.
-->

---
layout: closing
title: Thank You
logoTone: light
clicks: 0
---

<ThankYouClosing />

<!--
Final slide: Thank You / Questions and Discussion.
İbrahim Denk and Fatih Yunus Yıldız. Advisor: Prof. Selim Akyokuş.
The CV-to-job-match-to-interview illustration represents the planned candidate
workflow. It does not report demonstrated features or evaluation results.
The entire diagram sequence repeats continuously every 2.4 seconds during Q&A,
including the match lines, approval check and microphone wave. There is no long pause.
Reduced-motion mode shows the completed diagram immediately with no animation.
-->
