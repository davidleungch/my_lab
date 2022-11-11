import { useEffect } from "react";
import { AiOutlineGlobal, AiOutlineDeploymentUnit } from "react-icons/ai";
import { GiSpiderBot } from "react-icons/gi";
import { TbRobot } from "react-icons/tb";

const Projects = ({ projectsRef }) => {
  useEffect(() => {
    const callback = function (entries) {
      entries.forEach((entry) => {

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
    <div ref={projectsRef} className="pt-[100px] pb-10 my-3 scroll-m-26 ">
      <div className="flex justify-center text-xl md:text-3xl underline underline-offset-8 px-10 py-5">
        In-house Productions
      </div>
      <div className="xl:flex xl:mt-8 xl:items-center">
        <div className="px-2 xl:w-1/2 xl:flex xl:justify-center">
          <div className="border h-[300px] xl:w-[500px] xl:h-[400px] flex flex-col items-center justify-center shadow-lg rounded-xl hover:translate-y-1 hover:scale-105 duration-300 ">
            <GiSpiderBot className="text-3xl md:text-5xl" />
            <h1 className="text-lg md:text-2xl my-2 text-center underline underline-offset-8">
              Marketing Reach Rate System
            </h1>
            <p className="text-justify pt-2 px-7 text-sm md:text-lg">
              {" "}
              A system can obtain massive data of different products, website
              and apperances of thousands of keywords by crawling all the
              partner’s website
            </p>
          </div>
        </div>
        <div className="border max-xl:mt-8 xl:w-1/2 xl:flex xl:justify-center js-show-on-scroll dark:border-gray-500">
          <div>
            <img
              className="object-contain"
              src="/marketing_scraping.png"
              alt="marketing_scraping"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 xl:flex flex-row-reverse xl:mt-8 xl:items-center">
        <div className="px-2 xl:w-1/2 xl:flex xl:justify-center">
          <div className="border h-[300px] xl:w-[500px] xl:h-[400px] flex flex-col items-center justify-center shadow-lg rounded-xl hover:translate-y-1 hover:scale-105 duration-300 ">
            <AiOutlineDeploymentUnit className="text-3xl md:text-5xl" />
            <h1 className="text-lg md:text-2xl my-2 text-center underline underline-offset-8">
              Central Authorization System
            </h1>
            <p className="text-justify pt-2 px-7 text-sm md:text-lg">
              {" "}
              A central authorization system is developed in order to manage the
              roles and actions of all the other systems and act as a
              middle-ware of the authentication system.
            </p>
          </div>
        </div>
        <div className="border max-xl:mt-8 xl:w-1/2 xl:flex xl:justify-center js-show-on-scroll dark:border-gray-500">
          <div>
            <img
              className="object-contain"
              src="/central_authorization.png"
              alt="central_authorization"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 text-xl md:text-3xl underline underline-offset-8	px-10 py-5">
        Side Projects
      </div>
      <div className="xl:flex xl:mt-8 xl:items-center">
        <div className="px-2 xl:w-1/2 xl:flex xl:justify-center">
          <div className="border h-[300px] xl:w-[500px] xl:h-[400px] flex flex-col items-center justify-center shadow-lg rounded-xl hover:translate-y-1 hover:scale-105 duration-300 ">
            <TbRobot className="text-3xl md:text-5xl" />
            <h1 className="text-lg md:text-2xl my-2 text-center underline underline-offset-8">
              Ticket Bot
            </h1>
            <p className="text-justify pt-2 px-7 text-sm md:text-lg">
              {" "}
              Automatic bot for getting concert ticket on HK ticketing.
            </p>
            <p className="text-justify pt-2 px-7 text-sm md:text-lg">
              Get it on:{" "}
              <a
                href="https://github.com/davidleungch/ticket_bot"
                className="text-blue-700 underline dark:text-yellow-500"
                target="_blank"
              >
                Github
              </a>
            </p>
          </div>
        </div>
        <div className="border max-xl:mt-8 xl:w-1/2 xl:flex xl:justify-center js-show-on-scroll dark:border-gray-500">
          <div>
            <img
              className="object-contain"
              src="/bot.gif"
              alt="personal_website"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 xl:flex flex-row-reverse xl:mt-8 xl:items-center">
        <div className="px-2 xl:w-1/2 xl:flex xl:justify-center">
          <div className="border h-[300px] xl:w-[500px] xl:h-[400px] flex flex-col items-center justify-center shadow-lg rounded-xl hover:translate-y-1 hover:scale-105 duration-300 ">
            <AiOutlineGlobal className="text-3xl md:text-5xl" />
            <h1 className="text-lg md:text-2xl my-2 text-center underline underline-offset-8">
              Personal Profile Website
            </h1>
            <p className="text-justify pt-2 px-7 text-sm md:text-lg">
              {" "}
              Create a personal profile to introduce myself and demonstrate my
              personality and skills.
            </p>
          </div>
        </div>
        <div className="border max-xl:mt-8 xl:w-1/2 xl:flex xl:justify-center js-show-on-scroll dark:border-gray-500">
          <div>
            <img
              className="object-contain"
              src="/personal_website.png"
              alt="personal_website"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
