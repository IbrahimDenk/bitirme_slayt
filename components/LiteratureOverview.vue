<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import RequirementEvidenceIcon from './RequirementEvidenceIcon.vue'

const { $clicks } = useSlideContext()
const columnTracks = computed(() => Array.from({ length: 5 }, (_, index) =>
  $clicks.value === index + 1 ? 'minmax(0, 2.45fr)' : 'minmax(0, 1fr)',
).join(' '))
</script>

<template>
  <section class="literature-overview" aria-labelledby="literature-title">
    <!-- Register the final focus step with Slidev without hiding any card. -->
    <span v-click="5" hidden aria-hidden="true" />
    <header class="literature-heading"><h1 id="literature-title">Literature Overview</h1><p>Three research studies and two commercial products</p></header>
    <div class="research-cards" :class="{ 'has-focus': $clicks > 0 }" :style="{ gridTemplateColumns: columnTracks }">
      <article class="research-card" :class="{ 'is-focused': $clicks === 1 }" aria-labelledby="jobmatch-title">
        <span class="card-accent" aria-hidden="true" />
        <header class="research-header">
          <div class="study-symbol"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 28H5V4h14l6 6v5 M19 4v7h6 M9 13h6 M9 18h4" /><circle cx="21" cy="22" r="6" /><path d="m25.5 26.5 4 4" /></svg><span>[1]</span></div>
          <h2 id="jobmatch-title">JobMatchAI</h2>
          <p class="study-citation">Vyas et al.<br>ACL System Demonstrations, 2026</p>
        </header>
        <dl class="study-fields" :aria-hidden="$clicks !== 1">
          <div><dt>Approach</dt><dd>Ranks jobs from a CV and explains the score using a skill graph.</dd></div>
          <div><dt>Key Result</dt><dd>nDCG@10 rose from <strong>0.756 to 0.810</strong> versus BM25.</dd></div>
          <div><dt>Limitation</dt><dd>Evaluated on <strong>40 human-verified pairs</strong>.</dd></div>
        </dl>
      </article>
      <article class="research-card" :class="{ 'is-focused': $clicks === 2 }" aria-labelledby="polyinterview-title">
        <span class="card-accent" aria-hidden="true" />
        <header class="research-header">
          <div class="study-symbol"><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="11" y="3" width="10" height="17" rx="5" /><path d="M7 15v2a9 9 0 0 0 18 0v-2 M16 26v4 M11 30h10" /></svg><span>[2]</span></div>
          <h2 id="polyinterview-title">PolyInterview</h2>
          <p class="study-citation">Wen et al.<br>arXiv preprint, 2026</p>
        </header>
        <dl class="study-fields" :aria-hidden="$clicks !== 2">
          <div><dt>Approach</dt><dd>Uses the CV and target posting to tailor a video mock interview.</dd></div>
          <div><dt>Key Result</dt><dd>Question plans received <strong>4.80/5</strong> on the role relevance subscore.</dd></div>
          <div><dt>Limitation</dt><dd>Expert review covered <strong>12 text-based artifacts</strong>.</dd></div>
        </dl>
      </article>
      <article class="research-card" :class="{ 'is-focused': $clicks === 3 }" aria-labelledby="skill-extraction-title">
        <span class="card-accent" aria-hidden="true" />
        <header class="research-header">
          <div class="study-symbol"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 5h12l13 13-11 11L4 15V5Z" /><circle cx="10" cy="11" r="2" /><path d="m14 20 3 3 6-7" /></svg><span>[3]</span></div>
          <h2 id="skill-extraction-title"><span>Turkish Skill</span><span>Extraction</span></h2>
          <p class="study-citation">Arslan İltüzer et al.<br>arXiv preprint, 2026</p>
        </header>
        <dl class="study-fields" :aria-hidden="$clicks !== 3">
          <div><dt>Approach</dt><dd>Links skill mentions from <strong>327 Turkish job postings</strong> to ESCO.</dd></div>
          <div><dt>Key Result</dt><dd>ESCO candidate retrieval: <strong>0.46 to 0.88 HitRate@10</strong>, fuzzy matching vs. embeddings.</dd></div>
          <div><dt>Limitation</dt><dd>Retrieval starts from human-annotated skill mentions.</dd></div>
        </dl>
      </article>
      <article class="research-card" :class="{ 'is-focused': $clicks === 4 }" aria-labelledby="startline-title">
        <span class="card-accent" aria-hidden="true" />
        <header class="research-header">
          <div class="study-symbol"><RequirementEvidenceIcon /><span>[4]</span></div>
          <h2 id="startline-title">Startline</h2>
          <p class="study-citation">Commercial product<br>startline.io</p>
        </header>
        <dl class="study-fields" :aria-hidden="$clicks !== 4">
          <div><dt>Approach</dt><dd>Ranks job postings by CV fit and offers job-specific CV drafts.</dd></div>
          <div><dt>Documented Feature</dt><dd>Shows original CV excerpts alongside requirements for strong matches.</dd></div>
          <div><dt>Limitation</dt><dd>The paid plan reports gaps. A gap label for every unsupported requirement in the same view is unverified.</dd></div>
        </dl>
      </article>
      <article class="research-card" :class="{ 'is-focused': $clicks === 5 }" aria-labelledby="interviewplan-title">
        <span class="card-accent" aria-hidden="true" />
        <header class="research-header">
          <div class="study-symbol"><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="10" width="26" height="18" rx="2" /><path d="M11 10V5h10v5 M3 17c8 5 18 5 26 0 M12 22h8 M17 19l3 3-3 3" /></svg><span>[5]</span></div>
          <h2 id="interviewplan-title">Interview<wbr>Plan&nbsp;AI</h2>
          <p class="study-citation">Commercial product<br>interviewplan.ai</p>
        </header>
        <dl class="study-fields" :aria-hidden="$clicks !== 5">
          <div><dt>Approach</dt><dd>Ranks jobs by CV fit and uses a saved posting to tailor the CV.</dd></div>
          <div><dt>Documented Feature</dt><dd>Uses the same posting for scored spoken mock interviews with feedback.</dd></div>
          <div><dt>Limitation</dt><dd>The public mock interview documentation does not confirm candidate video.</dd></div>
        </dl>
      </article>
    </div>
    <section class="key-takeaway" aria-labelledby="takeaway-label"><h2 id="takeaway-label">Key Takeaway</h2><p>Prior work explores job ranking, tailored interviews, and Turkish skill extraction. We will test how job matching and video interview practice work together for English and Turkish job postings.</p></section>
  </section>
