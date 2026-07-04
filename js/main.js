// Mind Legacies — shared site behaviour

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.textContent = '☰';
    }));
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Contact / demo request form (Formspree)
  const form = document.querySelector('#contact-form');
  if (form) {
    const status = document.querySelector('#form-status');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          form.reset();
          status.textContent = "Message sent — we'll be in touch shortly.";
          status.className = 'form-status success';
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        status.textContent = "Something went wrong. Please email us directly at hello@mindlegacies.com.";
        status.className = 'form-status error';
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    });
  }

  // Pre-fill contact form subject from query params (?re=SYNAPSIS Demo Request)
  const params = new URLSearchParams(window.location.search);
  const re = params.get('re');
  if (re) {
    const subjectField = document.querySelector('#field-subject');
    if (subjectField) subjectField.value = re;
  }
});
