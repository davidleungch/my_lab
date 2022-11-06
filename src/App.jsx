//React
import { useRef } from "react";
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

  return (
    <div className="bg-slate-50 px-10 py-5 font-noto-serif">
      <NavBar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        resumeRef={resumeRef}
      />
      <About aboutRef={aboutRef} projectsRef={projectsRef} />
      <Projects projectsRef={projectsRef} />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
