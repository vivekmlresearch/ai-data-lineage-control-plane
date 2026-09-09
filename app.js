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

document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.nav-item.active').classList.remove('active');
    item.classList.add('active');
    document.getElementById('breadcrumb-view').textContent = item.dataset.view;
    const isLaunchView = item.dataset.view === 'Launch readiness';
    document.getElementById('dashboard-view').hidden = isLaunchView;
    document.getElementById('launch-view').hidden = !isLaunchView;
    if (item.dataset.view !== 'Overview' && !isLaunchView) showToast(`${item.dataset.view} view is ready for review`);
  });
});

document.getElementById('launch-brief').addEventListener('click', () => showToast('Launch brief prepared for stakeholder review'));
document.getElementById('workstream-filter').addEventListener('click', () => showToast('Workstream filter: all owners'));
document.getElementById('gate-review').addEventListener('click', openDrawer);
document.getElementById('safety-report').addEventListener('click', () => showToast('Safety report opened for REL-0284'));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeDrawer();
});
