/* ============================================================
   PREMIUM PORTFOLIO JAVASCRIPT
   Cursor · Loader · Modals · FAQ · Stats · i18n
   ============================================================ */

'use strict';

// ─── DOM REFERENCES ──────────────────────────────────────────
const header        = document.getElementById('header');
const burger        = document.getElementById('burger-btn');
const navMenu       = document.getElementById('nav-menu');
const navLinks      = document.querySelectorAll('.nav__link');
const contactForm   = document.getElementById('contact-form');
const formSuccess   = document.getElementById('form-success');
const particlesCont = document.getElementById('particles');
const yearEl        = document.getElementById('year');
const cursorDot     = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');
const loader        = document.getElementById('loader');

// ─── LOADER ──────────────────────────────────────────────────
window.addEventListener('load', () => {
  requestAnimationFrame(() => {
    loader.classList.add('hidden');
    // Remove from DOM after fade to prevent blocking clicks
    setTimeout(() => {
      if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
    }, 600);
  });
});

// ─── CUSTOM CURSOR (HIGH PERFORMANCE) ────────────────────────
let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;
let outlineX = 0, outlineY = 0;
let isHovering = false;

// We separate event tracking from rendering for 60FPS smoothness
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}, { passive: true });

function renderCursor() {
  // Dot follows instantly (lerp = 1)
  dotX = mouseX;
  dotY = mouseY;
  
  // Outline follows with a slight delay (lerp = 0.4 for fast, smooth follow)
  // 0.4 is much faster than 0.2, removing the annoying "lag" feel
  outlineX += (mouseX - outlineX) * 0.4;
  outlineY += (mouseY - outlineY) * 0.4;

  // Use translate3d for hardware (GPU) acceleration
  if (cursorDot) {
    cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate3d(-50%, -50%, 0)`;
  }
  if (cursorOutline) {
    cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate3d(-50%, -50%, 0)`;
    
    // Scale outline if hovering
    if (isHovering) {
      cursorOutline.classList.add('hover');
    } else {
      cursorOutline.classList.remove('hover');
    }
  }

  requestAnimationFrame(renderCursor);
}
requestAnimationFrame(renderCursor);

// Hover states for interactive elements (using event delegation for better performance)
document.addEventListener('mouseover', (e) => {
  const target = e.target.closest('a, button, input, textarea, .project-card, .faq__question, .tech-item');
  if (target) isHovering = true;
});
document.addEventListener('mouseout', (e) => {
  const target = e.target.closest('a, button, input, textarea, .project-card, .faq__question, .tech-item');
  if (target) isHovering = false;
});

// Hide cursor when leaving window to prevent stuck cursor
document.addEventListener('mouseleave', () => {
  if (cursorDot) cursorDot.style.opacity = '0';
  if (cursorOutline) cursorOutline.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
  if (cursorDot) cursorDot.style.opacity = '1';
  if (cursorOutline) cursorOutline.style.opacity = '1';
});

// ─── PARTICLES ───────────────────────────────────────────────
function createParticles() {
  const COUNT = 28;
  if (!particlesCont) return;
  
  // Use a document fragment for better performance when appending multiple elements
  const frag = document.createDocumentFragment();
  
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 12 + 8}s;
      animation-delay: ${Math.random() * 6}s;
    `;
    frag.appendChild(p);
  }
  particlesCont.appendChild(frag);
}

// ─── HEADER SCROLL EFFECT & ACTIVE LINK ──────────────────────
const sections = document.querySelectorAll('section[id]');
let isScrolling = false;

function handleScroll() {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      
      // Header background
      header.classList.toggle('scrolled', scrollY > 40);
      
      // Highlight nav link
      const scrollPos = scrollY + 120;
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav__link[href="#${id}"]`);
        
        if (!link) return;
        
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
      
      // Parallax effect for hero portrait
      const portrait = document.querySelector('.hero__portrait');
      if (portrait && scrollY < window.innerHeight * 1.5) {
        const offset = scrollY * 0.18;
        portrait.style.transform = `translate3d(0, ${offset}px, 0) scale(${1 + scrollY * 0.00015})`;
      }
      
      isScrolling = false;
    });
    isScrolling = true;
  }
}

// ─── BURGER MENU ─────────────────────────────────────────────
burger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ─── INTERSECTION OBSERVER — REVEAL ANIMATIONS ───────────────
// We use a single observer for performance
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Stop observing once revealed
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll('.reveal, .reveal-text').forEach(el => {
  revealObserver.observe(el);
});

