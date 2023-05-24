import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="flex justify-center shadow-2xl">
            <div className="lg:text-3xl text-2xl  font-semibold lg:font-bold  p-[3vh]">
                <h1>arda.dev</h1>
            </div>
            <div className="w-full">
            </div>
            <div className=" hidden lg:block text-2xl font-semibold p-[3vh]">
                <Link className="lg:p-[2vh] p-[0.5vh]" href="/">Home</Link>
                <Link className="lg:p-[2vh] p-[0.5vh]" href="#about">About</Link>
                <Link className="lg:p-[2vh] p-[0.5vh]" href="#projects">Projects</Link>
                <Link className="lg:p-[2vh] p-[0.5vh]" href="#contact">Contact</Link>
            </div>
        </nav>
    )
}