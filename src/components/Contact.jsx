/* eslint-disable react/no-unescaped-entities */
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import contactImg from "../assets/icons8-contact-96.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // Contact information in a similar format to educationList
  const contactMethods = [
    {
      method: "Email",
      value: "rafiahmedrabby282@gmail.com",
      details:
        "Feel free to email me directly. I typically respond within 24-48 hours.",
      icon: (
        <svg
          className="w-6 h-6 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
    {
      method: "Phone",
      value: "+880 1894356001",
      details: "Available for calls Monday through Friday, 9am to 5pm ",
      icon: (
        <svg
          className="w-6 h-6 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          ></path>
        </svg>
      ),
    },
    {
      method: "Location",
      value: "Savar, Dhaka, Bangladesh",
      details:
        "Available for remote work or local collaborations in the NYC area.",
      icon: (
        <svg
          className="w-6 h-6 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      ),
    },
  ];

  // Simple fade-in animation using intersection observer (matching the Education component)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    Swal.fire({
      title: "Send Email?",
      text: "Your message will be sent directly.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#E80F88",
      cancelButtonColor: "#4B5563",
      confirmButtonText: "Yes, send it!",
      background: "#1F2937",
      color: "#F9FAFB",
    }).then((result) => {
      if (result.isConfirmed) {
        emailjs
          .sendForm("service_giv903j", "template_l307qq8", form.current, {
            publicKey: "u6maY1mTe0XfC72by",
          })
          .then(
            () => {
              setLoading(false);
              Swal.fire({
                title: "Message Sent!",
                text: "Thanks for reaching out. I'll get back to you soon.",
                icon: "success",
                confirmButtonColor: "#E80F88",
                background: "#1F2937",
                color: "#F9FAFB",
              });
              e.target.reset();
            },
            (error) => {
              setLoading(false);
              console.error("Failed to send email:", error.text);
              Swal.fire({
                title: "Something went wrong",
                text: "Please try again later.",
                icon: "error",
                confirmButtonColor: "#E80F88",
                background: "#1F2937",
                color: "#F9FAFB",
              });
            }
          );
      } else {
        setLoading(false);
      }
    });
  };

  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header - matching Education component style */}
        <div className="mb-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 bg-[#E80F88]"></div>
            <h3 className="text-xl font-medium text-[#E80F88]">GET IN TOUCH</h3>
            <div className="h-1 w-10 bg-[#E80F88]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            Contact Me
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-[#E80F88]"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 mt-6">
            Have a question or want to work together? Feel free to reach out
            through any of these channels or the form below
          </p>
        </div>

        {/* Timeline for contact methods */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-ml-0.5 h-full w-0.5 bg-gray-800"></div>

          {/* Contact method items */}
          {contactMethods.map((contact, index) => (
            <div
              key={index}
              className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-${
                index * 200
              } mb-16 relative`}
            >
              <div
                className={`md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-4 md:-translate-x-2.5 w-5 h-5 rounded-full bg-[#E80F88] z-10 border-4 border-black shadow-[0_0_10px_rgba(232,15,136,0.6)]">
                  <div className="absolute -inset-1 rounded-full border-2 border-pink-400 animate-ping opacity-20"></div>
                </div>

                {/* Content - positioned on alternating sides */}
                <div className="md:w-1/2 pl-14 md:pl-0 md:px-8">
                  <div
                    className={`bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#E80F88] transition-all duration-300 shadow-lg relative ${
                      index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                    }`}
                  >
                    {/* Content */}
                    <div className="flex items-start">
                      <div className="hidden md:flex md:items-center md:justify-center mr-4 w-12 h-12 rounded-full bg-gray-800">
                        {contact.icon}
                      </div>

                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {contact.method}
                        </h3>
                        <p className="text-lg text-pink-400 font-medium">
                          {contact.value}
                        </p>

                        {contact.details && (
                          <p className="text-gray-400 mt-3">
                            {contact.details}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500">
          <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg border border-gray-800 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <img src={contactImg} alt="Contact" className="w-12 h-12" />
              <h3 className="text-2xl font-bold">Send Me a Message</h3>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E80F88] text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E80F88] text-white"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E80F88] text-white resize-none"
                  placeholder="I'd like to discuss a project with you..."
                  required
                ></textarea>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-[#E80F88] text-white rounded-full font-medium hover:bg-[#c50c73] transition-colors duration-300 flex items-center space-x-2 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-1000 ease-out transform translate-x-full bg-white group-hover:translate-x-0 opacity-10"></span>

                  {loading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                      Send Message
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-700">
          <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            {/* GitHub */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-[#E80F88] hover:shadow-[0_0_15px_rgba(232,15,136,0.4)] transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-[#E80F88] hover:shadow-[0_0_15px_rgba(232,15,136,0.4)] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-[#E80F88] hover:shadow-[0_0_15px_rgba(232,15,136,0.4)] transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-[#E80F88] hover:shadow-[0_0_15px_rgba(232,15,136,0.4)] transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-[#E80F88] hover:shadow-[0_0_15px_rgba(232,15,136,0.4)] transition-all duration-300 "
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
