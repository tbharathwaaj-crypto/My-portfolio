import { useState } from "react";
import { Link } from "react-router-dom";
import { achievements, capabilities, experiences, motivations, projects, sourceLinks, tools } from "../data/content";
import { ContactForm, FeedbackForm } from "../components/Forms";
import { ProjectTile } from "../components/ProjectTile";
import { Reveal } from "../components/Reveal";
import { SafeImage } from "../components/SafeImage";
import { assetUrl } from "../utils/assets";

function SectionMarker({ label }: { label: string }) {
  return <div className="section-marker">{label}</div>;
}

function TypingText({ text, startDelay = 0, characterDelay = 12, dropFromTop = false }: { text: string; startDelay?: number; characterDelay?: number; dropFromTop?: boolean }) {
  return <>{Array.from(text).map((character, index) => (
    <span className={`hero-title-character ${dropFromTop ? "hero-title-character-drop" : ""}`} key={`${index}-${character}`} style={{ animationDelay: `${startDelay + index * characterDelay}ms` }}>{character}</span>
  ))}</>;
}

function HeroCollage({ placement }: { placement: "mobile" | "desktop" }) {
  return (
    <div className={`hero-collage hero-collage-${placement}`}>
      <div className="hero-collage-backdrop" aria-hidden="true" />
      <figure className="hero-photo-main">
        <SafeImage
          src="/images/bharathwaaj-hero.png"
          alt="Illustrated portrait of Bharathwaaj Murugan at a microphone"
          loading="eager"
          fetchPriority="high"
        />
        <figcaption><span>Product Designer</span></figcaption>
      </figure>
    </div>
  );
}

