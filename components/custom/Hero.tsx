import ProjectCard from "@/components/custom/ProjectCard";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-950 text-gray-200 justify-center">
      <div className="flex w-full max-w-7xl">
        {/* Left Sidebar */}
        <aside className="w-full lg:w-1/3 p-8 sm:p-12 lg:p-20 flex flex-col justify-between sticky top-0 h-auto lg:h-screen">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8">
              Kerrick Truong
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-6 lg:mb-12">
              Aspiring Software Engineer
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed sm:leading-loose">
              I build clean, performant, and modern web applications with React,
              Next.js, and TypeScript. Passionate about systems development and
              low-level programming.
            </p>
          </div>

          {/* Section Nav */}
          <nav className="mt-12 lg:mt-24 space-y-3 sm:space-y-4 lg:space-y-6 text-base sm:text-lg font-semibold">
            <a href="#about" className="block hover:text-cyan-400">ABOUT</a>
            <a href="#experience" className="block hover:text-cyan-400">EXPERIENCE</a>
            <a href="#projects" className="block hover:text-cyan-400">PROJECTS</a>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-6 sm:space-x-8 mt-12 lg:mt-24 text-base sm:text-lg">
            <a
              href="https://github.com/irudite"
              target="_blank"
              className="hover:text-cyan-400"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kerrick-truong"
              target="_blank"
              className="hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </aside>

        {/* Right Content */}
        <main className="w-full lg:w-2/3 p-8 sm:p-12 lg:p-20 overflow-y-auto">
          {/* About Section */}
          <section id="about" className="mb-48 space-y-10">
          <h2 className="text-5xl font-bold text-white">About Me</h2>
          <p className="text-lg text-gray-400 leading-loose">
            I’m a{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              computer science undergraduate
            </span>{" "}
            at Lehigh University with a strong interest in{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              software engineering
            </span>
            ,{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              AI
            </span>
            , and{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              fintech
            </span>
            . Over the past few years, I’ve built{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              full-stack web apps
            </span>
            ,{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              mobile experiences
            </span>
            , and{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              AI-powered tools
            </span>
            , giving me a strong foundation across{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              frontend
            </span>
            ,{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              backend
            </span>
            , and{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              data technologies
            </span>
            . My main focus is crafting clean, performant, and modern apps using{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              React
            </span>
            ,{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              Next.js
            </span>
            , and{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              TypeScript
            </span>
            . On the backend, I’ve worked with{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              Java
            </span>
            ,{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              Node.js
            </span>
            , and{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              PostgreSQL
            </span>
            . I’m also deeply interested in{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              computer vision
            </span>{" "}
            and{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              data-driven applications
            </span>
            , where I see huge potential to combine technical rigor with creativity. 
            <br/> <br/>
            Outside of class and projects, I’m constantly learning new frameworks,
            collaborating on{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              team-based development
            </span>
            , and refining my{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              problem-solving skills
            </span>{" "}
            through algorithm practice. Looking forward, I aim to grow as a{" "}
            <span className="text-cyan-100 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
              software engineer in fintech
            </span>
            , building tools that make technology more accessible and impactful.
          </p>
        </section>

          {/* Experience Section */}
          <section id="experience" className="mb-24 lg:mb-48 space-y-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Experience
            </h2>

            <div className="space-y-6">
              <p className="text-sm sm:text-base text-gray-500">
                August 2025 — Present
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                DevOps Engineering Intern · BVA Bear&apos;s IT Solutions
              </h3>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Automated onboarding workflows with PowerAutomate scripts,
                reducing setup time by 90%. Built a Next.js admin dashboard with
                Azure AD + Microsoft Graph API that streamlined task management
                and cut HR inquiries by 75%.
              </p>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                <span className="px-3 py-1 bg-gray-800 rounded">Azure</span>
                <span className="px-3 py-1 bg-gray-800 rounded">Next.js</span>
                <span className="px-3 py-1 bg-gray-800 rounded">Bash</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm sm:text-base text-gray-500">
                August 2025 — Present
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Software Engineering Teaching Assistant
              </h3>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Mentored 50+ students on coding standards, debugging, full-stack
                development, and databases. Held weekly office hours to help
                students design, implement, and test software projects that
                improved user experience.
              </p>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                <span className="px-3 py-1 bg-gray-800 rounded">React</span>
                <span className="px-3 py-1 bg-gray-800 rounded">JDBC</span>
                <span className="px-3 py-1 bg-gray-800 rounded">Maven</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm sm:text-base text-gray-500">
                August 2024 — September 2025
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Computer Vision Research Fellow
              </h3>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Developed ML workflows in Python for UAV post-disaster analysis,
                boosting annotation throughput by 70%. Processed 30,000+ aerial
                frames with Detectron2, DVIS++, and TMaNNet, improving semantic
                segmentation accuracy by 22%.
              </p>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                <span className="px-3 py-1 bg-gray-800 rounded">Python</span>
                <span className="px-3 py-1 bg-gray-800 rounded">OpenCV</span>
                <span className="px-3 py-1 bg-gray-800 rounded">Latex</span>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-24 lg:mb-48 space-y-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Projects
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              <ProjectCard
                title="FoundationFirst"
                description="A 24 hour hackathon project created to aid in housing instability."
                image="/FoundationFirst.png"
                tech={["React", "TailwindCSS", "Supabase"]}
                github="https://github.com/irudite/foundationfirst"   // <-- add this
              />

              <ProjectCard
                title="Fincrate"
                description="A web app to track stocks and crypto in one place with live API data."
                image="/Fincrate.png"
                tech={["React", "TailwindCSS", "Supabase"]}
                github="https://github.com/irudite/fincrate"   // <-- add this
              />

              <ProjectCard
                title="Portfolio Website"
                description="My old portfolio website used to display my projects & experiences."
                image="/Portfolio.png"
                tech={["React", "CSS"]}
                github="https://github.com/irudite/portfolio"   // <-- add this
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Hero;

