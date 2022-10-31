//React
import { useRef } from "react";
//Components
import ScrollButton from "./components/ScrollButton";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="bg-white px-10 py-10">
      <NavBar
        aboutRef={aboutRef}
        worksRef={worksRef}
        resumeRef={resumeRef}
        contactRef={contactRef}
      />
      <div className="py-6 mb-12"></div>
      <About aboutRef={aboutRef} />
      <div ref={worksRef} className="min-h-screen scroll-mt-20">
        this is the works content
      </div>
      <div ref={resumeRef} className="min-h-screen scroll-mt-20">
        this is the resume content
      </div>
      <ScrollButton />
    </div>
  );
}

export default App;
