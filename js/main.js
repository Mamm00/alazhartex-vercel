/* ═══════════════════════════════════════════════════════════════
   AL AZHAR TEX — Main JavaScript (FIXED)
   Like the loom of Zagazig, this script weaves all pages together
   ═══════════════════════════════════════════════════════════════ */

/* ── DEFAULTS: The factory settings, like the original pattern ── */
const DEFAULTS = {
  slides: [
    {
      image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80',
      title: 'Al Azhar Tex',
      subtitle: 'Premium Wholesale Fabrics from the Heart of Egypt',
      arabic: 'أجود أنواع الأقمشة بالجملة من قلب مصر',
      buttonText: 'Explore the Collection',
      buttonLink: '#products'
    },
    {
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1920&q=80',
      title: "Women's Collection",
      subtitle: 'Warsaw, Pirlanta, Chiffon, Satin & More',
      arabic: 'تشكيلة نسائية فاخرة — ورسو، بيرلانتا، شيفون، ستان',
      buttonText: "View Women's Fabrics",
      buttonLink: 'products.html#women'
    },
    {
      image: 'https://images.unsplash.com/photo-1598556776374-0a0f90f47ea5?w=1920&q=80',
      title: "Men's Collection",
      subtitle: 'Gabardine, Cashmere, Linen, Suiting & Shirtings',
      arabic: 'أقمشة رجالية عالية الجودة — جبردين، كشمير، كتان',
      buttonText: "View Men's Fabrics",
      buttonLink: 'products.html#men'
    }
  ],

  products: {
    women: [
      { name: 'Warsaw', nameAr: 'ورسو', desc: 'Premium Warsaw fabric, perfect for elegant evening wear and traditional dresses.', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' },
      { name: 'Pirlanta', nameAr: 'بيرلانتا', desc: 'Sparkling Pirlanta fabric with diamond-like shimmer for special occasions.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80' },
      { name: 'Chiffon 150', nameAr: 'شيفون 150', desc: 'Lightweight chiffon at 150cm width — ideal for flowing garments and scarves.', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' },
      { name: 'Chiffon 180', nameAr: 'شيفون 180', desc: 'Extra-wide chiffon at 180cm for grand designs and layered creations.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80' },
      { name: 'Fabric 625', nameAr: 'قماش 625', desc: 'The versatile 625 fabric — a staple for everyday elegance and comfort.', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' },
      { name: 'Bubble Satin', nameAr: 'ستان فقاعات', desc: 'Textured bubble satin with a unique dimensional surface for standout pieces.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80' },
      { name: 'Satin Crinkle', nameAr: 'ستان مكسر', desc: 'Crinkled satin with a crushed silk effect — modern texture meets classic shine.', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' },
      { name: 'Various Satins', nameAr: 'أنواع مختلفة من الستان', desc: 'A curated collection of satin varieties in different weights and finishes.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80' },
      { name: 'Fursan 180', nameAr: 'فرسان 180', desc: 'Fursan fabric at 180cm width — durable, elegant, and perfect for daily wear.', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' },
      { name: 'Rotana 150', nameAr: 'روتانا 150', desc: 'Rotana fabric at 150cm — soft touch with beautiful drape for all occasions.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80' },
      { name: 'Rotana 180', nameAr: 'روتانا 180', desc: 'Wide Rotana at 180cm — maximum coverage with premium quality assurance.', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' }
    ],
    men: [
      { name: 'Gabardine', nameAr: 'جبردين', desc: "Classic gabardine — the gold standard for men's trousers and suits.", image: 'https://images.unsplash.com/photo-1598556776374-0a0f90f47ea5?w=600&q=80' },
      { name: 'Tavira', nameAr: 'تافيرا', desc: 'Premium Tavira fabric with excellent structure for formal and casual wear.', image: 'https://images.unsplash.com/photo-1598556776374-0a0f90f47ea5?w=600&q=80' },
      { name: 'Feskar', nameAr: 'فسكار', desc: "Feskar fabric — a traditional favorite known for its durability and comfort.", image: 'https://images.unsplash.com/photo-1598556776374-0a0f90f47ea5?w=600&q=80' },
      { name: 'Cashmere', nameAr: 'كشمير', desc: 'Luxurious cashmere blends for the discerning gentleman — warmth meets elegance.', image: 'https://images.unsplash.com/photo-1598556776374-0a0f90f47ea5?w=600&q=80' },
      { name: 'Linen', nameAr: 'كتان', desc: "Natural linen — breathable, timeless, and perfect for Egypt's warm climate.", image: 'https://images.unsplash.com/photo-1598556776374-0a0f90f47ea5?w=600&q=80' },
      { name: 'Cotton Blends', nameAr: 'قطن مخلوط', desc: 'Versatile cotton blends offering the best of natural and synthetic fibers.', image: 'https://images.unsplash.com/photo-1598556776374-0a0f90f47ea5?w=600&q=80' },
      { name: 'Suiting Fabrics', nameAr: 'أقمشة بدل', desc: 'Professional suiting fabrics in various weights — tailored for success.', image: 'https://images.unsplash.com/photo-1598556776374-0a0f90f47ea5?w=600&q=80' },
      { name: 'Shirtings', nameAr: 'أقمشة قمصان', desc: 'Premium shirting fabrics — crisp, comfortable, and made to last.', image: 'https://images.unsplash.com/photo-1598556776374-0a0f90f47ea5?w=600&q=80' }
    ],
    trending: [
      { name: 'Dantel / Lace', nameAr: 'دانتيل', desc: 'Intricate lace fabrics trending across Egyptian social media for bridal and evening wear.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80' },
      { name: 'Georgette', nameAr: 'جورجيت', desc: 'Flowing georgette — the fabric of choice for modern Egyptian fashion designers.', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' },
      { name: 'Crepe', nameAr: 'كريب', desc: 'Textured crepe fabric with a matte finish — sophisticated and on-trend.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80' },
      { name: 'Mousseline', nameAr: 'موسلين', desc: 'Delicate mousseline — sheer elegance for layering and summer designs.', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' },
      { name: 'Velvet', nameAr: 'مخمل', desc: 'Rich velvet fabrics for luxurious winter collections and formal occasions.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80' },
      { name: 'Lame', nameAr: 'لاميه', desc: 'Metallic lame fabric — shimmer and shine for statement pieces.', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' },
      { name: 'Tergal', nameAr: 'ترجال', desc: 'Classic Tergal — a versatile blend perfect for both casual and formal wear.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80' },
      { name: 'Shantoon', nameAr: 'شانتون', desc: 'Premium Shantoon silk — smooth, lustrous, and always in demand.', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' },
      { name: 'Tulle', nameAr: 'تول', desc: 'Ethereal tulle for bridal veils, tutus, and layered fashion creations.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80' },
      { name: 'Lurex', nameAr: 'لوريكس', desc: 'Glittering Lurex with metallic threads — the star of evening wear.', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' },
      { name: 'Saten Shiffon', nameAr: 'ساتان شيفون', desc: 'The perfect marriage of satin and chiffon — dual-texture trending fabric.', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80' },
      { name: 'Tel', nameAr: 'تل', desc: 'Traditional Tel fabric — a cultural staple making a modern comeback.', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' }
    ]
  },

  gallery: [
    { src: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80', alt: 'Fabric rolls in our Zagazig showroom', caption: 'Our Showroom — Zagazig' },
    { src: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80', alt: 'Colorful fabric collection display', caption: 'Colorful Collections' },
    { src: 'https://images.unsplash.com/photo-1598556776374-0a0f90f47ea5?w=800&q=80', alt: "Men's suiting fabrics", caption: "Men's Suiting Department" },
    { src: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80', alt: 'Premium chiffon and satin rolls', caption: 'Premium Chiffon & Satin' },
    { src: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80', alt: 'Traditional Egyptian fabric patterns', caption: 'Traditional Patterns' },
    { src: 'https://images.unsplash.com/photo-1598556776374-0a0f90f47ea5?w=800&q=80', alt: 'Cashmere and wool blends', caption: 'Winter Collection' }
  ],

  texts: {
    heroTitle: 'Al Azhar Tex',
    heroSubtitle: 'Premium Wholesale Fabrics from the Heart of Egypt',
    aboutStory: 'Founded in Zagazig, Sharqia Governorate, Al Azhar Tex has been a trusted name in Egyptian fabric wholesale for generations. Under the guidance of Shady Anwar, we have built a reputation for quality, variety, and honest pricing. Our showroom in Zagazig welcomes merchants, tailors, and fashion designers from across the delta and beyond.',
    aboutStoryAr: 'تأسست أل أزهر تكس في الزقازيق، محافظة الشرقية، وقد أصبحت اسمًا موثوقًا به في تجارة الأقمشة بالجملة في مصر لأجيال. تحت إشراف شادي أنور، بنينا سمعة للجودة والتنوع والأسعار العادلة. يستقبل معرضنا في الزقازيق التجار والخياطين ومصممي الأزياء من جميع أنحاء الدلتا وما وراءها.',
    contactAddress: 'Zagazig, Sharqia Governorate, Egypt',
    contactAddressAr: 'الزقازيق، محافظة الشرقية، مصر',
    contactPhone: '+20 100 360 0949',
    workHours: 'Open daily 11 AM – 7 PM | Closed Friday',
    workHoursAr: 'مفتوح يومياً من 11 صباحاً – 7 مساءً | الجمعة إجازة',
    footerText: 'Al Azhar Tex — Wholesale Fabrics Since Zagazig'
  },

  backgrounds: {
    hero: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80',
    productsHero: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1920&q=80',
    galleryHero: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80',
    aboutHero: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80',
    contactHero: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80'
  }
};

const Storage = {
  prefix: 'alazhartex_',
  get(key) {
    try {
      const data = localStorage.getItem(this.prefix + key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.warn('Storage read error:', e);
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(this.prefix + key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('Storage write error:', e);
      return false;
    }
  },
  remove(key) {
    localStorage.removeItem(this.prefix + key);
  },
  clear() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(this.prefix))
      .forEach(k => localStorage.removeItem(k));
  }
};

function getOverride(key, fallback) {
  const stored = Storage.get(key);
  return stored !== null ? stored : fallback;
}

function applyCustomizations() {
  const customLogo = Storage.get('logo');
  if (customLogo) {
    document.querySelectorAll('.logo-img').forEach(img => {
      img.src = customLogo;
    });
  }

  const texts = Storage.get('texts') || {};

  if (texts.heroTitle) {
    document.querySelectorAll('[data-text="heroTitle"]').forEach(el => el.textContent = texts.heroTitle);
  }
  if (texts.heroSubtitle) {
    document.querySelectorAll('[data-text="heroSubtitle"]').forEach(el => el.textContent = texts.heroSubtitle);
  }
  if (texts.aboutStory) {
    document.querySelectorAll('[data-text="aboutStory"]').forEach(el => el.textContent = texts.aboutStory);
  }
  if (texts.aboutStoryAr) {
    document.querySelectorAll('[data-text="aboutStoryAr"]').forEach(el => el.textContent = texts.aboutStoryAr);
  }
  if (texts.contactAddress) {
    document.querySelectorAll('[data-text="contactAddress"]').forEach(el => el.textContent = texts.contactAddress);
  }
  if (texts.contactPhone) {
    document.querySelectorAll('[data-text="contactPhone"]').forEach(el => {
      el.textContent = texts.contactPhone;
      if (el.tagName === 'A') el.href = 'tel:' + texts.contactPhone.replace(/\s/g, '');
    });
  }
  if (texts.workHours) {
    document.querySelectorAll('[data-text="workHours"]').forEach(el => el.textContent = texts.workHours);
  }
  if (texts.footerText) {
    document.querySelectorAll('[data-text="footerText"]').forEach(el => el.textContent = texts.footerText);
  }

  const backgrounds = Storage.get('backgrounds') || {};
  document.querySelectorAll('[data-bg]').forEach(el => {
    const key = el.dataset.bg;
    if (backgrounds[key]) {
      el.style.backgroundImage = `url(${backgrounds[key]})`;
    }
  });
}

/* ── initHeroSlider: The revolving door of our digital showroom ── */
function initHeroSlider() {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;

  let slidesData = getOverride('slides', DEFAULTS.slides);

  /* CRITICAL FIX: Validate localStorage data isn't corrupted */
  if (!Array.isArray(slidesData) || slidesData.length === 0) {
    console.warn('Invalid slides data in localStorage, falling back to defaults');
    slidesData = DEFAULTS.slides;
  }

  slider.innerHTML = slidesData.map((slide, index) => `
    <div class="hero-slide ${index === 0 ? 'active' : ''}" 
         style="background-image: url('${slide.image}')">
    </div>
  `).join('');

  const titleEl = document.querySelector('.hero-title');
  const subtitleEl = document.querySelector('.hero-subtitle');
  const arabicEl = document.querySelector('.hero-arabic');
  const btnEl = document.querySelector('.hero-btn');

  if (titleEl) titleEl.textContent = slidesData[0].title;
  if (subtitleEl) subtitleEl.textContent = slidesData[0].subtitle;
  if (arabicEl) arabicEl.textContent = slidesData[0].arabic;
  if (btnEl) {
    btnEl.textContent = slidesData[0].buttonText;
    btnEl.href = slidesData[0].buttonLink || '#products';
  }

  const dotsContainer = document.querySelector('.slider-dots');
  if (dotsContainer) {
    dotsContainer.innerHTML = slidesData.map((_, i) => `
      <button class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>
    `).join('');
  }

  let currentSlide = 0;
  const slides = slider.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');

  function goToSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));

    if (titleEl) titleEl.textContent = slidesData[index].title;
    if (subtitleEl) subtitleEl.textContent = slidesData[index].subtitle;
    if (arabicEl) arabicEl.textContent = slidesData[index].arabic;
    if (btnEl) {
      btnEl.textContent = slidesData[index].buttonText;
      btnEl.href = slidesData[index].buttonLink || '#products';
    }

    currentSlide = index;
  }

  let autoSlide = setInterval(() => {
    goToSlide((currentSlide + 1) % slidesData.length);
  }, 5000);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(autoSlide);
      goToSlide(i);
      autoSlide = setInterval(() => {
        goToSlide((currentSlide + 1) % slidesData.length);
      }, 5000);
    });
  });

  document.querySelector('.slider-arrow.prev')?.addEventListener('click', () => {
    clearInterval(autoSlide);
    goToSlide((currentSlide - 1 + slidesData.length) % slidesData.length);
    autoSlide = setInterval(() => {
      goToSlide((currentSlide + 1) % slidesData.length);
    }, 5000);
  });

  document.querySelector('.slider-arrow.next')?.addEventListener('click', () => {
    clearInterval(autoSlide);
    goToSlide((currentSlide + 1) % slidesData.length);
    autoSlide = setInterval(() => {
      goToSlide((currentSlide + 1) % slidesData.length);
    }, 5000);
  });
}

/* ── initMobileMenu: The hidden fold revealed ── */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isActive = toggle.classList.toggle('active');
    nav.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
  });

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      nav.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ── initHeaderScroll: The header that grows a shadow like dusk ── */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  let ticking = false;
  /* FIX: Passive listener for scroll performance */
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ── initScrollReveal: Elements awakening like dawn on the Nile ── */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

/* ── initTabs: The three chambers of our treasury ── */
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabContainer => {
    const buttons = tabContainer.querySelectorAll('.tab-btn');
    const panels = tabContainer.closest('.tabs-wrapper')?.querySelectorAll('.tab-panel');

    if (!panels) return;

    /* FIX: Use data-target for robust matching instead of index */
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        buttons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        if (targetId) {
          document.getElementById(targetId)?.classList.add('active');
        } else {
          /* Fallback to index if no data-target */
          const idx = Array.from(buttons).indexOf(btn);
          panels[idx]?.classList.add('active');
        }
      });
    });
  });
}

/* ── activateTabFromHash: Open correct tab from URL hash ── */
function activateTabFromHash() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;

  const tabMap = { 'women': 'women-panel', 'men': 'men-panel', 'trending': 'trending-panel' };
  const panelId = tabMap[hash];
  if (!panelId) return;

  document.querySelectorAll('.tabs-wrapper').forEach(wrapper => {
    const buttons = wrapper.querySelectorAll('.tab-btn');
    const panels = wrapper.querySelectorAll('.tab-panel');
    const targetPanel = wrapper.querySelector('#' + panelId);

    if (targetPanel) {
      buttons.forEach(b => {
        b.classList.toggle('active', b.dataset.target === panelId);
      });
      panels.forEach(p => p.classList.remove('active'));
      targetPanel.classList.add('active');
    }
  });
}

/* ── initLightbox: The full reveal — FIXED with event delegation ── */
function initLightbox() {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (!lightbox || !lightboxImg) return;

  /* CRITICAL FIX: Event delegation on container — survives re-renders */
  document.querySelector('.gallery-grid')?.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;

    const img = item.querySelector('img');
    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  const closeFn = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  lightboxClose?.addEventListener('click', closeFn);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeFn();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeFn();
  });
}

