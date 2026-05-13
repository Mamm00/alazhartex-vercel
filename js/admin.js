/* ═══════════════════════════════════════════════════════════════
   AL AZHAR TEX — Admin Panel JavaScript (FIXED for Vercel)
   The master weaver's chamber — where the site takes new shape
   ═══════════════════════════════════════════════════════════════ */

const AUTH_KEY = 'alazhartex_auth';
const SESSION_DURATION = 60 * 60 * 1000;
let panelsInitialized = false;

/* ── Storage Helper: Graceful fallback when localStorage is unavailable ── */
const Storage = {
  isAvailable: false,
  memoryStore: {},

  init() {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      this.isAvailable = true;
    } catch (e) {
      this.isAvailable = false;
      console.warn('localStorage not available (file:// protocol or private mode). Using in-memory fallback. Login will not persist across page reloads.');
    }
  },

  get(key) {
    if (this.isAvailable) {
      try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
      } catch (e) {
        return null;
      }
    }
    return this.memoryStore[key] || null;
  },

  set(key, value) {
    if (this.isAvailable) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        return false;
      }
    }
    this.memoryStore[key] = value;
    return true;
  },

  remove(key) {
    if (this.isAvailable) {
      try {
        localStorage.removeItem(key);
      } catch (e) {}
    }
    delete this.memoryStore[key];
  }
};

Storage.init();

function checkAuth() {
  const auth = Storage.get(AUTH_KEY);
  if (!auth || !auth.timestamp || Date.now() - auth.timestamp > SESSION_DURATION) {
    Storage.remove(AUTH_KEY);
    return false;
  }
  return true;
}

function login(username, password) {
  const storedPass = Storage.isAvailable ? localStorage.getItem('alazhartex_password') : Storage.memoryStore['alazhartex_password'];
  const defaultPass = 'admin';
  const validPass = storedPass || defaultPass;

  if (username === 'admin' && password === validPass) {
    Storage.set(AUTH_KEY, { timestamp: Date.now() });
    return true;
  }
  return false;
}

function logout() {
  Storage.remove(AUTH_KEY);
  panelsInitialized = false;
  showLogin();
}

function showLogin() {
  const loginView = document.getElementById('login-view');
  const dashView = document.getElementById('dashboard-view');
  if (loginView) loginView.classList.remove('hidden');
  if (dashView) dashView.classList.add('hidden');

  // Show warning if localStorage is unavailable
  if (!Storage.isAvailable) {
    const errorEl = document.getElementById('login-error');
    if (errorEl) {
      errorEl.innerHTML = `<strong>⚠️ Warning:</strong> localStorage is not available.<br>
        You are likely opening this file directly (file://).<br>
        <strong>To use the admin panel:</strong> Serve this site via a local server or deploy to Vercel.<br>
        <em>Temporary session login is available (won't persist after reload).</em>`;
      errorEl.style.color = '#E8D5A3';
      errorEl.style.background = 'rgba(201, 168, 76, 0.15)';
      errorEl.style.padding = '1rem';
      errorEl.style.borderRadius = '4px';
      errorEl.style.marginBottom = '1rem';
      errorEl.style.fontSize = '0.85rem';
      errorEl.style.lineHeight = '1.6';
    }
  }
}

function showDashboard() {
  const loginView = document.getElementById('login-view');
  const dashView = document.getElementById('dashboard-view');
  if (loginView) loginView.classList.add('hidden');
  if (dashView) dashView.classList.remove('hidden');

  if (!panelsInitialized) {
    initPanels();
    panelsInitialized = true;
  }
}

function initPanels() {
  const tabs = document.querySelectorAll('.admin-tab');
  const panels = document.querySelectorAll('.admin-panel');

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      if (panels[i]) panels[i].classList.add('active');
    });
  });

  loadPasswordPanel();
  loadLogoPanel();
  loadSliderPanel();
  loadTextsPanel();
  loadBackgroundsPanel();
  loadProductsPanel();

  const resetBtn = document.getElementById('reset-all');
  if (resetBtn) resetBtn.addEventListener('click', handleReset);
}

