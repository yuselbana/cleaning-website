'use client';
import { Playfair_Display_SC } from "next/font/google";
import { StaticImageData } from "next/image";
import  Image  from "next/image";
import {useState,useRef} from 'react'
import {motion,useInView} from 'framer-motion'
import abd from '../../../public/portraits/abd.jpg'
import nolan from '../../../public/portraits/nolan.jpg'
import { MutableRefObject } from "react";
const playfair = Playfair_Display_SC({subsets:['latin'], weight:['400']})




 
const TeamMemberComponent = ({imgSrc,name,description}: {imgSrc:StaticImageData,name:string,description?:string})=> {
    const [intro,setIntro] = useState<boolean>(false)
    return (
       <>
       {intro ? 
       
       
       <p onClick={()=>{setIntro(!intro)}} className="w-96 h-full leading-12  self-center flex items-center justify-center text-center cursor-pointer">{description}</p>
       
       : 
       
       
       <motion.div 
       initial={{x:10}}
       animate={{x:-10}}
       transition={{repeatType:"reverse", duration:5,repeat:Infinity}}
       onClick={()=>{setIntro(!intro)}} className="flex flex-col justify-start items-start gap-4 cursor-pointer">
       <div className="h-full w-96 flex flex-col rounded-3xl overflow-hidden ">
       <Image alt={`Team Member ${name} w-full h-full object-cover`} src={imgSrc}/>
       </div>
       <div className={`flex items-center justify-center gap-4 ${playfair.className} `}>
           <p>{name}</p>
           <span className="text-gray-400">CEO</span>
       </div>
   </motion.div>
       
       }
       </>
    )
}



const Team = ({darkTransition,container}: {darkTransition:MutableRefObject<HTMLDivElement | null>,container:{}}) => {
  
    return (
    <motion.div  variants={container} animate="animate"  className="grid grid-rows-5 lg:h-screenw-full  text-white place-items-center ">
        <div className="flex items-center justify-center gap-4 row-start-1 row-end-2">
        <span>(03)</span>
        <p>the team</p>
        </div>
        <div ref={darkTransition}  className="row-start-2 row-end-5 flex flex-col lg:flex-row justify-center gap-24 items-center w-full h-full ">
        <TeamMemberComponent imgSrc={nolan} name={"NOLAN JONES"} description={"Hello! My name is Nolan Jones. I'm 18 years old. I have lived in Marlboro almost all my life and I recently started this company with my partner Abdallah Dewedar. Hard Working parents shouldn't have to come home after a long day at work to clean their house. I started by relieving my parents of coming home to a messy house by cleaning and disinfecting it.  After our work we realized that we had a gift for cleaning. Cleaning is an art form and has to be worked on and that's what we're focusing on. "}/>
        <TeamMemberComponent imgSrc={abd} name={"ABDALLAH DEWEDAR"} description={" My name is Abdallah Dewedar. I am 18 years old,  in my first year of college and I reside in Marlboro New Jersey as well. Our cleaning business is something I am passionate about and will continue to work hard and make your homes as beautiful and polished as they looked the first day you moved in. No amount of mess, smell or stain is too much for my partner and I, we will change the way you see and feel in your home forever, and hope to keep us in service and watch your home transfer every single time. "}/>
        </div>
        <div  className="row-start-5 row-end-6 text-center w-3/5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

    </motion.div>  
    );
}
 
export default Team;