"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "AI Ad Film Production",
    description:
      "Cinematic advertising films created with AI-powered visual production, storytelling and professional post-production.",
  },
  {
    number: "02",
    title: "Social Media Management",
    description:
      "Strategic content planning, creative production and consistent social media management for growing brands.",
  },
  {
    number: "03",
    title: "Brand Video Content",
    description:
      "Brand films, product videos, reels, shorts and visual stories designed to make your business memorable.",
  },
  {
    number: "04",
    title: "Creative Strategy",
    description:
      "From concept to campaign, we turn business goals into ideas, stories and content people want to watch.",
  },
];

const projects = [
  {
    id: "jayam-fintech",
    category: "INSURANCE • DIGITAL CAMPAIGN",
    title: "JAYAM FINTECH",
    description:
      "AI-powered insurance content designed to explain complex products through simple, engaging visual storytelling.",
    visual: "projectVisualOne",

    // Add your actual files later inside public/projects/
    poster: "/projects/jayam-fintech.jpg",
    video: "/projects/jayam-fintech.mp4",

    services: [
      "Creative Strategy",
      "Script Development",
      "AI Visual Production",
      "Video Editing",
    ],
  },
  {
    id: "porunai-naturals",
    category: "NATURAL BEAUTY • BRAND CONTENT",
    title: "PORUNAI NATURALS",
    description:
      "Product-focused visual storytelling created to bring a natural personal-care brand to life.",
    visual: "projectVisualTwo",

    poster: "/projects/porunai-naturals.jpg",
    video: "/projects/porunai-naturals.mp4",

    services: [
      "Product Storytelling",
      "AI Visual Production",
      "Ad Film Creation",
      "Post Production",
    ],
  },
  {
    id: "porunai-fashions",
    category: "FASHION • BRAND CONTENT",
    title: "PORUNAI FASHIONS",
    description:
      "Fashion-focused creative content built around product presentation, visual identity and modern brand storytelling.",
    visual: "projectVisualThree",

    poster: "/projects/porunai-fashions.jpg",
    video: "/projects/porunai-fashions.mp4",

    services: [
      "Fashion Storytelling",
      "Creative Direction",
      "AI Video Production",
      "Social Media Content",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your brand, audience, product and business objective.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "Ideas become scripts, storyboards, visuals and cinematic AI-generated scenes.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "Editing, sound, voice-over, colour and finishing turn the concept into a polished film.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Your finished content is prepared for campaigns, social platforms and digital distribution.",
  },
];

const reviews = [
  {
    text:
      "The creative direction and visual presentation gave our brand a completely different presence.",
    name: "Client Review",
    role: "Brand Partner",
  },
  {
    text:
      "The team understood the idea quickly and transformed it into content that was easy for our audience to understand.",
    name: "Client Review",
    role: "Business Owner",
  },
  {
    text:
      "From concept to final video, the entire process was focused on storytelling and professional presentation.",
    name: "Client Review",
    role: "Marketing Partner",
  },
];

function getAIReply(message) {
  const text = message.toLowerCase();

  if (
    text.includes("ad film") ||
    text.includes("advertisement") ||
    text.includes("video")
  ) {
    return "We create AI-powered ad films, brand videos, reels, shorts and cinematic social content. Tell me about your business and I can suggest a suitable content approach.";
  }

  if (
    text.includes("social") ||
    text.includes("instagram") ||
    text.includes("facebook")
  ) {
    return "Our social media service covers content planning, creative production, captions, reels, posts and page management. We can build a consistent content system around your brand.";
  }

  if (
    text.includes("price") ||
    text.includes("pricing") ||
    text.includes("cost") ||
    text.includes("budget")
  ) {
    return "Project pricing depends on the video length, number of scenes, production requirements and content volume. Use the Start a Project form and tell us what you need for a customised quotation.";
  }

  if (
    text.includes("contact") ||
    text.includes("team") ||
    text.includes("talk")
  ) {
    return "Absolutely. You can use the Start a Project form below or contact the Neithal Creative Minds team directly.";
  }

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return "Hello! 👋 Welcome to Neithal Creative Minds. What are you looking to create?";
  }

  return "I'd be happy to help. You can ask me about AI ad films, brand videos, social media management, creative strategy or starting a project.";
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const [aiOpen, setAiOpen] = useState(false);
  const [aiInput, setAiInput] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text:
        "Hello! I'm the Neithal Creative Minds assistant. How can I help you today?",
    },
  ]);

  function handleMenuClick() {
    setMenuOpen(false);
  }

 function handleEnquiry(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const name = formData.get("name");
  const business = formData.get("business");
  const email = formData.get("email");
  const service = formData.get("service");
  const message = formData.get("message");

  const whatsappMessage = `Hello Neithal Creative Minds,

🔔 NEW PROJECT ENQUIRY

Name: ${name}
Business / Brand: ${business}
Email: ${email}
Service Required: ${service}

Project Details:
${message}

Thank you.`;

  const whatsappURL = `https://wa.me/918122330789?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, "_blank");

  setFormSent(true);
}

  function handleAI(event) {
    event.preventDefault();

    const trimmed = aiInput.trim();

    if (!trimmed) {
      return;
    }

    const reply = getAIReply(trimmed);

    setMessages((current) => [
      ...current,
      {
        type: "user",
        text: trimmed,
      },
      {
        type: "ai",
        text: reply,
      },
    ]);

    setAiInput("");
  }

  function openProject(project) {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  }

  function closeProject() {
    setSelectedProject(null);
    document.body.style.overflow = "";
  }

  return (
    <>
      {/* =========================
          NAVIGATION
      ========================= */}

      <header className="nav">
        <div className="navInner">

          <a
            href="#top"
            className="brand"
            onClick={handleMenuClick}
            aria-label="Neithal Creative Minds"
          >
            <img
              src="/logo.png"
              alt="Neithal Creative Minds"
            />
          </a>

          <button
            className="menuButton"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className={`navLinks ${
              menuOpen ? "navLinksOpen" : ""
            }`}
          >
            <a href="#about" onClick={handleMenuClick}>
              About
            </a>

            <a href="#services" onClick={handleMenuClick}>
              Services
            </a>

            <a href="#work" onClick={handleMenuClick}>
              Work
            </a>

            <a href="#process" onClick={handleMenuClick}>
              Process
            </a>

            <a
              href="#contact"
              className="navCta"
              onClick={handleMenuClick}
            >
              Start a Project
            </a>
          </nav>

        </div>
      </header>

      <main id="top">

        {/* =========================
            HERO
        ========================= */}

        <section className="hero">

          <div className="heroGlow"></div>

          <div className="heroInner">

            <p className="eyebrow">
              AI-POWERED CREATIVE STUDIO
            </p>

            <h1>
              Ideas that <em>move.</em>
              <br />
              Stories that
              <br />
              <em>stay.</em>
            </h1>

            <p className="heroText">
              We create cinematic AI-powered ad films, brand videos
              and social media content that make modern businesses
              impossible to ignore.
            </p>

            <div className="heroActions">

              <a
                href="#contact"
                className="button buttonGold"
              >
                Start a Project
                <span>↗</span>
              </a>

              <a
                href="#work"
                className="button buttonGhost"
              >
                Explore Our Work
                <span>↓</span>
              </a>

            </div>

          </div>

          <div className="heroBottom">
            <span>
              AI FILMS • BRAND STORIES • SOCIAL CONTENT
            </span>

            <span>
              IDEA → STORY → IMPACT
            </span>
          </div>

        </section>

        {/* =========================
            ABOUT
        ========================= */}

        <section
          id="about"
          className="section statement"
        >
          <div className="container">

            <p className="sectionKicker">
              ABOUT NEITHAL CREATIVE MINDS
            </p>

            <h2>
              We don't just create content.
              <br />
              We create
              <span> visual experiences</span>
              <br />
              people remember.
            </h2>

            <p className="sectionLead">
              Neithal Creative Minds is a creative studio built around
              the intersection of imagination, technology and
              storytelling. We create AI-powered advertisements, brand
              films, social media content and digital experiences that
              help businesses communicate their ideas with clarity,
              emotion and visual impact.
            </p>

            <div className="aboutCapabilities">

              <div className="aboutCapability">

                <span>01</span>

                <h3>
                  Creative Thinking
                </h3>

                <p>
                  Every project begins with an idea. We find the story
                  behind your product, service or brand and turn it into
                  a creative direction.
                </p>

              </div>

              <div className="aboutCapability">

                <span>02</span>

                <h3>
                  AI Production
                </h3>

                <p>
                  We use modern AI production tools to create cinematic
                  visuals, characters, environments and advertising
                  concepts that bring ambitious ideas to life.
                </p>

              </div>

              <div className="aboutCapability">

                <span>03</span>

                <h3>
                  Digital Impact
                </h3>

                <p>
                  A beautiful film is only the beginning. We create
                  content designed for today's digital platforms,
                  audiences and attention spans.
                </p>

              </div>

            </div>

            <div className="aboutStatement">

              <span>
                OUR BELIEF
              </span>

              <p>
                Technology can create the image.
                <br />
                Creativity creates the connection.
              </p>

            </div>

          </div>
        </section>

        {/* =========================
            SERVICES
        ========================= */}

        <section
          id="services"
          className="section"
        >
          <div className="container">

            <div className="sectionHeader">

              <div>

                <p className="sectionKicker">
                  WHAT WE CREATE
                </p>

                <h2>
                  Creative
                  <br />
                  <em>solutions.</em>
                </h2>

              </div>

              <p>
                From one powerful advertisement to an entire social
                content system, we create visual communication built
                around your business.
              </p>

            </div>

            <div className="serviceGrid">

              {services.map((service) => (
                <article
                  className="serviceCard"
                  key={service.number}
                >

                  <span className="serviceNumber">
                    {service.number}
                  </span>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <span className="cardArrow">
                    ↗
                  </span>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* =========================
            SELECTED WORK
        ========================= */}

        <section
          id="work"
          className="section work"
        >
          <div className="container">

            <div className="sectionHeader">

              <div>

                <p className="sectionKicker">
                  SELECTED WORK
                </p>

                <h2>
                  Stories made
                  <br />
                  to <em>matter.</em>
                </h2>

              </div>

              <p>
                A selection of creative work and brand content
                developed for modern businesses.
              </p>

            </div>

            <div className="projectGrid">

              {projects.map((project) => (
                <article
                  className="projectCard"
                  key={project.id}
                >

                  <button
                    type="button"
                    className={`projectVisual ${project.visual}`}
                    onClick={() => openProject(project)}
                    aria-label={`View ${project.title} project`}
                  >

                    <img
                      src={project.poster}
                      alt=""
                      className="projectImage"
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";
                      }}
                    />

                    <div className="projectOverlay"></div>

                    <span className="projectVisualLabel">
                      NEITHAL CREATIVE MINDS
                    </span>

                    <span className="projectVisualTitle">
                      {project.title}
                    </span>

                    <span className="projectView">
                      VIEW PROJECT ↗
                    </span>

                  </button>

                  <div className="projectInfo">

                    <div>

                      <p>
                        {project.category}
                      </p>

                      <h3>
                        {project.title}
                      </h3>

                    </div>

                    <button
                      type="button"
                      className="projectArrowButton"
                      onClick={() => openProject(project)}
                      aria-label={`Open ${project.title}`}
                    >
                      ↗
                    </button>

                  </div>

                  <p className="projectDescription">
                    {project.description}
                  </p>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* =========================
            PROCESS
        ========================= */}

        <section
          id="process"
          className="section"
        >
          <div className="container">

            <div className="sectionHeader">

              <div>

                <p className="sectionKicker">
                  OUR PROCESS
                </p>

                <h2>
                  From idea
                  <br />
                  to <em>impact.</em>
                </h2>

              </div>

              <p>
                A clear creative workflow keeps every project focused,
                efficient and aligned with the final business objective.
              </p>

            </div>

            <div className="processGrid">

              {process.map((item) => (
                <article
                  className="processCard"
                  key={item.number}
                >

                  <span>
                    {item.number}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* =========================
            REVIEWS
        ========================= */}

        <section className="section work">

          <div className="container">

            <div className="sectionHeader">

              <div>

                <p className="sectionKicker">
                  CLIENT EXPERIENCES
                </p>

                <h2>
                  Built on
                  <br />
                  <em>trust.</em>
                </h2>

              </div>

              <p>
                Great creative work starts with understanding the
                people and businesses behind every project.
              </p>

            </div>

            <div className="reviewGrid">

              {reviews.map((review, index) => (
                <article
                  className="reviewCard"
                  key={index}
                >

                  <div className="stars">
                    ★★★★★
                  </div>

                  <p>
                    “{review.text}”
                  </p>

                  <div className="reviewPerson">

                    <div className="avatar">
                      N
                    </div>

                    <div>

                      <strong>
                        {review.name}
                      </strong>

                      <span>
                        {review.role}
                      </span>

                    </div>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* =========================
            CONTACT
        ========================= */}

        <section
          id="contact"
          className="section contact"
        >
          <div className="container contactGrid">

            <div>

              <p className="sectionKicker">
                START A PROJECT
              </p>

              <h2>
                Have an
                <br />
                <em>idea?</em>
              </h2>

              <p className="contactLead">
                Tell us what you want to create. Whether it's an AI
                ad film, brand video, social media campaign or
                something completely new, let's start with the idea.
              </p>

              <div className="contactDetails">

                <span>Email</span>

                <a href="mailto:neithalcreativeminds@gmail.com">
                  neithalcreativeminds@gmail.com
                </a>

                <span>WhatsApp</span>

                <a href="https://wa.me/918122330789">
                  Start a conversation ↗
                </a>

              </div>

            </div>

            <form
              className="form"
              onSubmit={handleEnquiry}
            >

              <label>
                Your Name

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Business / Brand

                <input
                  type="text"
                  name="business"
                  placeholder="Your business name"
                  required
                />
              </label>

              <label>
                Email

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                What do you need?

                <select
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="AI Ad Film">
                    AI Ad Film
                  </option>

                  <option value="Brand Video">
                    Brand Video
                  </option>

                  <option value="Social Media Management">
                    Social Media Management
                  </option>

                  <option value="Creative Strategy">
                    Creative Strategy
                  </option>

                  <option value="Other">
                    Something Else
                  </option>
                </select>
              </label>

              <label>
                Tell us about the project

                <textarea
                  name="message"
                  placeholder="Briefly describe your idea..."
                  required
                ></textarea>
              </label>

              <button
                type="submit"
                className="button buttonGold formButton"
              >
                Send Enquiry
                <span>↗</span>
              </button>

              {formSent && (
                <p className="formSuccess">
                  Thank you. Your project enquiry has been received.
                  We'll connect with you shortly.
                </p>
              )}

            </form>

          </div>
        </section>

      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="container">

          <div className="footerTop">

            <div>

              <img
                className="footerLogo"
                src="/logo.png"
                alt="Neithal Creative Minds"
              />

              <p>
                AI-powered creative production, cinematic storytelling
                and digital content for ambitious brands.
              </p>

            </div>

            <div className="footerLinks">

              <a href="#about">
                About
              </a>

              <a href="#services">
                Services
              </a>

              <a href="#work">
                Work
              </a>

              <a href="#contact">
                Contact
              </a>

            </div>

          </div>

          <div className="footerBottom">

            <span>
              © 2026 NEITHAL CREATIVE MINDS
            </span>

            <span>
              WAVES OF IDEAS. SHORES OF IMPACT.
            </span>

          </div>

        </div>

      </footer>

      {/* =========================
          FLOATING CONTACT BUTTONS
      ========================= */}

{/* =========================
    FLOATING CONTACT BUTTONS
========================= */}

<div className="floatingActions">

  <a
    className="floatButton callButton"
    href="tel:+918122330789"
    aria-label="Call Neithal Creative Minds"
  >
    <strong className="floatIcon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.94C17.55 15.31 18.75 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </strong>

    <span>Call</span>
  </a>

  <a
    className="floatButton whatsappButton"
    href="https://wa.me/918122330789?text=Hello%20Neithal%20Creative%20Minds%2C%20I%20would%20like%20to%20discuss%20a%20project."
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp Neithal Creative Minds"
  >
    <strong className="floatIcon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.48 0 .12 5.36.12 11.96c0 2.11.55 4.17 1.6 5.98L.02 24l6.2-1.63a11.93 11.93 0 0 0 5.86 1.54h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.2-1.25-6.2-3.52-8.48Z"
          fill="currentColor"
        />
        <path
          d="M17.54 13.97c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.2 3.07.15.2 2.08 3.18 5.04 4.45.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z"
          fill="#11100E"
        />
      </svg>
    </strong>

    <span>WhatsApp</span>
  </a>

</div>

      {/* =========================
          AI ASSISTANT
      ========================= */}

      {aiOpen && (
        <section className="aiPanel">

          <div className="aiPanelHeader">

            <div>

              <span className="aiMiniDot"></span>

              <strong>
                Neithal AI Assistant
              </strong>

            </div>

            <button
              onClick={() => setAiOpen(false)}
              aria-label="Close AI assistant"
            >
              ×
            </button>

          </div>

          <div className="chatMessages">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatBubble ${message.type}`}
              >
                {message.text}
              </div>
            ))}

          </div>

          <form
            className="chatForm"
            onSubmit={handleAI}
          >

            <input
              type="text"
              value={aiInput}
              onChange={(event) =>
                setAiInput(event.target.value)
              }
              placeholder="Ask about our services..."
            />

            <button
              type="submit"
              aria-label="Send message"
            >
              ↗
            </button>

          </form>

        </section>
      )}

      <button
        className="aiButton"
        onClick={() =>
          setAiOpen((current) => !current)
        }
        aria-label="Open AI assistant"
      >

        <span className="aiPulse"></span>

        <span className="aiIcon">
          ✦
        </span>

        <span className="aiLabel">
          AI ASSISTANT
        </span>

      </button>

      {/* =========================
          PROJECT MODAL
      ========================= */}

      {selectedProject && (
        <div
          className="projectModal"
          onClick={closeProject}
        >

          <div
            className="projectModalInner"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="projectModalClose"
              onClick={closeProject}
              aria-label="Close project"
            >
              ×
            </button>

            <div
              className={`projectModalMedia ${selectedProject.visual}`}
            >

              <video
                className="projectModalVideo"
                controls
                playsInline
                preload="metadata"
                poster={selectedProject.poster}
                src={selectedProject.video}
              />

              <div className="projectModalFallback">

                <span>
                  PROJECT FILM
                </span>

                <strong>
                  {selectedProject.title}
                </strong>

                <small>
                  Add the project MP4 to
                  <br />
                  public/projects/
                </small>

              </div>

            </div>

            <div className="projectModalContent">

              <p className="sectionKicker">
                {selectedProject.category}
              </p>

              <h2>
                {selectedProject.title}
              </h2>

              <p className="projectModalDescription">
                {selectedProject.description}
              </p>

              <div className="projectServices">

                <span>
                  SERVICES
                </span>

                <div>

                  {selectedProject.services.map(
                    (service) => (
                      <span
                        key={service}
                        className="projectServiceTag"
                      >
                        {service}
                      </span>
                    )
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </>
  );
}