function HomePage() {
  const [activeAchievement, setActiveAchievement] = useState(0);
  const independent = projects.filter((project) => project.kind === "Independent");
  const professional = projects.filter((project) => project.kind === "Professional");
  const selectedAchievement = achievements[activeAchievement] ?? achievements[0];

  return (
    <main id="main" className="page-main" tabIndex={-1}>
      <span id="top" className="anchor-top" />
      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Reveal className="hero-intro-name" animateOnMount>
            <p><strong><span aria-hidden="true"><TypingText text="I’m Bharathwaaj Murugan, a Product Designer." startDelay={140} characterDelay={16} dropFromTop /></span><span className="sr-only">I’m Bharathwaaj Murugan, a Product Designer.</span></strong></p>
          </Reveal>
          <Reveal delay={80} animateOnMount>
            <h1 id="hero-title" aria-label="I think in systems. I design in experiences.">
              <span aria-hidden="true"><TypingText text="I think in " startDelay={1050} /><em><TypingText text="systems." startDelay={1190} /></em></span>
              <br aria-hidden="true" />
              <span aria-hidden="true"><TypingText text="I design in " startDelay={1330} /><em><TypingText text="experiences." startDelay={1480} /></em></span>
            </h1>
          </Reveal>
          <HeroCollage placement="mobile" />
          <Reveal delay={1850} className="hero-intro" animateOnMount>
            <p>I design, build, and experiment at the intersection of human experience, technology, and creativity — from digital products and design systems to emerging AI experiences.</p>
          </Reveal>
          <Reveal delay={2200} className="hero-actions" animateOnMount>
            <a className="button button-dark" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            <a className="link-placeholder" href={sourceLinks.linkedin} target="_blank" rel="noreferrer" title="Open LinkedIn profile">LinkedIn <small>View profile ↗</small></a>
          </Reveal>
        </div>
        <HeroCollage placement="desktop" />
        <Reveal className="hero-bottomline" delay={320} animateOnMount><span>Independent thinking, connected systems.</span><span>Scroll to explore <i aria-hidden="true">↓</i></span></Reveal>
      </section>

      <section id="experience" className="experience-section section-wrap" aria-labelledby="experience-title">
        <SectionMarker label="Experience aligns learning" />
        <div className="experience-headline">
          <Reveal><h2 id="experience-title" className="single-line-title">Growing through <em>the work.</em></h2></Reveal>
          <Reveal delay={90}><p>Roles, practice, and learning moments from the path so far. Dates appear only where the source includes them.</p></Reveal>
        </div>
        <div className="experience-rail" aria-label="Career progression">
          {experiences.map((item, index) => (
            <Reveal key={item.role} delay={index * 60} className="experience-row">
              <div className="experience-index"><img className="experience-logo" src={assetUrl(item.logo)} alt={item.logoAlt} loading="lazy" /></div>
              <div className="experience-role"><h3>{item.role}</h3>{item.period && <span className="experience-period">{item.period}</span>}</div>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
        <p className="experience-footnote">Company names and dates for the other roles were not included in the source archive.</p>
      </section>

      <section id="work" className="work-section section-wrap" aria-labelledby="work-title">
        <SectionMarker label="Case Studies" />
        <div className="section-heading work-heading">
          <Reveal><h2 id="work-title">Ideas, made <em>useful.</em></h2></Reveal>
          <Reveal delay={80}><p>Product work shaped by the details: clear systems, thoughtful flows, and interfaces that make complex things easier to use.</p></Reveal>
        </div>

        <div className="independent-work">
          <div className="independent-feature-row">
            <Reveal className="feature-column"><ProjectTile project={independent[0]} variant="feature" /></Reveal>
            <Reveal className="feature-column" delay={100}>
              <article className="project-tile project-feature case-study-placeholder" aria-label="Google Mail case study placeholder">
                <div className="project-visual case-study-placeholder-visual">
                  <div className="case-study-placeholder-art" aria-hidden="true">
                    <div className="case-study-art-toolbar"><i /><i /><i /><span>PROJECT OVERVIEW</span></div>
                    <div className="case-study-art-layout">
                      <div className="case-study-art-sidebar"><i /><i /><i /><i /></div>
                      <div className="case-study-art-content">
                        <span className="case-study-art-heading" />
                        <span className="case-study-art-line" />
                        <span className="case-study-art-line short" />
                        <div className="case-study-art-panels"><i /><i /><i /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-copy">
                  <div className="project-meta"><span>Case study · Coming soon</span><span>Independent</span></div>
                  <div className="project-title-line"><h3>Google Mail</h3></div>
                  <p>Project overview and case study details are coming soon.</p>
                </div>
              </article>
            </Reveal>
          </div>

          <div className="project-grid project-grid-two">
            <Reveal><ProjectTile project={independent[1]} variant="standard" /></Reveal>
            <Reveal delay={90}><ProjectTile project={independent[2]} variant="standard" /></Reveal>
          </div>

        </div>

        <div className="professional-work">
          <Reveal className="professional-heading">
            <div><span className="mini-kicker">Professional projects</span><h3>Systems at <em>scale.</em></h3></div>
            <p>Selected platform and design system work across AI, enterprise, banking, and healthcare.</p>
          </Reveal>
          <div className="professional-list">
            {professional.map((project, index) => (
              <Reveal key={project.slug} delay={index * 50}>
                <ProjectTile project={project} variant="compact" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section section-wrap" aria-labelledby="about-title">
        <SectionMarker label="A little about me" />
        <div className="about-grid">
          <Reveal className="about-visual">
            <div className="about-image-frame">
              <SafeImage src="/images/product-define-stage-whiteboard-notes.png" alt="A designer outlining product flows and user needs on a whiteboard" />
              <span className="frame-caption">OBSERVE / ARRANGE / REFRAME</span>
            </div>
            <div className="about-image-note"><span>Field note 01</span><span>Stay curious.</span></div>
          </Reveal>
          <div className="about-copy">
            <Reveal><span className="mini-kicker">From code to creativity</span><h2 id="about-title">Bridging<br /><em>design & logic.</em></h2></Reveal>
            <Reveal delay={90}>
              <p className="about-lead">“Design isn’t just how it looks, it’s how it works.”</p>
              <p>With a foundation in Computer Science, I discovered my interest lies in building experiences—not just systems. That blend of technology and creativity led me to User Experience Design, where I could solve real problems with purpose.</p>
            </Reveal>
            <Reveal delay={150} className="belief-note">
              <span className="belief-number">A belief I return to</span>
              <h3>Creators think differently.</h3>
              <p>Anyone can follow, but only a few choose to create. I aim to be among the creators—aligning logic with empathy to design meaningful user experiences.</p>
            </Reveal>
          </div>
        </div>
        <Reveal className="motivation-strip">
          <div className="motivation-heading"><span className="mini-kicker">What drives me?</span><span className="motivation-spark" aria-hidden="true">✳</span></div>
          {motivations.map((item, index) => (
            <div className="motivation-item" key={item.name}><span>0{index + 1}</span><h3>{item.name}</h3><p>{item.description}</p></div>
          ))}
        </Reveal>
      </section>

      <section id="capabilities" className="capabilities-section section-wrap" aria-labelledby="capabilities-title">
        <SectionMarker label="Practice & tools" />
        <div className="section-heading capability-heading">
          <Reveal><h2 id="capabilities-title" className="single-line-title">Curiosity with <em>a toolkit.</em></h2></Reveal>
          <Reveal delay={70}><p>From mapping the question to testing a working idea, these are the practices and tools I return to.</p></Reveal>
        </div>
        <div className="capability-layout">
          <Reveal className="capability-panel">
            <span className="panel-label">Capabilities</span>
            <div className="capability-cloud" aria-label="Design capabilities">
              {capabilities.map((item) => (
                <span key={item.name} className="capability-chip">{item.name}</span>
              ))}
            </div>
            <div className="capability-description">
              <p>Human-centered design across research, systems, interaction, and prototyping.</p>
            </div>
          </Reveal>
          <Reveal className="tools-panel" delay={120}>
            <span className="panel-label">Tools I use</span>
            <div className="tool-list" role="group" aria-label="Design, creative, and AI coding tools">
              {tools.map((tool) => (
                <span key={tool.name} className="tool-chip">
                  <img className={`tool-icon ${tool.name === "Figma" ? "tool-icon-figma" : ""} ${tool.name === "Codex" ? "tool-icon-codex" : ""}`} src={assetUrl(tool.icon)} alt="" aria-hidden="true" loading="lazy" />
                  <span>{tool.name}</span>
                </span>
              ))}
            </div>
            <p className="tools-summary">Design, research, prototyping, collaboration, and AI-assisted development.</p>
          </Reveal>
        </div>
      </section>

      <section id="journal" className="journal-section section-wrap" aria-labelledby="journal-title">
        <SectionMarker label="Achievements & moments" />
        <div className="journal-heading">
          <Reveal><h2 id="journal-title">Small notes.<br /><em>Lasting lessons.</em></h2></Reveal>
          <Reveal delay={90}><p>A journal of recognition, shared practice, and learning that continues to inform my design work.</p></Reveal>
        </div>
        <div className="journal-layout">
          <div className="journal-list">
            {achievements.map((item, index) => (
              <Reveal key={item.title} delay={index * 50} className="journal-entry" onMouseEnter={() => setActiveAchievement(index)}>
                <span className="journal-entry-index">0{index + 1}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
                {item.image && <SafeImage src={item.image} alt={item.alt ?? ""} className="journal-thumb" />}
              </Reveal>
            ))}
          </div>
          <Reveal className="journal-feature">
            <SafeImage
              src={selectedAchievement.image ?? "/images/SwA31B1ON3ZHPKw4cCHEzkkzM3c.jpg"}
              alt={selectedAchievement.alt ?? selectedAchievement.title}
            />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="contact-section section-wrap" aria-labelledby="contact-title">
        <SectionMarker label="Let’s connect" />
        <div className="contact-topline">
          <Reveal><span className="mini-kicker">Have a good problem to solve?</span><h2 id="contact-title">Let’s make<br /><em>it make sense.</em></h2></Reveal>
          <Reveal delay={100} className="contact-aside"><span className="contact-mark" aria-hidden="true">↗</span><p>Send a note about a project, a collaboration, or a question. I’ll be glad to hear from you.</p></Reveal>
        </div>
        <div className="contact-grid">
          <Reveal className="contact-form-panel">
            <h3>Start a conversation</h3>
            <p className="form-intro">The form validates your entry. No message is sent until a delivery endpoint is connected.</p>
            <ContactForm />
          </Reveal>
          <Reveal className="feedback-panel" delay={100}>
            <span className="mini-kicker">A note on this portfolio</span>
            <h3>Hope you like<br />what you see.</h3>
            <p>Your feedback helps me see the work from another point of view.</p>
            <p className="feedback-note">No feedback is sent until a feedback endpoint is connected.</p>
            <FeedbackForm />
          </Reveal>
        </div>
        <div className="contact-placeholders" aria-label="Profile links">
          <a href={sourceLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile, opens in a new tab">LinkedIn <small>View profile ↗</small></a>
          <span>Email <small>address to be added</small></span>
        </div>
      </section>
      <footer className="site-footer section-wrap">
        <Link to="/#top" className="footer-wordmark"><span className="wordmark-monogram">BM</span><span>Bharathwaaj Murugan</span></Link>
        <span>Product Designer · 2026</span>
        <a href={sourceLinks.portfolio} target="_blank" rel="noreferrer">Previous portfolio ↗</a>
        <a href="#top">Back to the beginning ↑</a>
      </footer>
    </main>
  );
}

export default HomePage;
