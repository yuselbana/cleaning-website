'use client';
import Testimonials from "./Testimonials";
import { useState } from "react";
import {motion} from 'framer-motion'
import Portfolio from "./Portfolio";
const About = () => {
    const [portfolio, setPortfolio]= useState<boolean>(false)
    const [testimonials, setTestimonials]= useState<boolean>(false)
    const Circle = ({title}:{title:string}) => {
        return (
            <motion.div 
            exit={{x:-500}}
            layoutId="portfolio"
            key="testimonialButton"
            onClick={()=> {setPortfolio(!portfolio)}} 
            className=" cursor-pointer h-36 w-36 lg:h-48 lg:w-48 flex items-center justify-center rounded-full text-lg bg-black text-white self-center lg:self-end">
            <h3>{title}</h3>
            </motion.div>
        )
    }
    return (
   <>
      {portfolio ?   
        
        <Portfolio portfolio={portfolio} setPortfolio={setPortfolio}/>
        :
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1,transition:{type:"spring"}}}
        className="flex flex-col items-center justify-around  lg:grid lg:grid-rows-4 lg:grid-cols-2 min-h-screen lg:h-screen place-items-center text-center lg:text-left border-b-2 border-gray-400 p-8">
      <div className="flex flex-col items-center justify-center row-start-1 row-end-2 col-span-full gap-8">
    <div className="flex items-center justify-center gap-4"><span>(01)</span> <p className="text-xl lg:text-2xl">about</p></div>
      <h1 className="text-3xl lg:text-5xl">there&apos; a meaning in cleaning</h1>
      </div>

      <div className="row-start-2 row-end-4 col-start-1 lg:w-3/4 lg:text-2xl  p-12 lg:p-0">
      <p>Better Home Services finishes each project on schedule and with the highest level of quality. We focus on personalized services, customer satisfaction and intricate detail when cleaning. We’re always striving to meet and exceed expectations.</p>
      </div>

      <div className="flex flex-col items-start justify-between gap-12 row-start-2 row-end-5 col-start-2 lg:w-3/4 lg:text-xl p-12 lg:p-0">
      <p>There is meaning in cleaning isn&apos;t just our motto, we live by it. We designate our time into professionally cleaning and disinfecting homes. </p>
      <p>No stone is left unturned as we are constantly making checklists going step by step to make sure what needs to be taken care of, pushing ourselves to not cut corners.</p>
      <Circle title={"see portfolio"}/>
      </div>
    

  </motion.div>
    }</>
     );
}
 
export default About;