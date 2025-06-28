const Experience = () => {
    return (
      <main className="flex items-start justify-start min-h-[calc(100vh-80px)] px-6 sm:px-12 lg:px-24 py-16">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12">Experience</h1>
  
          <div className="space-y-12">
            {/* Qualtrics */}
            <div>
              <h3 className="text-xl font-semibold text-white">Software Engineer II @ Qualtrics</h3>
              <p className="text-sm text-gray-400">Jan 2022 – Present · Remote</p>
              <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-2">
                <li>Developed and maintained a shared UI platform, distributing internal NPM packages and CLI tools used across 10+ teams to streamline design implementation and enforce UI consistency.</li>
                <li>Architected backend services in Java Spring Boot for high-volume analytics apps, handling millions of events monthly to support customer experience intelligence products.</li>
                <li>Led the post-merger integration of two enterprise design systems, cutting UI inconsistency by nearly half and facilitating reuse across six core Qualtrics offerings.</li>
                <li>Collaborated cross-functionally to deliver WCAG 2.1–aligned accessibility updates, enhancing usability for all users and aligning with company-wide compliance efforts.</li>
                <li>Built internal tools for NLP feedback exploration and transcription-based workflows, doubling the speed of annotation and ML iteration for internal data teams.</li>
                <li>Overhauled CI/CD flows using Jenkins and GitHub Actions, reducing build latency and manual steps by 80% across frontend deployments.</li>
              </ul>
              <p className="mt-2 text-sm text-blue-300">Tech: React · TypeScript · Tailwind CSS · RSBuild · Java · Spring Boot · Jenkins</p>
            </div>
  
            {/* Clarabridge */}
            <div>
              <h3 className="text-xl font-semibold text-white">Software Engineer @ Clarabridge</h3>
              <p className="text-sm text-gray-400">Mar 2020 – Dec 2021 · Reston, VA</p>
              <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-2">
                <li>Created a component library to unify front-end development across products, improving design cohesion and accelerating time-to-feature by ~25%.</li>
                <li>Rolled out Storybook across engineering teams, enabling UI/UX alignment and scalable documentation of reusable components.</li>
                <li>Led AngularJS-to-Angular migration for legacy systems, removing technical debt and increasing maintainability in large hybrid applications.</li>
                <li>Worked on accessibility-first infrastructure, ensuring compliance with industry standards and laying groundwork for inclusive design across apps.</li>
              </ul>
              <p className="mt-2 text-sm text-blue-300">Tech: Angular · TypeScript · SCSS · Java · Jenkins · Storybook</p>
            </div>
  
            {/* MicroStrategy */}
            <div>
              <h3 className="text-xl font-semibold text-white">Frontend Developer @ MicroStrategy</h3>
              <p className="text-sm text-gray-400">Jun 2017 – Mar 2020 · Tysons, VA</p>
              <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-2">
                <li>Helped build MicroStrategy’s self-service BI platform with React and Redux, enabling thousands of business users to create customized visual dashboards.</li>
                <li>Launched Open Canvas, a flagship feature for designing layered, interactive data visualizations — differentiating the product in the enterprise BI space.</li>
                <li>Maintained a proprietary JS rendering engine, boosting dashboard performance and reducing load times by 40%.</li>
                <li>Enhanced frontend test coverage with Protractor, Chai, and Cucumber, significantly reducing regressions in production.</li>
              </ul>
              <p className="mt-2 text-sm text-blue-300">Tech: React · Redux · JavaScript · Protractor · Cucumber · TypeScript</p>
            </div>
  
            {/* Digital Reasoning (Internship) */}
            <div>
              <h3 className="text-xl font-semibold text-white">Software Engineering Intern @ Digital Reasoning</h3>
              <p className="text-sm text-gray-400">May 2016 – Aug 2016 · Franklin, TN</p>
              <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-2">
                <li>Developed a web-based annotation tool with AngularJS and Node.js to support ML data labeling for computer vision projects.</li>
                <li>Designed a RESTful API using Express to integrate object detection training pipelines with multiple internal teams.</li>
              </ul>
              <p className="mt-2 text-sm text-blue-300">Tech: AngularJS · Node.js · Express · Webpack · ES6</p>
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default Experience;
  