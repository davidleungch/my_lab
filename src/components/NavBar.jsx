import { useState, useEffect, useRef } from "react";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = ({ aboutRef, projectsRef, resumeRef }) => {
  const [nav, setNav] = useState(false);
  const wrapperRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

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

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setNav(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-end px-10 py-6 mb-12 bg-white z-10 font-noto-serif">
      <BsFillMoonStarsFill className="cursor-pointer text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
      <ul className="hidden md:flex items-center font-noto-serif">
        {options.map((option, index) => {
          return (
            <li
              key={index}
              className="ml-8 transition ease-in-out delay-150 hover: translate-y-1 hover:scale-110 duration-300"
            >
              <button onClick={() => executeScroll(option)}>{option}</button>
            </li>
          );
        })}
      </ul>
      <div onClick={handleNav} className="block md:hidden ml-8 cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {nav ? (
        <ul
          ref={wrapperRef}
          className="md:hidden fixed right-2 my-10 shadow-lg px-8 py-3 rounded-xl bg-white"
        >
          {options.map((option, index) => {
            return (
              <li
                key={index}
                className="py-3 transition ease-in-out delay-150 hover: translate-y-1 hover:scale-110 duration-300"
              >
                <button onClick={() => executeScroll(option)}>{option}</button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </nav>
  );
};

export default NavBar;
