const drawer = document.getElementById('review-drawer');
const backdrop = document.getElementById('drawer-backdrop');
const toast = document.getElementById('toast');
const toastText = document.getElementById('toast-text');

function showToast(message) {
  toastText.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2800);
}
function openDrawer() { drawer.classList.add('open'); backdrop.classList.add('open'); }
function closeDrawer() { drawer.classList.remove('open'); backdrop.classList.remove('open'); }

document.getElementById('open-review').addEventListener('click', openDrawer);
document.getElementById('close-drawer').addEventListener('click', closeDrawer);
backdrop.addEventListener('click', closeDrawer);
document.getElementById('dismiss-finding').addEventListener('click', () => { closeDrawer(); showToast('Finding dismissed from this review'); });
document.getElementById('acknowledge').addEventListener('click', () => { closeDrawer(); showToast('Finding acknowledged • approval gate updated'); });
document.getElementById('new-release').addEventListener('click', () => showToast('Release review workspace created'));
document.getElementById('filter-button').addEventListener('click', () => showToast('Showing active and review-required datasets'));

document.getElementById('dataset-search').addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase().replace(/[-_]/g, ' ').trim();
  document.querySelectorAll('#dataset-rows tr').forEach((row) => {
    row.hidden = query && !row.dataset.search.includes(query);
  });
});

const operationalViews = {
  Lineage: {
    eyebrow: 'Artifact graph', subtitle: 'Trace every artifact from source to release.', action: 'Add lineage event',
    metrics: [['319', 'Tracked artifacts', '↑ 12 this week'], ['97.8%', 'Lineage completeness', '312 linked'], ['0', 'Broken chains', 'Healthy']],
    mainEyebrow: 'Dependency map', mainTitle: 'Customer support copilot lineage',
    rows: [['support-conversations-v18', 'Dataset', '3 upstream sources · updated 12 min ago', 'Ready'], ['cleaned-support-v18', 'Transformation', 'PII masking · version 4.2', 'Verified'], ['eval-suite-0284', 'Evaluation', '94.1% regression score · 18 benchmarks', 'Passed'], ['copilot-v2.4.0', 'Release artifact', 'Target production · Sep 18', 'In review']],
    sideEyebrow: 'Integrity checks', sideTitle: 'Chain health', side: '<div class="policy-card"><strong>Signed event ledger</strong><p>All 319 artifacts have content hashes and actor metadata.</p></div><div class="policy-card"><strong>Last verification</strong><p>September 09, 2026 · 09:38 UTC</p></div><a class="action-link" href="#">Run integrity check →</a>'
  },
  Quality: {
    eyebrow: 'Quality & safety', subtitle: 'Monitor quality thresholds, safety findings, and remediation SLAs.', action: 'Create review',
    metrics: [['96.4%', 'Quality score', '↑ 2.1% vs last run'], ['07', 'Open findings', '2 critical'], ['91%', 'SLA remediation', '↑ 6% this quarter']],
    mainEyebrow: 'Remediation queue', mainTitle: 'Findings requiring attention',
    rows: [['Indirect PII in eval slice', 'SAF-142 · High severity', 'Responsible AI · due Sep 12', 'Review'], ['Missing locale coverage', 'QUAL-221 · Medium severity', 'Data Platform · due Sep 13', 'Assigned'], ['Prompt injection regression', 'SAF-139 · Medium severity', 'Eval Engineering · due Sep 15', 'Testing']],
    sideEyebrow: 'Policy coverage', sideTitle: 'Active controls', side: '<div class="policy-card"><strong>PII detection</strong><p>14 detectors active across 24 datasets.</p></div><div class="policy-card"><strong>Release threshold</strong><p>Critical safety findings block production approval.</p></div><a class="action-link" href="#" id="quality-report">Open safety report →</a>'
  },
  Evaluations: {
    eyebrow: 'Evaluation operations', subtitle: 'Compare benchmark runs, regression coverage, and release quality.', action: 'Run evaluation',
    metrics: [['94.1%', 'Overall score', '↑ 1.8% vs v2.3'], ['18', 'Benchmarks passed', '2 in progress'], ['3', 'Slices monitored', 'Language, tool-use, PII']],
    mainEyebrow: 'Evaluation registry', mainTitle: 'Recent evaluation runs',
    rows: [['REL-0284 regression suite', 'v2.4.0 · 18 benchmarks', 'Completed 41 min ago', '94.1%'], ['Tool-use safety slice', 'Agent actions · 24 scenarios', 'Running · 76% complete', 'In flight'], ['Multilingual quality', 'EN, ES, DE, JA', 'Scheduled Sep 12', 'Queued']],
    sideEyebrow: 'Coverage gaps', sideTitle: 'What needs attention', side: '<div class="policy-card"><strong>Tool-use regression</strong><p>Three scenarios still need expected outcomes before approval.</p></div><div class="policy-card"><strong>Reproducibility</strong><p>Environment lockfile verified for the latest run.</p></div><a class="action-link" href="#">Compare evaluation runs →</a>'
  },
  Approvals: {
    eyebrow: 'Governance decisions', subtitle: 'Review transparent approvals, exceptions, and release blockers.', action: 'Request approval',
    metrics: [['4/5', 'Gates passed', '1 pending'], ['02', 'Pending decisions', '1 safety exception'], ['0', 'Expired exceptions', 'Healthy']],
    mainEyebrow: 'Approval queue', mainTitle: 'Decisions awaiting action',
    rows: [['Safety exception SAF-142', 'REL-0284 · high severity', 'Owner: Responsible AI', 'Pending'], ['Production release gate', 'REL-0284 · blocked', 'Waiting on SAF-142', 'Blocked'], ['Regional license evidence', 'DATA-031 · low risk', 'Owner: Data Platform', 'Ready']],
    sideEyebrow: 'Separation of duties', sideTitle: 'Approval policy', side: '<div class="policy-card"><strong>Two-person rule</strong><p>High-risk exceptions require a policy owner and product owner.</p></div><div class="policy-card"><strong>Evidence required</strong><p>Every decision links to lineage, evaluation, and remediation evidence.</p></div><a class="action-link" href="#">View decision history →</a>'
  },
  'Audit log': {
    eyebrow: 'System evidence', subtitle: 'Inspect immutable governance events across the control plane.', action: 'Export audit log',
    metrics: [['18.4k', 'Audit events', 'Last 30 days'], ['100%', 'Signed events', 'No gaps detected'], ['34s', 'Last sync', 'All systems nominal']],
    mainEyebrow: 'Event stream', mainTitle: 'Recent audit activity',
    rows: [['Dataset versioned', 'support-conversations-v18', 'Vivek R · 26 min ago', 'Signed'], ['Evaluation completed', 'REL-0284 regression suite', 'Eval runner · 41 min ago', 'Signed'], ['Approval requested', 'Safety exception SAF-142', 'Responsible AI · 1 hr ago', 'Signed']],
    sideEyebrow: 'Integrity', sideTitle: 'Ledger status', side: '<div class="policy-card"><strong>Tamper evidence</strong><p>Hash chain verified through event 18,402.</p></div><div class="policy-card"><strong>Retention</strong><p>Events retained for 7 years under governance policy.</p></div><a class="action-link" href="#">Download evidence bundle →</a>'
  },
  Policies: {
    eyebrow: 'Policy center', subtitle: 'Manage thresholds and controls that govern data and release decisions.', action: 'Create policy',
    metrics: [['12', 'Active policies', '3 updated this month'], ['24', 'Datasets covered', '100% coverage'], ['5', 'Policy owners', 'Across 4 teams']],
    mainEyebrow: 'Policy catalog', mainTitle: 'Controls in production',
    rows: [['Production release standard', 'v3.4 · owner Governance', 'Updated Sep 05', 'Active'], ['PII handling baseline', 'v2.1 · owner Responsible AI', 'Updated Aug 28', 'Active'], ['Evaluation coverage policy', 'v1.8 · owner Eval Eng.', 'Review due Sep 20', 'Review']],
    sideEyebrow: 'Policy posture', sideTitle: 'No drift detected', side: '<div class="policy-card"><strong>Last policy evaluation</strong><p>All active controls evaluated against current release inventory.</p></div><div class="policy-card"><strong>Next review window</strong><p>September 20, 2026 · 5 owners assigned.</p></div><a class="action-link" href="#">Open policy editor →</a>'
  }
};

