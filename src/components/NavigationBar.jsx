import { useState } from "react"
import { BsList, BsXLg } from "react-icons/bs"

export const NavigationBar = () => {
    const [navOpen, setNavOpen] = useState(false)

    const handleNavbar = (event) => {
        event.preventDefault()
        setNavOpen(!navOpen)
    }
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center py-7 backdrop-blur-md border-b">
            <div className="flex justify-between items-center relative px-10 w-full max-w-[1440px]">
                <div className="">
                    <a href="" className="text-white font-semibold text-2xl">Naufal</a>
                </div>
                <div className={`absolute top-0 ${navOpen ? "left-0" : "-left-full"} md:relative md:top-auto md:left-auto flex flex-col bg-linearBg w-72 h-screen text-center gap-4 py-8 z-40 transition-all duration-300 md:flex-row md:justify-center md:items-center md:gap-8 md:bg-none md:w-auto md:h-auto md:py-0`}>
                    <a href="" className="inline-block my-2 text-xl text-white font-normal md:text-base md:my-0">Home</a>
                    <a href="" className="inline-block my-2 text-xl text-white font-normal md:text-base md:my-0">About</a>
                    <a href="" className="inline-block my-2 text-xl text-white font-normal md:text-base md:my-0">Skils</a>
                    <a href="" className="inline-block my-2 text-xl text-white font-normal md:text-base md:my-0">Contact</a>
                </div>
                <a href="" className="text-white text-2xl block md:hidden" onClick={handleNavbar}>
                    {
                        navOpen ? <BsXLg /> : <BsList />
                    }
                </a>
            </div>
        </nav>
    )
}