function loadPasswordPanel() {
  const form = document.getElementById('password-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const oldPass = document.getElementById('old-password').value;
    const newPass = document.getElementById('new-password').value;
    const confirmPass = document.getElementById('confirm-password').value;

    const storedPass = Storage.isAvailable ? localStorage.getItem('alazhartex_password') : Storage.memoryStore['alazhartex_password'];
    const validOld = storedPass || 'admin';

    if (oldPass !== validOld) {
      alert('Old password is incorrect. Like a wrong key in a lock.');
      return;
    }

    if (newPass !== confirmPass) {
      alert('New passwords do not match. The two threads must align.');
      return;
    }

    if (newPass.length < 4) {
      alert('Password must be at least 4 characters. A short thread breaks easily.');
      return;
    }

    if (Storage.isAvailable) {
      localStorage.setItem('alazhartex_password', newPass);
    } else {
      Storage.memoryStore['alazhartex_password'] = newPass;
    }
    alert('Password changed successfully. The chamber is resealed.');
    form.reset();
  });
}

function loadLogoPanel() {
  const fileInput = document.getElementById('logo-file');
  const urlInput = document.getElementById('logo-url');
  const preview = document.getElementById('logo-preview');
  const saveBtn = document.getElementById('save-logo');

  if (!fileInput || !preview) return;

  const currentLogo = Storage.isAvailable ? localStorage.getItem('alazhartex_logo') : Storage.memoryStore['alazhartex_logo'];
  if (currentLogo) {
    preview.innerHTML = `<img src="${currentLogo}" alt="Current logo">`;
  }

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      preview.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
    };
    reader.readAsDataURL(file);
  });

  urlInput?.addEventListener('input', (e) => {
    if (e.target.value) {
      preview.innerHTML = `<img src="${e.target.value}" alt="Preview" onerror="this.parentElement.innerHTML='<p style=\'color:red\'>Invalid image URL</p>'">`;
    }
  });

  saveBtn?.addEventListener('click', () => {
    if (fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (Storage.isAvailable) {
          localStorage.setItem('alazhartex_logo', event.target.result);
        } else {
          Storage.memoryStore['alazhartex_logo'] = event.target.result;
        }
        alert('Logo saved! The new face of Al Azhar Tex is set.');
      };
      reader.readAsDataURL(fileInput.files[0]);
    } else if (urlInput?.value) {
      if (Storage.isAvailable) {
        localStorage.setItem('alazhartex_logo', urlInput.value);
      } else {
        Storage.memoryStore['alazhartex_logo'] = urlInput.value;
      }
      alert('Logo URL saved! The new face of Al Azhar Tex is set.');
    } else {
      alert('Please upload a file or enter a URL. A weaver needs thread.');
    }
  });
}

function loadSliderPanel() {
  const container = document.getElementById('slides-container');
  const addBtn = document.getElementById('add-slide');
  const saveBtn = document.getElementById('save-slides');

  if (!container) return;

  const storedSlides = Storage.get('alazhartex_slides');
  const slides = storedSlides || (window.AlAzharTex?.DEFAULTS?.slides) || [];

  function renderSlideInputs() {
    container.innerHTML = slides.map((slide, i) => `
      <div class="admin-slide-item" style="border: 1px solid #ddd; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
        <h4>Slide ${i + 1}</h4>
        <div class="admin-form-group">
          <label>Image URL</label>
          <input type="text" class="admin-input slide-image" value="${slide.image}" placeholder="Image URL">
        </div>
        <div class="admin-form-group">
          <label>Title</label>
          <input type="text" class="admin-input slide-title" value="${slide.title}" placeholder="Slide title">
        </div>
        <div class="admin-form-group">
          <label>Subtitle</label>
          <input type="text" class="admin-input slide-subtitle" value="${slide.subtitle}" placeholder="Subtitle">
        </div>
        <div class="admin-form-group">
          <label>Arabic Text</label>
          <input type="text" class="admin-input slide-arabic" value="${slide.arabic || ''}" placeholder="Arabic text" dir="rtl">
        </div>
        <div class="admin-form-group">
          <label>Button Text</label>
          <input type="text" class="admin-input slide-btn-text" value="${slide.buttonText}" placeholder="Button text">
        </div>
        <div class="admin-form-group">
          <label>Button Link</label>
          <input type="text" class="admin-input slide-btn-link" value="${slide.buttonLink || '#'}" placeholder="Button link">
        </div>
        <button type="button" class="admin-btn admin-btn-danger remove-slide" data-index="${i}">Remove Slide</button>
      </div>
    `).join('');

    container.querySelectorAll('.remove-slide').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        slides.splice(idx, 1);
        renderSlideInputs();
      });
    });
  }

  renderSlideInputs();

  addBtn?.addEventListener('click', () => {
    slides.push({
      image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80',
      title: 'New Slide',
      subtitle: 'Subtitle here',
      arabic: '',
      buttonText: 'Learn More',
      buttonLink: '#'
    });
    renderSlideInputs();
  });

  saveBtn?.addEventListener('click', () => {
    const items = container.querySelectorAll('.admin-slide-item');
    const newSlides = [];

    items.forEach(item => {
      newSlides.push({
        image: item.querySelector('.slide-image').value,
        title: item.querySelector('.slide-title').value,
        subtitle: item.querySelector('.slide-subtitle').value,
        arabic: item.querySelector('.slide-arabic').value,
        buttonText: item.querySelector('.slide-btn-text').value,
        buttonLink: item.querySelector('.slide-btn-link').value
      });
    });

    Storage.set('alazhartex_slides', newSlides);
    alert('Slides saved! The showroom gates have been redrawn.');
  });
}