// ─── STATS COUNTER ───────────────────────────────────────────
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Ease out quad
    const easeProgress = progress * (2 - progress);
    
    start = easeProgress * target;
    el.textContent = Math.floor(start);
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    } else {
      el.textContent = target; // Ensure it reaches exactly the target
    }
  }
  requestAnimationFrame(animation);
}

const statsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat__num');
      nums.forEach(num => {
        const target = parseInt(num.getAttribute('data-target'), 10);
        animateCounter(num, target);
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);

// ─── FAQ ACCORDION ───────────────────────────────────────────
const faqButtons = document.querySelectorAll('.faq__question');
faqButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    
    // Close all
    faqButtons.forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.style.maxHeight = null;
    });
    
    // Open clicked if it was closed
    if (!isExpanded) {
      btn.setAttribute('aria-expanded', 'true');
      const answer = btn.nextElementSibling;
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// ─── MODALS ──────────────────────────────────────────────────
const modalOverlay = document.getElementById('modal-overlay');
let activeModal = null;
let openedProjectId = null; // id проекта, открытого в модальном окне (для перерисовки при смене языка)

window.openModal = function(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modalOverlay.classList.add('active');
  modal.classList.add('active');
  activeModal = modal;
  document.body.style.overflow = 'hidden'; // Lock scroll
};

window.closeModals = function() {
  if (activeModal) activeModal.classList.remove('active');
  modalOverlay.classList.remove('active');
  activeModal = null;
  openedProjectId = null;
  document.body.style.overflow = ''; // Unlock scroll
};

// Close when clicking directly on the overlay
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModals();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && activeModal) closeModals();
});

// ─── PROJECTS (cards, filters, modal) ────────────────────────
// Данные — в projects.js (window.PROJECTS). Здесь только отрисовка.
const projectsGrid    = document.getElementById('projects-grid');
const projectsFilters = document.getElementById('projects-filters');
const FILTER_KEYS = ['all', 'radio', 'backend', 'learn', 'apps'];
let activeFilter = 'all';

const PLUS_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>';
const DL_ICON   = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;margin-right:6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';

function el(tag, props = {}) {
  const node = document.createElement(tag);
  Object.assign(node, props);
  return node;
}

// строка или { ru, en, ... } → текст на нужном языке (запасной вариант: en, затем ru)
function pickLang(value, lang) {
  if (value && typeof value === 'object') return value[lang] || value.en || value.ru || '';
  return value || '';
}

function projectsUI(lang) {
  return (TRANSLATIONS[lang] || TRANSLATIONS.ru).projects;
}

function buildCard(p, lang, index) {
  const ui = projectsUI(lang);
  const title = pickLang(p.title, lang);

  const card = el('article', { className: 'project-card reveal glass-card', tabIndex: 0 });
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', title);
  card.dataset.id = p.id;
  card.style.transitionDelay = ((index % 3) * 0.08) + 's';

  const wrap = el('div', { className: 'project-card__image-wrap' });
  const img = el('img', { className: 'project-card__img', src: p.img, alt: title, loading: 'lazy' });
  const overlay = el('div', { className: 'project-card__overlay-view' });
  overlay.innerHTML = PLUS_ICON; // константа, не пользовательский ввод
  const status = el('span', { className: 'status-chip status-chip--' + p.status, textContent: ui.status[p.status] });
  wrap.append(img, overlay, status);

  const body = el('div', { className: 'project-card__body' });
  const tags = el('div', { className: 'project-card__tags' });
  p.tags.slice(0, 4).forEach(t => tags.append(el('span', { className: 'badge', textContent: t })));
  body.append(
    tags,
    el('h3', { className: 'project-card__title', textContent: title }),
    el('p', { className: 'project-card__desc', textContent: pickLang(p.desc, lang) })
  );

  card.append(wrap, body);
  card.addEventListener('click', () => openProject(p.id));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(p.id); }
  });
  return card;
}

