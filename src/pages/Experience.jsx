import Grid from "/src/assets/images/ui/grid.png"

const Experience = () => {
  return (
    <>
    <div className="relative bg-gradient-to-b from-[#141C2B] to-transparent overflow-hidden pt-20 pb-40 px-5 md:px-6 lg:px-20"> 
    
      <img src={Grid} alt="Grid" className="absolute inset-0 w-full object-contain [mask-image:linear-gradient(to_bottom,black,transparent)]"/>

    <div className="relative flex flex-col gap-10 max-w-6xl mx-auto">

    <div className="flex flex-col gap-4">
      <h1 className="text-6xl font-bold text-white">
        Experience
      </h1>
      <p className="text-[#CBD1D880] text-lg">
        All about my freelance and professional work experience.
      </p>
    </div>

    <div className="border-l border-[#CBD1D820] mr-10 flex flex-col gap-10">

    <div className="pl-20"> 

    <div className="flex flex-col gap-4">
      <h1 className="text-[#7AA2F7] text-3xl font-semibold">
        Front-End Developer <span className="text-[#CBD1D8]">(Freelance)</span>
      </h1>
      <h2 className="text-[#CBD1D890] text-xl">
        Dec 2025 - Present
      </h2>
      <h2 className="text-[#CBD1D8] text-xl">
        Klyro Webcraft
      </h2>
      <p className="text-[#CBD1D880] text-md text-justify">
        Frontend Developer delivering responsive, production-ready web interfaces for client projects. Experienced in building clean, reusable component-based applications using React and modern frontend tooling. Focused on translating UI designs into performant, responsive user interfaces that provide a consistent experience across devices.
      </p>
      <p className="text-[#CBD1D880] text-md text-justify">
        Work Highlights
      </p>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li className="text-[#CBD1D880] text-md text-justify">
            Build responsive frontend interfaces using React, TypeScript, and modern CSS frameworks such as Tailwind CSS and Material UI
          </li>
          <li className="text-[#CBD1D880] text-md text-justify">
            Translate UI/UX designs into reusable React components with clean component architecture
          </li>
          <li className="text-[#CBD1D880] text-md text-justify">
            Ensure layout consistency and responsiveness across desktop, tablet, and mobile devices
          </li>
          <li className="text-[#CBD1D880] text-md text-justify">
            Optimize UI performance, accessibility, and frontend structure
          </li>
          <li className="text-[#CBD1D880] text-md text-justify">
            Collaborate with clients to implement project requirements, feedback, and revisions
          </li>
          <li className="text-[#CBD1D880] text-md text-justify">
            Deploy and maintain client-facing websites using modern frontend tooling
          </li>
        </ul>
    </div>

    <div className="border-b border-[#CBD1D820] my-10"/>

    <div className="flex flex-col gap-4">
      <h1 className="text-[#7AA2F7] text-3xl font-semibold">
        SDE Intern
      </h1>
      <h2 className="text-[#CBD1D890] text-xl">
        Sep 2025 - Nov 2025
      </h2>
      <h2 className="text-[#CBD1D8] text-xl">
        Larklabs.ai
      </h2>
      <p className="text-[#CBD1D880] text-md text-justify">
        Worked as a Software Development Engineer (SDE) Intern with a focus on frontend development using React and JavaScript, contributing to production-level UI development and maintenance.
      </p>
      <p className="text-[#CBD1D880] text-md text-justify">
        Key Contributions
      </p>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li className="text-[#CBD1D880] text-md text-justify">
            Developed and maintained reusable UI components using React
          </li>
          <li className="text-[#CBD1D880] text-md text-justify">
            Fixed UI bugs and improved existing pages for better usability and responsiveness
          </li>
          <li className="text-[#CBD1D880] text-md text-justify">
            Integrated REST APIs and handled asynchronous data using Axios and fetch
          </li>
          <li className="text-[#CBD1D880] text-md text-justify">
            Collaborated with the development team using Git and GitHub for version control
          </li>
          <li className="text-[#CBD1D880] text-md text-justify">
            Debugged layout, performance, and network issues using Chrome DevTools
          </li>
        </ul>
      <p className="text-[#CBD1D880] text-md text-justify">
        This internship provided hands-on experience working with real-world codebases, collaborative development workflows, and production-level frontend practices.
      </p>
    </div>

    </div>

    </div>

    </div>

    </div>
    </>
  )
}

export default Experience