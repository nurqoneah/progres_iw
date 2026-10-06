// Application Logic for Intiwarna UAT & Progress Portal

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTAL_DATA;
  if (!data) {
    console.error("Portal data not found!");
    return;
  }

  // --- STATE ---
  let currentTab = 'uat';
  let searchTerm = '';
  let selectedModule = 'ALL';
  let selectedStatus = 'ALL';
  let initSearchTerm = '';
  let initCategory = 'ALL';
  let isAllExpanded = false;
  let isAllConveniencesExpanded = false;

  // --- DOM ELEMENTS ---
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = {
    uat: document.getElementById('tabContentUat'),
    initiatives: document.getElementById('tabContentInitiatives'),
    database: document.getElementById('tabContentDatabase'),
    roadmap: document.getElementById('tabContentRoadmap'),
    uninstalled: document.getElementById('tabContentUninstalled')
  };

  const uatSearchInput = document.getElementById('uatSearchInput');
  const moduleFilter = document.getElementById('moduleFilter');
  const statusFilter = document.getElementById('statusFilter');
  const btnExpandAll = document.getElementById('btnExpandAll');
  const btnExpandAllText = document.getElementById('btnExpandAllText');
  const btnToggleAllConveniences = document.getElementById('btnToggleAllConveniences');
  const btnToggleAllConveniencesText = document.getElementById('btnToggleAllConveniencesText');
  const uatModulesContainer = document.getElementById('uatModulesContainer');

  const initSearchInput = document.getElementById('initSearchInput');
  const initCategoryFilter = document.getElementById('initCategoryFilter');
  const initiativesGrid = document.getElementById('initiativesGrid');

  const dbStatsGrid = document.getElementById('dbStatsGrid');
  const uninstalledTableBody = document.getElementById('uninstalledTableBody');

  // --- THEME HANDLING ---
  const savedTheme = localStorage.getItem('intiwarna_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeIcon.textContent = savedTheme === 'dark' ? 'light_mode' : 'dark_mode';

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const target = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem('intiwarna_theme', target);
    themeIcon.textContent = target === 'dark' ? 'light_mode' : 'dark_mode';
  });

  // --- TAB SWITCHING ---
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tabKey = btn.getAttribute('data-tab');
      currentTab = tabKey;

      Object.keys(tabContents).forEach(key => {
        if (tabContents[key]) {
          tabContents[key].style.display = key === tabKey ? 'block' : 'none';
        }
      });
    });
  });

  // --- RENDER DATABASE AUDIT METRICS ---
  function renderDbStats() {
    dbStatsGrid.innerHTML = '';
    data.db_stats.forEach(stat => {
      const card = document.createElement('div');
      card.className = 'db-card';
      card.innerHTML = `
        <div class="db-icon">
          <span class="material-symbols-outlined">${stat.icon || 'storage'}</span>
        </div>
        <div class="db-info">
          <h4>${stat.count.toLocaleString()}</h4>
          <p>${stat.label}</p>
          <code>tabel: ${stat.badge}</code>
        </div>
      `;
      dbStatsGrid.appendChild(card);
    });
  }

  // --- RENDER UNINSTALLED MODULES ---
  function renderUninstalledModules() {
    uninstalledTableBody.innerHTML = '';
    data.uninstalled_modules.forEach(mod => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong style="color: var(--accent-cyan);">${mod.module}</strong></td>
        <td><strong>${mod.name}</strong></td>
        <td>${mod.reason}</td>
        <td><span class="status-pill ${mod.module === 'digi_tinting_base' ? 'outstanding' : 'pass'}">${mod.impact_on_uat}</span></td>
      `;
      uninstalledTableBody.appendChild(tr);
    });
  }

  // --- RENDER STANDALONE ADDITIONAL MODULES ---
  function renderInitiatives() {
    initiativesGrid.innerHTML = '';
    const modulesList = data.additional_modules || data.developer_initiatives || [];

    const filtered = modulesList.filter(init => {
      const matchSearch = !initSearchTerm || 
        init.title.toLowerCase().includes(initSearchTerm.toLowerCase()) ||
        init.module.toLowerCase().includes(initSearchTerm.toLowerCase()) ||
        init.summary.toLowerCase().includes(initSearchTerm.toLowerCase()) ||
        init.impact.toLowerCase().includes(initSearchTerm.toLowerCase());
      
      const matchCat = initCategory === 'ALL' || init.category === initCategory;
      return matchSearch && matchCat;
    });

    if (filtered.length === 0) {
      initiativesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; color: var(--text-dim);">
          <span class="material-symbols-outlined" style="font-size: 48px; margin-bottom: 12px;">search_off</span>
          <p>Tidak ada tambahan fitur yang cocok dengan pencarian.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(init => {
      const card = document.createElement('div');
      card.className = 'initiative-card';
      card.innerHTML = `
        <div>
          <div class="init-header">
            <div class="init-icon-box">
              <span class="material-symbols-outlined">${init.icon || 'extension'}</span>
            </div>
            <span class="init-badge">${init.badge || init.category}</span>
          </div>
          
          <h4 class="init-title">${init.title}</h4>
          <div class="init-module-name">${init.module}</div>
          
          <p class="init-summary">${init.summary}</p>
          
          <div class="init-impact-box">
            <div class="init-impact-title">Manfaat Bisnis Nyata:</div>
            <div class="init-impact-text">${init.impact}</div>
          </div>
        </div>

        <div class="init-footer">
          <span style="font-size: 11px; color: var(--accent-emerald); display: inline-flex; align-items: center; gap: 4px;">
            <span class="material-symbols-outlined" style="font-size: 14px;">check_circle</span>
            ${init.status}
          </span>
          <a href="${init.odoo_url}" target="_blank" class="link-odoo" title="Buka Menu Odoo">
            <span>Buka di Odoo</span>
            <span class="material-symbols-outlined" style="font-size: 14px;">open_in_new</span>
          </a>
        </div>
      `;
      initiativesGrid.appendChild(card);
    });
  }

  // --- RENDER UAT MODULES & TEST CASES ---
  function renderUatMatrix() {
    uatModulesContainer.innerHTML = '';
    let totalDisplayedTC = 0;

    data.uat_modules.forEach((mod, modIdx) => {
      // Filter test cases
      const filteredTC = mod.testcases.filter(tc => {
        const matchModule = selectedModule === 'ALL' || selectedModule === mod.id;
        const matchStatus = selectedStatus === 'ALL' || selectedStatus === tc.status;
        
        const convMatch = tc.conveniences && tc.conveniences.some(c =>
          c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const matchSearch = !searchTerm || 
          tc.scenario.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tc.steps.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tc.expected.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tc.db_evidence.toLowerCase().includes(searchTerm.toLowerCase()) ||
          `${mod.code}-${tc.no}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
          convMatch;
        
        return matchModule && matchStatus && matchSearch;
      });

      if (filteredTC.length === 0) return;

      totalDisplayedTC += filteredTC.length;

      const section = document.createElement('div');
      section.className = `module-section ${modIdx === 0 || isAllExpanded ? 'open' : ''}`;
      section.id = `mod-sec-${mod.id}`;

      // Calculate pass rate in this module
      const passCount = mod.testcases.filter(t => t.status === 'PASS').length;
      const customFeaturesCount = mod.custom_features_count || 0;

      // Build module banner
      const bannerHtml = customFeaturesCount > 0 ? `
        <div class="module-custom-banner">
          <span class="material-symbols-outlined" style="color: #818cf8; font-size: 20px;">stars</span>
          <span>Modul ini diperkuat dengan <strong>${customFeaturesCount} Kemudahan & Sub-Fitur Kustom</strong> yang telah terintegrasi untuk mempercepat alur dan mencegah kesalahan input.</span>
        </div>
      ` : '';

      section.innerHTML = `
        <div class="module-header">
          <div class="module-title-group">
            <div class="module-icon-box">
              <span class="material-symbols-outlined">${mod.icon || 'view_list'}</span>
            </div>
            <div class="module-title-text">
              <h3>${mod.name}</h3>
              <p>${mod.description}</p>
            </div>
          </div>
          <div class="module-meta-group">
            ${customFeaturesCount > 0 ? `<span class="module-stat-pill" style="color: #a78bfa; border-color: rgba(167, 139, 250, 0.4);"><span class="material-symbols-outlined" style="font-size: 14px;">auto_awesome</span> ${customFeaturesCount} Sub-Fitur Kustom</span>` : ''}
            <span class="module-stat-pill">${filteredTC.length} Test Cases</span>
            <span class="module-stat-pill" style="color: #34d399;">${passCount}/${mod.testcases.length} Pass</span>
            <span class="material-symbols-outlined chevron-icon">expand_more</span>
          </div>
        </div>

        <div class="module-body">
          ${bannerHtml}
          <div class="table-responsive">
            <table class="uat-table">
              <thead>
                <tr>
                  <th style="width: 80px;">No</th>
                  <th style="width: 260px;">Skenario Pengujian</th>
                  <th>Langkah Pengujian & Expected Result</th>
                  <th style="width: 140px;">Status</th>
                  <th style="width: 240px;">Validasi Database</th>
                  <th style="width: 110px;">Aksi Odoo</th>
                </tr>
              </thead>
              <tbody>
                ${filteredTC.map(tc => {
                  let statusClass = 'pass';
                  let statusLabel = 'PASS';
                  if (tc.status === 'READY_PENDING_DATA') {
                    statusClass = 'ready';
                    statusLabel = 'READY / PENDING';
                  } else if (tc.status === 'OUTSTANDING') {
                    statusClass = 'outstanding';
                    statusLabel = 'OUTSTANDING';
                  }

                  const hasConveniences = tc.conveniences && tc.conveniences.length > 0;
                  const convMatch = hasConveniences && searchTerm && tc.conveniences.some(c =>
                    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    c.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    c.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    c.tag.toLowerCase().includes(searchTerm.toLowerCase())
                  );

                  const shouldOpenConv = isAllConveniencesExpanded || convMatch;

                  let toggleBtnHtml = '';
                  let subRowHtml = '';

                  if (hasConveniences) {
                    toggleBtnHtml = `
                      <div>
                        <button class="btn-convenience-toggle ${shouldOpenConv ? 'active' : ''}" data-target="conv-subrow-${mod.code}-${tc.no}">
                          <span class="material-symbols-outlined" style="font-size: 15px; color: #a5b4fc;">tune</span>
                          <span>${tc.conveniences.length} Kemudahan & Sub-Fitur</span>
                          <span class="material-symbols-outlined icon-chevron">expand_more</span>
                        </button>
                      </div>
                    `;

                    subRowHtml = `
                      <tr class="convenience-subrow" id="conv-subrow-${mod.code}-${tc.no}" style="display: ${shouldOpenConv ? 'table-row' : 'none'};">
                        <td colspan="6">
                          <div class="convenience-drawer">
                            <div class="convenience-header">
                              <div class="convenience-title">
                                <span class="material-symbols-outlined">subdirectory_arrow_right</span>
                                <span>Detail Kemudahan & Fitur Spesifik yang Dibangun (${tc.conveniences.length} Sub-Fitur):</span>
                              </div>
                              <span class="convenience-badge">Terintegrasi Langsung ke Alur ${mod.name}</span>
                            </div>
                            <div class="convenience-grid">
                              ${tc.conveniences.map(c => `
                                <div class="convenience-card">
                                  <div class="conv-card-top">
                                    <div class="conv-card-icon">
                                      <span class="material-symbols-outlined" style="font-size: 18px;">${c.icon || 'star'}</span>
                                    </div>
                                    <span class="conv-card-tag">${c.tag}</span>
                                  </div>
                                  <div class="conv-card-title">${c.title}</div>
                                  <div class="conv-card-module">${c.module}</div>
                                  <div class="conv-card-desc">${c.desc}</div>
                                </div>
                              `).join('')}
                            </div>
                          </div>
                        </td>
                      </tr>
                    `;
                  }

                  return `
                    <tr data-tc-id="${mod.code}-${tc.no}">
                      <td><code style="font-weight: 700; color: var(--accent-cyan);">${mod.code}-${String(tc.no).padStart(2, '0')}</code></td>
                      <td class="scenario-cell">
                        <div>${tc.scenario}</div>
                        ${toggleBtnHtml}
                        ${tc.notes ? `<div style="font-size: 11px; font-weight: 400; color: var(--text-dim); margin-top: 4px;">${tc.notes}</div>` : ''}
                      </td>
                      <td>
                        <div style="margin-bottom: 6px; color: var(--text-main); font-size: 12px;"><strong>Langkah:</strong> ${tc.steps}</div>
                        <div style="color: var(--text-muted); font-size: 12px;"><strong>Expected:</strong> ${tc.expected}</div>
                      </td>
                      <td>
                        <span class="status-pill ${statusClass}">${statusLabel}</span>
                      </td>
                      <td>
                        <div class="evidence-cell">
                          <span class="material-symbols-outlined" style="font-size: 16px;">storage</span>
                          <span>${tc.db_evidence}</span>
                        </div>
                      </td>
                      <td>
                        <a href="${tc.odoo_url}" target="_blank" class="link-odoo" title="Buka Menu / Action di Odoo">
                          <span>Buka Odoo</span>
                          <span class="material-symbols-outlined" style="font-size: 14px;">open_in_new</span>
                        </a>
                      </td>
                    </tr>
                    ${subRowHtml}
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

      // Header click toggle
      const header = section.querySelector('.module-header');
      header.addEventListener('click', () => {
        section.classList.toggle('open');
      });

      uatModulesContainer.appendChild(section);
    });

    if (totalDisplayedTC === 0) {
      uatModulesContainer.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: var(--text-dim); background: var(--bg-card); border-radius: var(--radius-md);">
          <span class="material-symbols-outlined" style="font-size: 48px; margin-bottom: 12px;">search_off</span>
          <h3>Tidak ada skenario UAT yang cocok</h3>
          <p style="margin-top: 6px; font-size: 14px;">Coba ubah kata kunci pencarian atau sesuaikan filter modul dan status.</p>
        </div>
      `;
    }
  }

  // --- EVENT DELEGATION FOR CONVENIENCE TOGGLE ---
  uatModulesContainer.addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('.btn-convenience-toggle');
    if (toggleBtn) {
      e.stopPropagation();
      const targetId = toggleBtn.getAttribute('data-target');
      const subrow = document.getElementById(targetId);
      if (subrow) {
        const isHidden = subrow.style.display === 'none';
        subrow.style.display = isHidden ? 'table-row' : 'none';
        toggleBtn.classList.toggle('active', isHidden);
      }
    }
  });

  // --- FILTERS & SEARCH LISTENERS ---
  uatSearchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderUatMatrix();
  });

  moduleFilter.addEventListener('change', (e) => {
    selectedModule = e.target.value;
    renderUatMatrix();
  });

  statusFilter.addEventListener('change', (e) => {
    selectedStatus = e.target.value;
    renderUatMatrix();
  });

  btnExpandAll.addEventListener('click', () => {
    isAllExpanded = !isAllExpanded;
    const sections = document.querySelectorAll('.module-section');
    sections.forEach(s => {
      if (isAllExpanded) {
        s.classList.add('open');
      } else {
        s.classList.remove('open');
      }
    });
    if (btnExpandAllText) {
      btnExpandAllText.textContent = isAllExpanded ? 'Tutup Modul' : 'Buka Modul';
    }
  });

  if (btnToggleAllConveniences) {
    btnToggleAllConveniences.addEventListener('click', () => {
      isAllConveniencesExpanded = !isAllConveniencesExpanded;
      const subrows = document.querySelectorAll('.convenience-subrow');
      const toggleBtns = document.querySelectorAll('.btn-convenience-toggle');
      
      subrows.forEach(r => {
        r.style.display = isAllConveniencesExpanded ? 'table-row' : 'none';
      });

      toggleBtns.forEach(b => {
        b.classList.toggle('active', isAllConveniencesExpanded);
      });

      if (btnToggleAllConveniencesText) {
        btnToggleAllConveniencesText.textContent = isAllConveniencesExpanded ? 'Tutup Detail Kemudahan' : 'Buka Detail Kemudahan';
      }
    });
  }

  initSearchInput.addEventListener('input', (e) => {
    initSearchTerm = e.target.value;
    renderInitiatives();
  });

  initCategoryFilter.addEventListener('change', (e) => {
    initCategory = e.target.value;
    renderInitiatives();
  });

  // --- INITIAL RENDERING ---
  renderDbStats();
  renderUninstalledModules();
  renderInitiatives();
  renderUatMatrix();
});
