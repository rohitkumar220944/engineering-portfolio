import { MapPin, Mail, Phone } from "lucide-react"

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Rohit Kumar</h1>
        <p className="text-xl text-gray-600 mb-4">Full Stack Developer & Engineering Student</p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Mail size={16} />
            rohitkumar220944@gmail.com
          </div>
          <div className="flex items-center gap-1">
            <Phone size={16} />
            +91 6202699935
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            Indore, Madhya Pradesh
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-purple-600 pb-2 mb-4">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Passionate Full Stack Developer and final year engineering student with hands-on experience in modern web
            technologies. Proficient in React, JavaScript, Node.js, and database management. Eager to contribute to
            innovative projects while continuing to grow in a collaborative environment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b-2 border-purple-600 pb-2 mb-4">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Frontend Technologies</h3>
              <p className="text-gray-700">HTML5, CSS3, JavaScript, React, Tailwind CSS, Bootstrap</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Backend Technologies</h3>
              <p className="text-gray-700">Node.js, Express.js, REST APIs</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <p className="text-gray-700">JavaScript, Python, Java, C++, C</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Databases & Tools</h3>
              <p className="text-gray-700">MongoDB, MySQL, Git, GitHub</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b-2 border-purple-600 pb-2 mb-4">Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Personal Portfolio Website</h3>
              <p className="text-gray-600 text-sm mb-2">React, Tailwind CSS, JavaScript</p>
              <p className="text-gray-700">
                Developed a responsive portfolio website featuring smooth animations, dark theme, and mobile-first
                design approach to showcase projects and skills.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Task Management Application</h3>
              <p className="text-gray-600 text-sm mb-2">HTML5, CSS3, JavaScript, Local Storage</p>
              <p className="text-gray-700">
                Built a feature-rich todo application with CRUD operations, local storage persistence, and drag-and-drop
                functionality for enhanced user experience.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b-2 border-purple-600 pb-2 mb-4">Education</h2>
          <div>
            <h3 className="text-lg font-semibold">Bachelor of Engineering</h3>
            <p className="text-gray-600">Final Year Student</p>
            <p className="text-gray-700">Focus on Software Development and Computer Science</p>
          </div>
        </section>
      </div>
    </div>
  )
}