function loadTextsPanel() {
  const defaults = window.AlAzharTex?.DEFAULTS?.texts || {};
  const current = Storage.get('alazhartex_texts') || {};

  const fields = [
    { key: 'heroTitle', label: 'Hero Title', default: defaults.heroTitle },
    { key: 'heroSubtitle', label: 'Hero Subtitle', default: defaults.heroSubtitle },
    { key: 'aboutStory', label: 'About Story (English)', default: defaults.aboutStory },
    { key: 'aboutStoryAr', label: 'About Story (Arabic)', default: defaults.aboutStoryAr, dir: 'rtl' },
    { key: 'contactAddress', label: 'Contact Address', default: defaults.contactAddress },
    { key: 'contactPhone', label: 'Contact Phone', default: defaults.contactPhone },
    { key: 'workHours', label: 'Work Hours', default: defaults.workHours },
    { key: 'footerText', label: 'Footer Text', default: defaults.footerText }
  ];

  const container = document.getElementById('texts-container');
  if (!container) return;

  container.innerHTML = fields.map(f => `
    <div class="admin-form-group">
      <label>${f.label}</label>
      <textarea class="admin-input text-field" data-key="${f.key}" rows="3" ${f.dir ? 'dir="rtl"' : ''}>${current[f.key] || f.default || ''}</textarea>
    </div>
  `).join('');

  document.getElementById('save-texts')?.addEventListener('click', () => {
    const texts = {};
    container.querySelectorAll('.text-field').forEach(field => {
      texts[field.dataset.key] = field.value;
    });
    Storage.set('alazhartex_texts', texts);
    alert('Texts saved! The story of Al Azhar Tex has been rewritten.');
  });
}

