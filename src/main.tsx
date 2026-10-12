import './main.css';
import './index.css';
import { useEffect, useState, type CSSProperties } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { siteContent } from './content';

const navItems = [
  ['Projects', '#projects'],
  ['AI', '#ai'],
  ['Experience', '#experience'],
  ['Looking', '#looking'],
  ['About', '#about']
] as const;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Mohaimin Al Aoun, back to top">
          <span className="wordmark-mark" aria-hidden="true">m<span>.</span></span>
          <span>{siteContent.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href="/mohaimin-al-aoun-resume.pdf" target="_blank" rel="noopener noreferrer">Résumé <span className="sr-only"> (opens in a new tab)</span></a>
          <a className="nav-contact" href="#contact">Say hello <span aria-hidden="true">↗</span></a>
        </nav>
        <button
          className={`menu-toggle${menuOpen ? ' menu-is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? ' mobile-nav-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        {navItems.map(([label, href], index) => <a key={href} href={href} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu} style={{ '--nav-i': index } as CSSProperties}>{label}<span>↗</span></a>)}
        <a href="/mohaimin-al-aoun-resume.pdf" target="_blank" rel="noopener noreferrer" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu} style={{ '--nav-i': navItems.length } as CSSProperties}>Résumé<span>↗</span></a>
        <a href="#contact" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu} style={{ '--nav-i': navItems.length + 1 } as CSSProperties}>Say hello<span>↗</span></a>
      </nav>
    </header>
  );
}

function OrbitIllustration() {
  return (
    <div className="orbit-scene" role="img" aria-label="An animated diagram showing a product journey from a good question to a useful system and real people">
      <div className="orbit-sun" />
      <svg className="orbit-path" viewBox="0 0 500 430" aria-hidden="true">
        <path d="M95 210 C115 40 390 40 406 190 C425 350 140 390 87 265 C60 200 205 148 313 235 C370 281 345 353 273 330" />
      </svg>
      <div className="orbit-label label-idea"><span className="label-icon">✳</span><small>01 / START</small><strong>Good question</strong></div>
      <div className="orbit-label label-build"><span className="label-icon label-icon-blue">⌘</span><small>02 / MAKE</small><strong>Useful system</strong></div>
      <div className="orbit-label label-ship"><span className="label-icon label-icon-coral">↗</span><small>03 / SHIP</small><strong>Real people</strong></div>
      <div className="orbit-sticker">ALL THE<br />WAY THROUGH</div>
      <div className="orbit-runner" aria-hidden="true"><span /><span /><span /><span /></div>
      <div className="orbit-caption">product · systems · people</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> {siteContent.role} <span className="eyebrow-slash">/</span> BUILDER</div>
        <h1 id="hero-title">I build the<br /><span className="hero-highlight">whole product.</span><span className="hero-period">✳</span></h1>
        <p className="hero-intro">{siteContent.intro}</p>
        <p className="hero-now"><span className="now-label">RIGHT NOW</span> {siteContent.now}</p>
        <div className="hero-actions">
          <a className="button button-blue" href="#projects">Meet the products <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="#ai">How I build with AI <span aria-hidden="true">↗</span></a>
        </div>
        <div className="interest-line"><span>OFF-CLOCK TABS</span><b>BJJ</b><i>·</i><b>FPL</b><i>·</i><b>Ramos</b></div>
      </div>
      <OrbitIllustration />
      <div className="hero-side-note">IDEA <span>→</span> PRODUCT <span>→</span> ITERATE <span className="note-spark">✳</span></div>
    </section>
  );
}

function AiSection() {
  return (
    <section className="ai-section section-wrap section-space" id="ai" aria-labelledby="ai-title">
      <div className="section-heading-row">
        <div><div className="eyebrow"><span className="section-index">02</span> AI ENGINEERING</div><h2 id="ai-title">Useful AI takes<br /><span>more than a prompt.</span></h2></div>
        <p className="section-lede">{siteContent.ai.intro}</p>
      </div>
      <div className="build-loop">
        <div className="loop-track" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        {siteContent.ai.practices.map((practice, index) => (
          <article className="loop-card" key={practice.title}>
            <div className="loop-card-top"><span className="loop-number">0{index + 1}</span><span className={`loop-glyph loop-glyph-${index + 1}`} aria-hidden="true">{['✳', '↻', '✓'][index]}</span></div>
            <h3>{practice.title}</h3><p>{practice.body}</p>
            <div className="loop-card-foot"><span>{['CONTEXT', 'REPEAT', 'VERIFY'][index]}</span><span className="loop-arrow" aria-hidden="true">↗</span></div>
          </article>
        ))}
      </div>
      <div className="human-check"><span className="human-check-star">✳</span><p><b>Yes, AI helped build this.</b> The products and the Sergio Ramos rabbit hole are mine.</p><span className="human-check-tail" aria-hidden="true">↘</span></div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof siteContent.projects[number]; index: number }) {
  return (
    <article className={`project-card project-card-${index + 1}`}>
      <div className="project-card-header"><span className="project-number">{project.number}<span> / 03</span></span><span className="project-kind">{project.kind}</span></div>
      <div className="project-card-body">
        <div className="project-copy"><h3>{project.name}<span className="project-title-mark" aria-hidden="true">↗</span></h3><p className="project-description">{project.description}</p><p className="project-detail">{project.detail}</p>
          <div className="project-bottom"><span className="project-stack">{project.stack}</span>{project.href && <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">{project.linkLabel}<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a>}{project.repoHref && <a className="project-link" href={project.repoHref} target="_blank" rel="noopener noreferrer">View the repo<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a>}{index === 0 && <a className="project-link" href="https://www.novagrapple.com/create" target="_blank" rel="noopener noreferrer">Try quick build<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a>}</div>
        </div>
        <ProjectArtwork index={index} />
      </div>
    </article>
  );
}

function ProjectArtwork({ index }: { index: number }) {
  if (index === 0) return (
    <div className="project-art ng-art" aria-label="NovaGrapple demo instructor profile shown on desktop and mobile">
      <a className="ng-screenshot ng-screenshot-home" href="https://www.novagrapple.com/@demo" target="_blank" rel="noopener noreferrer" aria-label="Open the NovaGrapple demo instructor profile">
        <img src="/images/novagrapple/demo-profile-desktop.png" alt="NovaGrapple demo instructor profile on desktop, showing the About hero and session request button" width="2874" height="1368" loading="lazy" />
        <span className="ng-shot-label">DEMO PROFILE · DESKTOP <span aria-hidden="true">↗</span></span>
      </a>
      <a className="ng-screenshot ng-screenshot-create" href="https://www.novagrapple.com/" target="_blank" rel="noopener noreferrer" aria-label="Open the NovaGrapple public homepage">
        <img src="/images/novagrapple/demo-profile-mobile.png" alt="NovaGrapple demo instructor profile at mobile width" width="678" height="1190" loading="lazy" />
        <span className="ng-shot-label">ILLUSTRATIVE DEMO · MOBILE <span aria-hidden="true">↗</span></span>
      </a>
      <span className="ng-shot-sticker">A DEMO<br />PROFILE<br />IN ACTION</span>
    </div>
  );
  if (index === 1) return (
    <div className="project-art sb-art" aria-label="ScoreBetter practice and answer review screens">
      <a className="sb-shot sb-shot-practice" href="https://github.com/mohaiminalaoun/scorebetter" target="_blank" rel="noopener noreferrer" aria-label="Open ScoreBetter on GitHub, shown in SAT practice mode">
        <img src="/images/scorebetter-practice.png" alt="ScoreBetter SAT Reading and Writing practice question with Answer, Maybe, and Eliminate controls" width="1436" height="1318" loading="lazy" />
      </a>
      <a className="sb-shot sb-shot-reasoning" href="https://github.com/mohaiminalaoun/scorebetter" target="_blank" rel="noopener noreferrer" aria-label="Open ScoreBetter on GitHub, shown reviewing answer reasoning">
        <img src="/images/scorebetter-reasoning.png" alt="ScoreBetter explanation showing why an answer is tempting, wrong, or correct" width="778" height="1266" loading="lazy" />
      </a>
      <span className="sb-art-label">ANSWER · MAYBE · ELIMINATE <span aria-hidden="true">↗</span></span>
    </div>
  );
  return (
    <div className="project-art qualtrics-art" role="img" aria-label="Dashboard migration flow: legacy dashboard, structured Claude plans, and streamed progress, with rebuild time reduced from about 30 minutes to 5">
      <div className="qualtrics-art-head"><span>QUALTRICS / INTERNAL TOOL</span><span>01 — 03</span></div>
      <div className="qualtrics-metric"><strong>~30 <i>→</i> ~5</strong><span>minutes per dashboard rebuild</span></div>
      <div className="qualtrics-flow">
        <div className="qualtrics-node"><small>INPUT</small><b>Legacy dashboard</b></div>
        <span className="qualtrics-flow-arrow" aria-hidden="true">→</span>
        <div className="qualtrics-node qualtrics-node-ai"><small>PLAN</small><b>Claude +<br />structured output</b></div>
        <span className="qualtrics-flow-arrow" aria-hidden="true">→</span>
        <div className="qualtrics-node"><small>REVIEW</small><b>Plans by widget</b></div>
      </div>
      <div className="qualtrics-stream"><span /> progress streams to the UI <b>SSE</b></div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section className="projects-section section-space" id="projects" aria-labelledby="projects-title">
      <div className="section-wrap">
        <div className="section-heading-row projects-heading"><div><div className="eyebrow"><span className="section-index">01</span> PRODUCTS & SYSTEMS</div><h2 id="projects-title">Products I’m building.<br /><span>Systems I’ve worked on.</span></h2></div><p className="section-lede">I like designing the seams too: API boundaries, coordinating services, and what happens when a dependency fails. Here are two products I’m building and systems work from Qualtrics.</p></div>
        <div className="projects-list">{siteContent.projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
        <div className="tinkering-strip" id="tinkering"><div className="tinker-title"><span className="tinker-star" aria-hidden="true">✳</span><div><span className="eyebrow">SIDE QUESTS</span><h3>Small things, built to learn.</h3></div></div><div className="tinker-list">{siteContent.tinkering.map((item, index) => <div className="tinker-item" key={item.name}><span className="tinker-num">0{index + 1}</span><span><b>{item.name}</b><small>{item.note}</small></span><span className="tinker-arrow" aria-hidden="true">↗</span></div>)}</div></div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="experience-section section-wrap section-space" id="experience" aria-labelledby="experience-title">
      <div className="section-heading-row"><div><div className="eyebrow"><span className="section-index">03</span> THE PATH SO FAR</div><h2 id="experience-title">A few chapters.<br /><span>One long build loop.</span></h2></div><p className="section-lede">Product work, platform work, and a growing list of things I wanted to understand by making them.</p></div>
      <div className="timeline">{siteContent.experience.map((item, index) => <article className="timeline-item" key={item.place}><div className="timeline-pin"><span>{index === 0 ? '✳' : '·'}</span></div><div className="timeline-main"><h3>{item.place}</h3><p>{item.note}</p></div><time>{item.dates}</time></article>)}</div>
      <div className="personal-aside"><div className="aside-doodle" aria-hidden="true"><span>✳</span><i>↗</i></div><p>Most days I’m thinking about a product problem. Some days it’s a guard pass, a transfer window, or the Ramos tab.</p><span className="aside-note">THE OTHER TABS</span></div>
    </section>
  );
}

function LookingSection() {
  return (
    <section className="looking-section section-wrap section-space" id="looking" aria-labelledby="looking-title">
      <div className="section-heading-row">
        <div><div className="eyebrow"><span className="section-index">04</span> WHAT I’M LOOKING FOR</div><h2 id="looking-title">Two kinds of<br /><span>good next steps.</span></h2></div>
        <p className="section-lede">I’m open to engineering roles and to meeting people working on a product worth building.</p>
      </div>
      <div className="looking-grid">
        <article className="looking-card looking-role">
          <div className="looking-card-top"><span>01 / ENGINEERING</span><span aria-hidden="true">↗</span></div>
          <h3>{siteContent.lookingFor.role.title}</h3>
          <p>{siteContent.lookingFor.role.body}</p>
          <a href="/mohaimin-al-aoun-resume.pdf" target="_blank" rel="noopener noreferrer">Résumé (PDF) <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
        </article>
        <article className="looking-card looking-collaboration">
          <div className="looking-card-top"><span>02 / BUILD TOGETHER</span><span aria-hidden="true">✳</span></div>
          <h3>{siteContent.lookingFor.collaboration.title}</h3>
          <p>{siteContent.lookingFor.collaboration.body}</p>
          <a href={`mailto:${siteContent.contact.email}?subject=${encodeURIComponent('A product idea')}`}>Talk through an idea <span aria-hidden="true">↗</span></a>
        </article>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section section-wrap section-space" id="about" aria-labelledby="about-title">
      <div className="about-badge"><span className="badge-orbit" aria-hidden="true">✳</span><span>PERSON<br />BEHIND<br />THE BUILDS</span></div>
      <div className="about-copy"><div className="eyebrow"><span className="section-index">05</span> A LITTLE CONTEXT</div><h2 id="about-title">Hi, I’m Mohaimin.<br /><span>I like owning the details.</span></h2><div className="about-paragraphs">{siteContent.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="about-facts"><span>VANDERBILT CS ’17 · ENGINEERING TA</span><i>✳</i><span>RESTON, VA</span><i>✳</i><span>WHITE BELT, EMPHASIS ON WHITE BELT</span></div></div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner section-wrap"><div className="contact-kicker"><span className="status-dot" /> OPEN TO GOOD CONVERSATIONS</div><h2 id="contact-title">Have a role?<br />Building something?<br /><span>Let’s talk.</span></h2><p>I’m interested in engineering roles and in meeting people building thoughtful products. Especially if there’s a real problem, an early idea, or a good question to chase.</p><a className="contact-email" href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}<span aria-hidden="true"> ↗</span></a><div className="contact-links"><a href={siteContent.contact.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href={siteContent.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="https://x.com/Mohaiminx" target="_blank" rel="noopener noreferrer">X <span aria-hidden="true">↗</span></a></div><div className="contact-doodle" aria-hidden="true"><span>✳</span><i>↘</i><b /></div><div className="footer-bottom"><span>© 2026 {siteContent.name}</span><a href="#top">Back to top ↑</a><span className="console-egg">console.log('Hi Mohaimin')</span></div></div>
    </footer>
  );
}

export default function Main() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -4% 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log('Hi. You found the console. Say hi: mohaiminx@gmail.com');
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <div data-reveal><ProjectsSection /></div>
        <div data-reveal><AiSection /></div>
        <div data-reveal><ExperienceSection /></div>
        <div data-reveal><LookingSection /></div>
        <div data-reveal><AboutSection /></div>
      </main>
      <ContactSection />
      <Analytics />
    </div>
  );
}
