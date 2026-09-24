(() => {
  const gallery = Array.isArray(window.PICTUREPLUSH_GALLERY)
    ? window.PICTUREPLUSH_GALLERY
    : [];
  const grid = document.querySelector('[data-gallery-grid]');
  const count = document.querySelector('[data-gallery-count]');
  const lightbox = document.querySelector('[data-lightbox]');
  const lightboxImg = lightbox?.querySelector('img');
  const closeBtn = lightbox?.querySelector('.lightbox-close');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!grid) return;

  const items = gallery.map((entry, index) => {
    const backEntry = gallery[(index + 1) % gallery.length] || entry;
    const button = document.createElement('button');
    button.className = 'gallery-item';
    button.type = 'button';
    button.setAttribute('aria-label', `${entry.alt}. Große Ansicht öffnen.`);
    button.dataset.front = entry.src;
    button.dataset.back = backEntry.src;
    button.dataset.frontAlt = entry.alt;
    button.dataset.backAlt = backEntry.alt;

    const inner = document.createElement('span');
    inner.className = 'gallery-card-inner';

    const front = document.createElement('span');
    front.className = 'gallery-face front';
    const frontImg = document.createElement('img');
    frontImg.src = entry.src;
    frontImg.alt = entry.alt;
    frontImg.loading = index < 8 ? 'eager' : 'lazy';
    frontImg.decoding = 'async';
    front.append(frontImg);

    const back = document.createElement('span');
    back.className = 'gallery-face back';
    const backImg = document.createElement('img');
    backImg.src = backEntry.src;
    backImg.alt = backEntry.alt;
    backImg.loading = 'lazy';
    backImg.decoding = 'async';
    back.append(backImg);

    inner.append(front, back);
    button.append(inner);
    grid.append(button);
    return button;
  });

  if (count) count.textContent = `${gallery.length} Motive`;

  function visibleImageFor(button) {
    const backVisible = button.classList.contains('is-flipped') || button.matches(':hover');
    return {
      src: backVisible ? button.dataset.back : button.dataset.front,
      alt: backVisible ? button.dataset.backAlt : button.dataset.frontAlt
    };
  }

  function openLightbox(button) {
    if (!lightbox || !lightboxImg) return;
    const image = visibleImageFor(button);
    lightboxImg.src = image.src || '';
    lightboxImg.alt = image.alt || 'PicturePlush Galerieansicht';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  items.forEach(button => button.addEventListener('click', () => openLightbox(button)));
  closeBtn?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox?.classList.contains('open')) closeLightbox();
  });

  if (!reduceMotion && items.length > 1) {
    let activeIndex = -1;
    window.setInterval(() => {
      if (document.hidden || lightbox?.classList.contains('open')) return;
      if (activeIndex >= 0) items[activeIndex]?.classList.remove('is-flipped');
      activeIndex = (activeIndex + 1) % items.length;
      const item = items[activeIndex];
      if (!item.matches(':hover') && item.getBoundingClientRect().bottom > 0 && item.getBoundingClientRect().top < window.innerHeight) {
        item.classList.add('is-flipped');
        window.setTimeout(() => item.classList.remove('is-flipped'), 2100);
      }
    }, 2700);
  }
})();