function loadBackgroundsPanel() {
  const defaults = window.AlAzharTex?.DEFAULTS?.backgrounds || {};
  const current = Storage.get('alazhartex_backgrounds') || {};

  const fields = [
    { key: 'hero', label: 'Hero Section Background' },
    { key: 'productsHero', label: 'Products Page Hero' },
    { key: 'galleryHero', label: 'Gallery Page Hero' },
    { key: 'aboutHero', label: 'About Page Hero' },
    { key: 'contactHero', label: 'Contact Page Hero' }
  ];

  const container = document.getElementById('backgrounds-container');
  if (!container) return;

  container.innerHTML = fields.map(f => `
    <div class="admin-form-group">
      <label>${f.label}</label>
      <input type="text" class="admin-input bg-field" data-key="${f.key}"
             value="${current[f.key] || defaults[f.key] || ''}" placeholder="Image URL">
      <div class="admin-preview" style="margin-top: 0.5rem;">
        <img src="${current[f.key] || defaults[f.key] || ''}" alt="Preview" style="max-width: 200px; max-height: 120px; border-radius: 4px;" onerror="this.style.display='none'">
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.bg-field').forEach(input => {
    input.addEventListener('input', (e) => {
      const preview = e.target.nextElementSibling?.querySelector('img');
      if (preview) {
        preview.src = e.target.value;
        preview.style.display = e.target.value ? 'block' : 'none';
      }
    });
  });

  document.getElementById('save-backgrounds')?.addEventListener('click', () => {
    const backgrounds = {};
    container.querySelectorAll('.bg-field').forEach(field => {
      if (field.value) backgrounds[field.dataset.key] = field.value;
    });
    Storage.set('alazhartex_backgrounds', backgrounds);
    alert('Backgrounds saved! The walls of our digital souq are repainted.');
  });
}

function loadProductsPanel() {
  const defaults = window.AlAzharTex?.DEFAULTS?.products || { women: [], men: [], trending: [] };
  const current = Storage.get('alazhartex_products') || defaults;

  const container = document.getElementById('products-container');
  if (!container) return;

  function renderCategory(name, items) {
    return `
      <div style="margin-bottom: 2rem;">
        <h4 style="color: var(--gold); margin-bottom: 1rem; text-transform: capitalize;">${name}</h4>
        ${items.map((item, i) => `
          <div style="border: 1px solid #ddd; padding: 1rem; margin-bottom: 0.5rem; border-radius: 4px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="admin-form-group">
                <label>Name (EN)</label>
                <input type="text" class="admin-input prod-name" value="${item.name}" data-cat="${name}" data-idx="${i}">
              </div>
              <div class="admin-form-group">
                <label>Name (AR)</label>
                <input type="text" class="admin-input prod-name-ar" value="${item.nameAr}" dir="rtl" data-cat="${name}" data-idx="${i}">
              </div>
            </div>
            <div class="admin-form-group">
              <label>Description</label>
              <textarea class="admin-input prod-desc" rows="2" data-cat="${name}" data-idx="${i}">${item.desc}</textarea>
            </div>
            <div class="admin-form-group">
              <label>Image URL</label>
              <input type="text" class="admin-input prod-image" value="${item.image}" data-cat="${name}" data-idx="${i}">
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  container.innerHTML = `
    ${renderCategory('women', current.women || defaults.women)}
    ${renderCategory('men', current.men || defaults.men)}
    ${renderCategory('trending', current.trending || defaults.trending)}
  `;

  document.getElementById('save-products')?.addEventListener('click', () => {
    const products = { women: [], men: [], trending: [] };

    ['women', 'men', 'trending'].forEach(cat => {
      const names = container.querySelectorAll(`.prod-name[data-cat="${cat}"]`);
      names.forEach((nameEl, idx) => {
        const parent = nameEl.closest('div[style*="border"]');
        if (parent) {
          products[cat].push({
            name: nameEl.value,
            nameAr: parent.querySelector('.prod-name-ar').value,
            desc: parent.querySelector('.prod-desc').value,
            image: parent.querySelector('.prod-image').value
          });
        }
      });
    });

    Storage.set('alazhartex_products', products);
    alert('Products saved! The catalog has been rewritten.');
  });
}

function handleReset() {
  const confirmed = confirm(
    'Are you sure you want to reset ALL customizations?\n' +
    'This will erase all your changes and restore the factory defaults.\n' +
    'This action cannot be undone.'
  );

  if (!confirmed) return;

  const doubleCheck = confirm(
    'FINAL WARNING: All customizations will be permanently deleted.\n' +
    'Logo, slides, texts, backgrounds, and product edits will be lost.\n\n' +
    'Click OK to proceed with reset.'
  );

  if (!doubleCheck) return;

  if (Storage.isAvailable) {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('alazhartex_') && key !== 'alazhartex_password' && key !== AUTH_KEY) {
        localStorage.removeItem(key);
      }
    });
  } else {
    Object.keys(Storage.memoryStore).forEach(key => {
      if (key.startsWith('alazhartex_') && key !== 'alazhartex_password' && key !== AUTH_KEY) {
        delete Storage.memoryStore[key];
      }
    });
  }

  alert('All customizations have been reset to factory defaults.\nThe loom has been cleared for a new tapestry.');
  window.location.reload();
}

/* ── DOM Ready: The loom begins to weave ── */
document.addEventListener('DOMContentLoaded', () => {
  if (checkAuth()) {
    showDashboard();
  } else {
    showLogin();
  }

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
      const errorEl = document.getElementById('login-error');

      if (login(username, password)) {
        showDashboard();
        if (errorEl) errorEl.textContent = '';
      } else {
        if (errorEl) {
          errorEl.textContent = 'Invalid username or password. The key does not fit the lock.';
          errorEl.style.color = '#B22222';
        }
      }
    });
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
});
