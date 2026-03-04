
const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-[#141C2B] px-5 md:px-6 lg:px-20">

        <div className="max-w-7xl mx-auto">

        <div className="flex flex-col gap-4 pb-[20px]">
            <h1 className="text-[#CBD1D880] text-sm">
                About Me
            </h1>
            <p className="text-[#E6E8EB90] text-md">
                I'm Rayyan, a <span className="text-[#E6E8EB]">front-end developer</span> who loves intuitive, <br/>
                clean and modern UI design.
            </p>
        </div>

        <div className="border-t border-[#E6E8EB20] pb-4" />

            <p className="text-[#E6E8EB20] text-right text-sm pb-6">
                © 2026, Mohammed Rayyan
            </p>

        </div>
    </div>
  )
}

export default Footer