import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
import ScrollReveal from "scrollreveal";
import react from "../../assets/react.png";
import java from "../../assets/javascript.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import mongo from "../../assets/mongodb.png";
import figma from "../../assets/figma.png";
import python from "../../assets/python.png";
import postman from "../../assets/postman.png";
import vercel from "../../assets/Vercel.png";
import vite from "../../assets/vite.png";
import nodemon from "../../assets/nodemon.png";
import node from "../../assets/node.png";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import TypingSwitcher from "../TypingSwitcher";

const projectsSeed = [
  {
    id: 1,
    title: "E-commerce Website",
    desc: "Client-side dessert ordering demo — product list, add-to-cart, cart totals and order confirmation. Built with vanilla JavaScript, HTML and CSS.",
    demo: "https://e-commerce-xi-blue-29.vercel.app/",
    github: "https://github.com/idowu113910/E-commerce.git",
  },
  {
    id: 2,
    title: "Goal-Web App",
    desc: "React + Vite single-page app for tracking goals — frontend built with React and Vite (see repo for components and routing).",
    demo: "https://goal-wfb.vercel.app/",
    github: "https://github.com/idowu113910/Goal-WFB.git",
  },
  {
    id: 3,
    title: "World Info App",
    desc: "React + Vite app that displays world/country information — frontend-ready project with a React component structure (see repo for data sources).",
    demo: "https://world-app-chi.vercel.app/",
    github: "https://github.com/idowu113910/World-app.git",
  },
  {
    id: 4,
    title: "Space-Tourism App",
    desc: "A lightweight client-side space tourism implemented with REACT.JS, HTML and CSS — supports basic arithmetic and a clean UI.",
    demo: "https://space-tourism-5oen.vercel.app/",
    github: "https://github.com/idowu113910/Space-tourism.git",
  },
  {
    id: 5,
    title: "Wise Advice App",
    desc: "Client side wise Advice delivers thoughtful and inspiring tips at the click of a button — a simple way to discover fresh perspectives and daily guidance.",
    demo: "https://wise-9iod.vercel.app/",
    github: "https://github.com/idowu113910/wise.git",
  },

  {
    id: 6,
    title: "Leadway Full Stack Web App",
    desc: "Leadway is a full-stack MERN application featuring secure user authentication with JWT, sign-up/login workflows, and email verification, backend by MongoDB and deployed with a responsive React frontend.",
    demo: "https://leadway-frontend-yqdj.vercel.app/",
    github: "https://github.com/idowu113910/Leadway-Frontend.git",
  },
];

