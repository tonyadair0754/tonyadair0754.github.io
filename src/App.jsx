export default function PortfolioHomepage() {
  const projects = [
    {
      title: "RecipeLens",
      description:
        "AI-assisted recipe extraction app that converts recipe images into structured multilingual recipe data using OCR and Gemini AI.",
      tech: ["React", "FastAPI", "PostgreSQL", "OCR", "Gemini API"],
      github: "https://github.com/tonyadair0754/RecipeLens",
      demo: "#",
    },
    {
      title: "Future Project",
      description:
        "Add your next project here. Include what problem it solves and what technologies you used.",
      tech: ["React", "Python"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-200">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#0B0F19]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold tracking-wide">
            Tony Adair
          </h1>

          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto flex max-w-6xl flex-col justify-center px-6 py-28">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
          Computer Science Student & Full-Stack Developer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Building practical software with AI-assisted workflows.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          I’m a CS student focused on full-stack engineering, backend
          systems, APIs, OCR pipelines, and AI-assisted applications.
          Recently, I’ve been building tools that combine modern web
          development with real-world problem solving.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="https://github.com/tonyadair0754"
            className="rounded-2xl border border-gray-700 px-6 py-3 font-medium transition hover:border-blue-400 hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="#"
            className="rounded-2xl border border-gray-700 px-6 py-3 font-medium transition hover:border-blue-400 hover:text-blue-400"
          >
            Resume
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-gray-400">
            Projects focused on full-stack development, APIs, AI-assisted
            workflows, and practical software engineering.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-800 bg-[#111827] p-6 shadow-lg transition hover:-translate-y-1 hover:border-blue-500"
            >
              <div className="mb-6 h-48 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20" />

              <h3 className="text-2xl font-semibold">{project.title}</h3>

              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href={project.github}
                  className="rounded-xl bg-gray-800 px-4 py-2 transition hover:bg-gray-700"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="rounded-xl border border-gray-700 px-4 py-2 transition hover:border-blue-400 hover:text-blue-400"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-bold">Skills</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-6">
            <h3 className="mb-4 text-xl font-semibold">Languages</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>SQL</li>
              <li>Java</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-6">
            <h3 className="mb-4 text-xl font-semibold">Frontend</h3>
            <ul className="space-y-2 text-gray-400">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>HTML/CSS</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-6">
            <h3 className="mb-4 text-xl font-semibold">Backend</h3>
            <ul className="space-y-2 text-gray-400">
              <li>FastAPI</li>
              <li>REST APIs</li>
              <li>Authentication</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-6">
            <h3 className="mb-4 text-xl font-semibold">Tools</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Git</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">About Me</h2>

            <p className="mt-6 leading-8 text-gray-400">
              I’m a computer science student interested in backend systems,
              AI-assisted applications, OCR pipelines, and scalable web
              architecture. I enjoy building projects that combine practical
              engineering with thoughtful user experience.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8">
            <h3 className="text-2xl font-semibold">
              Currently Exploring
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">
              <li>• LLM workflows</li>
              <li>• System design fundamentals</li>
              <li>• OCR accuracy improvements</li>
              <li>• Deployment and infrastructure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-gray-800 bg-[#111827] p-10 text-center">
          <h2 className="text-4xl font-bold">Get In Touch</h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            I’m currently looking for opportunities to continue growing as a
            software engineer and contribute to meaningful projects.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:your-email@example.com"
              className="rounded-2xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:scale-105"
            >
              Email Me
            </a>

            <a
              href="https://github.com/tonyadair0754"
              className="rounded-2xl border border-gray-700 px-6 py-3 font-medium transition hover:border-blue-400 hover:text-blue-400"
            >
              GitHub
            </a>

            <a
              href="#"
              className="rounded-2xl border border-gray-700 px-6 py-3 font-medium transition hover:border-blue-400 hover:text-blue-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        Built with React + Tailwind CSS
      </footer>
    </div>
  );
}
