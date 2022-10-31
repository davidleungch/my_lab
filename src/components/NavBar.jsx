import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = ({ aboutRef, worksRef, resumeRef, contactRef }) => {
    const options = ["About", "Works", "Resume"];
    const executeScroll = (value) => {
      switch (value.toLowerCase()) {
        case "about":
          aboutRef.current.scrollIntoView();
          break;
        case "works":
          worksRef.current.scrollIntoView();
          break;
        case "resume":
          resumeRef.current.scrollIntoView();
          break;
      }
    };

    return (
      <nav className="fixed top-0 left-0 right-0 flex justify-between px-10 py-6 mb-12">
        <h1 className="font-burtons text-xl">codehub</h1>
        <ul className="flex items-center font-noto-serif">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
          </li>
          {options.map((option, index) => {
            return (
              <li key={index} className="ml-8">
                <button onClick={() => executeScroll(option)}>{option}</button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
};

export default NavBar;
