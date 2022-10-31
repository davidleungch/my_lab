import { TypeAnimation } from "react-type-animation";

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} className="min-h-screen font-noto-serif">
      <h1>Hi, my name is David Leung</h1>
      <TypeAnimation
        sequence={[
          "I am a FrontEnd developer",
          1000, // Waits 1s
          "I am a problem solver",
          1000, // Waits 1s
          "I am a quick learner",
          1000, // Waits 1s
        ]}
        speed={30}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em" }}
      />
      <p>
        I am still fresh in the software development. But I am capable to face
        any challenges.
      </p>
    </div>
  );
};

export default About;
