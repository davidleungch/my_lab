import { AiOutlineGlobal, AiOutlineDeploymentUnit } from "react-icons/ai";
import { GiSpiderBot } from "react-icons/gi";

const Projects = ({ projectsRef }) => {
  return (
    <div
      ref={projectsRef}
      className=" md:flex pt-14 mt-10 scroll-m-26 font-noto-serif"
    >
      <div className="md:w-1/3 px-5 md:px-10 md:mx-8 shadow-lg p-10 rounded-xl mb-10 hover:translate-y-1 hover:scale-105 duration-300 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl mb-2 text-center underline underline-offset-2">
          Marketing Reach Rate System
        </h1>
        <p className="text-left pt-3 h-32 text-lg md:text-xl">
          {" "}
          A system can obtain massive data of different products, website and
          apperances of thousands of keywords by crawling all the partner’s
          website
        </p>
        <GiSpiderBot className="text-5xl" />
      </div>
      <div className="md:w-1/3 px-5 md:px-10 md:mx-8 shadow-lg p-10 rounded-xl mb-10 hover:translate-y-1 hover:scale-105 duration-300 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl mb-2 text-center underline underline-offset-2">
          Central Authorization System
        </h1>
        <p className="text-left pt-3 h-32 text-lg	md:text-xl">
          {" "}
          A central authorization system is developed in order to manage the
          roles and actions of all the other systems and act as a middle-ware of
          the authentication system.
        </p>
        <AiOutlineDeploymentUnit className="text-5xl" />
      </div>
      <div className="md:w-1/3 px-5 md:px-10 md:mx-8 shadow-lg p-10 rounded-xl mb-10 hover:translate-y-1 hover:scale-105 duration-300 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl mb-2 underline underline-offset-2">
          Personal Profile Website
        </h1>
        <p className="text-left pt-3 h-32 text-lg md:text-xl">
          {" "}
          Create a personal profile to introduce myself and demonstrate my
          personality and skills.
        </p>
        <AiOutlineGlobal className="text-5xl" />
      </div>
    </div>
  );
};

export default Projects;
