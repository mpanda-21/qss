// QSS Healthcare — Shared Nav & Footer Injector

const PAGES = [
  { label: 'Home',     href: 'index.html' },
  { label: 'About Us', href: 'about.html' },
  { label: 'Products', href: 'products.html' },
  { label: 'Services', href: 'services.html' },
  { label: 'Contact',  href: 'contact.html' },
];

const LOGO_SVG = `<img src="logo.jpg" style="width:42px;height:42px;">`;


function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path;
}

function injectNav() {
  const current = getCurrentPage();
  const links = PAGES.map(p =>
    `<li><a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  const mobileLinks = PAGES.map(p =>
    `<a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');

  const navHTML = `
<nav id="main-nav">
  <a href="index.html" class="nav-logo">
    ${LOGO_SVG}
    <div class="logo-text">
      <span class="qss-name">QSS Healthcare</span>
      <span class="qss-tag">Quick Support System</span>
    </div>
  </a>
  <ul class="nav-menu">
    ${links}
    <li><a href="contact.html" class="nav-cta">Get a Quote</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobile-menu">
  ${mobileLinks}
  <a href="contact.html" class="mob-cta">Get a Quote</a>
</div>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // scroll shrink
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  // hamburger
  const hb = document.getElementById('hamburger');
  const mm = document.getElementById('mobile-menu');
  hb.addEventListener('click', () => {
    hb.classList.toggle('open');
    mm.classList.toggle('open');
  });
}

function injectTicker() {
  const items = ['Patient Monitors','Ventilators','Defibrillators','Infusion Pumps',
    'Ultrasound Systems','Surgical Lights','ICU Equipment','Lab Diagnostics',
    'Sterilization Systems','Anesthesia Workstations','OT Tables','ECG Machines'];
  const repeated = [...items, ...items];
  const html = `<div class="ticker"><div class="ticker-track">${
    repeated.map(i => `<span class="ticker-item">${i}</span><span class="ticker-dot"></span>`).join('')
  }</div></div>`;
  // Insert after nav/page-header
  const header = document.querySelector('.page-header') || document.querySelector('.hero');
  if (header) header.insertAdjacentHTML('afterend', html);
}

function injectFooter() {
  const footerHTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="fb-name">QSS Healthcare</div>
      <span class="fb-tag">Quick Support System</span>
      <p>India's trusted partner in medical equipment supply, installation, and lifecycle support. Committed to powering better healthcare across the nation.</p>
      <div class="footer-contact-mini">
        <a href="tel:+919444037276">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01l-2.2 2.2z"/></svg>
          +91 94440 37276
        </a>
        <a href="tel:04431669766">
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01l-2.2 2.2z"/></svg>
          044 – 3166 9766
        </a>
        <a href="mailto:sales@qsshc.com">
          <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          sales@qsshc.com
        </a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Products</h4>
      <ul>
        <li><a href="products.html">Patient Monitoring</a></li>
        <li><a href="products.html">Ventilators</a></li>
        <li><a href="products.html">Defibrillators</a></li>
        <li><a href="products.html">Ultrasound Systems</a></li>
        <li><a href="products.html">Infusion Pumps</a></li>
        <li><a href="products.html">OT Equipment</a></li>
        <li><a href="products.html">Lab Analyzers</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="services.html">AMC & CMC</a></li>
        <li><a href="services.html">Installation</a></li>
        <li><a href="services.html">Calibration</a></li>
        <li><a href="services.html">Staff Training</a></li>
        <li><a href="services.html">24×7 Support</a></li>
        <li><a href="services.html">Consultancy</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="about.html">Our Team</a></li>
        <li><a href="about.html">Certifications</a></li>
        <li><a href="products.html">Product Catalogue</a></li>
        <li><a href="contact.html">Careers</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 <span>QSS Healthcare</span> – Quick Support System. STONEDGE TOWER, Ashok Nagar, Chennai – 600083.</p>
    <div class="social-row">
      <a class="social-btn" href="#" title="LinkedIn">in</a>
      <a class="social-btn" href="#" title="Facebook">f</a>
      <a class="social-btn" href="#" title="WhatsApp">W</a>
      <a class="social-btn" href="#" title="YouTube">▶</a>
    </div>
  </div>
</footer>`;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectTicker();
  injectFooter();
});
