/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import ContactInfo from "./ContactInfo.jsx";
import Swal from "sweetalert2";
import img from "../assets/icons8-contact-96.png";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Send Emil to Rafi?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send Email!",
    }).then((result) => {
      if (result.isConfirmed) {
        emailjs
          .sendForm("service_giv903j", "template_l307qq8", form.current, {
            publicKey: "u6maY1mTe0XfC72by",
          })
          .then(
            () => {
              console.log("SUCCESS!");
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
        Swal.fire({
          title: "Email Sent!",
          text: "Your file has been sent.",
          icon: "success",
        });
        e.target.reset();
      }
    });
  };
  return (
    <div className="bg-gray-100 py-10" id="contact">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row items-center gap-4
                                            w-fit mx-auto py-10"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-8 text-center border-b-4 w-fit mx-auto pb-2 flex flex-col items-center gap-8">
            <img  src={img} alt="" />
            Contact Me
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold text-[#02995D] mb-6">
              Get in Touch
            </h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D]"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D]"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D]"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button className="w-full bg-[#02995D] text-white py-2 px-4 rounded hover:bg-[#027A4B] transition duration-300">
                Send Email
              </button>
            </form>
          </div>

          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
