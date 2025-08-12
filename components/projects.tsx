import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark theme, and mobile-first design approach.",
      image: "/placeholder-r4p96.png",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveDemo: "#",
      code: "#",
    },
    {
      title: "Task Management App",
      description:
        "A feature-rich todo application with CRUD operations, local storage persistence, drag-and-drop functionality, and team collaboration features.",
      image: "/task-management-app.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      liveDemo: "#",
      code: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">My Projects</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and experience in web development and design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition-colors">
              <div className="aspect-video bg-slate-700 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
