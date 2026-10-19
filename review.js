// Progress Review tab: UAT sesuai kontrak, bonus deliverables, implementasi di produksi

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTAL_DATA;
  const root = document.getElementById('tabContentReview');
  if (!data || !root) return;

  const STATUS = {
    PASS: { cls: 'pass', label: 'PASS' },
    PASS_NOTES: { cls: 'pass-notes', label: 'PASS WITH NOTES' },
    NA: { cls: 'na', label: 'N/A' },
    NOT_DELIVERED: { cls: 'fail', label: 'BELUM DELIVERED' },
    BLOCKED: { cls: 'outstanding', label: 'BLOCKED' },
    NOT_TESTED: { cls: 'ready', label: 'BELUM DIUJI' },
    FAIL: { cls: 'fail', label: 'FAIL' }
  };
  const DONE = ['PASS', 'PASS_NOTES', 'NA'];
  const fmt = n => Number(n).toLocaleString('id-ID');
  const pill = st => {
    const m = STATUS[st] || { cls: 'na', label: st };
    return `<span class="status-pill ${m.cls}">${m.label}</span>`;
  };

  const modules = data.uat_modules || [];
  const extras = data.additional_modules || [];
  const impl = data.implementation || { metrics: [], remaining: [] };
  const allTc = modules.flatMap(m => m.testcases);
  const doneTc = allTc.filter(t => DONE.includes(t.status)).length;
  const pct = allTc.length ? (doneTc / allTc.length) * 100 : 0;

  // --- Pillars
  const pillars = [
    { key: 'contract', icon: 'gavel', kicker: 'Sesuai Kontrak', title: 'UAT as Stated in Contract',
      value: `${doneTc}/${allTc.length}`, sub: `${pct.toFixed(1)}% test case selesai · ${modules.length} modul` },
    { key: 'bonus', icon: 'redeem', kicker: 'Nilai Tambah', title: 'Bonus Deliverables',
      value: `${extras.length}`, sub: 'fitur di luar kontrak, sudah dipakai di produksi' },
    { key: 'impl', icon: 'rocket_launch', kicker: 'Go-Live', title: 'Implementation',
      value: fmt((impl.metrics.find(m => m.icon === 'receipt_long') || {}).value || 0),
      sub: `transaksi POS di produksi (cut-off ${impl.cutoff || '-'})` }
  ];

  root.innerHTML = `
    <div class="rv-intro">
      <h3>Progress Review Implementasi Odoo</h3>
      <p>Klik salah satu pilar untuk melihat detail. Kartu modul dan fitur dapat diklik untuk membuka rinciannya.</p>
    </div>
    <div class="rv-pillars">
      ${pillars.map(p => `
        <button class="rv-pillar" data-panel="${p.key}">
          <span class="rv-pillar-icon material-symbols-outlined">${p.icon}</span>
          <span class="rv-pillar-kicker">${p.kicker}</span>
          <span class="rv-pillar-title">${p.title}</span>
          <span class="rv-pillar-value">${p.value}</span>
          <span class="rv-pillar-sub">${p.sub}</span>
        </button>`).join('')}
    </div>
    <div class="rv-panel" id="rvPanel-contract"></div>
    <div class="rv-panel" id="rvPanel-bonus"></div>
    <div class="rv-panel" id="rvPanel-impl"></div>
  `;

  // --- Panel 1: UAT sesuai kontrak
  const panelContract = root.querySelector('#rvPanel-contract');
  panelContract.innerHTML = `
    <div class="rv-panel-head">
      <div>
        <h4>UAT sesuai Dokumen Kontrak (UAT v2.0, 4 Maret 2026)</h4>
        <p>${allTc.length} test case pada ${modules.length} modul. Selesai = PASS, PASS WITH NOTES, atau N/A.</p>
      </div>
      <div class="rv-donut" style="--p:${pct.toFixed(1)}"><span>${pct.toFixed(1)}%</span></div>
    </div>
    <div class="rv-grid rv-grid-modules">
      ${modules.map(m => {
        const n = m.testcases.length;
        const d = m.testcases.filter(t => DONE.includes(t.status)).length;
        const p = n ? Math.round((d / n) * 100) : 0;
        const open = m.testcases.filter(t => !DONE.includes(t.status));
        return `
          <div class="rv-card rv-module ${p === 100 ? 'is-complete' : ''}" data-module="${m.id}" tabindex="0">
            <div class="rv-card-top">
              <span class="material-symbols-outlined rv-card-icon">${m.icon || 'view_list'}</span>
              <span class="rv-badge ${p === 100 ? 'ok' : 'warn'}">${p === 100 ? 'Selesai' : `Sisa ${n - d}`}</span>
            </div>
            <div class="rv-card-title">${m.name}</div>
            <div class="rv-progress"><span style="width:${p}%"></span></div>
            <div class="rv-card-meta"><strong>${d}/${n}</strong> test case · ${p}%</div>
            ${open.length ? `<div class="rv-open">${open.map(t => `${m.code}-${t.no} ${pill(t.status)}`).join(' ')}</div>` : ''}
            <div class="rv-expand">
              <ul class="rv-tc-list">
                ${m.testcases.map(t => `<li><code>${m.code}-${String(t.no).padStart(2, '0')}</code><span>${t.scenario.replace(/^\*/, '')}</span>${pill(t.status)}</li>`).join('')}
              </ul>
              <button class="btn btn-secondary rv-goto" data-module="${m.id}">
                <span class="material-symbols-outlined">open_in_new</span><span>Lihat di Matriks UAT</span>
              </button>
            </div>
          </div>`;
      }).join('')}
    </div>
  `;

  // --- Panel 2: Bonus deliverables
  const cats = [...new Set(extras.map(e => e.category))];
  const panelBonus = root.querySelector('#rvPanel-bonus');
  panelBonus.innerHTML = `
    <div class="rv-panel-head">
      <div>
        <h4>Bonus Deliverables: ${extras.length} Fitur di Luar Kontrak</h4>
        <p>Dikembangkan selama implementasi untuk kebutuhan operasional Inti Warna, di luar 136 test case kontrak.</p>
      </div>
    </div>
    <div class="rv-chips">
      <button class="rv-chip active" data-cat="ALL">Semua (${extras.length})</button>
      ${cats.map(c => `<button class="rv-chip" data-cat="${c}">${c} (${extras.filter(e => e.category === c).length})</button>`).join('')}
    </div>
    <div class="rv-grid rv-grid-bonus">
      ${extras.map(e => `
        <div class="rv-card rv-bonus" data-cat="${e.category}" tabindex="0">
          <div class="rv-card-top">
            <span class="material-symbols-outlined rv-card-icon purple">${e.icon || 'extension'}</span>
            <span class="rv-badge purple">${e.category}</span>
          </div>
          <div class="rv-card-title">${e.title}</div>
          <div class="rv-expand">
            <p>${e.summary}</p>
            <div class="rv-usage"><span class="material-symbols-outlined">insights</span>${e.impact}</div>
          </div>
          <div class="rv-hint">Klik untuk detail</div>
        </div>`).join('')}
    </div>
  `;

  // --- Panel 3: Implementation
  const panelImpl = root.querySelector('#rvPanel-impl');
  panelImpl.innerHTML = `
    <div class="rv-panel-head">
      <div>
        <h4>Implementasi di Produksi</h4>
        <p>Sistem sudah dipakai operasional harian di seluruh cabang (data produksi per ${impl.cutoff || '-'}).</p>
      </div>
    </div>
    <div class="rv-grid rv-grid-metrics">
      ${impl.metrics.map(m => `
        <div class="rv-card rv-metric">
          <span class="material-symbols-outlined rv-card-icon cyan">${m.icon}</span>
          <div class="rv-metric-value" data-count="${m.value}">0</div>
          <div class="rv-card-title">${m.label}</div>
          <div class="rv-metric-sub">${m.sub}</div>
        </div>`).join('')}
    </div>
    ${impl.remaining.length ? `
      <h4 class="rv-subhead">Sisa Pekerjaan (${impl.remaining.length})</h4>
      <div class="rv-grid rv-grid-remaining">
        ${impl.remaining.map(r => `
          <div class="rv-card rv-remaining">
            <div class="rv-card-top"><code>${r.code}</code>${pill(r.status)}</div>
            <div class="rv-card-title">${r.title}</div>
            <p class="rv-metric-sub">${r.note}</p>
          </div>`).join('')}
      </div>` : ''}
  `;

  // --- Interactions
  const pillarBtns = root.querySelectorAll('.rv-pillar');
  const panels = root.querySelectorAll('.rv-panel');
  let counted = false;

  function animateCounts() {
    if (counted) return;
    counted = true;
    panelImpl.querySelectorAll('[data-count]').forEach(el => {
      const target = Number(el.dataset.count);
      const start = performance.now();
      const step = now => {
        const k = Math.min(1, (now - start) / 900);
        el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  function showPanel(key) {
    pillarBtns.forEach(b => b.classList.toggle('active', b.dataset.panel === key));
    panels.forEach(p => p.classList.toggle('show', p.id === `rvPanel-${key}`));
    if (key === 'impl') animateCounts();
  }
  pillarBtns.forEach(b => b.addEventListener('click', () => showPanel(b.dataset.panel)));
  showPanel('contract');

  root.querySelectorAll('.rv-module, .rv-bonus').forEach(card => {
    const toggle = () => card.classList.toggle('open');
    card.addEventListener('click', e => { if (!e.target.closest('.rv-goto')) toggle(); });
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  });

  root.querySelectorAll('.rv-chip').forEach(chip => chip.addEventListener('click', () => {
    root.querySelectorAll('.rv-chip').forEach(c => c.classList.toggle('active', c === chip));
    const cat = chip.dataset.cat;
    root.querySelectorAll('.rv-bonus').forEach(card => {
      card.style.display = cat === 'ALL' || card.dataset.cat === cat ? '' : 'none';
    });
  }));

  // Jump to UAT matrix filtered by module
  root.querySelectorAll('.rv-goto').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    const uatTab = document.querySelector('.tab-btn[data-tab="uat"]');
    const moduleFilter = document.getElementById('moduleFilter');
    if (uatTab) uatTab.click();
    if (moduleFilter) {
      moduleFilter.value = btn.dataset.module;
      moduleFilter.dispatchEvent(new Event('change'));
    }
    const sec = document.getElementById(`mod-sec-${btn.dataset.module}`);
    if (sec) { sec.classList.add('open'); sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }));
});
