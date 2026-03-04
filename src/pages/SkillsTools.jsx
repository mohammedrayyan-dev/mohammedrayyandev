import Grid from "/src/assets/images/ui/grid.png"

const Skills= {
  "Programming Languages": ["JavaScript", "TypeScript"],
  "Core Web": ["HTML5", "CSS3", "Responsive Web Design", "REST APIs"],
  "Frameworks & Libraries": ["React", "Material UI", "Framer Motion"],
  "Styling": ["Tailwind CSS"],
  "Tools": ["Git & GitHub", "Vite", "VS Code", "Chrome DevTools", "Figma"]
}

const SkillsTools = () => {
  return (
    <>
    <div className="relative bg-gradient-to-b from-[#141C2B] to-transparent overflow-hidden pt-20 pb-40 px-5 md:px-6 lg:px-20"> 
    
      <img src={Grid} alt="Grid" className="absolute inset-0 w-full object-contain [mask-image:linear-gradient(to_bottom,black,transparent)]"/>

    <div className="relative flex flex-col gap-10 max-w-6xl mx-auto">

    <div className="flex flex-col gap-4">
      <h1 className="text-6xl font-bold text-white">
        Skills & Tools
      </h1>
      <p className="text-[#CBD1D880] text-lg">
        A look at all the programming languages, libraries, and tools I've worked with
      </p>
    </div>

    <div className="border-l border-[#CBD1D820] mr-10 flex flex-col gap-10">

    <div className="pl-20"> 

    <div className="flex flex-col gap-4">
      <p className="text-[#CBD1D880] text-md text-justify">
      A front-end developer who enjoys turning ideas into clean, responsive web experiences. My journey into development started with curiosity about how modern websites work, and it quickly grew into a passion for building interfaces that feel smooth, intuitive, and visually polished.
      </p>

      <div className="border-b border-[#CBD1D820] my-10"/>

      <h1 className="text-[#7AA2F7] text-3xl font-semibold">
        Front-End Developer
      </h1>
      <p className="text-[#CBD1D880] text-md text-justify">
        Production-ready React website for a real furniture business with responsive UI, reusable components, and performance optimizations.
      </p>
      <h2 className="text-[#CBD1D8] text-xl font-semibold">
        React
      </h2>
      <p className="text-[#CBD1D880] text-md text-justify">
        Most of the interfaces I build today revolve around React. I enjoy creating component-driven applications where pieces of the UI can be reused, scaled, and maintained easily. From simple landing pages to more structured layouts, React has become my go-to tool for building responsive web applications.
      </p>
      <h2 className="text-[#CBD1D8] text-xl font-semibold">
        JavaScript
      </h2>
      <p className="text-[#CBD1D880] text-md text-justify">
        Behind every interactive feature I build, JavaScript plays its role. I use it whenever logic, dynamic behavior, or state handling is required. Whether it’s handling events, managing application state, or controlling UI behavior, JavaScript is the core language that powers the projects I work on.
      </p>
      <h2 className="text-[#CBD1D8] text-xl font-semibold">
        Tailwind CSS
      </h2>
      <p className="text-[#CBD1D880] text-md text-justify">
        For styling, Tailwind CSS is the framework I rely on the most. It allows me to rapidly build responsive layouts while keeping designs consistent and clean. I prefer Tailwind because it lets me focus on structure and user experience without spending unnecessary time writing custom CSS.
      </p>
      <h2 className="text-[#CBD1D8] text-xl font-semibold">
        Material UI
      </h2>
      <p className="text-[#CBD1D880] text-md text-justify">
        Occasionally, when a project benefits from ready-made components, I work with Material UI. It provides a solid set of UI components that help speed up development when a more structured design system is required.
      </p>
      <h2 className="text-[#CBD1D8] text-xl font-semibold">
        Framer Motion
      </h2>
      <p className="text-[#CBD1D880] text-md text-justify">
        Recently, I’ve started integrating Framer Motion to bring subtle animations into my interfaces. Smooth transitions and micro-interactions can significantly improve user experience, and I enjoy experimenting with motion to make interfaces feel more alive.
      </p>
    </div>

    <div className="border-b border-[#CBD1D820] my-10"/>

    <div className="flex flex-col gap-8">
  {Object.entries(Skills).map(([category, skillList]) => (
    <div key={category} className="flex flex-col gap-2">

      <h2 className="text-[#CBD1D8] text-xl font-semibold">
        {category}
      </h2>

      <div className="flex flex-wrap gap-3">
        {skillList.map((skill) => (
          <div
            key={skill}
            className="bg-[#141C2B] px-4 py-2 rounded border-b border-[#7AA2F7]"
          >
            <span className="text-[#CBD1D8] text-sm">
              {skill}
            </span>
          </div>
        ))}
      </div>

    </div>
  ))}
</div>

    </div>

    </div>

    </div>

    </div>
    </>
  )
}

export default SkillsTools