function renderOperationalView(viewName) {
  const view = operationalViews[viewName];
  document.getElementById('operational-eyebrow').textContent = view.eyebrow;
  document.getElementById('operational-title').textContent = viewName;
  document.getElementById('operational-subtitle').textContent = view.subtitle;
  document.getElementById('operational-action').innerHTML = `<span>＋</span> ${view.action}`;
  document.getElementById('operational-metrics').innerHTML = view.metrics.map(([value, label, foot]) => `<article class="metric-card"><div class="metric-top"><span>${label}</span><span class="metric-icon">◈</span></div><div class="metric-value">${value}</div><div class="metric-foot"><span class="positive">${foot}</span></div></article>`).join('');
  document.getElementById('operational-main').innerHTML = `<div class="panel-heading"><div><p class="eyebrow">${view.mainEyebrow}</p><h2>${view.mainTitle}</h2></div><button class="more-button" aria-label="More options">•••</button></div><div class="operational-list">${view.rows.map(([title, detail, meta, status]) => `<div class="operational-row"><span class="operational-icon green-bg">◈</span><div><strong>${title}</strong><small>${detail} · ${meta}</small></div><span class="tag ${status === 'Review' || status === 'Pending' || status === 'Blocked' ? 'review' : 'ready'}">${status}</span></div>`).join('')}</div>`;
  document.getElementById('operational-side').innerHTML = `<div class="panel-heading"><div><p class="eyebrow">${view.sideEyebrow}</p><h2>${view.sideTitle}</h2></div></div>${view.side}`;
}

document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.nav-item.active').classList.remove('active');
    item.classList.add('active');
    document.getElementById('breadcrumb-view').textContent = item.dataset.view;
    const isLaunchView = item.dataset.view === 'Launch readiness';
    const isOperationalView = Boolean(operationalViews[item.dataset.view]);
    document.getElementById('dashboard-view').hidden = isLaunchView || isOperationalView;
    document.getElementById('launch-view').hidden = !isLaunchView;
    document.getElementById('operational-view').hidden = !isOperationalView;
    if (isOperationalView) renderOperationalView(item.dataset.view);
  });
});

renderOperationalView('Lineage');
document.getElementById('operational-action').addEventListener('click', () => showToast('Work item created in the control room'));

document.getElementById('launch-brief').addEventListener('click', () => showToast('Launch brief prepared for stakeholder review'));
document.getElementById('workstream-filter').addEventListener('click', () => showToast('Workstream filter: all owners'));
document.getElementById('gate-review').addEventListener('click', openDrawer);
document.getElementById('safety-report').addEventListener('click', () => showToast('Safety report opened for REL-0284'));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeDrawer();
});
