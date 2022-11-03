//React
import { useRef } from "react";
//Components
import ScrollButton from "./components/ScrollButton";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);

  return (
    <div className="bg-white px-10 py-10">
      <NavBar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        resumeRef={resumeRef}
      />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Resume resumeRef={resumeRef} />
      <ScrollButton />
    </div>
  );
}

export default App;