function renderFilters(lang) {
  if (!projectsFilters) return;
  const ui = projectsUI(lang);
  projectsFilters.setAttribute('aria-label', ui.title);
  projectsFilters.replaceChildren(...FILTER_KEYS.map(key => {
    const count = key === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.cat.includes(key)).length;
    const btn = el('button', { type: 'button', className: 'filter-chip' + (key === activeFilter ? ' active' : '') });
    btn.setAttribute('aria-pressed', String(key === activeFilter));
    btn.append(document.createTextNode(ui.filters[key] + ' '), el('span', { className: 'filter-chip__count', textContent: String(count) }));
    btn.addEventListener('click', () => { activeFilter = key; renderProjects(currentLang); });
    return btn;
  }));
}

function renderProjects(lang) {
  if (!projectsGrid || !window.PROJECTS) return;
  renderFilters(lang);
  const list = PROJECTS.filter(p => activeFilter === 'all' || p.cat.includes(activeFilter));
  const cards = list.map((p, i) => buildCard(p, lang, i));
  projectsGrid.replaceChildren(...cards);
  cards.forEach(c => revealObserver.observe(c));
}

function fillProjectModal(p, lang) {
  const ui = projectsUI(lang);
  const title = pickLang(p.title, lang);

  const img = document.getElementById('pm-img');
  img.src = p.img;
  img.alt = title;

  const status = document.getElementById('pm-status');
  status.className = 'status-chip status-chip--' + p.status;
  status.textContent = ui.status[p.status];

  document.getElementById('pm-title').textContent = title;
  document.getElementById('pm-desc').textContent = pickLang(p.desc, lang);
  document.getElementById('pm-tags').replaceChildren(...p.tags.map(t => el('span', { className: 'badge', textContent: t })));

  const actions = document.getElementById('pm-actions');
  const link = (href, label, cls, extra = {}) => {
    const a = el('a', { href, className: 'btn btn--sm ' + cls, ...extra });
    if (!extra.download) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    return a;
  };
  const buttons = [];
  const L = p.links || {};
  if (L.demo) { const a = link(L.demo, '', 'btn--primary'); a.textContent = ui.demo; buttons.push(a); }
  if (L.apk) {
    const a = link(L.apk, '', 'btn--primary', { download: L.apk.split('/').pop() });
    a.innerHTML = DL_ICON; // константа
    a.append(document.createTextNode(ui.downloadApk));
    buttons.push(a);
  }
  if (L.github)   { const a = link(L.github, '', 'btn--outline'); a.textContent = ui.code; buttons.push(a); }
  if (L.telegram) { const a = link(L.telegram, '', 'btn--outline'); a.textContent = ui.telegram; buttons.push(a); }

  if (buttons.length) {
    actions.replaceChildren(...buttons);
  } else {
    actions.replaceChildren(el('p', { className: 'modal__note', textContent: ui.noLinks }));
  }
}

window.openProject = function(id) {
  const p = (window.PROJECTS || []).find(x => x.id === id);
  if (!p) return;
  openedProjectId = id;
  fillProjectModal(p, currentLang);
  openModal('project-modal');
};

// Статистика считается из данных, а не прописана вручную
function initStats() {
  if (!window.PROJECTS) return;
  const set = (key, value) => {
    const node = document.querySelector('[data-stat="' + key + '"]');
    if (node) node.setAttribute('data-target', String(value));
  };
  set('projects', PROJECTS.length);
  set('demos', PROJECTS.filter(p => p.links && p.links.demo).length);
  set('repos', PROJECTS.filter(p => p.links && p.links.github).length);
  set('langs', Object.keys(TRANSLATIONS).length);
}

