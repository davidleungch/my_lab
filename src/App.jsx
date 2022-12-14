//React
import { useRef, useState } from "react";
//Components
import ScrollButton from "./components/ScrollButton";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-slate-50 px-2 py-2 md:px-10 md:py-5 font-noto-serif dark:bg-black dark:text-white">
        <NavBar
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          resumeRef={resumeRef}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <About aboutRef={aboutRef} projectsRef={projectsRef} />
        <Projects projectsRef={projectsRef} />
        <Footer />
        <ScrollButton />
      </div>
    </div>
  );
}

export default App;
