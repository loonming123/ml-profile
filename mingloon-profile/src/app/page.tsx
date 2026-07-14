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

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Personal profile</p>
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
        </div>

        <aside className="hero-card" aria-label="Profile summary">
          <div className="avatar-ring">
            <div className="avatar-fallback" aria-hidden="true">
              ML
            </div>
          </div>
          <div className="summary-stack">
            <div>
              <p className="summary-label">Education</p>
              <p className="summary-value">{personalProfile.education.degree}</p>
              <p className="summary-meta">
                {personalProfile.education.school} · {personalProfile.education.period}
              </p>
            </div>
            <div>
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

      <section className="content-grid">
        <article className="panel">
          <h2>Skills</h2>
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
          <h2>Experience</h2>
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

      <section className="panel">
        <div className="section-heading">
          <h2>Projects</h2>
          <p>Selected infrastructure and platform work.</p>
        </div>
        <div className="project-grid">
          {projectsData.map((project) => (
            <article key={project.title} className="project-card">
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
