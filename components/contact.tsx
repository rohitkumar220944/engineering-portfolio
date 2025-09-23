"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import emailjs from "@emailjs/browser"
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
     emailjs
      .send("service_exs7r2u", "template_m5u3t5c",  {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }, "4KaIDKPq9SKVJJoe4")
      .then(
        (result) => {
          alert("Message sent successfully!")
          console.log(result.text)
          setFormData({ name: "", email: "", message: "" }) // Reset form
        },
        (error) => {
          alert("Failed to send message. Please try again.")
          console.log(error.text)
        }
      )
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I&apos;m actively looking for entry-level backend developer opportunities where I can contribute my skills and
            continue learning. Whether you have an internship, junior position, or project collaboration in mind, I&apos;d
            love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s talk</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I&apos;d love to hear
                from you. Drop me a message and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-400">rohitkumar220944@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                  <Phone className="text-green-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-400">+91 6204338896</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                  <MapPin className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-400">Indore, Madhya Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
            <p className="text-gray-400 mb-6">Fill out the form below and I&apos;ll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
