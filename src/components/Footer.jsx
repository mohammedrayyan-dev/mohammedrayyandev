import LinkedinIcon from "/src/assets/images/Icons/LinkedinIcon.png"
import GithubIcon from "/src/assets/images/Icons/GithubIcon.png"

const Footer = () => {
  return (
    <div className="px-5 md:px-6 lg:px-40">

        <div className="flex flex-row justify-between">

        <div className="flex flex-col gap-4 pb-[20px]">
            <h1 className="text-[#CBD1D880] text-sm">
                About Me
            </h1>
            <p className="text-[#E6E8EB90] text-md">
                I'm Rayyan, a <span className="text-[#E6E8EB]">front-end developer</span> who loves intuitive, <br/>
                clean and modern UI design.
            </p>
            </div>

            <div className="flex flex-row gap-4 pt-[50px]">
                <a href="https://www.linkedin.com/in/mohammedrayyan-dev" target="_blank" className="flex items-center justify-center w-7 h-7 cursor-pointer">
                    <img src={LinkedinIcon} alt="Linkedin Icon" className="w-6 object-contain" />
                </a>
                <a href="https://github.com/mohammedrayyan-dev" target="_blank" className="flex items-center justify-center w-7 h-7 cursor-pointer">
                    <img src={GithubIcon} alt="Github Icon" className="w-6 object-contain" />
                </a>
            </div>

            </div>

        <div className="border-t border-[#E6E8EB20] py-6 pt-4">
            <p className="text-[#E6E8EB20] text-sm">
                © 2026, Mohammed Rayyan
            </p>
        </div>
    </div>
  )
}

export default Footer