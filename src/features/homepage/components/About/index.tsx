const About = () => {
  return (
    <div className="container p-4  lg:py-10 ">
      <div className="flex flex-col lg:flex-row space-y-10  divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#292929]">
        <div className="lg:w-1/2  lg:pr-20">
          <p className="text-2xl mb-5 font-semibold">About Me</p>
          <p className="text-xl text-gray-light">
            Purposefully small, our micro-studio uses a collective of
            independent collaborators across different disciplines, which allows
            us to apply the required expertise and approach to each project,
            making sure we are never pigeon holed when exploration is required.
            Passionate about doing good work and challenge the norm, MONOLIF
            typically partners with founders, startups and companies that are
            passionate about what they are doing. Helping them craft an online
            presence that is not only goal-orientated, but also to craft a
            unique user experience that captivates and resonates with the
            desired audience.
          </p>
        </div>
        <div className="flex-1 py-10 lg:py-0 lg:px-20">
          <p className="text-2xl mb-5 font-semibold">My Process</p>
          <div className="divide-y-2 space-y-5 divide-[#292929] ">
            <div className="py-5">
              <p className="mb-5">
                <span className="text-gray-light">00/1</span> Discover & Define
              </p>
              <p className="text-xl text-gray-light">
                To deliver results, we must first identify who we are delivering
                them to, understand their needs and wants, and be aware of any
                limitations. Only then can we define what success looks like and
                how to achieve it.
              </p>
            </div>
            <div className="py-5">
              <p className="mb-5">
                <span className="text-gray-light">00/1</span> Discover & Define
              </p>
              <p className="text-xl text-gray-light">
                To deliver results, we must first identify who we are delivering
                them to, understand their needs and wants, and be aware of any
                limitations. Only then can we define what success looks like and
                how to achieve it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
