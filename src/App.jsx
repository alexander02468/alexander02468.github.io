import { useState } from 'react'
import React from 'react'
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'
import { FaLinkedin, FaGoogleScholar, FaOrcid } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import './App.css'

function App() {

  return (
    <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header> 
      <h1> 
      Alexander Baker 
      </h1>
      <p>Biomechanics. Engineering. Research. <em>Combined</em></p>
      </header>

    <div className="site-nav">
    <nav>
      <ul>
      <li><a href="#top">About</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#cv">CV</a></li>
      <li><a href="#publications">Publications</a></li>
    </ul>
    <ul className="nav-icons" aria-label="Profile links">
            <li>
              <a
                href="https://www.linkedin.com/in/alexmbaker"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://scholar.google.com/citations?user=v_-qnk0AAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                aria-label="Google Scholar"
              >
                <FaGoogleScholar />
              </a>
            </li>
            <li>
              <a
                href="https://orcid.org/0000-0003-4150-6924"
                target="_blank"
                rel="noreferrer"
                aria-label="ORCID"
              >
                <FaOrcid />
              </a>
            </li>
            <li>
              <a href="mailto:ran-94sails@icloud.com" aria-label="Email">
                <MdEmail />
              </a>
            </li>
          </ul>
    </nav>
    </div>


    <main id="main">
      <MarkdownSection id="about" file="about.md" />
      <MarkdownSection id="portfolio" file="portfolio.md" />
      <MarkdownSection id="cv" file="cv.md" />
      <MarkdownSection id="publications" file="publications.md" />
    </main>

    <footer>
  <p>© 2026 Alexander Baker</p>
  </footer>
    </>
  )
}

const markdownFiles = import.meta.glob("./content/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseStyleString(styleString = "") {
  return styleString
    .split(";")
    .map((rule) => rule.trim())
    .filter(Boolean)
    .reduce((acc, rule) => {
      const [rawKey, ...rawValueParts] = rule.split(":");
      if (!rawKey || rawValueParts.length === 0) return acc;

      const key = rawKey
        .trim()
        .replace(/-([a-z])/g, (_, c) => c.toUpperCase());

      const value = rawValueParts.join(":").trim();
      acc[key] = value;
      return acc;
    }, {});
}

function extractImageStyle(title = "") {
  const match = title.match(/(?:^|\s)style=(.*)$/);
  return match ? parseStyleString(match[1].trim()) : {};
}

export function MarkdownSection({ id, file }) {
  const content = markdownFiles[`./content/${file}`];
  const parts = content.split(/\[video:(.*?)\]/g);

  return (
    <section id={id}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <video key={i} controls width="100%">
            <source src={part.trim()} type="video/mp4" />
          </video>
        ) : part ? (
          <Markdown
            key={i}
            components={{
              img: ({ node, ...props }) => {
                const parsedStyle = extractImageStyle(props.title);

                return (
                  <img
                    {...props}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      ...parsedStyle,
                    }}
                  />
                );
              },
            }}
          >
            {part}
          </Markdown>
        ) : null
      )}
    </section>
  );
}

export default App
