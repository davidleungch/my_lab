import { useEffect } from "react";
import { AiOutlineGlobal, AiOutlineDeploymentUnit } from "react-icons/ai";
import { GiSpiderBot } from "react-icons/gi";

const Projects = ({ projectsRef }) => {
  useEffect(() => {
    const callback = function (entries) {
      entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
          entry.target.classList.add("motion-safe:animate-fadeIn");
        } else {
          entry.target.classList.remove("motion-safe:animate-fadeIn");
        }
      });
    };

    const observer = new IntersectionObserver(callback);

    const targets = document.querySelectorAll(".js-show-on-scroll");
    targets.forEach(function (target) {
      target.classList.add("opacity-0");
      observer.observe(target);
    });
  }, []);

  return (
    <div
      ref={projectsRef}
      className="py-[100px] my-3 scroll-m-26 font-noto-serif"
    >
      <div className="xl:flex ">
        <div className="px-2 xl:w-1/2 xl:pl-20 2xl:pl-52 js-show-on-scroll">
          <div className="h-[300px] xl:w-[500px] xl:h-[400px] flex flex-col items-center justify-center shadow-lg rounded-xl hover:translate-y-1 hover:scale-105 duration-300 ">
            <GiSpiderBot className="text-5xl" />
            <h1 className="text-xl md:text-3xl my-2 text-center underline underline-offset-2">
              Marketing Reach Rate System
            </h1>
            <p className="text-justify pt-2 px-7 text-md md:text-xl">
              {" "}
              A system can obtain massive data of different products, website
              and apperances of thousands of keywords by crawling all the
              partner’s website
            </p>
          </div>
        </div>
        <div className="xl:w-1/2 xl:pl-5">IMG</div>
      </div>
      <div className="xl:flex flex-row-reverse">
        <div className="xl:w-1/2 xl:pl-16 2xl:pl-44 js-show-on-scroll">
          <div className="h-[300px] xl:w-[500px] xl:h-[400px] flex flex-col items-center justify-center shadow-lg rounded-xl hover:translate-y-1 hover:scale-105 duration-300 ">
            <AiOutlineDeploymentUnit className="text-5xl" />
            <h1 className="text-xl md:text-3xl my-2 text-center underline underline-offset-2">
              Central Authorization System
            </h1>
            <p className="text-justify pt-2 px-7 text-md md:text-xl">
              {" "}
              A central authorization system is developed in order to manage the
              roles and actions of all the other systems and act as a
              middle-ware of the authentication system.
            </p>
          </div>
        </div>
        <div className="xl:w-1/2">IMG</div>
      </div>
      <div className="xl:flex">
        <div className="px-2 xl:w-1/2 xl:pl-20 2xl:pl-52 js-show-on-scroll">
          <div className="h-[300px] xl:w-[500px] xl:h-[400px] flex flex-col items-center justify-center shadow-lg rounded-xl hover:translate-y-1 hover:scale-105 duration-300 ">
            <AiOutlineGlobal className="text-5xl" />
            <h1 className="text-xl md:text-3xl my-2 text-center underline underline-offset-2">
              Personal Profile Website
            </h1>
            <p className="text-justify pt-2 px-7 text-md md:text-xl">
              {" "}
              Create a personal profile to introduce myself and demonstrate my
              personality and skills.
            </p>
          </div>
        </div>
        <div className="xl:w-1/2 xl:pl-5">IMG</div>
      </div>
    </div>
  );
};

export default Projects;
