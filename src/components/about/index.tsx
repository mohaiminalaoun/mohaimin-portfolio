const About = () => {
  return (
    <section id="about" className=" text-white px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12">About</h1>

        <div className="text-gray-300 space-y-4 text-base leading-relaxed">
        <p>
          I'm a full-stack engineer with a focus on building scalable web apps, frontend platforms, and tools that make both users and developers more productive. At Qualtrics, I work on products that blend design systems, accessibility, and NLP-driven user interfaces.
        </p>

        <p>
          My work spans from reusable component libraries and CLI tooling to backend services in Spring Boot. I care about clean interfaces, stable systems, and thoughtful abstractions that reduce friction across teams.
        </p>

        <p>
          Outside of work, I'm building a platform that connects people with disabilities or injuries to private Brazilian Jiu-Jitsu instructors, aiming to make training more inclusive and accessible.
        </p>

        <p>
          I'm especially drawn to early-stage products, accessible design, and developer experience and I'm always looking for meaningful problems to help solve.
        </p>

        </div>

        <div className="mt-8 flex flex-wrap gap-6 text-blue-400 text-sm">
          <a href="https://github.com/mohaiminalaoun" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/mohaiminalaoun" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href="mailto:mohaiminx@gmail.com" className="hover:underline">
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
