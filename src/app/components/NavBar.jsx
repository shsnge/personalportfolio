"use client"
import {Link} from "react-scroll"
import { AlignJustify, X } from "lucide-react"
import { useState } from "react"

function NavBar() {
    const [open, setOpen] = useState(false);

    // const handlenav = () => {
    //     setOpen((open) => !open)
    // }
    return (
        <div className=" fixed top-0 bg-slate-700 w-[100%] h-[12%] font-primary py-[2rem] z-[2000] ">
            <div className="w-[80%] h-full mx-auto flex px-5  justify-between items-center">
                <div className="flex font-bold">
                    <h1 className="text-white text-3xl">MIND</h1>
                    <span className="text-yellow-300 text-3xl">SPARK</span>
                </div>
                <div className=" gap-5 items-center text-white hidden md:flex relative">
                    

                    <Link to="home" smooth={true} duration={2000} className="cursor-pointer">HOME</Link>
                    <Link to="about" smooth={true} duration={2000} className="cursor-pointer">ABOUT</Link>
                   
                    <Link to="services" smooth={true} duration={2000} className="cursor-pointer">SERVICES</Link>
                    <Link to="skills" smooth={true} duration={2000} className="cursor-pointer">SKILLS</Link>
                    <Link to="project" smooth={true} duration={2000} className="cursor-pointer">PROJECT</Link>
                    <Link to="client" smooth={true} duration={2000} className="cursor-pointer">CLIENTS</Link>
                    <Link to="footer" smooth={true} duration={2000} className="cursor-pointer">CONTACT</Link>
                   

                </div>
                <div className="flex md:hidden text-white " onClick={() => setOpen((open) => !open)}>
                    {!open ? <AlignJustify className="cursor-pointer" /> : <X className="cursor-pointer" />}
                    {
                        open && (
                            <div className="absolute z-[100000] top-[88px] left-0 right-0  bg-slate-700 ">
                                <div className="flex flex-col justify-center items-center gap-5 mt-[30%] pb-52 ">
                                <Link to="home" smooth={true} duration={2000} className="cursor-pointer" onClick={() => setOpen((open) => !open)}>HOME</Link>
                    <Link to="about" smooth={true} duration={2000} className="cursor-pointer" onClick={() => setOpen((open) => !open)}>ABOUT</Link>
                   
                    <Link to="services" smooth={true} duration={2000} className="cursor-pointer" onClick={() => setOpen((open) => !open)}>SERVICES</Link>
                    <Link to="skills" smooth={true} duration={2000} className="cursor-pointer" onClick={() => setOpen((open) => !open)}>SKILLS</Link>
                    <Link to="project" smooth={true} duration={2000} className="cursor-pointer" onClick={() => setOpen((open) => !open)}>PROJECT</Link>
                    <Link to="client" smooth={true} duration={2000} className="cursor-pointer" onClick={() => setOpen((open) => !open)}>CLIENTS</Link>
                    <Link to="footer" smooth={true} duration={2000} className="cursor-pointer" onClick={() => setOpen((open) => !open)}>CONTACT</Link>
                   
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default NavBar
