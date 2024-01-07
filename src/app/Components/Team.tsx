'use client';
import { Playfair_Display_SC } from "next/font/google";
import { StaticImageData } from "next/image";
import  Image  from "next/image";
import {useState,useRef} from 'react'
import {motion,useInView} from 'framer-motion'
import abd from '../../../public/portraits/abd.jpg'
import nolan from '../../../public/portraits/nolan.jpg'
import { MutableRefObject } from "react";
import Testimonials from "./Testimonials";
const playfair = Playfair_Display_SC({subsets:['latin'], weight:['400']})




 
const TeamMemberComponent = ({imgSrc,name,description}: {imgSrc:StaticImageData,name:string,description?:string})=> {
    const [intro,setIntro] = useState<boolean>(false)
    return (
       <>
       {intro ? 
       
       
       <p onClick={()=>{setIntro(!intro)}} className="w-96 h-full leading-12 self-center flex items-center justify-center text-center cursor-pointer">{description}</p>
       
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



const Team = () => {
   const [testimonials,setTestimonials] = useState<boolean>(false)
   const Circle = ({title}: {title?:string}) => {
    return (
        <motion.div
   
        layoutId="testimonials"
        onClick={()=> {setTestimonials(!testimonials)}} 
        className="rounded-full h-48 w-48 cursor-pointer bg-white text-black flex items-center justify-center  justify-self-center ">{title}</motion.div>
    )
}
    return (
       < >
        {testimonials ? 
        
        <Testimonials  testimonials={testimonials} setTestimonials={setTestimonials}/>
        :

        <div id="team" className="grid grid-rows-6 min-h-screen lg:h-screen w-full  place-items-center ">
        <div className="flex items-center justify-center gap-4 row-start-1 row-end-2">
        <span>(03)</span>
        <p>the team</p>
        </div>
        <div      className="row-start-2 row-end-6 flex flex-col lg:flex-row justify-center gap-24 items-center w-full h-full ">
        <TeamMemberComponent imgSrc={nolan} name={"NOLAN JONES"} description={"Hello! My name is Nolan Jones. I'm 18 years old. I have lived in Marlboro almost all my life and I recently started this company with my partner Abdallah Dewedar. Hard Working parents shouldn't have to come home after a long day at work to clean their house. I started by relieving my parents of coming home to a messy house by cleaning and disinfecting it.  After our work we realized that we had a gift for cleaning. Cleaning is an art form and has to be worked on and that's what we're focusing on. "}/>
        <Circle  title={"see testimonials"}/>
        <TeamMemberComponent imgSrc={abd} name={"ABDALLAH DEWEDAR"} description={" My name is Abdallah Dewedar. I am 18 years old,  in my first year of college and I reside in Marlboro New Jersey as well. Our cleaning business is something I am passionate about and will continue to work hard and make your homes as beautiful and polished as they looked the first day you moved in. No amount of mess, smell or stain is too much for my partner and I, we will change the way you see and feel in your home forever, and hope to keep us in service and watch your home transfer every single time. "}/>
        </div>
       

    </div>  
        }
        </>
    );
}
 
export default Team;