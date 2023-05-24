import Link from "next/link"

export default function Footer(){
    return(
        <footer className="lg:flex items-center p-[3vh] bg-slate-200 text-2xl font-semibold">
            <p className="w-full">Copyright © 2023. All rights are reserved</p> 
            <div className="w-full">
                
            </div>
            <Link className="lg:w-[12vh] m-[2vh]" href="https://www.linkedin.com/in/mehmet-arda-s%C3%BCmb%C3%BCl-bb1925175/"><img className="w-[10vh]" src="/linkedin.svg" alt="" /></Link>
            <Link className="lg: w-[12vh] m-[2vh]" href="https://github.com/ardasumbul1"><img className="w-[10vh]" src="/squareGithub.svg" alt="" /></Link>
        </footer>
    )
}
