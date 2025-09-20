import Image from "next/image"
import ProjectCard from "@/components/custom/ProjectCard";

const Hero = () => {
  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-200 justify-center">
      <div className="flex w-full max-w-7xl">
        {/* Left Sidebar */}
        <aside className="w-1/3 p-20 flex flex-col justify-between sticky top-0 h-screen">
          <div>
            <h1 className="text-6xl font-bold text-white mb-8">Kerrick Truong</h1>
            <h2 className="text-2xl text-gray-400 mb-12">Aspiring Software Engineer</h2>
            <p className="text-lg text-gray-400 leading-loose">
              I build clean, performant, and modern web applications with React,
              Next.js, and TypeScript. Passionate about systems development and
              low-level programming.
            </p>
          </div>

          {/* Section Nav */}
          <nav className="mt-24 space-y-6 text-lg font-semibold">
            <a href="#about" className="block hover:text-cyan-400">ABOUT</a>
            <a href="#experience" className="block hover:text-cyan-400">EXPERIENCE</a>
            <a href="#projects" className="block hover:text-cyan-400">PROJECTS</a>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-8 mt-24 text-lg">
            <a href="https://github.com/irudite" target="_blank" className="hover:text-cyan-400">GitHub</a>
            <a href="https://linkedin.com/in/kerrick-truong" target="_blank" className="hover:text-cyan-400">LinkedIn</a>
          </div>
        </aside>

        {/* Right Content */}
        <main className="w-2/3 p-20 overflow-y-auto">
          {/* About Section */}
          <section id="about" className="mb-48 space-y-10">
            <h2 className="text-5xl font-bold text-white">About Me</h2>
            <p className="text-lg text-gray-400 leading-loose">
              I’m a computer science undergraduate at Lehigh University with a
              strong interest in software engineering, AI, and fintech. I enjoy
              taking ideas from concept to code and building applications that
              are both practical and visually engaging. Over the past few years,
              I’ve developed projects ranging from full-stack web apps and
              mobile experiences to AI-powered tools, giving me a solid
              foundation across frontend, backend, and data technologies.
              <br /><br />
              My primary focus is creating clean, modern web applications with
              React, Next.js, and TypeScript. On the backend, I’ve worked with
              Java, Node, and PostgreSQL to design scalable APIs and databases. I
              also enjoy exploring AI/ML, computer vision, and data-driven
              applications — areas where I see huge potential to combine
              technical rigor with creativity.
              <br /><br />
              Outside of class and projects, I’m constantly learning new
              frameworks, contributing to team-based development, and refining my
              problem-solving skills through algorithm practice. Looking forward,
              I aim to grow as a software engineer in fintech, where I can work
              on tools that impact people’s financial decisions and make
              technology more accessible.
            </p>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-48 space-y-10">
            <h2 className="text-5xl font-bold text-white">Experience</h2>
            <div className="space-y-6">
              <p className="text-base text-gray-500">August 2025 — Present</p>
              <h3 className="text-2xl font-semibold text-white">
                DevOps Engineering Intern · BVA Bear's IT Solutions
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Automated onboarding workflows with PowerAutomate scripts, reducing setup time by 90%. 
                Built a Next.js admin dashboard with Azure AD + Microsoft Graph API that streamlined 
                task management and cut HR inquiries by 75%.
              </p>
              <div className="flex gap-3 mt-2 text-sm">
                <span className="px-3 py-1 bg-gray-800 rounded">Azure</span>
                <span className="px-3 py-1 bg-gray-800 rounded">Next.js</span>
                <span className="px-3 py-1 bg-gray-800 rounded">Bash</span>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-base text-gray-500">August 2025 — Present</p>
              <h3 className="text-2xl font-semibold text-white">
                Software Engineering Teaching Assistant
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Mentored 50+ students on coding standards, debugging, full-stack
                development, and databases. Held weekly office hours to help students
                design, implement, and test software projects that improved user experience.
              </p>
              <div className="flex gap-3 mt-2 text-sm">
                <span className="px-3 py-1 bg-gray-800 rounded">React</span>
                <span className="px-3 py-1 bg-gray-800 rounded">JDBC</span>
                <span className="px-3 py-1 bg-gray-800 rounded">Maven</span>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-base text-gray-500">August 2024 — September 2025</p>
              <h3 className="text-2xl font-semibold text-white">
                Computer Vision Research Fellow
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Developed ML workflows in Python for UAV post-disaster analysis,
                boosting annotation throughput by 70%. Processed 30,000+ aerial
                frames with Detectron2, DVIS++, and TMaNNet, improving semantic
                segmentation accuracy by 22%.
              </p>
              <div className="flex gap-3 mt-2 text-sm">
                <span className="px-3 py-1 bg-gray-800 rounded">Python</span>
                <span className="px-3 py-1 bg-gray-800 rounded">OpenCV</span>
                <span className="px-3 py-1 bg-gray-800 rounded">Latex</span>
              </div>
            </div>

          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-48 space-y-12">
            <h2 className="text-5xl font-bold text-white">Projects</h2>
            <div className="space-y-12">
              <ProjectCard
                title="FoundationFirst"
                description="A 24 hour hackathon project created to aid in housing instability."
                image="/FoundationFirst.png"
                tech={["React", "TailwindCSS", "Supabase"]}
              />
              <ProjectCard
                title="Fincrate"
                description="A web app to track stocks and crypto in one place with live API data."
                image="/Fincrate.png"
                tech={["React", "TailwindCSS", "Supabase"]}
              />
              <ProjectCard
                title="Portfolio Website"
                description="My old portfolio website used to display my projects & experiences."
                image="/Portfolio.png"
                tech={["React", "CSS"]}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Hero;