export default function Portfolio() {
  useEffect(() => {
    ScrollReveal().reveal(".download", {
      duration: 2000,
      origin: "top",
      distance: "20px",
      delay: 100,
      reset: true,
    });

    ScrollReveal().reveal(".years", {
      duration: 2000,
      origin: "right",
      distance: "300px",
      delay: 100,
      reset: true,
    });

    ScrollReveal().reveal("#about", {
      duration: 2000,
      origin: "left",
      distance: "400px",
      delay: 200,
      reset: true,
    });

    ScrollReveal().reveal(".three", {
      duration: 2000,
      origin: "top",
      distance: "400px",
      delay: 250,
      reset: true,
    });
    ScrollReveal().reveal(".twenty", {
      duration: 2000,
      origin: "top",
      distance: "400px",
      delay: 250,
      reset: true,
    });

    ScrollReveal().reveal(".linked", {
      duration: 2000,
      origin: "left",
      distance: "300px",
      delay: 250,
      reset: true,
    });
    ScrollReveal().reveal(".git", {
      duration: 2000,
      origin: "left",
      distance: "400px",
      delay: 300,
      reset: true,
    });
    ScrollReveal().reveal(".insta", {
      duration: 2000,
      origin: "left",
      distance: "200px",
      delay: 200,
      reset: true,
    });
    ScrollReveal().reveal(".whats", {
      duration: 2000,
      origin: "left",
      distance: "100px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".java", {
      duration: 2000,
      origin: "left",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".react", {
      duration: 2000,
      origin: "right",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".css", {
      duration: 2000,
      origin: "left",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".html", {
      duration: 2000,
      origin: "right",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".mongo", {
      duration: 2000,
      origin: "left",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".figma", {
      duration: 2000,
      origin: "right",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".node", {
      duration: 2000,
      origin: "left",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".postman", {
      duration: 2000,
      origin: "right",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".python", {
      duration: 2000,
      origin: "right",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".vite", {
      duration: 2000,
      origin: "left",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".vercel", {
      duration: 2000,
      origin: "right",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".nodemon", {
      duration: 2000,
      origin: "left",
      distance: "900px",
      delay: 150,
      reset: true,
    });
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // disable button

    emailjs
      .sendForm(
        "service_ficq7xl",
        "template_kxzloy8",
        e.target,
        "0-H8veA4279XUvB_v"
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          e.target.reset();
        },
        () => {
          toast.error("❌ Something went wrong, please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false); // re-enable if you want after response
      });
  };

  const [projects] = useState(projectsSeed);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder: replace with actual submit logic to your backend or service (e.g. Formspree)
    console.log("Contact form submitted:", form);
    alert("Message sent (demo). Check console for payload.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div>
      <div
        className="min-h-screen bg-gradient-to-r from-white to-gray-50 dark:from-black dark:to-purple-800 text-gray-900
       dark:text-gray-100 transition-colors duration-100 overflow-x-hidden"
      >
        {/* Top floating controls */}
        <div className="fixed top-4 right-4 flex items-center gap-3 z-50">
          <a
            href="#contact"
            className="glowing-button-contact hidden inline-block px-3 py-2 rounded-md bg-indigo-600 shadow-[0_0_15px_5px_rgba(100,40,0,0.7)] 
            drop-shadow-[0_0_15px_rgba(255,255,0,0.7)] text-white font-medium shadow"
          >
            Contact
          </a>
        </div>

        <header className="max-w-5xl mx-auto px-6 pt-12 pb-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div></div>
              <div>
                <h1 className="text-2xl font-semibold">Idowu Daniel</h1>
                <TypingSwitcher
                  texts={["Full-stack Web Developer ", "Software Engineer", ""]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </div>
            </div>

            <ul className="hidden md:flex items-center gap-6 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <section
            id="home"
            className="mt-12 grid gap-6 md:grid-cols-2 items-center"
          >
            <div>
              <h2 className="typing-text text-3xl sm:text-4xl font-extrabold leading-tight">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
                  Idowu Daniel
                </span>
              </h2>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                Full-stack web developer & software engineer building clean,
                accessible, and delightful web experiences.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:opacity-95"
                >
                  View projects
                </a>
                <a
                  href="/cv-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-sm transform transition-transform duration-200 ease-out hover:scale-110 motion-reduce:transition-none"
                >
                  Download CV
                  <span className="download">
                    <GoDownload />
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm mt-6">
                <a
                  href="https://github.com/idowu113910"
                  target="_blank"
                  rel="noreferrer"
                  className=" git inline-flex items-center justify-center w-[40px] h-[40px] rounded-full transform transition-transform duration-200 ease-out hover:scale-150 motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 "
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/idowu-daniel-omotesho-144a17363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noreferrer"
                  className="linked inline-flex items-center justify-center w-[40px] h-[40px] rounded-full transform transition-transform duration-200 ease-out hover:scale-150 motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 "
                >
                  <SlSocialLinkedin />
                </a>

             

                <a
                  href="https://wa.me/2349121801655"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="whats inline-flex items-center justify-center w-[40px] h-[40px] rounded-full transform transition-transform duration-200 ease-out hover:scale-150 motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
              </div>
            </div>

            <div className="order-last md:order-last years">
              {/* colorful card */}
              <div className="rounded-2xl p-6 shadow-xl bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/50 dark:to-pink-900/40 border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Available for freelance & remote roles · Open to collaboration
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4 ">
                  <div className="p-3 bg-white dark:bg-gray-800/60 rounded-lg text-center ">
                    <div className="three text-2xl font-semibold">4+</div>
                    <div className="text-xs text-gray-500 dark:text-gray-300">
                      Years experience
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </section>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-6 space-y-12">
          <section
            id="about"
            className="bg-white dark:bg-gray-900/40 p-6 rounded-2xl border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-xl font-bold">About</h3>

            <p className="mt-3 text-gray-700 dark:text-gray-300">
              I’m a full-stack web developer and software engineer who turns
              ideas into production-ready web applications. I care deeply about
              performance, accessibility, and creating smooth, delightful user
              experiences. I’m experienced in building authentication and
              backend systems, and I’m now an aspiring blockchain developer —
              actively exploring Web3 tools and planning to ship decentralized
              apps in the near future.
            </p>

           
          </section>
          <h3 className="text-xl font-bold mb-[-10px] ml-[20px]">Tech Stacks</h3>
          <div
            className="mt-6 flex sm:grid sm:grid-cols-4 sm:gap-2 flex-wrap gap-1 text-[10px] sm:text-xs
           text-gray-600 dark:text-gray-300"
          >
            <div className="flex items-center flex-cols html">
              <span className="px-2 py-1 rounded flex gap-1">
                <img
                  src={html}
                  alt=""
                  className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
                />{" "}
                HTML
              </span>
              <p className="ml-[-35px] mt-[7px] sm:ml-[-40px]">3 years+</p>
            </div>
            <div className="flex items-center flex-cols sm:ml-[60px] css">
              <span className="px-2 py-1 rounded flex gap-1">
                <img
                  src={css}
                  alt=""
                  className="sm:w-[40px] sm:h-[40px] w-[25px] h-[25px] "
                />{" "}
                CSS
              </span>
              <p className="ml-[-26px] mt-[9px] sm:mt-[11px] sm:ml-[-30px]">
                3 years+
              </p>
            </div>
            <div className="flex items-center flex-cols sm:ml-[80px] react">
              <span className="px-2 py-1 rounded  flex gap-1">
                <img
                  src={react}
                  alt=""
                  className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px]"
                />{" "}
                REACT
              </span>
              <p className="ml-[-39px] mt-[9px]  sm:ml-[-44px]">2 years+</p>
            </div>
            <div className="flex items-center flex-cols sm:ml-[120px] ml-[0px] md:ml-[60px] java">
              {" "}
              <span className="px-2 py-1 rounded flex  gap-1 mb-[4px]">
                <img
                  src={java}
                  alt=""
                  className="sm:w-[35px] sm:h-[35px] w-[20px] h-[20px] "
                />{" "}
                JavaScript
              </span>
              <p className="ml-[-54px] mt-[11px]  sm:ml-[-64px]"></p>
            </div>
            <div className="flex items-center flex-cols mongo ">
              {" "}
              <span className="px-2 py-1 rounded flex  gap-1">
                <img
                  src={mongo}
                  alt=""
                  className="w-[25px] h-[25px] sm:w-[45px] sm:h-[45px]"
                />{" "}
                MongoDB
              </span>
              <p className="ml-[-52px] mt-[12px] sm:ml-[-60px]">2 years+</p>
            </div>
            <div className="flex items-center flex-cols sm:ml-[55px] figma">
              {" "}
              <span className="px-2 py-1 rounded flex gap-1 ml-[4px]">
                <img
                  src={figma}
                  alt=""
                  className="w-[23px] h-[23px] sm:w-[45px] sm:h-[45px]"
                />{" "}
                FIGMA
              </span>
              <p className="ml-[-40px] mt-[12px]  sm:ml-[-46px]">2 years+</p>
            </div>
            <div className="flex items-center flex-cols sm:ml-[75px] node">
              <span className="px-2 py-1 rounded flex gap-1 ml-[2px]">
                <img
                  src={node}
                  alt=""
                  className="w-[25px] h-[25px] sm:w-[45px] sm:h-[45px]"
                />{" "}
                NODE.js
              </span>
              <p className="ml-[-44px] mt-[12px]  sm:ml-[-50px] ">2 years+</p>
            </div>
            <div className="flex items-center flex-cols sm:ml-[120px] md:ml-[60px] postman">
              {" "}
              <span className="px-2 py-1 rounded flex gap-1 ml-[-4px]">
                <img
                  src={postman}
                  alt=""
                  className="w-[25px] h-[25px] sm:w-[45px] sm:h-[45px]"
                />{" "}
                POSTMAN
              </span>
              <p className="ml-[-55px] mt-[12px] sm:mt-[10px]  sm:ml-[-64px]">
                2 years+
              </p>
            </div>
            <div className="flex items-center flex-cols python">
              {" "}
              <span className="px-2 py-1 rounded flex gap-1">
                <img
                  src={python}
                  alt=""
                  className="w-[25px] h-[25px] sm:w-[45px] sm:h-[45px]"
                />{" "}
                PYTHON
              </span>
              <p className="ml-[-47px] mt-[9px] sm:ml-[-54px]">1 year+</p>
            </div>
            <div className="flex items-center flex-cols sm:ml-[50px] vite">
              {" "}
              <span className="px-2 py-1 rounded flex gap-1 ml-[8px] ">
                <img
                  src={vite}
                  alt=""
                  className="w-[25px] h-[25px] sm:w-[45px] sm:h-[45px]"
                />{" "}
                VITE
              </span>
              <p className="ml-[-29px] mt-[12px] sm:ml-[-34px]">2 years+</p>
            </div>

            <div className="flex items-center flex-cols sm:ml-[75px] vercel">
              {" "}
              <span className="px-2 py-1 rounded flex gap-1 ml-[1px]">
                <img
                  src={vercel}
                  alt=""
                  className="w-[25px] h-[25px] sm:w-[45px] sm:h-[45px]"
                />{" "}
                VERCEL
              </span>
              <p className="ml-[-44px] mt-[9px] sm:ml-[-50px]">2 years+</p>
            </div>
            <div className="flex items-center flex-cols sm:ml-[120px] md:ml-[60px] nodemon">
              <span className="px-2 py-1 rounded flex gap-1 ml-[-4px]">
                <img
                  src={nodemon}
                  alt=""
                  className="w-[25px] h-[25px] sm:w-[45px] sm:h-[45px]"
                />{" "}
                NODEMON
              </span>
              <p className="ml-[-59px] mt-[12px] sm:ml-[-68px]">2 years+</p>
            </div>
          </div>

          <section id="projects">
            <h3 className="text-xl font-bold mb-4">Projects</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
              {projects.map((p) => (
                <article
                  key={p.id}
                  className="rounded-xl p-4 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow 
                  hover:shadow-lg transition"
                >
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-3 py-1 rounded-md border"
                    >
                      Live Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-3 py-1 rounded-md border"
                    >
                      GitHub
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="bg-white dark:bg-gray-900/40 p-6 rounded-2xl border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-xl font-bold">Contact</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Want to collaborate or hire me? Send a message below.
            </p>

            <form
              onSubmit={sendEmail}
              className="form mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30"
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30"
              />
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                className="sm:col-span-2 p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30"
              />
              <div className="sm:col-span-2 flex items-center justify-between">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md"
                >
                  {" "}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
            {/* Toast container */}
            <Toaster position="top-center" reverseOrder={false} />
          </section>
        </main>

        <footer className="max-w-5xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Idowu Daniel Omotesho — Built with ❤️ •{" "}
          <a href="#" className="underline">
            Privacy
          </a>
        </footer>
      </div>
    </div>
  );
}
