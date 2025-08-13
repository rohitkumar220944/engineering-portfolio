"use client"

import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-purple-400">
              <span className="text-2xl">👋</span>
              <span className="text-lg">Welcome to my portfolio</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Hi, I'm <span className="text-purple-400">Rohit Kumar</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300">Full Stack Developer & final year student</p>
            </div>

            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
             Passionate about building robust, scalable, and user-friendly applications. Skilled in Java, Spring Boot, and backend development, with experience in HTML, CSS, JavaScript, and Angular. Proficient in MySQL  for designing efficient data solutions. Eager to deliver high-quality software and grow as a full-stack Java developer.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View My Work
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-green-600 hover:border-green-500 text-green-400 hover:text-green-300 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/rohitkumar220944" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rohit-kumar-264a05257/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-60"></div>
              <div className="absolute top-16 -right-16 w-16 h-16 bg-purple-400 rounded-full opacity-40"></div>

              {/* Profile image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-slate-700">
                <img
                  src="/placeholder-jjhob.png"
                  alt="Md Mustak - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>//mass
  )
}
