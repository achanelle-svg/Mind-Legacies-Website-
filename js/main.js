// Mind Legacies — shared site behaviour

const VOLUNTEER_INFO = `
  <p><strong>This is a Founding Volunteer Position</strong> within Mind Legacies and includes a monthly volunteer stipend rather than a full-time salary.</p>
  <p>As Mind Legacies grows commercially, the volunteer stipend for this role is planned to increase through clearly defined organisational stages. We're committed to complete transparency on compensation progression — founding volunteers will be informed of the expected stipend increase at each stage, the milestones required to reach it, and the long-term salary target for the role.</p>
  <p>Volunteers who consistently demonstrate strong performance, professionalism, reliability, and alignment with Mind Legacies' values receive priority consideration for future paid positions as the organisation expands. Progression is not automatic — it depends on meeting the standards of performance, contribution, and professional conduct we hold across the organisation.</p>
  <p><strong>Work arrangement:</strong> Fully remote · <strong>Employment type:</strong> Founding Volunteer Position with monthly volunteer stipend.</p>
`;

const ROLES = {
  'president': {
    title: 'President &amp; Chief Cognitive Architect',
    id: 'HEAD-ML',
    status: 'filled',
    name: 'A.Chanelle Pitso',
    body: `<p>A.Chanelle Pitso leads Mind Legacies as President and Chief Cognitive Architect, and is the doctrine and architecture designer behind SYNAPSIS.</p>`
  },
  'coo': {
    title: 'Chief Operating Officer',
    id: 'HEAD-ML',
    status: 'vacant',
    body: `<p>This position has not yet been filled. The Chief Operating Officer will sit within Head ML, working alongside the President to oversee ecosystem-wide operations.</p>`
  },
  'science-lead': {
    title: 'Science Lead',
    id: 'SYN-SCI',
    status: 'vacant',
    body: `<p>This position has not yet been filled. The Science Lead will oversee SYNAPSIS's Science division — scientific validation and cognitive architecture research.</p>`
  },
  'tech-lead': {
    title: 'Technology Lead',
    id: 'SYN-T001',
    status: 'hiring',
    body: `
      <p>You lead the technical architecture and build of SYNAPSIS — our AI identity intelligence system. You do not inherit a team. <strong>You build the system that a team will eventually scale.</strong></p>
      <p>Looking for: production full-stack experience (Next.js, TypeScript, PostgreSQL), fluency with LLM APIs and AI system architecture, and someone who builds and deploys independently.</p>
      ${VOLUNTEER_INFO}
    `,
    applyRe: 'Technology Lead (SYN-T001) — Application'
  },
  'ops-lead': {
    title: 'Operations Lead',
    id: 'ML-003',
    status: 'hiring',
    body: `
      <p>You build the operational infrastructure that allows every division of Mind Legacies to function. Systems, processes, governance — you make the organisation reliable. <strong>Without you, nothing scales. With you, everything can.</strong></p>
      <p>Looking for: experience building operations in high-growth or early-stage environments, someone who documents before being asked, and is comfortable navigating without a complete map.</p>
      ${VOLUNTEER_INFO}
    `,
    applyRe: 'Operations Lead (ML-003) — Application'
  },
  'biz-dev-lead': {
    title: 'Business Development Lead',
    id: 'SYN-C001',
    status: 'hiring',
    body: `
      <p>You open and close the first commercial relationships that define what Mind Legacies becomes in the market. Your targets are South Africa's largest enterprises. <strong>You are a founding commercial architect — not a sales representative.</strong></p>
      <p>Looking for: B2B enterprise experience with complex deals and C-suite relationships, someone who sells through understanding rather than pressure, and produces boardroom-quality materials independently.</p>
      ${VOLUNTEER_INFO}
    `,
    applyRe: 'Business Development Lead (SYN-C001) — Application'
  },
  'finance-lead': {
    title: 'Finance Lead',
    id: 'ML-004',
    status: 'hiring',
    body: `
      <p>You establish the financial operating environment of Mind Legacies — revenue governance, cost management, reserve allocation, compliance. <strong>You are the financial conscience of an organisation with generational ambitions.</strong></p>
      <p>Looking for: meticulous financial administration and reporting, familiarity with South African compliance (SARS, POPIA, statutory requirements), and proficiency in Xero, QuickBooks, or equivalent.</p>
      ${VOLUNTEER_INFO}
    `,
    applyRe: 'Finance Lead (ML-004) — Application'
  },
  'exec-ops-associate': {
    title: 'Executive Operations Associate',
    id: 'ML-005',
    status: 'hiring',
    body: `
      <p>You work directly under the Chief Operating Officer, supporting the day-to-day operational running of Mind Legacies — coordinating workflows, reporting, and the systems that keep the ecosystem functioning smoothly across every division.</p>
      <p>Looking for: strong organisational and coordination skills, comfort working across multiple ventures at once, and someone who documents and follows through without needing to be chased.</p>
      ${VOLUNTEER_INFO}
    `,
    applyRe: 'Executive Operations Associate (ML-005) — Application'
  }
};

function openRoleModal(key){
  const role = ROLES[key];
  if(!role) return;
  const overlay = document.querySelector('#role-modal');
  if(!overlay) return;
  const statusLabel = role.status === 'hiring' ? 'Now Hiring — Founding Volunteer' : (role.status === 'filled' ? 'Filled' : 'Position Vacant');
  let html = `
    <button class="modal-close" onclick="closeRoleModal()" aria-label="Close">✕</button>
    <span class="modal-id">${role.id} · ${statusLabel}</span>
    <h3>${role.title}</h3>
  `;
  if(role.name){
    html += `<p class="mono-tag" style="margin-top:6px;">${role.name}</p>`;
  }
  html += `<div class="modal-body">${role.body}</div>`;
  if(role.status === 'vacant'){
    html += `<span class="vacant-badge">To be hired</span>`;
  }
  if(role.status === 'hiring'){
    html += `<a href="contact.html?re=${encodeURIComponent(role.applyRe)}" class="btn btn-primary">I'm Interested — Apply <span class="btn-arrow">→</span></a>`;
  }
  overlay.querySelector('.modal-box').innerHTML = html;
  overlay.classList.add('open');
}
function closeRoleModal(){
  const overlay = document.querySelector('#role-modal');
  if(overlay) overlay.classList.remove('open');
}


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

  // Role modal: click outside or Escape to close
  const roleModal = document.querySelector('#role-modal');
  if (roleModal) {
    roleModal.addEventListener('click', (e) => {
      if (e.target === roleModal) closeRoleModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeRoleModal();
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
