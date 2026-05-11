import { motion } from "framer-motion"
import Container from "../components/common/Container"

const Skill= {
  "Programming Languages": ["JavaScript", "TypeScript"],
  "Core Web": ["HTML5", "CSS3", "Responsive Web Design", "REST APIs"],
  "Frameworks & Libraries": ["React", "Material UI", "Framer Motion"],
  "Styling": ["Tailwind CSS"],
  "Tools": ["Git & GitHub", "Vite", "VS Code", "Chrome DevTools", "Figma"]
}

const Skills = () => {
  return (
    <>

    <Container>

    <div className=" pt-10 lg:pt-20 pb-40"> 

    <div className="flex flex-col gap-10">

    <motion.div 
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-4">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
        Skills
      </h1>
      <p className="text-[#666666] text-sm lg:text-base">
        A look at all the programming languages, libraries, and tools I've worked with
      </p>
    </motion.div>

    <motion.div 
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className=""> 

    <div className="flex flex-col gap-4">
      <p className="text-[#666666] text-sm lg:text-base">
      A front-end developer who enjoys turning ideas into clean, responsive web experiences. My journey into development started with curiosity about how modern websites work, and it quickly grew into a passion for building interfaces that feel smooth, intuitive, and visually polished.
      </p>

      <div className="border-b border-[#CBD1D820] my-10"/>

      <h2 className="text-red-500 text-lg md:text-2xl lg:text-3xl font-semibold">
        Front-End Developer
      </h2>
      <p className="text-[#666666] text-sm lg:text-base">
        Production-ready React website for a real furniture business with responsive UI, reusable components, and performance optimizations.
      </p>
      <h3 className="text-[#CBD1D8] text-lg lg:text-xl font-semibold">
        React
      </h3>
      <p className="text-[#666666] text-sm lg:text-base">
        Most of the interfaces I build today revolve around React. I enjoy creating component-driven applications where pieces of the UI can be reused, scaled, and maintained easily. From simple landing pages to more structured layouts, React has become my go-to tool for building responsive web applications.
      </p>
      <h3 className="text-[#CBD1D8] text-lg lg:text-xl font-semibold">
        JavaScript
      </h3>
      <p className="text-[#666666] text-sm lg:text-base">
        Behind every interactive feature I build, JavaScript plays its role. I use it whenever logic, dynamic behavior, or state handling is required. Whether it’s handling events, managing application state, or controlling UI behavior, JavaScript is the core language that powers the projects I work on.
      </p>
      <h3 className="text-[#CBD1D8] text-lg lg:text-xl font-semibold">
        Tailwind CSS
      </h3>
      <p className="text-[#666666] text-sm md:text-base">
        For styling, Tailwind CSS is the framework I rely on the most. It allows me to rapidly build responsive layouts while keeping designs consistent and clean. I prefer Tailwind because it lets me focus on structure and user experience without spending unnecessary time writing custom CSS.
      </p>
      <h3 className="text-[#CBD1D8] text-lg lg:text-xl font-semibold">
        Material UI
      </h3>
      <p className="text-[#666666] text-sm lg:text-base">
        Occasionally, when a project benefits from ready-made components, I work with Material UI. It provides a solid set of UI components that help speed up development when a more structured design system is required.
      </p>
      <h3 className="text-[#CBD1D8] text-lg lg:text-xl font-semibold">
        Framer Motion
      </h3>
      <p className="text-[#666666] text-sm lg:text-base">
        Recently, I’ve started integrating Framer Motion to bring subtle animations into my interfaces. Smooth transitions and micro-interactions can significantly improve user experience, and I enjoy experimenting with motion to make interfaces feel more alive.
      </p>
    </div>

    <div className="border-b border-[#CBD1D820] my-10"/>

    <div className="flex flex-col gap-8">
  {Object.entries(Skill).map(([category, skillList]) => (
    <div key={category} className="flex flex-col gap-2">

      <h4 className="text-[#CBD1D8] text-lg lg:text-xl font-semibold">
        {category}
      </h4>

      <div className="flex flex-wrap gap-3">
        {skillList.map((skill) => (
          <div
            key={skill}
            className="bg-[#0a0a0a] px-4 py-1 md:py-2 rounded border-b border-red-500"
          >
            <span className="text-[#666666] text-xs lg:text-sm">
              {skill}
            </span>
          </div>
        ))}
      </div>

    </div>
  ))}
</div>

    </motion.div>

    </div>

    </div>

    </Container>

    </>
  )
}

export default Skills