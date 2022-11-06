import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const About = ({ aboutRef, projectsRef }) => {
  const [rickRoll, setRickRoll] = useState(false);

  return (
    <div
      ref={aboutRef}
      className="font-noto-serif max-md:pt-28 md:pt-64 mt-20 scroll-m-28 text-center bg-black text-white"
    >
      <div className="md:flex md:flex-row-reverse md:justify-around">
        <div>
          <div className="flex justify-center md:flex-shrink-0 md:pt-10">
            <div className="max-md:w-32">
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                onClick={() => {
                  setRickRoll(!rickRoll);
                }}
              >
                <img
                  className="transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300"
                  src="/computer.svg"
                  alt="pixel_computer"
                />
              </a>
            </div>
          </div>
          {rickRoll ? (
            <div className="pt-3 text-sm">{"Enjoy the song ! :)"}</div>
          ) : null}
        </div>
        <div className="pt-10 px-1 md:text-left">
          <div className="text-xl lg:text-3xl">HI, I AM</div>
          <div className="pt-3 text-3xl lg:text-5xl">DAVID LEUNG.</div>
          <TypeAnimation
            sequence={[
              "A Frontend developer.",
              1000, // Waits 1s
              "A problem solver.",
              1000, // Waits 1s
              "A quick learner.",
              1000, // Waits 1s
            ]}
            speed={30}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1.75em" }}
            className="mt-3"
          />
          <div className="flex mt-5 justify-around md:justify-start">
            <a href="https://github.com/davidleungch" target="_blank">
              <AiFillGithub className="mx-5 text-3xl md:text-4xl cursor-pointer transition ease-in-out delay-150  hover:translate-y-1 hover:scale-110 duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-leung-9107a7188/"
              target="_blank"
            >
              <AiFillLinkedin className="mx-5 text-3xl md:text-4xl cursor-pointer transition ease-in-out delay-150  hover:translate-y-1 hover:scale-110 duration-300" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=davidleung.lch@gmail.com"
              target="_blank"
            >
              <AiOutlineMail className="mx-5 text-3xl md:text-4xl cursor-pointer transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-40 pb-4 md:pt-48">
        <div className="w-full flex justify-center">
          <div
            className="w-48 cursor-pointer animate-bounce"
            onClick={() => {
              projectsRef.current.scrollIntoView();
            }}
          >
            <div className="text-xl w-48">Scroll down for more</div>
            <div className="flex justify-center">
              <IoIosArrowDown className="w-8 text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