/* ── renderProducts: Building the cards from our catalog ── */
function renderProducts() {
  const womenContainer = document.getElementById('women-products');
  const menContainer = document.getElementById('men-products');
  const trendingContainer = document.getElementById('trending-products');

  const customProducts = Storage.get('products');
  const products = customProducts || DEFAULTS.products;

  function createCard(product) {
    return `
      <div class="product-card reveal">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name} fabric roll" loading="lazy" width="600" height="400">
          <span class="product-badge">Wholesale</span>
        </div>
        <div class="product-info">
          <h4 class="product-name">${product.name}</h4>
          <p class="product-name-ar">${product.nameAr}</p>
          <p class="product-desc">${product.desc}</p>
        </div>
      </div>
    `;
  }

  if (womenContainer) {
    womenContainer.innerHTML = products.women?.map(createCard).join('') || '';
  }
  if (menContainer) {
    menContainer.innerHTML = products.men?.map(createCard).join('') || '';
  }
  if (trendingContainer) {
    trendingContainer.innerHTML = products.trending?.map(createCard).join('') || '';
  }

  setTimeout(initScrollReveal, 100);
}

/* ── renderGallery: Windows into our workshop — FIXED no duplicate listeners ── */
function renderGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');
  if (!galleryGrid) return;

  const customGallery = Storage.get('gallery');
  const gallery = customGallery || DEFAULTS.gallery;

  galleryGrid.innerHTML = gallery.map(item => `
    <div class="gallery-item reveal">
      <img src="${item.src}" alt="${item.alt}" loading="lazy" width="800" height="600">
      <div class="gallery-overlay">
        <span style="color: var(--gold); font-size: 2rem;">&#x1F50D;</span>
      </div>
    </div>
  `).join('');

  setTimeout(() => {
    initScrollReveal();
    /* initLightbox() REMOVED — event delegation handles this persistently */
  }, 100);
}

/* ── DOM Ready: The loom begins to weave ── */
document.addEventListener('DOMContentLoaded', () => {
  applyCustomizations();
  initHeroSlider();
  initMobileMenu();
  initHeaderScroll();
  initScrollReveal();
  initTabs();
  initLightbox();      /* Called once — event delegation survives re-renders */
  renderProducts();
  renderGallery();
  activateTabFromHash(); /* Activate tab from URL hash on load */
});

/* ── Expose globally: For the admin panel to reach in ── */
window.AlAzharTex = {
  DEFAULTS,
  Storage,
  getOverride,
  applyCustomizations,
  renderProducts,
  renderGallery
};
