const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*-+<>';

// ---------- Carousel ----------
const projectsList = document.querySelector('.projects-list');
const scrollProjects = (dir) => {
  const card = projectsList.querySelector('.project-card');
  if (card) projectsList.scrollBy({ left: dir * card.offsetWidth, behavior: reduceMotion ? 'auto' : 'smooth' });
};
document.querySelector('.projects-prev').addEventListener('click', () => scrollProjects(-1));
document.querySelector('.projects-next').addEventListener('click', () => scrollProjects(1));

// ---------- Scramble setup ----------
// Capture originals BEFORE any scrambling starts. The visible text lives in an
// aria-hidden span; a visually hidden copy keeps the real text for screen readers.
function prepare(el) {
  if (!el || el._vis) return;
  const original = el.textContent;
  const sr = document.createElement('span');
  sr.className = 'sr-only';
  sr.textContent = original;
  const vis = document.createElement('span');
  vis.setAttribute('aria-hidden', 'true');
  vis.textContent = original;
  el.textContent = '';
  el.append(sr, vis);
  el._original = original;
  el._vis = vis;
}

const SCRAMBLE_SELECTOR = [
  '.name',
  '.links a',
  '.email-text',
  '.heading',
  '.experience-card-title',
  '.experience-card-date',
  '.experience-card-company',
  '.project-card-title',
  '.project-card-skills',
  '.pill',
].join(', ');

const scrambleEls = [...document.querySelectorAll(SCRAMBLE_SELECTOR)];
scrambleEls.forEach(prepare);

function scrambleTo(el, target, delay = 0) {
  if (!el._vis) return;
  if (el._cancelScramble) el._cancelScramble();
  if (reduceMotion) { el._vis.textContent = target; return; }

  const lead = 2, stagger = 1;
  let frame = 0, interval;

  const timeout = setTimeout(() => {
    interval = setInterval(() => {
      el._vis.textContent = [...target].map((ch, i) => {
        if (ch === ' ') return ' ';
        if (frame >= lead + i * stagger) return ch;
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }).join('');
      frame++;
      if (frame >= lead + target.length * stagger) {
        clearInterval(interval);
        el._vis.textContent = target;
        el._cancelScramble = null;
      }
    }, 22);
  }, delay);

  el._cancelScramble = () => { clearTimeout(timeout); clearInterval(interval); };
}

// Scramble on load
if (!reduceMotion) {
  [
    document.querySelector('.name'),
    ...document.querySelectorAll('.experience-card-title'),
    ...document.querySelectorAll('.project-card-title'),
    document.querySelector('.email-text'),
  ].forEach((el, i) => { if (el) scrambleTo(el, el._original, i * 100); });
}

// Scramble to uppercase on hover/focus
document.querySelectorAll('.links a, .project-card-title').forEach(el => {
  const upper = el._original.toUpperCase();
  const on = () => scrambleTo(el, upper);
  const off = () => scrambleTo(el, el._original);
  el.addEventListener('mouseenter', on);
  el.addEventListener('mouseleave', off);
  if (el.matches('a')) {
    el.addEventListener('focus', on);
    el.addEventListener('blur', off);
  }
});

// ---------- Email copy ----------
const emailEl = document.querySelector('.email-text');
const EMAIL = ['veerksheth', 'gmail.com'].join('@');

function copyEmail() {
  navigator.clipboard.writeText(EMAIL)
    .then(() => scrambleTo(emailEl, '✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓'))
    .catch(() => scrambleTo(emailEl, 'COPY FAILED'));
}

emailEl.addEventListener('click', copyEmail);
emailEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copyEmail(); }
});
const emailHint = () => scrambleTo(emailEl, 'COPY COPY COPY COPY COPY COPY');
const emailRestore = () => scrambleTo(emailEl, emailEl._original);
emailEl.addEventListener('mouseenter', emailHint);
emailEl.addEventListener('focus', emailHint);
emailEl.addEventListener('mouseleave', emailRestore);
emailEl.addEventListener('blur', emailRestore);

// ---------- Project card -> pill highlighting ----------
const allPills = document.querySelectorAll('.pill');
const cards = document.querySelectorAll('.project-card');

function highlight(card) {
  const skills = card.dataset.skills.split(',').map(s => s.trim());
  allPills.forEach(pill => {
    const match = skills.includes(pill._original.trim());
    pill.classList.toggle('active', match);
    pill.classList.toggle('inactive', !match);
  });
}

function clearHighlight() {
  allPills.forEach(pill => pill.classList.remove('active', 'inactive'));
}

cards.forEach(card => {
  card.addEventListener('mouseenter', () => highlight(card));
  card.addEventListener('mouseleave', clearHighlight);
  card.addEventListener('focus', () => highlight(card));
  card.addEventListener('blur', clearHighlight);
  card.addEventListener('touchstart', () => highlight(card), { passive: true });
});

document.addEventListener('touchstart', (e) => {
  if (!e.target.closest('.project-card')) clearHighlight();
}, { passive: true });

// ---------- Idle scramble ----------
function idleScramble() {
  if (!document.hidden) {
    const count = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      const el = scrambleEls[Math.floor(Math.random() * scrambleEls.length)];
      const busy = el._cancelScramble || el.matches(':hover, :focus');
      const changed = el._vis.textContent !== el._original;
      if (!busy && !changed) scrambleTo(el, el._original);
    }
  }
  setTimeout(idleScramble, 500 + Math.random() * 1800);
}

if (!reduceMotion) setTimeout(idleScramble, 500);
