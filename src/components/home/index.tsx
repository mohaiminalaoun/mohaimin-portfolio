const Home = () => {
  return (
    <main className="flex items-center justify-start min-h-[calc(100vh-80px)] px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          Mohaimin Al Aoun
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-2">
          Software Engineer <a href="https://www.qualtrics.com/" target="_blank" className="text-blue-500 hover:text-blue-600"> @Qualtrics</a>
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed mb-4 text-justify font-light">
          Developer with a passion for building things with code and coffee.
        </p>
      </div>
    </main>
  );
};

export default Home; 