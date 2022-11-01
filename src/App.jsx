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
    <div className="bg-white px-10 py-10">
      <NavBar
        aboutRef={aboutRef}
        projetcsRef={projectsRef}
        resumeRef={resumeRef}
      />
      <About aboutRef={aboutRef} />

      {/* <div className="flex flex-col	">
        <img
          src="https://leetcode-stats.vercel.app/api?username=davildleungch&theme=Light"
          alt="leetCode status"
        />
        <p className="text-xs md:text-sm italic text-gray-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          Thanks to{" "}
          <a
            href="https://github.com/JeremyTsaii/leetcode-stats"
            target="_blank"
          >
            Jeremy Tsaii's project
          </a>
        </p>
      </div> */}
      <Projects projectsRef={projectsRef} />
      <div ref={resumeRef} className="min-h-screen scroll-mt-20">
        this is the resume content
      </div>
      <ScrollButton />
    </div>
  );
}

export default App;
