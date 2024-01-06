'use client';
import Link from "next/link"
import { useState } from "react";
import logo from '../../../public/cleaningLogo.png'
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

import Image from "next/image";

interface NavBarProps {
    
}

const NavBarItem = ({title,scroll,number}:{title:string, scroll:string,number:string}) => {
    return (
        <Link scroll href={scroll}>
            <div className="flex justify-center items-center gap-4">
                <span>{number}</span>
            <h3 className="text-xl lg:text-3xl">{title}</h3>
            </div>
            
            </Link>
    )
}

const NavBar:React.FunctionComponent<NavBarProps> = () => {
    const [nav,setNav] = useState<boolean>(false)

    const Menu=() => {
        return (
            <div className="fixed touch-none top-0 right-0 w-screen lg:w-[50vw] overflow-hidden bg-greyBlack text-white grid grid-rows-6 h-screen">
            <span className="row-start-1 row-end-1 justify-self-center self-center" onClick={()=> {setNav(!nav)}}><XMarkIcon className="text-white h-12 w-12" /></span>
                <div className="flex flex-col items-center justify-around row-start-2 row-end-5 w-full h-full">
                <NavBarItem title={"about"} scroll={""} number={"(01)"}/>
                <NavBarItem title={"services"} scroll={""} number={"(02)"}/>
                <NavBarItem title={"the team"} scroll={""} number={"(03)"}/>
                <NavBarItem title={"contact"} scroll={""} number={"(04)"}/>
                </div>
                <div className="row-start-5 row-end-6 w-full h-full flex justify-center items-center">
                <h3 className="text-xl lg:text-3xl">harrypotter@gmail.com</h3>
                </div>

                <div className="grid grid-cols-3 row-start-6 row-end-7 items-end justify-items-center pb-4 ">
                <span>©2023</span>
                <span>new jersey</span>
                <span>all rights reserved</span>
                </div>
        </div>
        )
    }
    

    return (
        <div className="w-screen overflow-hidden fixed top-0 h-24 z-50 text-white">   
    
       
    


        <div className="flex justify-end items-center px-4 h-full">


        {nav ?    
         <Menu/>
         :  
         <span onClick={()=> {setNav(!nav)}}><Bars3Icon className="text-black h-12 w-12"/></span>
         }
       
    </div>

        </div>
    )
}

export default NavBar