import { useEffect, useState } from "react";

import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const About = ({ aboutRef }) => {
  const [leetCodeStatus, setLeetCodeStatus] = useState();

  useEffect(() => {}, []);

  return (
    <div
      ref={aboutRef}
      className="min-h-screen font-noto-serif scroll-mt-20 text-center md:text-left "
    >
      <div className="text-5xl">Hi, my name is David Leung.</div>
      <TypeAnimation
        sequence={[
          "I am a Frontend developer.",
          1000, // Waits 1s
          "I am a problem solver.",
          1000, // Waits 1s
          "I am a quick learner.",
          1000, // Waits 1s
        ]}
        speed={30}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "3em" }}
      />
      <div className="flex">
        <AiFillGithub />
        <AiFillLinkedin />
        <AiOutlineMail />
      </div>
    </div>
  );
};

export default About;
