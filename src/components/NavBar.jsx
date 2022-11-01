import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = ({ aboutRef, projectsRef, resumeRef }) => {
  const options = ["About", "Projects", "Resume"];
  const executeScroll = (value) => {
    switch (value.toLowerCase()) {
      case "about":
        aboutRef.current.scrollIntoView();
        break;
      case "projects":
        projectsRef.current.scrollIntoView();
        break;
      case "resume":
        resumeRef.current.scrollIntoView();
        break;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-end px-10 py-6 mb-12 bg-white z-10">
      <ul className="flex items-center font-noto-serif">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
        </li>
        {options.map((option, index) => {
          return (
            <li
              key={index}
              className="ml-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <button onClick={() => executeScroll(option)}>{option}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
