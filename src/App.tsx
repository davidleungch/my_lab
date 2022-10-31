import { useRef } from "react";

function App() {
  const aboutRef = useRef<HTMLLinkElement>(null);
  const worksRef = useRef<HTMLLinkElement>(null);
  const resumeRef = useRef<HTMLLinkElement>(null);
  const contactRef = useRef<HTMLLinkElement>(null);

  const executeScroll = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: string = e.target.value;
    switch (value) {
      case "about":
        if (aboutRef.current !== null) {
          aboutRef.current.scrollIntoView();
        }
        break;
      case "works":
        if (worksRef.current !== null) {
          worksRef.current.scrollIntoView();
        }
        break;
      case "resume":
        if (resumeRef.current !== null) {
          resumeRef.current.scrollIntoView();
        }
        break;
      case "contact":
        if (contactRef.current !== null) {
          contactRef.current.scrollIntoView();
        }
        break;
    }
  };

  return (
    <div>
      <nav className="flex justify-between">
        <h1>CodeHub</h1>
        <ul className="flex ">
          <li>
            <button
              onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                executeScroll(e);
              }}
              value={"about"}
            >
              About
            </button>
          </li>
          <li>
            <button>Works</button>
          </li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div ref={aboutRef} className="md:min-h-screen">
        this is the about content
      </div>
      <div ref={worksRef} className="md:min-h-screen">
        this is the works content
      </div>
      <div ref={resumeRef} className="md:min-h-screen">
        this is the resume content
      </div>
      <div ref={contactRef} className="md:min-h-screen">
        this is the contact content
      </div>
    </div>
  );
}

export default App;
