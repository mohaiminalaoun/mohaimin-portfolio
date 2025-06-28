import './main.css';
import './index.css';
import { useState } from 'react';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';

type Route = 'home' | 'about' | 'projects' | 'experience' | 'contact';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  const renderCurrentComponent = () => {
    switch (currentRoute) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen w-full">
      <Header currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
      {renderCurrentComponent()}
    </div>
  );
};

export default App;
