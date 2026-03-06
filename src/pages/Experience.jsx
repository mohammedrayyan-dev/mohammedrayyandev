import Grid from "../assets/images/ui/grid.png"

const Experience = () => {
  return (
    <>
    <div className="relative bg-gradient-to-b from-[#141C2B] to-transparent overflow-hidden pt-10 md:pt-20 pb-40 px-5 md:px-6 lg:px-20"> 
    
      <img src={Grid} alt="Grid" className="absolute inset-0 w-full object-contain [mask-image:linear-gradient(to_bottom,black,transparent)]"/>

    <div className="relative flex flex-col gap-10 max-w-6xl mx-auto">

    <div className="flex flex-col gap-4">
      <h1 className="text-3xl md:text-6xl font-bold text-white">
        Experience
      </h1>
      <p className="text-[#CBD1D880] text-sm md:text-lg text-left">
        All about my freelance and professional work experience.
      </p>
    </div>

    <div className="border-l border-[#CBD1D820] mr-5 md:mr-10 flex flex-col gap-10">

    <div className="pl-10 md:pl-20"> 

    <div className="flex flex-col gap-4">
      <h2 className="text-[#7AA2F7] text-lg md:text-3xl font-semibold">
        Front-End Developer <span className="text-[#CBD1D8]">(Freelance)</span>
      </h2>
      <p className="text-[#CBD1D890] text-lg md:text-xl">
        Dec 2025 - Present
      </p>
      <p className="text-[#CBD1D8] text-lg md:text-xl">
        Klyros Craft
      </p>
      <p className="text-[#CBD1D880] text-sm md:text-base">
        Frontend Developer delivering responsive, production-ready web interfaces for client projects. Experienced in building clean, reusable component-based applications using React and modern frontend tooling. Focused on translating UI designs into performant, responsive user interfaces that provide a consistent experience across devices.
      </p>
      <p className="text-[#CBD1D880] text-sm md:text-base">
        Work Highlights
      </p>
        <ul className="flex flex-col gap-2 list-disc list-inside text-[#CBD1D880] text-sm md:text-base">
          <li>
            Build responsive frontend interfaces using React, TypeScript, and modern CSS frameworks such as Tailwind CSS and Material UI
          </li>
          <li>
            Translate UI/UX designs into reusable React components with clean component architecture
          </li>
          <li>
            Ensure layout consistency and responsiveness across desktop, tablet, and mobile devices
          </li>
          <li>
            Optimize UI performance, accessibility, and frontend structure
          </li>
          <li>
            Collaborate with clients to implement project requirements, feedback, and revisions
          </li>
          <li>
            Deploy and maintain client-facing websites using modern frontend tooling
          </li>
        </ul>
    </div>

    <div className="border-b border-[#CBD1D820] my-10"/>

    <div className="flex flex-col gap-4">
      <h2 className="text-[#7AA2F7] text-lg md:text-3xl font-semibold">
        SDE Intern
      </h2>
      <p className="text-[#CBD1D890] text-lg md:text-xl">
        Sep 2025 - Nov 2025
      </p>
      <p className="text-[#CBD1D8] text-lg md:text-xl">
        Larklabs.ai
      </p>
      <p className="text-[#CBD1D880] text-sm md:text-base">
        Worked as a Software Development Engineer (SDE) Intern with a focus on frontend development using React and JavaScript, contributing to production-level UI development and maintenance.
      </p>
      <p className="text-[#CBD1D880] text-sm md:text-base">
        Key Contributions
      </p>
        <ul className="flex flex-col gap-2 list-disc list-inside text-[#CBD1D880] text-sm md:text-base">
          <li>
            Developed and maintained reusable UI components using React
          </li>
          <li>
            Fixed UI bugs and improved existing pages for better usability and responsiveness
          </li>
          <li>
            Integrated REST APIs and handled asynchronous data using Axios and fetch
          </li>
          <li>
            Collaborated with the development team using Git and GitHub for version control
          </li>
          <li>
            Debugged layout, performance, and network issues using Chrome DevTools
          </li>
        </ul>
      <p className="text-[#CBD1D880] text-sm md:text-base">
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