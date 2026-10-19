// Mode Presentasi (slide layar penuh): navigasi panah / klik / swipe, Esc untuk keluar

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTAL_DATA;
  const features = window.SLIDES_FEATURES || [];
  const btn = document.getElementById('btnPresent');
  if (!data || !btn) return;

  const DONE = ['PASS', 'PASS_NOTES', 'NA'];
  const LABEL = { PASS: 'PASS', PASS_NOTES: 'PASS WITH NOTES', NA: 'N/A', NOT_DELIVERED: 'BELUM DELIVERED', BLOCKED: 'BLOCKED', NOT_TESTED: 'BELUM DIUJI', FAIL: 'FAIL' };
  const CLS = { PASS: 'pass', PASS_NOTES: 'pass-notes', NA: 'na', NOT_DELIVERED: 'fail', BLOCKED: 'outstanding', NOT_TESTED: 'ready', FAIL: 'fail' };
  const pill = st => `<span class="status-pill ${CLS[st] || 'na'}">${LABEL[st] || st}</span>`;
  const fmt = n => Number(n).toLocaleString('id-ID');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const modules = data.uat_modules || [];
  const allTc = modules.flatMap(m => m.testcases);
  const doneTc = allTc.filter(t => DONE.includes(t.status)).length;
  const pct = (doneTc / allTc.length) * 100;
  const impl = data.implementation || { metrics: [], remaining: [] };
  const extras = data.additional_modules || [];
  const cats = [...new Set(features.map(f => f.cat))];
  const ICON = Object.fromEntries(extras.map(e => [e.category, e.icon]));

  // --- Slides
  const slides = [];
  slides.push(`
    <div class="sl-cover">
      <div class="sl-kicker">Progress Review Implementasi Odoo 19</div>
      <h1>PT Inti Adhigana Ubaid<br><span>Inti Warna</span></h1>
      <p>Disiapkan oleh PT Digital Decision Indonesia · ${esc(data.project.last_updated || '')}</p>
      <div class="sl-cover-tags"><span>UAT sesuai Kontrak</span><span>Bonus Deliverables</span><span>Implementasi</span></div>
    </div>`);

  slides.push(`
    <div class="sl-head"><div class="sl-kicker">Ringkasan</div><h2>Posisi Proyek Saat Ini</h2></div>
    <div class="sl-pillars">
      <div class="sl-pillar"><span class="material-symbols-outlined">gavel</span><div class="sl-big">${doneTc}/${allTc.length}</div><div class="sl-pillar-t">UAT sesuai Kontrak</div><div class="sl-pillar-s">${pct.toFixed(1)}% test case selesai</div></div>
      <div class="sl-pillar purple"><span class="material-symbols-outlined">redeem</span><div class="sl-big">${extras.length}</div><div class="sl-pillar-t">Bonus Deliverables</div><div class="sl-pillar-s">fitur di luar kontrak</div></div>
      <div class="sl-pillar green"><span class="material-symbols-outlined">rocket_launch</span><div class="sl-big">${fmt((impl.metrics.find(m => m.icon === 'receipt_long') || {}).value || 0)}</div><div class="sl-pillar-t">Transaksi POS di Produksi</div><div class="sl-pillar-s">${impl.metrics.length ? '11 kasir di seluruh cabang' : ''}</div></div>
    </div>`);

  slides.push(`
    <div class="sl-head"><div class="sl-kicker">Bagian 1 · Sesuai Kontrak</div><h2>UAT as Stated in Contract</h2>
      <p>Dokumen UAT v2.0 (4 Maret 2026): ${allTc.length} test case pada ${modules.length} modul</p></div>
    <div class="sl-modules">
      ${modules.map(m => {
        const n = m.testcases.length, d = m.testcases.filter(t => DONE.includes(t.status)).length, p = Math.round(d / n * 100);
        return `<div class="sl-mod ${p === 100 ? 'ok' : ''}">
          <div class="sl-mod-top"><span class="material-symbols-outlined">${m.icon || 'view_list'}</span><b>${p}%</b></div>
          <div class="sl-mod-name">${esc(m.name)}</div>
          <div class="sl-bar"><span style="width:${p}%"></span></div>
          <div class="sl-mod-sub">${d}/${n} test case</div></div>`;
      }).join('')}
    </div>`);

  if (impl.remaining && impl.remaining.length) {
    slides.push(`
      <div class="sl-head"><div class="sl-kicker">Bagian 1 · Sesuai Kontrak</div><h2>Sisa ${impl.remaining.length} Test Case</h2>
        <p>${doneTc} dari ${allTc.length} test case sudah selesai; berikut yang masih terbuka</p></div>
      <div class="sl-remaining">
        ${impl.remaining.map(r => `<div class="sl-rem"><div class="sl-rem-top"><code>${esc(r.code)}</code>${pill(r.status)}</div>
          <h3>${esc(r.title)}</h3><p>${esc(r.note)}</p></div>`).join('')}
      </div>`);
  }

  slides.push(`
    <div class="sl-head"><div class="sl-kicker">Bagian 2 · Nilai Tambah</div><h2>Bonus Deliverables</h2>
      <p>${extras.length} fitur dikembangkan di luar kontrak dan sudah dipakai di produksi</p></div>
    <div class="sl-cats">
      ${[...new Set(extras.map(e => e.category))].map(c => {
        const items = extras.filter(e => e.category === c);
        return `<div class="sl-cat"><div class="sl-cat-top"><span class="material-symbols-outlined">${ICON[c] || 'extension'}</span><b>${items.length}</b></div>
          <div class="sl-cat-name">${esc(c)}</div><ul>${items.map(i => `<li>${esc(i.title)}</li>`).join('')}</ul></div>`;
      }).join('')}
    </div>`);

  features.forEach((f, i) => {
    const shots = f.shots || [];
    const media = shots.length
      ? `<div class="sl-shot" data-shots='${JSON.stringify(shots)}'>
           <img src="${shots[0]}" alt="${esc(f.title)}" loading="lazy" onerror="this.closest('.sl-shot').classList.add('missing')">
           <div class="sl-shot-missing"><span class="material-symbols-outlined">${ICON[f.cat] || 'extension'}</span></div>
           ${shots.length > 1 ? `<div class="sl-shot-nav">${shots.map((s, k) => `<button data-k="${k}" class="${k ? '' : 'on'}"></button>`).join('')}</div>` : ''}
         </div>`
      : `<div class="sl-shot missing"><div class="sl-shot-missing"><span class="material-symbols-outlined">${ICON[f.cat] || 'extension'}</span><small>${esc(f.cat)}</small></div></div>`;
    slides.push(`
      <div class="sl-feature">
        ${media}
        <div class="sl-feat-body">
          <div class="sl-kicker">Bonus Deliverable ${i + 1}/${features.length} · ${esc(f.cat)}</div>
          <h2>${esc(f.title)}</h2>
          <div class="sl-caps-t">Bisa apa saja:</div>
          <ul class="sl-caps">${f.caps.map(c => `<li>${esc(c)}</li>`).join('')}</ul>
          <div class="sl-usage"><span class="material-symbols-outlined">insights</span>Pemakaian di produksi: ${esc(f.usage)}</div>
        </div>
      </div>`);
  });

  slides.push(`
    <div class="sl-head"><div class="sl-kicker">Bagian 3 · Go-Live</div><h2>Implementasi di Produksi</h2>
      <p>Sistem dipakai operasional harian di seluruh cabang (data produksi per ${esc(impl.cutoff || '-')})</p></div>
    <div class="sl-metrics">
      ${impl.metrics.map(m => `<div class="sl-metric"><span class="material-symbols-outlined">${m.icon}</span>
        <div class="sl-big sm">${fmt(m.value)}</div><div class="sl-pillar-t">${esc(m.label)}</div><div class="sl-pillar-s">${esc(m.sub)}</div></div>`).join('')}
    </div>`);

  slides.push(`
    <div class="sl-cover end">
      <div class="sl-kicker">Terima Kasih</div>
      <h1>${pct.toFixed(1)}% UAT selesai<br><span>+ ${extras.length} bonus deliverables</span></h1>
      <p>PT Digital Decision Indonesia · Odoo Official Partner</p>
    </div>`);

  // --- Overlay
  const ov = document.createElement('div');
  ov.className = 'sl-overlay';
  ov.innerHTML = `
    <div class="sl-stage">${slides.map((s, i) => `<section class="sl-slide" data-i="${i}">${s}</section>`).join('')}</div>
    <div class="sl-progress"><span></span></div>
    <div class="sl-controls">
      <button class="sl-btn" data-act="prev" title="Sebelumnya (←)"><span class="material-symbols-outlined">chevron_left</span></button>
      <span class="sl-count"></span>
      <button class="sl-btn" data-act="next" title="Berikutnya (→)"><span class="material-symbols-outlined">chevron_right</span></button>
      <button class="sl-btn" data-act="full" title="Layar penuh (F)"><span class="material-symbols-outlined">fullscreen</span></button>
      <button class="sl-btn" data-act="close" title="Keluar (Esc)"><span class="material-symbols-outlined">close</span></button>
    </div>
    <div class="sl-zoom"><img alt=""></div>`;
  document.body.appendChild(ov);

  const els = ov.querySelectorAll('.sl-slide');
  const bar = ov.querySelector('.sl-progress span');
  const count = ov.querySelector('.sl-count');
  const zoom = ov.querySelector('.sl-zoom');
  let cur = 0;

  function go(i) {
    cur = Math.max(0, Math.min(els.length - 1, i));
    els.forEach((el, k) => el.classList.toggle('on', k === cur));
    bar.style.width = `${((cur + 1) / els.length) * 100}%`;
    count.textContent = `${cur + 1} / ${els.length}`;
  }
  function open() {
    ov.classList.add('show');
    document.body.style.overflow = 'hidden';
    go(cur);
  }
  function close() {
    ov.classList.remove('show');
    zoom.classList.remove('show');
    document.body.style.overflow = '';
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  }
  function full() {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else ov.requestFullscreen?.().catch(() => {});
  }

  btn.addEventListener('click', open);
  ov.querySelector('.sl-controls').addEventListener('click', e => {
    const a = e.target.closest('[data-act]')?.dataset.act;
    if (a === 'prev') go(cur - 1);
    if (a === 'next') go(cur + 1);
    if (a === 'full') full();
    if (a === 'close') close();
  });
  document.addEventListener('keydown', e => {
    if (!ov.classList.contains('show')) return;
    if (zoom.classList.contains('show')) { if (e.key === 'Escape') zoom.classList.remove('show'); return; }
    if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); go(cur + 1); }
    if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); go(cur - 1); }
    if (e.key === 'Home') go(0);
    if (e.key === 'End') go(els.length - 1);
    if (e.key === 'f' || e.key === 'F') full();
    if (e.key === 'Escape' && !document.fullscreenElement) close();
  });

  // Screenshot: ganti gambar & perbesar
  ov.querySelectorAll('.sl-shot').forEach(box => {
    const shots = JSON.parse(box.dataset.shots || '[]');
    const img = box.querySelector('img');
    box.querySelectorAll('.sl-shot-nav button').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      box.classList.remove('missing');
      img.src = shots[+b.dataset.k];
      box.querySelectorAll('.sl-shot-nav button').forEach(x => x.classList.toggle('on', x === b));
    }));
    if (img) img.addEventListener('click', () => {
      zoom.querySelector('img').src = img.src;
      zoom.classList.add('show');
    });
  });
  zoom.addEventListener('click', () => zoom.classList.remove('show'));

  // Swipe
  let x0 = null;
  ov.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  ov.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  if (location.hash === '#present') open();
});