</template>

<style scoped>
.literature-overview { position: absolute; inset: 0; color: var(--capstone-paper); font-family: var(--capstone-font); }
.literature-heading { position: absolute; top: 49px; left: var(--capstone-margin); }
.literature-heading h1 { margin: 0; color: var(--capstone-paper); font-size: 44px; font-weight: 600; line-height: 1.25; letter-spacing: -1.2px; }
.literature-heading p { margin: 10px 0 0; color: var(--capstone-muted); font-size: 16px; line-height: 1.3; }
.research-cards { position: absolute; top: 144px; right: var(--capstone-margin); left: var(--capstone-margin); display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); align-items: center; gap: 16px; height: 470px; transition: grid-template-columns 280ms cubic-bezier(.22,.8,.2,1); }
.research-card { position: relative; box-sizing: border-box; min-width: 0; height: 260px; padding: 18px 14px; border: 1px solid var(--capstone-rule); border-radius: 9px; background-color: #13263e; overflow: hidden; transition: height 280ms cubic-bezier(.22,.8,.2,1), background-color 280ms ease, border-color 280ms ease, box-shadow 280ms ease; }
.research-cards.has-focus .research-card { height: 470px; }
.research-cards.has-focus .research-card:not(.is-focused) { background-color: #102138; }
.research-card.is-focused { background-color: #1b3a44; border-color: rgba(105,212,202,.65); box-shadow: 0 12px 28px rgba(0,0,0,.16), inset 0 0 28px rgba(105,212,202,.035); }
.research-header { position: absolute; top: 50%; right: 14px; left: 14px; display: grid; grid-template-rows: 32px 56px 78px; row-gap: 10px; text-align: center; transform: translateY(-50%); transition: top 280ms cubic-bezier(.22,.8,.2,1), transform 280ms cubic-bezier(.22,.8,.2,1), grid-template-rows 280ms cubic-bezier(.22,.8,.2,1), row-gap 280ms ease, opacity 280ms ease; }
.research-card.is-focused .research-header { top: 18px; grid-template-rows: 30px 58px 44px; row-gap: 8px; transform: translateY(0); }
.research-cards.has-focus .research-card:not(.is-focused) .research-header { opacity: .78; }
.study-symbol { display: flex; align-items: center; justify-content: center; gap: 11px; color: var(--capstone-teal); }
.study-symbol svg { flex: 0 0 28px; width: 28px; height: 28px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.study-symbol > span { font-size: 16px; font-weight: 500; }
.research-header h2 { align-self: center; margin: 0; color: var(--capstone-paper); font-size: 21px; font-weight: 650; line-height: 1.2; letter-spacing: -.4px; transition: font-size 280ms ease; }
.research-card.is-focused .research-header h2 { font-size: 23px; }
.research-header h2 > span { display: block; }
.study-citation { align-self: start; margin: 0; color: var(--capstone-muted); font-size: 14px; font-style: italic; line-height: 1.35; overflow-wrap: break-word; }
.study-fields { position: absolute; top: 182px; right: 18px; left: 18px; display: grid; gap: 12px; margin: 0; opacity: 0; visibility: hidden; transform: translateY(8px); pointer-events: none; transition: opacity 180ms ease, transform 180ms ease, visibility 0s linear 180ms; }
.research-card.is-focused .study-fields { opacity: 1; visibility: visible; transform: translateY(0); transition-delay: 80ms, 80ms, 0s; }
.study-fields dt, .key-takeaway h2 { margin: 0; color: var(--capstone-teal); font-size: 12.5px; font-weight: 600; line-height: 1.4; letter-spacing: 1.5px; text-transform: uppercase; }
.study-fields dd { margin: 5px 0 0; color: var(--capstone-paper); font-size: 18px; font-weight: 400; line-height: 1.35; }
.study-fields strong { color: var(--capstone-paper); font-weight: 650; }
.key-takeaway { position: absolute; top: 637px; right: var(--capstone-margin); left: var(--capstone-margin); display: grid; grid-template-columns: 146px minmax(0, 1fr); gap: 22px; padding-top: 16px; border-top: 1px solid var(--capstone-rule); }
.key-takeaway h2 { padding-top: 3px; }
.key-takeaway p { margin: 0; color: var(--capstone-muted); font-size: 18px; line-height: 1.4; }
.card-accent { position: absolute; top: 0; left: 14px; right: 14px; height: 2px; background: var(--capstone-teal); box-shadow: 0 0 8px #69d4ca55; opacity: 0; transition: opacity 280ms ease; }
.research-card.is-focused .card-accent { opacity: .95; }
@media (prefers-reduced-motion: reduce) {
  .research-cards, .research-card, .research-header, .research-header h2, .study-fields, .card-accent, .research-card.is-focused .study-fields { transition: none; transition-delay: 0s; }
}
</style>
