import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = ({ aboutRef, worksRef, resumeRef, contactRef }) => {
  //   const options = ["About", "Works", "Resume", "Contact"];
  const executeScroll = (e) => {
    let value = e.target.value;
    switch (value) {
      case "about":
        aboutRef.current.scrollIntoView();
        break;
      case "works":
        worksRef.current.scrollIntoView();
        break;
      case "resume":
        resumeRef.current.scrollIntoView();
        break;
      case "contact":
        contactRef.current.scrollIntoView();
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
        <li className="ml-8">
          <button
            onClick={(e) => {
              executeScroll(e);
            }}
            value={"about"}
          >
            About
          </button>
        </li>
        <li className="ml-8">
          <button
            onClick={(e) => {
              executeScroll(e);
            }}
            value={"works"}
          >
            Works
          </button>
        </li>
        <li className="ml-8">
          <button
            onClick={(e) => {
              executeScroll(e);
            }}
            value={"resume"}
          >
            Resume
          </button>
        </li>
        <li className="ml-8">
          <button
            onClick={(e) => {
              executeScroll(e);
            }}
            value={"contact"}
          >
            Contact
          </button>
        </li>
        {/* {options.map((option, index) => {
          return (
            <li key={index} className="ml-8">
              <button
                onClick={(e) => {
                  executeScroll(e);
                }}
                value={option}
              >
                {option}
              </button>
            </li>
          );
        })} */}
      </ul>
    </nav>
  );
};

export default NavBar;
