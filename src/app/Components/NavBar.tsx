'use client';
import Link from "next/link"
import { useState } from "react";
import logo from '../../../public/cleaningLogo.png'
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import {motion, AnimatePresence} from 'framer-motion'

import Image from "next/image";



const menuContainer = {
    initial: {
        x:1000
    },
    animate: {
        x:0,
        transition: {
            staggerChildren:0.1,
            type:'tween',
            when:'beforeChildren',
            duration:0.5
            
        }
    },
    exit: {
        x:1000,
        transition: {
            staggerChildren:0.1,
            type:'tween',
            duration:0.5
            
        }
    }
}
const menuItem = {
    initial: {
        x:800
    },
    animate: {
        x:0,
      
    },
    
    exit: {
        x:800      
    },
    
    
}



const NavBar = ({scroll}: {scroll:number}) => {
    const [nav,setNav] = useState<boolean>(false)

    
const NavBarItem = ({title,scroll,number}:{title:string, scroll:string,number:string}) => {
    return (
        <Link scroll onClick={()=>{setNav(!nav); document.body.style.overflowY="auto"}}  href={scroll}>
            <motion.div variants={menuItem} key="menu_item"  className="flex justify-center items-center gap-4">
                <span>{number}</span>
            <h3 className="text-xl lg:text-3xl">{title}</h3>
            </motion.div>
            
            </Link>
    )
}


    const Menu=() => {
        return (
            <motion.div variants={menuContainer} initial="initial" animate="animate" exit="exit" key="menu" className="fixed touch-none top-0 right-0 w-screen lg:w-[50vw] overflow-hidden bg-greyBlack text-white grid grid-rows-6 h-screen">
            <span className="row-start-1 row-end-1 justify-self-center self-center" onClick={()=> {setNav(!nav)}}><XMarkIcon onClick={()=>{document.body.style.overflowY="auto"}} className="text-white h-12 w-12 cursor-pointer" /></span>
                <div className="flex flex-col items-center justify-around row-start-2 row-end-5 w-full h-full">
                <NavBarItem title={"about"} scroll={"#about"} number={"(01)"}/>
                <NavBarItem title={"services"} scroll={"#services"} number={"(02)"}/>
                <NavBarItem title={"the team"} scroll={"#team"} number={"(03)"}/>
                <NavBarItem title={"contact"} scroll={"#contact"} number={"(04)"}/>
                </div>
                <div className="row-start-5 row-end-6 w-full h-full flex justify-center items-center">
                <h3 className="text-xl lg:text-3xl">harrypotter@gmail.com</h3>
                </div>

                <div className="grid grid-cols-3 row-start-6 row-end-7 items-end justify-items-center pb-4 ">
                <span>©2023</span>
                <span>new jersey</span>
                <span>all rights reserved</span>
                </div>
        </motion.div>
        )
    }
    

    return (
        <div className="w-fit overflow-hidden fixed top-0 right-0 h-24 z-50 text-white">   
    
       
    


        <div className="flex justify-end items-center px-4 h-full">


        <AnimatePresence mode='sync'>
        {nav ?    
        <Menu/>
         :  
         ""
         }
        </AnimatePresence>
        <span className="mr-8" onClick={()=> {setNav(!nav); document.body.style.overflowY="hidden"}}><Bars3Icon  className={`${(scroll > .5) ? "text-white" : "text-black"} h-12 w-12 cursor-pointer `}/></span>
    </div>

        </div>
    )
}

export default NavBar