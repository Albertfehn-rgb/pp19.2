(() => {
  const items = Array.from(document.querySelectorAll('[data-hero-switcher] .hero-switcher-item'));
  if (!items.length) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeIndex = 0;
  let remaining = items.slice(1).map((_, index) => index + 1);

  function setActive(index) {
    items.forEach((item, i) => item.classList.toggle('is-active', i === index));
  }

  function shuffled(values) {
    const result = values.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function nextRandomIndex() {
    if (!remaining.length) remaining = shuffled(items.slice(1).map((_, index) => index + 1));
    let next = remaining.shift();
    if (next === activeIndex && remaining.length) next = remaining.shift();
    return next ?? 0;
  }

  setActive(0); // Zuerst immer die letzte hochgeladene weiß-schwarze Variante.
  if (reduceMotion || items.length < 2) return;
  remaining = shuffled(remaining);
  window.setInterval(() => {
    activeIndex = nextRandomIndex();
    setActive(activeIndex);
  }, 2800);
})();
