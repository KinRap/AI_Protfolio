/* Portfolio JS — navigation, scroll reveal, pipeline animation */

document.addEventListener('DOMContentLoaded', () => {

  // ── Nav: switch style on scroll ──────────────────────────────────────────
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Mobile hamburger ─────────────────────────────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ── Scroll reveal ─────────────────────────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));

  // ── Active nav link on scroll ─────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  // ── Pipeline node animation (hero) ────────────────────────────────────────
  const pipelineNodes = document.querySelectorAll('.pipeline-step-num');
  let currentNode = 0;
  if (pipelineNodes.length > 0) {
    const animatePipeline = () => {
      pipelineNodes.forEach((node, i) => {
        node.style.background = i === currentNode
          ? 'rgba(26,86,219,0.6)'
          : 'rgba(26,86,219,0.25)';
        node.style.borderColor = i === currentNode
          ? '#60a5fa'
          : '#3b82f6';
        node.style.color = i === currentNode ? '#fff' : '#3b82f6';
      });
      currentNode = (currentNode + 1) % pipelineNodes.length;
    };
    animatePipeline();
    setInterval(animatePipeline, 1400);
  }

  // ── Typewriter effect (hero subtitle) ────────────────────────────────────
  const typeEl = document.querySelector('.hero-type');
  if (typeEl) {
    const phrases = [
      'multi-agent AI systems.',
      'agentic architectures.',
      'LLM evaluation pipelines.',
      'AI implementation strategy.',
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let paused = false;

    const type = () => {
      if (paused) return;
      const phrase = phrases[phraseIdx];
      if (!deleting) {
        typeEl.textContent = phrase.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === phrase.length) {
          paused = true;
          setTimeout(() => { deleting = true; paused = false; }, 2200);
        }
      } else {
        typeEl.textContent = phrase.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }
    };
    setInterval(type, 70);
  }

  // ── Smooth scroll for anchor links ───────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

});
