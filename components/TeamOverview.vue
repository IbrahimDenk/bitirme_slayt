<script setup lang="ts">
import { useIsSlideActive } from '@slidev/client'
const isActive = useIsSlideActive()
</script>

<template>
  <section class="team-overview" :class="{ 'is-active': isActive }" aria-labelledby="team-title">
    <header class="team-heading"><h1 id="team-title">About the Team</h1></header>
    <section class="project-team" aria-labelledby="project-team-label">
      <h2 id="project-team-label" class="team-label">Project Team</h2>
      <div class="team-cards">
        <article class="profile-card leader" aria-labelledby="fatih-name">
          <div class="profile-icon" aria-hidden="true">
            <span class="icon-pulse" />
            <svg viewBox="0 0 32 32"><circle cx="16" cy="10" r="5" /><path d="M6 27v-3a10 10 0 0 1 20 0v3" /></svg>
          </div>
          <h3 id="fatih-name">Fatih Yunus Yıldız</h3>
          <p class="profile-department">Computer Engineering</p>
          <p class="profile-role">Job Ranking and Mock Interviews</p>
          <p class="leader-title">Team Leader</p>
        </article>
        <article class="profile-card" aria-labelledby="ibrahim-name">
          <div class="profile-icon" aria-hidden="true">
            <span class="icon-pulse" />
            <svg viewBox="0 0 32 32"><circle cx="16" cy="10" r="5" /><path d="M6 27v-3a10 10 0 0 1 20 0v3" /></svg>
          </div>
          <h3 id="ibrahim-name">İbrahim Denk</h3>
          <p class="profile-department">Computer Engineering</p>
          <p class="profile-role">CV Assessment and Match Explanations</p>
        </article>
      </div>
    </section>
    <div class="team-details">
      <section class="detail-block" aria-labelledby="advisor-label">
        <svg class="detail-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="m3 12 13-6 13 6-13 6-13-6Z M8 15v8c5 4 11 4 16 0v-8 M29 12v11" /></svg>
        <div class="detail-copy"><h2 id="advisor-label" class="team-label">Project Advisor</h2><p class="detail-name">Prof. Selim Akyokuş</p></div>
      </section>
      <section class="detail-block" aria-labelledby="support-label">
        <svg class="detail-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M17 28H6V4h14l6 6v5 M20 4v7h6 M10 12h5 M10 17h6" /><circle cx="23" cy="23" r="7" /><path d="M23 19v4l3 2" /></svg>
        <div class="detail-copy"><h2 id="support-label" class="team-label">Funding Application</h2><p class="detail-name">TÜBİTAK 2209-A</p><p class="support-status">Application pending</p></div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.team-overview {
  position: absolute;
  inset: 0;
  color: var(--capstone-paper);
  font-family: var(--capstone-font);
}
.team-heading { position: absolute; top: 49px; left: var(--capstone-margin); }
.team-heading h1 {
  margin: 0;
  color: var(--capstone-paper);
  font-size: 44px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -1.2px;
}
.project-team { position: absolute; top: 130px; right: var(--capstone-margin); left: var(--capstone-margin); }
.team-label {
  margin: 0;
  color: var(--capstone-teal);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.team-cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px; margin-top: 16px; }
.profile-card {
  position: relative;
  box-sizing: border-box;
  height: 326px;
  min-width: 0;
  padding: 26px 30px;
  border: 1px solid var(--capstone-rule);
  border-radius: 10px;
  background: #13263e;
  text-align: center;
}
.profile-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin: 0 auto 18px;
  border: 1px solid #527780;
  border-radius: 50%;
  color: var(--capstone-teal);
}
.profile-icon svg { width: 32px; height: 32px; }
svg { display: block; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.profile-card h3 {
  margin: 0;
  color: var(--capstone-paper);
  font-size: 34px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.6px;
  white-space: nowrap;
}
.profile-department { margin: 8px 0 0; color: var(--capstone-muted); font-size: 21px; line-height: 1.4; }
.profile-role { margin: 20px 0 0; color: var(--capstone-muted); font-size: 20px; font-weight: 500; line-height: 1.4; white-space: nowrap; }
.leader .profile-icon { border-color: var(--capstone-teal); }
.leader-title { position: absolute; right: 30px; bottom: 22px; left: 30px; margin: 0; color: #60A5FA; font-size: 18px; font-weight: 500; line-height: 1.4; }
.icon-pulse {
  position: absolute;
  inset: -2px;
  border: 2px solid var(--capstone-teal);
  border-radius: inherit;
  box-shadow: 0 0 12px #69d4ca38;
  opacity: 0;
  pointer-events: none;
}
.is-active .profile-card:first-child .icon-pulse { animation: first-icon 7s ease-in-out infinite; }
.is-active .profile-card:last-child .icon-pulse { animation: second-icon 7s ease-in-out infinite; }
/* The frames pulse left, then right. Both rest for the remainder of each cycle. */
@keyframes first-icon {
  0%, 14%, 100% { opacity: 0; }
  3%, 10% { opacity: 0.9; }
}
@keyframes second-icon {
  0%, 16%, 30%, 100% { opacity: 0; }
  19%, 26% { opacity: 0.9; }
}
.team-details { position: absolute; top: 520px; right: var(--capstone-margin); left: var(--capstone-margin); display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px; }
.detail-block { box-sizing: border-box; display: flex; align-items: flex-start; gap: 20px; min-width: 0; height: 144px; padding: 22px 26px; background: #13263e; border: 1px solid var(--capstone-rule); border-radius: 10px; }
.detail-icon { flex: 0 0 36px; width: 36px; height: 36px; margin-top: 3px; color: var(--capstone-teal); }
.detail-copy { min-width: 0; }
.detail-name { margin: 8px 0 0; color: var(--capstone-paper); font-size: 28px; font-weight: 500; line-height: 1.3; letter-spacing: -0.4px; }
.support-status { margin: 4px 0 0; color: var(--capstone-muted); font-size: 18px; line-height: 1.4; }
@media (prefers-reduced-motion: reduce) {
  .is-active .profile-card:first-child .icon-pulse,
  .is-active .profile-card:last-child .icon-pulse { animation: none; opacity: 0; }
}
</style>
