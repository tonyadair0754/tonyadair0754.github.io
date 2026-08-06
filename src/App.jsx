export default function PortfolioHomepage() {
  const projects = [
    {
      title: "Cadence",
      description:
        "Progressive Web App (PWA) with Firebase Cloud Functions and Firestore integration for real-time data and messaging.",
      tech: ["JavaScript", "HTML/CSS", "Firebase", "Firestore", "Cloud Functions", "PWA"],
      github:
        "https://github.com/tonyadair0754/cadence-pwa",
      demo: "https://cadence-fad9c.web.app/",
    },
    {
      title: "RecipeLens",
      description:
        "AI-powered app that extracts structured recipe data from images using OCR and Gemini AI.",
      tech: ["React", "FastAPI", "PostgreSQL", "OCR", "Gemini API"],
      github: "https://github.com/tonyadair0754/recipe-app",
      demo: "https://recipe-app-tan-six.vercel.app",
    },
    {
      title: "Datalog Interpreter",
      description:
        "Interpreter for Datalog programs built for BYU CS236, supporting query evaluation and database rule processing.",
      tech: ["C++", "Parsing", "Databases", "Logic Programming"],
      github:
        "https://github.com/tonyadair0754/BYU-CS236_Datalog-Interpreter",
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
          Computer Science Student & Aspiring Full-Stack Developer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Building better systems through thoughtful engineering.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          I’m a CS student at BYU with minors in Korean/Mathematics, focused on learning full-stack engineering, backend
          systems, APIs, machine learning, and AI-assisted applications.
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
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-gray-700 px-6 py-3 font-medium transition hover:border-blue-400 hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-gray-800 px-4 py-2 transition hover:bg-gray-700"
                >
                  GitHub
                </a>

                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-gray-700 px-4 py-2 transition hover:border-blue-400 hover:text-blue-400"
                  >
                    Live Demo
                  </a>
                )}
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
              <li>Progressive Web Apps (PWA)</li>
              <li>Tailwind CSS</li>
              <li>HTML/CSS</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-6">
            <h3 className="mb-4 text-xl font-semibold">Backend</h3>
            <ul className="space-y-2 text-gray-400">
              <li>FastAPI</li>
              <li>Firebase / Cloud Functions</li>
              <li>REST APIs</li>
              <li>Authentication</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-6">
            <h3 className="mb-4 text-xl font-semibold">Tools</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Git</li>
              <li>Firestore / PostgreSQL</li>
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
              Hey there! My name is Tony, and I'm a Junior at Brigham Young University pursuing a Bachelor’s degree in Computer Science, along with minors 
              in both Korean and Mathematics. I have experience building full-stack applications and systems-level tools that combine backend engineering, 
              data processing, and applied AI. 
              <br></br><br></br>
              I'm especially interested in backend engineering and data systems, with long-term interests in natural language processing and computational 
              linguistics. In addition to my studies, I enjoy playing musical instruments, reading/writing, cooking/baking, and learning languages! 
              More than anything, I'm fascinated by the ways people communicate and how language, technology, and culture intersect.
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
              href="mailto:tonyadair0754@gmail.com"
              className="rounded-2xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:scale-105"
            >
              Email Me
            </a>

            <a
              href="https://github.com/tonyadair0754"
              className="rounded-2xl border border-gray-700 px-6 py-3 font-medium transition hover:border-blue-400 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tony-adair-542430389"
              className="rounded-2xl border border-gray-700 px-6 py-3 font-medium transition hover:border-blue-400 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              className="rounded-2xl border border-gray-700 px-6 py-3 font-medium transition hover:border-blue-400 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
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
