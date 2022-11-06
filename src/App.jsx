//React
import { useRef } from "react";
//Components
import ScrollButton from "./components/ScrollButton";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);

  return (
    <div className="bg-white px-10 py-5">
      <NavBar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        resumeRef={resumeRef}
      />
      <About aboutRef={aboutRef} projectsRef={projectsRef} />
      <Projects projectsRef={projectsRef} />
      <ScrollButton />
    </div>
  );
}

export default App;
