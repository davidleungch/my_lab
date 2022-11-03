const Projects = ({ projectsRef }) => {
  return (
    <div
      ref={projectsRef}
      className="pt-14 mt-10 scroll-m-26 md:flex font-noto-serif"
    >
      <div className="md:w-1/3 px-4 mx-2 text-left shadow-lg p-10 rounded-xl my-10">
        <h1 className="text-2xl md:text-3xl mb-2">
          Marketing Reach Rate System
        </h1>
        <p>
          {" "}
          By crawling all the partner’s website, the system can obtain massive
          data of the callback Urls of our products and official website, number
          of keywords which are requested by the marketing team. Data analysis,
          including trend, data distribution, etc are conducted as a tool of
          marketing strategy.
        </p>
      </div>
      <div className="md:w-1/3 px-4 mx-2 text-left	shadow-lg p-10 rounded-xl my-10">
        <h1 className="text-2xl md:text-3xl mb-2">
          Central Authorization System
        </h1>
        <p>
          {" "}
          A central authorization system is developed in order to manage the
          roles and actions of all the other systems and act as a middle-ware of
          the authentication system.
        </p>
      </div>
      <div className="md:w-1/3 px-4 mx-2 text-left	shadow-lg p-10 rounded-xl my-10">
        <h1 className="text-2xl md:text-3xl mb-2">Personal Profile Website</h1>
        <p>
          {" "}
          Create a personal profile to introduce myself and demonstrate my
          personality and skills.
        </p>
      </div>
    </div>
  );
};

export default Projects;
