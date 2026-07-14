import { personalProfile, experiencesData, projectsData } from "@/data/profile";

const statBlocks = [
  {
    label: "Years in DevOps",
    value: "3+",
    note: "Production platform engineering and SRE work",
  },
  {
    label: "Clouds in scope",
    value: "3",
    note: "AWS, Alibaba Cloud, Cloudflare",
  },
  {
    label: "Core focus",
    value: "Reliability",
    note: "Automation, observability, recovery",
  },
];

const impactCards = [
  {
    title: "Platform-first mindset",
    body: "Build infrastructure that is repeatable, observable, and safe to evolve under pressure.",
  },
  {
    title: "Production calm",
    body: "Reduce noise, shorten incident time, and make the next deploy easier than the last one.",
  },
  {
    title: "Cloud-native execution",
    body: "Design for Kubernetes, managed services, and automation that survives real traffic patterns.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-kicker">
            <p className="eyebrow">Personal profile</p>
            <span className="status-pill">Open to platform and SRE work</span>
          </div>

          <h1>{personalProfile.name}</h1>
          <p className="role">{personalProfile.role}</p>
          <p className="bio">{personalProfile.bio}</p>

          <div className="cta-row">
            <a
              className="primary-link"
              href={personalProfile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="secondary-link"
              href={personalProfile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="secondary-link"
              href={personalProfile.socials.email}
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>

          <div className="micro-metrics" aria-label="Quick highlights">
            <div>
              <span className="micro-label">Location</span>
              <strong>Kuala Lumpur</strong>
            </div>
            <div>
              <span className="micro-label">Domain</span>
              <strong>Fintech + Brokerage</strong>
            </div>
            <div>
              <span className="micro-label">Style</span>
              <strong>Automate first</strong>
            </div>
          </div>
        </div>

        <aside className="hero-card" aria-label="Profile summary">
          <div className="avatar-panel">
            <div className="avatar-ring" aria-hidden="true">
              <div className="avatar-fallback">ML</div>
            </div>
            <div className="avatar-copy">
              <p className="avatar-name">{personalProfile.name}</p>
              <p className="avatar-role">{personalProfile.role}</p>
            </div>
          </div>

          <div className="summary-stack">
            <div className="summary-block">
              <p className="summary-label">Education</p>
              <p className="summary-value">{personalProfile.education.degree}</p>
              <p className="summary-meta">
                {personalProfile.education.school} · {personalProfile.education.period}
              </p>
            </div>

            <div className="summary-block">
              <p className="summary-label">Certifications</p>
              <ul className="compact-list">
                {personalProfile.certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>

      <section className="stat-grid" aria-label="Highlights">
        {statBlocks.map((stat) => (
          <article key={stat.label} className="stat-card">
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
            <p className="stat-note">{stat.note}</p>
          </article>
        ))}
      </section>

      <section className="impact-band">
        {impactCards.map((card) => (
          <article key={card.title} className="impact-card">
            <p className="impact-kicker">Principle</p>
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Capabilities</p>
              <h2>Skills</h2>
            </div>
            <p>Infrastructure, automation, and observability across cloud-native systems.</p>
          </div>

          <div className="skill-groups">
            {personalProfile.skills.map((group) => (
              <div key={group.category} className="skill-group">
                <h3>{group.category}</h3>
                <div className="chip-row">
                  {group.items.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Journey</p>
              <h2>Experience</h2>
            </div>
            <p>Production delivery, platform migrations, and recovery work in regulated environments.</p>
          </div>

          <div className="timeline">
            {experiencesData.map((job) => (
              <section key={`${job.company}-${job.period}`} className="timeline-item">
                <div className="timeline-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-meta">{job.company}</p>
                  </div>
                  <p className="timeline-period">{job.period}</p>
                </div>
                <ul>
                  {job.bulletPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      </section>

      <section className="panel projects-panel">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2>Projects</h2>
          </div>
          <p>Infrastructure and platform work that maps directly to business reliability.</p>
        </div>

        <div className="project-grid">
          {projectsData.map((project, index) => (
            <article key={project.title} className="project-card">
              <div className="project-topline">
                <span className="project-index">0{index + 1}</span>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="chip-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
