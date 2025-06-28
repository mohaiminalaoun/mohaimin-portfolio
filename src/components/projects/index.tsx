import { useState, useEffect, useRef } from "react";

const Projects = () => {
  const [visibleImages, setVisibleImages] = useState(new Set());
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleImages((prev) => {
          const newSet = new Set(prev);
          entries.forEach((entry) => {
            const target = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              newSet.add(target.dataset.imageId);
            } else {
              newSet.delete(target.dataset.imageId);
            }
          });
          return newSet;
        });
      },
      {
        rootMargin: "-20% 0px -20% 0px", // Only trigger when in center 60% of viewport
        threshold: 0.3,
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white px-6 sm:px-12 lg:px-24 py-16"
    >
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12">
          Projects
        </h1>

        <div className="space-y-16">
          {/* BJJ for All */}
          <div>
            <h3 className="text-xl font-semibold text-white">BJJ for All</h3>

            <p className="text-gray-300 mt-2">
              A platform that connects Brazilian Jiu-Jitsu students to private
              instructors based on accessibility, injury, and language
              preferences.
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-400 space-y-1">
              <li>
                Accessibility-first UI with full keyboard and screen reader
                support
              </li>
              <li>Real-time scheduling and class request system</li>
              <li>LLM-powered tools to personalize class plans</li>
            </ul>
            <p className="text-sm text-blue-300 mt-2">
              Tech: Angular · Spring Boot · MongoDB · Firebase · Tailwind
            </p>
            <div className="mt-12 max-w-3xl">
              <img
                ref={(el) => (imageRefs.current[0] = el)}
                data-image-id="bjj"
                src="/images/bjj.png"
                alt="BJJ App"
                style={{
                  transform: visibleImages.has("bjj")
                    ? "perspective(1000px) rotateX(0deg) rotateY(0deg)"
                    : "perspective(1000px) rotateX(8deg) rotateY(8deg)",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s ease",
                  borderRadius: "0.75rem",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                }}
              />
            </div>
          </div>

          {/* Document Explorer */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Document Explorer
            </h3>
            <p className="text-gray-300 mt-2">
              A key feature in XM Discover for drilling into customer feedback
              at the sentence level. I helped build and refine this tool to make
              qualitative feedback more explorable, filterable, and actionable
              across enterprise dashboards.
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-400 space-y-1">
              <li>
                Enables users to browse raw sentences and documents by
                sentiment, effort, or custom enrichments
              </li>
              <li>
                Built central and side panes for viewing sentence context,
                metadata, and NLP model outputs like topics and attributes
              </li>
              <li>
                Developed filters and sorting logic for user-driven exploration
                — including support for quoted phrase search
              </li>
              <li>
                Worked with UX to improve readability, toggleable views, and
                metadata prioritization (Key Info, Intelligent Scoring, etc.)
              </li>
              <li>
                Contributed to export logic to include only starred topics, leaf
                nodes, or selected enrichments
              </li>
            </ul>
            <p className="text-sm text-blue-300 mt-2">
              Tech: Angular · TypeScript · React · Tailwind · Java · Spring Boot
              · NLP · GraphQL
            </p>
            <div className="mt-12 max-w-3xl">
              <img
                ref={(el) => (imageRefs.current[1] = el)}
                data-image-id="nlp"
                src="/images/nlp.png"
                alt="Qualtrics Document Explorer UI for sentence-level feedback analysis"
                className="rounded-lg border border-gray-800 shadow-md"
                style={{
                  transform: visibleImages.has("nlp")
                    ? "perspective(1000px) rotateX(0deg) rotateY(0deg)"
                    : "perspective(1000px) rotateX(8deg) rotateY(8deg)",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s ease",
                  borderRadius: "0.75rem",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                }}
              />
            </div>
          </div>

          {/* Internal UI Platform */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Internal UI Platform @ Qualtrics
            </h3>
            <p className="text-gray-300 mt-2">
              A shared platform of reusable UI components, CLI tools, and
              internal NPM packages adopted by 10+ engineering teams.
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-400 space-y-1">
              <li>
                CLI for bootstrapping components and enforcing design standards
              </li>
              <li>Automated release flow with versioning and changelogs</li>
              <li>
                Integrated Storybook system for UX and developer alignment
              </li>
            </ul>
            <p className="text-sm text-blue-300 mt-2">
              Tech: Angular · React · TypeScript · Tailwind · Jenkins · GitHub
              Actions · NPM
            </p>
            <div className="mt-4">
              {/* <img
                src="/images/ui-platform.png"
                alt="Qualtrics internal UI platform"
                className="rounded-lg border border-gray-800 shadow-md"
              /> */}
            </div>
          </div>

          {/* Storage Debugger Bookmarklet */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Storage Debugger Bookmarklet
            </h3>
            <p className="text-gray-300 mt-2">
              A lightweight bookmarklet that lets you inspect and edit{" "}
              <code>localStorage</code> and <code>sessionStorage</code> directly
              in the browser, even on pages without devtools access.
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-400 space-y-1">
              <li>Displays all key-value pairs in a readable overlay</li>
              <li>Supports inline editing and clearing of entries</li>
              <li>No external dependencies, runs on any site instantly</li>
            </ul>
            <p className="text-sm text-blue-300 mt-2">
              Tech: Vanilla JS · HTML · CSS · DOM APIs
            </p>
            <div className="mt-12 max-w-3xl">
              <img
                ref={(el) => (imageRefs.current[2] = el)}
                data-image-id="bookmarklet"
                src="/images/bookmarklet.png"
                alt="Storage debugger bookmarklet UI"
                style={{
                  transform: visibleImages.has("bookmarklet")
                    ? "perspective(1000px) rotateX(0deg) rotateY(0deg)"
                    : "perspective(1000px) rotateX(8deg) rotateY(8deg)",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s ease",
                  borderRadius: "0.75rem",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                }}
              />
            </div>
            <div className="mt-4">
              <a
                href="https://github.com/your-username/storage-bookmarklet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Portfolio site */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Personal Portfolio
            </h3>
            <p className="text-gray-300 mt-2">
              The site you're looking at right now. Built from scratch with
              modular React components and a custom Tailwind + Rsbuild setup.
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-400 space-y-1">
              <li>Minimal, fast, and fully responsive design</li>
              <li>Keyboard-navigable with semantic markup</li>
              <li>Deployed on Vercel with custom domain</li>
            </ul>
            <p className="text-sm text-blue-300 mt-2">
              Tech: React · Rsbuild · TypeScript · Tailwind CSS · Vercel
            </p>
            <div className="mt-4 max-w-3xl">
              <img
                ref={(el) => (imageRefs.current[3] = el)}
                data-image-id="portfolio"
                src="/images/portfolio-preview.png"
                alt="Portfolio site preview"
                className="rounded-lg border border-gray-800 shadow-md"
                style={{
                  transform: visibleImages.has("portfolio")
                    ? "perspective(1000px) rotateX(0deg) rotateY(0deg)"
                    : "perspective(1000px) rotateX(8deg) rotateY(8deg)",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s ease",
                  borderRadius: "0.75rem",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                }}
              />
            </div>
            <div className="mt-4">
              <a
                href="https://mohaiminalaoun.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                Visit Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
