import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const About = ({ aboutRef }) => {
  return (
    <div
      ref={aboutRef}
      className="font-noto-serif pt-14 mt-20 scroll-m-28 text-center"
    >
      <div className="flex text-xl md:text-5xl justify-center">
        <div>Hi, my name is</div>
        <div className="ml-2 md:ml-3">David Leung.</div>
      </div>
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
        style={{ fontSize: "2em" }}
        className="mt-5"
      />

      <div className="flex mt-5 justify-center">
        <a href="https://github.com/davidleungch" target="_blank">
          <AiFillGithub className="mx-5 text-2xl md:text-4xl cursor-pointer transition ease-in-out delay-150  hover:translate-y-1 hover:scale-110 duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/david-leung-9107a7188/"
          target="_blank"
        >
          <AiFillLinkedin className="mx-5 text-2xl md:text-4xl cursor-pointer transition ease-in-out delay-150  hover:translate-y-1 hover:scale-110 duration-300" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=davidleung.lch@gmail.com"
          target="_blank"
        >
          <AiOutlineMail className="mx-5 text-2xl md:text-4xl cursor-pointer transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300" />
        </a>
      </div>
    </div>
  );
};

export default About;
