const Contact = () => {
  return (
    <main id="contact" className="text-white px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">Contact</h1>

        <p className="text-lg text-gray-300 mb-4">
          Whether you have a question, a project idea, or just want to nerd out about frontend performance, feel free to reach out.
        </p>
        <p className="text text-gray-400 mb-6">
          I am most responsive to thoughtful emails and cool side projects, especially if they involve design systems, accessibility, education,or martial arts.
        </p>

        <div className="flex flex-wrap gap-6 text-blue-400 text-sm">
          <a href="mailto:mohaiminx@gmail.com" className="hover:underline">Email</a>
          <a href="https://github.com/mohaiminalaoun" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/mohaiminalaoun" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>

        <p className="text-sm text-gray-600 mt-10">
          P.S. Add <code className="bg-gray-800 px-2 rounded">console.log('Hi Mohaimin')</code> to your subject line for bonus points.
        </p>
      </div>
    </main>
  );
};

export default Contact;