// ─── CONTACT FORM SUBMISSION (WEB3FORMS) ─────────────────────
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('form-submit');
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const messageInput = document.getElementById('form-message');
    const formSuccess = document.getElementById('form-success');

    const name = (nameInput?.value || '').trim();
    const email = (emailInput?.value || '').trim();
    const message = (messageInput?.value || '').trim();

    if (!name || !email || !message) {
      if (formSuccess) {
        formSuccess.textContent = 'Пожалуйста, заполните все обязательные поля.';
        formSuccess.style.color = '#f87171';
      }
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Отправка...</span>';
    }
    if (formSuccess) formSuccess.textContent = '';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c02ebc2e-a580-4335-b63b-19570f67759f',
          name,
          email,
          message,
          subject: 'Новое сообщение с портфолио от ' + name,
          from_name: 'Портфолио | Максим Попков'
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        contactForm.innerHTML = `
          <div class="form-success-card" style="text-align: center; padding: 2.5rem 1rem;">
            <div style="width: 56px; height: 56px; margin: 0 auto 1.2rem; border-radius: 50%; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.4); display: flex; align-items: center; justify-content: center; color: #10b981;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 28px; height: 28px;"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 style="font-size: 1.4rem; color: #fff; margin-bottom: 0.5rem;">Спасибо, ${name}!</h3>
            <p style="color: #a1a1aa; font-size: 0.95rem; max-width: 340px; margin: 0 auto 1.5rem;">Ваше сообщение успешно отправлено на почту. Я свяжусь с вами в ближайшее время.</p>
            <a href="https://t.me/MaximLive12" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--sm">Написать сразу в Telegram</a>
          </div>
        `;
      } else {
        const errMessage = data?.message || 'Не удалось отправить сообщение. Пожалуйста, укажите валидный access_key на web3forms.com или напишите в Telegram.';
        throw new Error(errMessage);
      }
    } catch (error) {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Отправить сообщение</span>';
      }
      if (formSuccess) {
        formSuccess.textContent = error.message || 'Ошибка соединения с почтовым сервером.';
        formSuccess.style.color = '#f87171';
      }
    }
  });
}

// ─── FOOTER YEAR ─────────────────────────────────────────────
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ============================================================
//  i18n — LANGUAGE SWITCHER
// ============================================================
let currentLang = localStorage.getItem('portfolio-lang') || 'ru';

const langSwitcher   = document.getElementById('lang-switcher');
const langCurrentBtn = document.getElementById('lang-current');
const langOptions    = document.querySelectorAll('.lang-option');
const langFlagEl     = document.getElementById('lang-flag');
const langCodeEl     = document.getElementById('lang-code');

// Helper to resolve nested keys
function resolve(obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Basic document updates
  document.getElementById('html-root').setAttribute('lang', t.lang);
  document.getElementById('page-title').textContent = t.title;
  document.getElementById('meta-desc').setAttribute('content', t.meta);

  // Standard text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = resolve(t, key);
    if (val !== undefined) el.textContent = val;
  });

  // HTML content
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = resolve(t, key);
    if (val !== undefined) el.innerHTML = val;
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = resolve(t, key);
    if (val !== undefined) el.setAttribute('placeholder', val);
  });
  
  // Alt text (for images)
  document.querySelectorAll('[data-i18n-alt]').forEach(node => {
    const key = node.getAttribute('data-i18n-alt');
    const val = resolve(t, key);
    if (val !== undefined) node.setAttribute('alt', val);
  });

  // Project cards, filters and (if open) the modal depend on the language too
  renderProjects(lang);
  if (openedProjectId) {
    const p = PROJECTS.find(x => x.id === openedProjectId);
    if (p) fillProjectModal(p, lang);
  }
}

function updateSwitcherUI(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  langFlagEl.textContent = t.flag;
  langCodeEl.textContent = t.code;

  langOptions.forEach(opt => {
    opt.classList.toggle('lang-option--active', opt.dataset.lang === lang);
  });
}

function switchLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  applyTranslations(lang);
  updateSwitcherUI(lang);
  closeLangDropdown();
}

function openLangDropdown() {
  langSwitcher.classList.add('open');
  langCurrentBtn.setAttribute('aria-expanded', 'true');
}

function closeLangDropdown() {
  langSwitcher.classList.remove('open');
  langCurrentBtn.setAttribute('aria-expanded', 'false');
}

function toggleLangDropdown() {
  langSwitcher.classList.contains('open') ? closeLangDropdown() : openLangDropdown();
}

// Event Listeners for language switcher
langCurrentBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleLangDropdown();
});

langOptions.forEach(opt => {
  opt.addEventListener('click', () => switchLang(opt.dataset.lang));
});

document.addEventListener('click', (e) => {
  if (!langSwitcher.contains(e.target)) closeLangDropdown();
});

// ─── INIT ─────────────────────────────────────────────────────
createParticles();
initStats();
// Passive scroll listener for performance
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll(); // initial call
applyTranslations(currentLang);
updateSwitcherUI(currentLang);


// ─── SCROLL TO CONTACT ──────────────────────────────────────
function scrollToContact() {
  const target = document.getElementById('contact-form') || document.getElementById('contact');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const nameInput = document.getElementById('form-name');
    if (nameInput) setTimeout(() => nameInput.focus(), 600);
  }
}
window.scrollToContact = scrollToContact;
