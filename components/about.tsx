import { Code, Brain, Zap, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Algorithmic Problem Solving",
      description:
        "Developing optimized solutions for complex problems using algorithms, data structures, and analytical thinking.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Building fast, optimized applications that deliver excellent performance.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly.",
    },
  ]

  const currentlyLearning = [
    { name: "React Native", color: "bg-blue-600" },
    { name: "GraphQL", color: "bg-pink-600" },
    { name: "Docker", color: "bg-blue-500" },
    { name: "AWS", color: "bg-orange-500" },
    { name: "Vue.js", color: "bg-green-500" },
    { name: "Angular", color: "bg-red-600" },
  ]

  const skillProgress = [
    { skill: "Frontend Development", percentage: 88, color: "from-purple-500 to-blue-500" },
    { skill: "Backend Development", percentage: 60, color: "from-blue-500 to-cyan-500" },
    { skill: "Algorithmic Problem Solving", percentage: 68, color: "from-purple-500 to-pink-500" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
           I build full-stack applications using modern technologies like Java, Spring Boot, and MySQL. I'm particularly interested in writing scalable backend logic and creating responsive frontends with Angular to enhance user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors">
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {currentlyLearning.map((tech, index) => (
              <div
                key={index}
                className={`${tech.color} px-6 py-3 rounded-full text-white font-medium text-sm hover:scale-105 transition-transform cursor-pointer`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-white mb-8">My Journey</h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                 Hi, I'm Rohit kumar, a passionate and results-driven software developer with hands-on experience in building dynamic web applications using technologies like Java, Spring Boot, Angular, and MySQL. Currently, I'm working as a Java Developer Intern, where I contribute to scalable backend solutions, develop responsive frontends, and collaborate within Agile teams.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm excited to start my career in software development and contribute to innovative Java-based projects. I enjoy learning new technologies, exploring best practices in full-stack development, and staying updated with the latest industry trends. Looking forward to growing with a dynamic team and delivering impactful solutions.
              </p>
            </div>
            <div className="space-y-8">
              {skillProgress.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-medium">{skill.skill}</span>
                    <span className="text-purple-400 font-bold text-lg">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
